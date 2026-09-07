"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setIsSuccess(false);
    setErrorMessage(null);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(false);
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(
        t(
          "Vui lòng điền đầy đủ họ tên, email và nội dung tin nhắn.",
          "Please fill in all required fields."
        )
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ||
            t(
              "Gửi tin nhắn thất bại. Vui lòng thử lại sau.",
              "Failed to send message. Please try again later."
            )
        );
      }

      setFormData({ name: "", email: "", message: "" });
      setIsSuccess(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : t(
              "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
              "An error occurred. Please try again later."
            );
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {isSuccess && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-800/40 dark:bg-emerald-950/30 dark:text-emerald-300"
        >
          <i className="fas fa-check-circle mt-0.5 shrink-0" aria-hidden />
          <p>
            {t(
              portfolioData.contact.form.successMessage.vi,
              portfolioData.contact.form.successMessage.en
            )}
          </p>
        </div>
      )}

      {errorMessage && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-800/40 dark:bg-red-950/30 dark:text-red-300"
        >
          <i className="fas fa-exclamation-circle mt-0.5 shrink-0 text-red-600 dark:text-red-400" aria-hidden />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="contact-field-label">
            {t("Tên", "Name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t(
              portfolioData.contact.form.namePlaceholder.vi,
              portfolioData.contact.form.namePlaceholder.en
            )}
            className="contact-field-input"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="contact-field-label">
            {t("Email", "Email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t(
              portfolioData.contact.form.emailPlaceholder.vi,
              portfolioData.contact.form.emailPlaceholder.en
            )}
            className="contact-field-input"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="contact-field-label">
          {t("Tin nhắn", "Message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          placeholder={t(
            portfolioData.contact.form.messagePlaceholder.vi,
            portfolioData.contact.form.messagePlaceholder.en
          )}
          className="contact-field-input min-h-[140px] resize-y"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="contact-submit-btn disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <i className="fas fa-spinner fa-spin text-sm" aria-hidden />
            {t(
              portfolioData.contact.form.sendingButton.vi,
              portfolioData.contact.form.sendingButton.en
            )}
          </>
        ) : (
          t(
            portfolioData.contact.form.submitButton.vi,
            portfolioData.contact.form.submitButton.en
          )
        )}
      </button>
    </form>
  );
};
