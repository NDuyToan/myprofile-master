import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate dữ liệu đầu vào
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Vui lòng nhập họ và tên của bạn." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Vui lòng nhập địa chỉ email hợp lệ." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Địa chỉ email không đúng định dạng." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Vui lòng nhập nội dung tin nhắn." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        {
          error:
            "Hệ thống gửi email chưa được cấu hình RESEND_API_KEY. Vui lòng thử lại sau.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "nguyenduytoanbkdn@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Portfolio Contact <onboarding@resend.dev>";

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    const timestamp = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [receiverEmail],
      replyTo: cleanEmail,
      subject: `[Portfolio Contact] Tin nhắn mới từ ${cleanName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tin nhắn liên hệ mới</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 24px; color: #1f2937;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); border: 1px solid #e5e7eb;">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #0f766e 0%, #115e59 100%); padding: 28px 24px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">
                  Tin nhắn mới từ Website Portfolio
                </h1>
                <p style="color: #ccfbf1; margin: 6px 0 0; font-size: 13px;">
                  Gửi lúc ${timestamp} (Giờ Việt Nam)
                </p>
              </div>

              <!-- Content -->
              <div style="padding: 24px;">
                <div style="background-color: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 20px; border-left: 4px solid #0f766e;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 6px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 110px;">Họ và tên:</td>
                      <td style="padding: 6px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${cleanName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; color: #64748b; font-size: 13px; font-weight: 600;">Email:</td>
                      <td style="padding: 6px 0; color: #0f766e; font-size: 14px; font-weight: 600;">
                        <a href="mailto:${cleanEmail}" style="color: #0f766e; text-decoration: none;">${cleanEmail}</a>
                      </td>
                    </tr>
                  </table>
                </div>

                <div style="margin-top: 20px;">
                  <h3 style="margin: 0 0 10px; color: #334155; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                    Nội dung tin nhắn:
                  </h3>
                  <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; line-height: 1.65; color: #1e293b; font-size: 14px; white-space: pre-wrap;">${cleanMessage}</div>
                </div>

                <!-- Action button -->
                <div style="margin-top: 28px; text-align: center;">
                  <a href="mailto:${cleanEmail}?subject=Re: Tin nhắn từ Portfolio của Nguyễn Duy Toản" style="display: inline-block; background-color: #0f766e; color: #ffffff; font-weight: 600; font-size: 14px; padding: 12px 24px; border-radius: 6px; text-decoration: none; box-shadow: 0 2px 6px rgba(15, 118, 110, 0.3);">
                    Phản hồi trực tiếp tới ${cleanName}
                  </a>
                </div>
              </div>

              <!-- Footer -->
              <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 14px 24px; text-align: center; font-size: 12px; color: #94a3b8;">
                Email được gửi tự động từ form liên hệ trên trang nguyenduytoan.io.vn
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Gửi email thất bại: " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email đã được gửi thành công!",
      id: data?.id,
    });
  } catch (err: unknown) {
    console.error("Internal server error:", err);
    return NextResponse.json(
      { error: "Đã có lỗi xảy ra trên máy chủ. Vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}
