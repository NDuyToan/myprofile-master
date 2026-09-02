export interface NavLink {
  href: string;
  vi: string;
  en: string;
}

export interface ContactInfo {
  email: string;
  secondaryEmail: string;
  phone: string;
  linkedin: string;
  github: string;
  location: {
    vi: string;
    en: string;
  };
}

export interface SocialLink {
  href: string;
  icon: string;
  label: {
    vi: string;
    en: string;
  };
}

export interface StatItem {
  value: string;
  label: {
    vi: string;
    en: string;
  };
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  iconColor: string;
  skills: string[];
}

export interface SoftSkill {
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  icon: string;
  iconColor: string;
}

export interface OutstandingStrength {
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  icon: string;
  iconColor: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  color: string;
  project: string;
  technologies: string[];
  responsibilities: {
    vi: string;
    en: string;
  }[];
  links: string[];
}

export interface ExperienceContent {
  title: {
    vi: string;
    en: string;
  };
  headline: {
    vi: string;
    en: string;
  };
  subtitle: {
    vi: string;
    en: string;
  };
  items: ExperienceItem[];
}

export interface HeroContent {
  greeting: {
    vi: string;
    en: string;
  };
  name: {
    vi: string;
    en: string;
  };
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  shortDescription: {
    vi: string;
    en: string;
  };
  availability: {
    vi: string;
    en: string;
  };
  yearsExperience: string;
  buttons: {
    contact: {
      vi: string;
      en: string;
    };
    resume: {
      vi: string;
      en: string;
    };
    cv: {
      vi: string;
      en: string;
    };
  };
}

export interface AboutHighlight {
  text: {
    vi: string;
    en: string;
  };
  icon: string;
}

export interface AboutContent {
  title: {
    vi: string;
    en: string;
  };
  headline: {
    vi: string;
    en: string;
  };
  stats: StatItem[];
  description1: {
    vi: string;
    en: string;
  };
  description2: {
    vi: string;
    en: string;
  };
  description3: {
    vi: string;
    en: string;
  };
  highlights: AboutHighlight[];
  contactInfo: ContactInfo;
}

export interface SkillsContent {
  title: {
    vi: string;
    en: string;
  };
  headline: {
    vi: string;
    en: string;
  };
  subtitle: {
    vi: string;
    en: string;
  };
  categories: SkillCategory[];
  softSkillsTitle: {
    vi: string;
    en: string;
  };
  softSkills: SoftSkill[];
}

export interface OutstandingStrengthsContent {
  title: {
    vi: string;
    en: string;
  };
  headline: {
    vi: string;
    en: string;
  };
  strengths: OutstandingStrength[];
}

export interface EducationItem {
  institution: {
    vi: string;
    en: string;
  };
  major: {
    vi: string;
    en: string;
  };
  period: string;
  color: string;
}

export interface LanguageItem {
  language: {
    vi: string;
    en: string;
  };
  proficiency: {
    vi: string;
    en: string;
  };
  color: string;
}

export interface EducationContent {
  title: {
    vi: string;
    en: string;
  };
  items: EducationItem[];
}

export interface LanguagesContent {
  title: {
    vi: string;
    en: string;
  };
  items: LanguageItem[];
}

export interface ContactContent {
  title: {
    vi: string;
    en: string;
  };
  headline: {
    vi: string;
    en: string;
  };
  subtitle: {
    vi: string;
    en: string;
  };
  contactInfoTitle: {
    vi: string;
    en: string;
  };
  contactInfo: ContactInfo;
  form: {
    namePlaceholder: {
      vi: string;
      en: string;
    };
    emailPlaceholder: {
      vi: string;
      en: string;
    };
    messagePlaceholder: {
      vi: string;
      en: string;
    };
    submitButton: {
      vi: string;
      en: string;
    };
    sendingButton: {
      vi: string;
      en: string;
    };
    successMessage: {
      vi: string;
      en: string;
    };
  };
}

export interface FooterContent {
  name: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  socialLinks: SocialLink[];
  copyright: {
    vi: string;
    en: string;
  };
}

export interface SelectedWorkProject {
  title: {
    vi: string;
    en: string;
  };
  company: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  technologies: string[];
  url?: string;
}

export interface SelectedWorkContent {
  headline: {
    vi: string;
    en: string;
  };
  subtitle: {
    vi: string;
    en: string;
  };
  searchPlaceholder: {
    vi: string;
    en: string;
  };
  allFilterLabel: {
    vi: string;
    en: string;
  };
  filters: string[];
  projects: SelectedWorkProject[];
}

export interface PersonalProjectContent {
  badge: {
    vi: string;
    en: string;
  };
  brand: string;
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  technologies: string[];
  image: string;
  url: string;
  cta: {
    vi: string;
    en: string;
  };
}

export interface PortfolioData {
  navigation: NavLink[];
  hero: HeroContent;
  personalProject: PersonalProjectContent;
  selectedWork: SelectedWorkContent;
  about: AboutContent;
  skills: SkillsContent;
  strengths: OutstandingStrengthsContent;
  education: EducationContent;
  languages: LanguagesContent;
  experience: ExperienceContent;
  contact: ContactContent;
  footer: FooterContent;
}

export const portfolioData: PortfolioData = {
  navigation: [
    { href: "#about", vi: "Giới thiệu", en: "About" },
    { href: "#skills", vi: "Kỹ năng", en: "Skills" },
    { href: "#experience", vi: "Kinh nghiệm", en: "Experience" },
    {
      href: "#education-languages",
      vi: "Học vấn & Ngôn ngữ",
      en: "Education & Languages",
    },
    {
      href: "#selected-work",
      vi: "Dự án",
      en: "Projects",
    },
    { href: "#contact", vi: "Liên hệ", en: "Contact" },
  ],

  personalProject: {
    badge: {
      vi: "Dự án cá nhân",
      en: "Personal Project",
    },
    brand: "Kinder PMS",
    title: {
      vi: "Hệ thống Quản lý Trường mầm non SaaS",
      en: "SaaS Preschool Management System",
    },
    description: {
      vi: "Nền tảng Cloud SaaS giúp số hóa toàn diện hoạt động quản lý trường mầm non — tuyển sinh, học sinh, lớp học, giáo viên, học phí và kết nối phụ huynh trên một hệ thống thống nhất.",
      en: "A Cloud SaaS platform that digitizes preschool operations end-to-end — admissions, students, classrooms, teachers, tuition, and parent communication in one unified system.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "React Query",
      "Shadcn UI",
      "Supabase",
    ],
    image: "/images/kinderpms-banner.png",
    url: "https://kinderpms.cudem.online",
    cta: {
      vi: "Xem sản phẩm",
      en: "View live product",
    },
  },

  hero: {
    greeting: {
      vi: "Xin chào, tôi là",
      en: "Hello, I'm",
    },
    name: {
      vi: "Nguyễn Duy Toản",
      en: "Nguyen Duy Toan",
    },
    title: {
      vi: "Middle Frontend Developer",
      en: "Middle Frontend Developer",
    },
    description: {
      vi: "Kỹ sư Frontend với hơn 4 năm kinh nghiệm chuyên sâu về React, Next.js và TypeScript. Tôi có kinh nghiệm xây dựng các hệ thống quản trị doanh nghiệp và chính phủ quy mô lớn từ đầu, phát triển thư viện component tái sử dụng, tối ưu hóa giao diện WebView và xử lý form/dữ liệu phức tạp với hiệu năng cao và khả năng bảo trì bền vững.",
      en: "Frontend Developer with 4+ years of experience specializing in React, Next.js, and TypeScript. Experienced in architecting scalable enterprise and government platforms from the ground up, building reusable component libraries, optimizing WebView applications, and handling complex data workflows with high performance and maintainability.",
    },
    shortDescription: {
      vi: "Kỹ sư Frontend với hơn 4 năm kinh nghiệm phát triển các ứng dụng web production hiện đại bằng React, Next.js và TypeScript. Chuyên sâu về kiến trúc frontend module hóa, giao diện WebView mượt mà, phân quyền RBAC và tối ưu hiệu năng toàn diện.",
      en: "Frontend Developer with 4+ years of experience building modern production web applications using React, Next.js, and TypeScript. Specialized in modular frontend architecture, smooth WebView experiences, RBAC security, and end-to-end performance optimization.",
    },
    availability: {
      vi: "Sẵn sàng cho cơ hội mới",
      en: "Available for new opportunities",
    },
    yearsExperience: "4+",
    buttons: {
      contact: {
        vi: "Liên hệ",
        en: "Contact Me",
      },
      resume: {
        vi: "Tải CV",
        en: "Download CV",
      },
      cv: {
        vi: "/cv/CV_Frontend_Developer_Nguyen_Duy_Toan_EN.pdf",
        en: "/cv/CV_Frontend_Developer_Nguyen_Duy_Toan_EN.pdf",
      },
    },
  },

  about: {
    title: {
      vi: "Giới thiệu",
      en: "About Me",
    },
    headline: {
      vi: "Tận tâm với chất lượng, hướng đến khả năng mở rộng",
      en: "Dedicated to Craftsmanship, Engineered for Scale",
    },
    stats: [
      {
        value: "4+",
        label: { vi: "Năm kinh nghiệm", en: "Years of Experience" },
        color: "text-blue-600 dark:text-blue-400",
      },
      {
        value: "15+",
        label: { vi: "Công nghệ & Thư viện", en: "Technologies & Libraries" },
        color: "text-purple-600 dark:text-purple-400",
      },
      {
        value: "6+",
        label: { vi: "Dự án Production", en: "Production Projects" },
        color: "text-green-600 dark:text-green-400",
      },
      {
        value: "100%",
        label: {
          vi: "Trách nhiệm & Tinh thần học hỏi",
          en: "Ownership & Growth Mindset",
        },
        color: "text-orange-600 dark:text-orange-400",
      },
    ],
    description1: {
      vi: "Tôi là Middle Frontend Developer với hơn 4 năm kinh nghiệm thực chiến trong việc phát triển các ứng dụng web và hệ thống quản trị hiện đại sử dụng React, Next.js, TypeScript và Vue.js.",
      en: "I am a Middle Frontend Developer with 4+ years of hands-on experience building modern, production-grade web applications and enterprise platforms using React, Next.js, TypeScript, and Vue.js.",
    },
    description2: {
      vi: "Trong suốt quá trình làm việc, tôi đã trực tiếp tham gia xây dựng nhiều nền tảng thực tế từ con số 0: từ hệ thống quản lý lao động quy mô lớn cho chính quyền địa phương Hàn Quốc, cổng thông tin đối tác & tuyển dụng, ví điện tử tích hợp WebView cho đến các ứng dụng bảo hiểm và thương mại điện tử. Thế mạnh của tôi nằm ở việc thiết kế kiến trúc component chuẩn mực, xử lý logic form phức tạp, phân quyền bảo mật và tối ưu trải nghiệm người dùng trên mọi thiết bị.",
      en: "Throughout my career, I have contributed directly to building diverse platforms from the ground up: large-scale government workforce management systems in South Korea, partner & recruitment portals, WebView e-wallets, and insurance applications. My core strength lies in clean component architecture, complex form handling, role-based access control, and delivering smooth, responsive user experiences across all devices.",
    },
    description3: {
      vi: "Bên cạnh chuyên môn frontend, tôi chủ động mở rộng hiểu biết về Node.js, Express.js, NestJS, Prisma, SQL, MongoDB, Docker và quy trình CI/CD. Nền tảng này giúp tôi có cái nhìn toàn diện về vòng đời phát triển phần mềm, thiết kế API tương thích tốt và phối hợp ăn ý cùng đội ngũ Backend, QA và Product.",
      en: "In addition to frontend engineering, I continuously expand my knowledge in Node.js, Express.js, NestJS, Prisma, SQL, MongoDB, Docker, and CI/CD workflows. This foundational backend understanding enables me to grasp the entire application lifecycle, design reliable API contracts, and collaborate seamlessly with Backend, QA, and Product teams.",
    },
    highlights: [
      {
        text: {
          vi: "Phát triển cổng quản trị chính phủ từ đầu: thiết kế kiến trúc frontend, phân quyền RBAC đa cấp (Super Admin, Master Admin, Admin) và xử lý dữ liệu lớn với ExcelJS.",
          en: "Architected government admin portals from scratch: implementing multi-level RBAC (Super Admin, Master Admin, Admin) and processing large-scale workforce data with ExcelJS.",
        },
        icon: "fas fa-shield-alt",
      },
      {
        text: {
          vi: "Chuẩn hóa thư viện Component và Design Pattern tái sử dụng, đảm bảo giao diện Responsive đồng nhất và tối ưu trải nghiệm trên Desktop, Tablet, Mobile và WebView.",
          en: "Standardized reusable component libraries and design patterns, ensuring seamless responsive design across Desktop, Tablet, Mobile, and WebView platforms.",
        },
        icon: "fas fa-layer-group",
      },
      {
        text: {
          vi: "Tối ưu hóa hiệu năng chuyên sâu thông qua Lazy Loading, Code Splitting, API Caching, tối ưu hóa rendering và chuẩn hóa quy trình upload tệp tin (nén ảnh, convert HEIC sang PNG).",
          en: "Enhanced application performance through Lazy Loading, Code Splitting, API Caching, rendering optimization, and optimized file upload pipelines (compression, HEIC to PNG).",
        },
        icon: "fas fa-bolt",
      },
    ],
    contactInfo: {
      email: "nguyenduytoanbkdn@gmail.com",
      secondaryEmail: "saolangthang144@gmail.com",
      phone: "034 861 8373",
      linkedin: "https://www.linkedin.com/in/toan-nguyen-dev/",
      github: "https://github.com/NDuyToan",
      location: {
        vi: "Đà Nẵng",
        en: "Da Nang",
      },
    },
  },

  skills: {
    title: {
      vi: "Kỹ năng chuyên môn",
      en: "Technical Skills",
    },
    headline: {
      vi: "Nền tảng công nghệ & Chuyên môn",
      en: "Tech Stack & Engineering Skills",
    },
    subtitle: {
      vi: "Tập trung vào hệ sinh thái hiện đại, hiệu năng cao và giải pháp có khả năng mở rộng lâu dài.",
      en: "Focused on modern, scalable, and high-performance frontend ecosystems.",
    },
    categories: [
      {
        title: "Core Technologies",
        icon: "fas fa-code",
        iconColor: "text-blue-600 dark:text-blue-400",
        skills: [
          "TypeScript",
          "JavaScript (ES6+)",
          "React",
          "Next.js",
          "HTML5",
          "CSS3",
          "SCSS",
        ],
      },
      {
        title: "Frontend Libraries & UI",
        icon: "fas fa-palette",
        iconColor: "text-purple-600 dark:text-purple-400",
        skills: [
          "Tailwind CSS",
          "Ant Design",
          "Shadcn UI",
          "HeroUI",
          "Vuetify",
          "Element UI",
          "Bootstrap",
        ],
      },
      {
        title: "State Management & Data Fetching",
        icon: "fas fa-project-diagram",
        iconColor: "text-indigo-600 dark:text-indigo-400",
        skills: ["Redux", "Redux-Saga", "RTK Query", "Vuex", "Axios"],
      },
      {
        title: "Forms & Validation",
        icon: "fas fa-file-lines",
        iconColor: "text-green-600 dark:text-green-400",
        skills: [
          "Formik",
          "Yup",
          "Form Validation",
          "Multi-step Form Handling",
        ],
      },
      {
        title: "API & Data Handling",
        icon: "fas fa-network-wired",
        iconColor: "text-teal-600 dark:text-teal-400",
        skills: [
          "RESTful APIs",
          "GraphQL",
          "Axios",
          "ExcelJS",
        ],
      },
      {
        title: "Performance & Optimization",
        icon: "fas fa-tachometer-alt",
        iconColor: "text-orange-600 dark:text-orange-400",
        skills: [
          "Lazy Loading",
          "Code Splitting",
          "API Caching",
          "Rendering Optimization",
          "Image Optimization",
        ],
      },
      {
        title: "Backend & Database (Foundations)",
        icon: "fas fa-database",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        skills: [
          "Node.js",
          "Express.js",
          "NestJS",
          "Prisma",
          "SQL",
          "MongoDB",
        ],
      },
      {
        title: "Tools & DevOps",
        icon: "fas fa-wrench",
        iconColor: "text-amber-600 dark:text-amber-400",
        skills: [
          "Git",
          "GitLab",
          "Docker (basic)",
          "PM2 (basic)",
          "Cursor",
          "Codex",
          "Postman",
        ],
      },
      {
        title: "Development Practices",
        icon: "fas fa-layer-group",
        iconColor: "text-cyan-600 dark:text-cyan-400",
        skills: [
          "Responsive Web Design",
          "Reusable Component Architecture",
          "Cross-browser Compatibility",
          "WebView Development",
          "Role-based Access Control (RBAC)",
        ],
      },
    ],
    softSkillsTitle: {
      vi: "Kỹ năng mềm & Phong cách làm việc",
      en: "Soft Skills & Work Ethics",
    },
    softSkills: [
      {
        title: {
          vi: "Tư duy giải quyết vấn đề",
          en: "Problem Solving",
        },
        description: {
          vi: "Tư duy phân tích sắc sảo, chủ động tìm hiểu nguyên nhân gốc rễ và đề xuất giải pháp kỹ thuật tối ưu, sạch sẽ và dễ bảo trì.",
          en: "Strong analytical mindset focused on identifying root causes and crafting clean, maintainable, and scalable technical solutions.",
        },
        icon: "fas fa-brain",
        iconColor: "text-yellow-500 dark:text-yellow-400",
      },
      {
        title: {
          vi: "Tinh thần trách nhiệm & Hợp tác",
          en: "Ownership & Collaboration",
        },
        description: {
          vi: "Chủ động nhận trách nhiệm, theo sát tiến độ và phối hợp hiệu quả cùng các nhóm Dev, QA, BA, PM và UI/UX theo mô hình Agile/Scrum.",
          en: "High sense of accountability, proactive in cross-functional collaboration with Dev, QA, BA, PM, and UI/UX teams in Agile environments.",
        },
        icon: "fas fa-handshake",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: {
          vi: "Phân tích & Thấu hiểu yêu cầu",
          en: "Requirement Analysis",
        },
        description: {
          vi: "Rà soát tài liệu nghiệp vụ kỹ lưỡng, kịp thời đặt câu hỏi làm rõ các điểm nghẽn và chuyển hóa yêu cầu sản phẩm thành kiến trúc UI trực quan.",
          en: "Carefully reviews project documentation, clarifies edge cases proactively, and translates product requirements into intuitive UI workflows.",
        },
        icon: "fas fa-clipboard-check",
        iconColor: "text-green-600 dark:text-green-400",
      },
    ],
  },

  strengths: {
    title: {
      vi: "Điểm mạnh nổi bật",
      en: "Core Strengths",
    },
    headline: {
      vi: "Giá trị tôi mang lại cho đội ngũ của bạn",
      en: "What I Bring to Your Engineering Team",
    },
    strengths: [
      {
        title: {
          vi: "Kiến trúc Frontend & Tái sử dụng Component",
          en: "Frontend Architecture & Reusability",
        },
        description: {
          vi: "Thiết kế và chuẩn hóa hệ thống component có tính module hóa cao, giúp giảm trùng lặp mã nguồn và tăng tốc độ phát triển tính năng mới.",
          en: "Design and standardize modular component systems to eliminate code duplication and significantly speed up feature development.",
        },
        icon: "fas fa-layer-group",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: {
          vi: "Xây dựng Nền tảng Quản trị Phức tạp",
          en: "Complex Enterprise & Admin Platforms",
        },
        description: {
          vi: "Kinh nghiệm thực tế trong việc phát triển hệ thống quản lý nhân sự/lao động quy mô lớn, bảng dữ liệu phức tạp, phân quyền RBAC và xử lý Excel khối lượng lớn.",
          en: "Proven track record in developing large-scale workforce systems, dense data tables, multi-tier RBAC, and high-volume Excel operations.",
        },
        icon: "fas fa-building",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: {
          vi: "Tối ưu Hiệu năng & Ứng dụng WebView",
          en: "Performance & WebView Optimization",
        },
        description: {
          vi: "Nâng cao tốc độ tải và độ mượt mà thông qua Lazy Loading, Code Splitting, API Caching, tối ưu ảnh/HEIC và xây dựng các trang WebView tương thích hoàn hảo.",
          en: "Boost load speed and fluidity via Lazy Loading, Code Splitting, API Caching, image/HEIC optimization, and seamless WebView integration.",
        },
        icon: "fas fa-tachometer-alt",
        iconColor: "text-orange-600 dark:text-orange-400",
      },
      {
        title: {
          vi: "Phân quyền theo vai trò (RBAC)",
          en: "Role-Based Access Control (RBAC)",
        },
        description: {
          vi: "Triển khai cơ chế phân quyền đa cấp chặt chẽ và bảo mật (Super Admin, Master Admin, Admin) phù hợp với các hệ thống doanh nghiệp.",
          en: "Implement robust, multi-tier role-based access control (Super Admin, Master Admin, Admin) tailored for enterprise security requirements.",
        },
        icon: "fas fa-shield-alt",
        iconColor: "text-green-600 dark:text-green-400",
      },
      {
        title: {
          vi: "Quản lý State & Form nghiệp vụ nhiều bước",
          en: "State Management & Multi-Step Forms",
        },
        description: {
          vi: "Thành thạo Redux-Saga, RTK Query và xử lý các luồng form nghiệp vụ phức tạp, xác thực dữ liệu chặt chẽ với Formik và Yup.",
          en: "Proficient with Redux-Saga, RTK Query and managing complex multi-step form workflows with robust Formik/Yup validation.",
        },
        icon: "fas fa-project-diagram",
        iconColor: "text-indigo-600 dark:text-indigo-400",
      },
      {
        title: {
          vi: "Hiểu biết Backend & Deployment",
          en: "Backend & Deployment Foundations",
        },
        description: {
          vi: "Hiểu rõ kiến trúc Node.js/NestJS, SQL/MongoDB, Docker và PM2, giúp trao đổi kỹ thuật hiệu quả và tích hợp API mượt mà với đội ngũ Backend.",
          en: "Solid grasp of Node.js/NestJS, SQL/MongoDB, Docker, and PM2, facilitating efficient technical discussions and smooth API integration.",
        },
        icon: "fas fa-database",
        iconColor: "text-emerald-600 dark:text-emerald-400",
      },
    ],
  },

  selectedWork: {
    headline: {
      vi: "Dự án tiêu biểu",
      en: "Featured Projects",
    },
    subtitle: {
      vi: "Các sản phẩm thực tế tôi đã xây dựng trong lĩnh vực quản lý chính phủ, cổng tuyển dụng, ví điện tử WebView và bảo hiểm.",
      en: "Key production platforms I have built across government workforce management, recruitment portals, WebView e-wallets, and insurance.",
    },
    searchPlaceholder: {
      vi: "Tìm kiếm dự án theo tên hoặc công nghệ...",
      en: "Search projects by title or technology...",
    },
    allFilterLabel: {
      vi: "Tất cả",
      en: "All",
    },
    filters: [
      "React",
      "Next.js",
      "TypeScript",
      "Vue.js",
      "Tailwind CSS",
      "Redux-Saga",
      "RTK Query",
      "GraphQL",
    ],
    projects: [
      {
        title: {
          vi: "Quản lý lao động thời vụ – Sản phẩm Chính phủ Hàn Quốc",
          en: "Seasonal Worker Management – Government Product",
        },
        company: {
          vi: "EnjoyWorks Company",
          en: "EnjoyWorks Company",
        },
        description: {
          vi: "Nền tảng quản lý lao động quy mô lớn cho chính quyền địa phương tại Hàn Quốc. Xây dựng cổng quản trị tập trung từ đầu bằng React & TypeScript, quản lý dữ liệu lao động thời vụ nước ngoài, doanh nghiệp, phân công công việc, phân quyền RBAC đa cấp, đa ngôn ngữ i18next và xử lý dữ liệu lớn với ExcelJS.",
          en: "Large-scale government workforce management platform for South Korean local governments. Built the centralized admin portal from scratch using React and TypeScript, managing foreign seasonal workers, employers, job assignments, multi-level RBAC, i18next multilingual support, and high-volume Excel processing with ExcelJS.",
        },
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Redux-Saga",
          "Formik",
          "Yup",
          "Tailwind CSS",
          "Ant Design",
          "Shadcn UI",
          "ExcelJS",
        ],
      },
      {
        title: {
          vi: "Linglow – Cổng Quản trị & Tuyển dụng Đối tác",
          en: "Linglow – Admin & Partner Portal",
        },
        company: {
          vi: "EnjoyWorks Company",
          en: "EnjoyWorks Company",
        },
        description: {
          vi: "Cổng thông tin quản trị người dùng & doanh nghiệp kết hợp cổng đối tác cho phép nhà tuyển dụng đăng tin việc làm, xem xét và xử lý hồ sơ ứng tuyển từ ứng dụng di động Linglow với giao diện hiện đại.",
          en: "Administration and partner portal enabling employers to manage user accounts, post job opportunities, review applications submitted via the Linglow mobile app, and streamline the hiring process.",
        },
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Redux",
          "RTK Query",
          "Tailwind CSS",
          "HeroUI",
          "Formik",
          "Yup",
        ],
        url: "https://linglow.net",
      },
      {
        title: {
          vi: "Goodtraepay – Nền tảng Ví điện tử WebView",
          en: "Goodtraepay – WebView E-Wallet Platform",
        },
        company: {
          vi: "EnjoyWorks Company",
          en: "EnjoyWorks Company",
        },
        description: {
          vi: "Nền tảng ví điện tử thanh toán không dùng tiền mặt qua thẻ NFC và mã QR. Phát triển giao diện WebView mượt mà, tối ưu trên ứng dụng di động cho các module Social, Khảo sát (Survey), Diễn đàn hỏi đáp (Q&A) và Thử thách hàng ngày.",
          en: "WebView-based cashless payment e-wallet platform using NFC cards and QR codes. Built responsive and smooth WebView interfaces integrated into mobile apps for Social, Survey, Q&A Forum, and Daily Challenges modules.",
        },
        technologies: [
          "React",
          "Redux",
          "Redux-Saga",
          "RTK Query",
          "TypeScript",
          "Tailwind CSS",
          "SCSS",
          "Formik",
        ],
      },
      {
        title: {
          vi: "Nền tảng Bảo hiểm Giao dịch M&A",
          en: "Insurance Platform for M&A Transactions",
        },
        company: {
          vi: "SmartDev Company",
          en: "SmartDev Company",
        },
        description: {
          vi: "Ứng dụng web hỗ trợ quy trình thẩm định và phát hành bảo hiểm cho các thương vụ Mua bán & Sáp nhập (M&A). Xây dựng hệ thống UI component tái sử dụng bằng Vue.js và Vuetify trong môi trường Agile/Scrum.",
          en: "Web application supporting insurance underwriting workflows for mergers and acquisitions (M&A) transactions. Built reusable UI components using Vue.js and Vuetify in an Agile/Scrum environment.",
        },
        technologies: [
          "Vue.js",
          "Vuetify",
          "JavaScript",
          "HTML5",
          "CSS3",
          "GitLab",
        ],
      },
      {
        title: {
          vi: "PowerSave – Kênh Trực tuyến Bảo hiểm Fubon Life",
          en: "PowerSave – Fubon Life Insurance Portal",
        },
        company: {
          vi: "SmartDev Company",
          en: "SmartDev Company",
        },
        description: {
          vi: "Website trực tuyến phục vụ khách hàng mua các gói bảo hiểm nhân thọ 3 năm của Fubon Life. Phối hợp với đội ngũ Backend tại Singapore để tích hợp GraphQL APIs và tối ưu hóa tính tương thích trên đa trình duyệt.",
          en: "Customer-facing website for purchasing 3-year life insurance plans offered by Fubon Life. Collaborated with Singapore backend engineers to integrate GraphQL APIs and ensured seamless cross-browser compatibility.",
        },
        technologies: [
          "JavaScript",
          "jQuery",
          "HTML5",
          "CSS3",
          "GraphQL",
          "GitLab",
        ],
        url: "https://echannel.fubonlife.com.hk/",
      },
      {
        title: {
          vi: "Meeting Hub – Nền tảng Đặt phòng Khách sạn",
          en: "Meeting Hub – Hotel Booking Platform",
        },
        company: {
          vi: "NCC ASIA Company",
          en: "NCC ASIA Company",
        },
        description: {
          vi: "Website đặt phòng khách sạn trực tuyến cho khách hàng tìm kiếm và đặt phòng nhanh chóng. Tích hợp RESTful APIs với Axios, quản lý trạng thái tập trung với Vuex và phát triển giao diện responsive với Element UI.",
          en: "Customer-facing hotel booking website allowing users to search, filter, and reserve hotel rooms. Integrated RESTful APIs with Axios, managed application state with Vuex, and built responsive UI with Element UI.",
        },
        technologies: [
          "Vue.js",
          "Vuex",
          "Axios",
          "Element UI",
          "JavaScript",
          "HTML5",
          "CSS3",
        ],
      },
    ],
  },

  experience: {
    title: {
      vi: "Kinh nghiệm làm việc",
      en: "Work Experience",
    },
    headline: {
      vi: "Hành trình phát triển & Đóng góp kỹ thuật",
      en: "Career Journey & Technical Impact",
    },
    subtitle: {
      vi: "Hơn 4 năm kinh nghiệm xây dựng các ứng dụng web chất lượng cao, từ kiến trúc frontend, tối ưu hiệu năng đến tích hợp API mượt mà.",
      en: "4+ years of professional experience delivering high-quality web applications, focusing on frontend architecture, performance, and seamless API integration.",
    },
    items: [
      {
        title: "Personal Projects & Technical Learning",
        company: "Self-Employed / Independent",
        period: "12/2025 – Present",
        color: "text-purple-600 dark:text-purple-400",
        project: "Full-Stack Development & Performance Engineering",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn UI",
          "Node.js",
          "Express.js",
          "NestJS",
          "Prisma",
          "MongoDB",
          "Docker",
        ],
        responsibilities: [
          {
            vi: "• Xây dựng các dự án cá nhân sử dụng React, Next.js, TypeScript và các thư viện UI hiện đại nhằm củng cố kiến trúc frontend và thiết kế component tái sử dụng.",
            en: "• Built personal projects using React, Next.js, TypeScript, and modern UI libraries to strengthen frontend architecture and reusable component design.",
          },
          {
            vi: "• Thực hành phát triển ứng dụng full-stack hoàn chỉnh với authentication, RESTful APIs, validate form, state management và giao diện responsive.",
            en: "• Practiced building full-stack applications with authentication, RESTful APIs, form validation, state management, and responsive design.",
          },
          {
            vi: "• Tối ưu hóa hiệu năng ứng dụng thông qua Lazy Loading, Code Splitting, API Caching, phân trang dữ liệu và tối ưu hóa quá trình re-rendering.",
            en: "• Improved application performance through lazy loading, code splitting, API caching, pagination, and rendering optimization.",
          },
          {
            vi: "• Mở rộng kiến thức backend và deployment thực tế với Node.js, Express.js, NestJS, MongoDB, Prisma, Docker, Linux và quy trình CI/CD.",
            en: "• Expanded backend and deployment knowledge through Node.js, Express.js, NestJS, MongoDB, Prisma, Docker, Linux, and CI/CD workflows.",
          },
        ],
        links: [],
      },
      {
        title: "Frontend Developer",
        company: "EnjoyWorks Company",
        period: "01/2023 – 11/2025",
        color: "text-green-600 dark:text-green-400",
        project: "Government Workforce Management, Goodtraepay & Linglow Portal",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Redux-Saga",
          "RTK Query",
          "Formik",
          "Yup",
          "i18next",
          "Tailwind CSS",
          "Ant Design",
          "Shadcn UI",
          "HeroUI",
          "ExcelJS",
          "PM2",
          "GitLab",
        ],
        responsibilities: [
          {
            vi: "• Phát triển cổng quản trị (Admin Portal) cho hệ thống Quản lý lao động thời vụ chính phủ Hàn Quốc từ đầu bằng React và TypeScript, đóng góp vào kiến trúc frontend tổng thể và cấu trúc ứng dụng.",
            en: "• Developed the administration portal from scratch using React and TypeScript for Korean Government Seasonal Worker Management, contributing to overall frontend architecture, application structure, and feature development.",
          },
          {
            vi: "• Tham gia phân tích yêu cầu kỹ thuật cùng các nhóm Dev, QC, BA và PM trước khi triển khai; rà soát tài liệu, làm rõ edge cases và đóng góp ý kiến hoàn thiện giải pháp.",
            en: "• Participated in project requirement analysis with Dev, QC, BA, and PM teams before development; reviewed project documentation, raised clarification questions, and provided feedback to improve requirements.",
          },
          {
            vi: "• Xây dựng các phân hệ quản trị doanh nghiệp quy mô lớn: quản lý lao động, quản lý chủ sử dụng, phân công việc làm thời vụ, dashboard trực quan, biểu mẫu nghiệp vụ và bảng dữ liệu lớn.",
            en: "• Built enterprise management modules, including worker management, employer management, seasonal job management, dashboards, business forms, and large data tables.",
          },
          {
            vi: "• Phát triển giao diện Responsive và các trang WebView tối ưu mượt mà cho Desktop, Tablet, Mobile và ứng dụng di động (Goodtraepay, Seasonal Worker).",
            en: "• Developed responsive interfaces and smooth WebView pages optimized for desktop, tablet, mobile, and mobile application environments (Goodtraepay, Seasonal Worker).",
          },
          {
            vi: "• Quản lý state ứng dụng với Redux-Saga / RTK Query và triển khai các form nghiệp vụ nhiều bước phức tạp với Formik và Yup.",
            en: "• Managed application state with Redux-Saga/RTK Query and implemented complex forms using Formik and Yup.",
          },
          {
            vi: "• Triển khai hệ thống phân quyền dựa trên vai trò (RBAC) nghiêm ngặt cho Super Admin, Master Admin và Admin.",
            en: "• Implemented Role-Based Access Control (RBAC) for Super Admin, Master Admin, and Admin.",
          },
          {
            vi: "• Xây dựng module Import/Export Excel bằng ExcelJS nhằm xử lý nhanh chóng và chính xác khối lượng dữ liệu lao động lớn.",
            en: "• Developed Excel import/export functionality using ExcelJS to efficiently process large volumes of workforce data.",
          },
          {
            vi: "• Tối ưu hóa quy trình upload tệp tin bằng cách nén ảnh, chuyển đổi ảnh HEIC sang PNG và thực hiện upload tuần tự, gia tăng độ ổn định cho backend.",
            en: "• Optimized the file upload workflow by compressing images, converting HEIC images to PNG, and implementing sequential uploads to improve backend stability.",
          },
          {
            vi: "• Tích hợp hỗ trợ đa ngôn ngữ với i18next; phát triển và duy trì cổng quản trị Admin & Partner Portal cho Linglow (https://linglow.net) bằng Next.js và Tailwind CSS.",
            en: "• Implemented multilingual support using i18next; developed and maintained Linglow Admin and Partner web portals (https://linglow.net) using Next.js and Tailwind CSS.",
          },
          {
            vi: "• Đóng gói, triển khai và duy trì ứng dụng ổn định trên môi trường VPS với PM2.",
            en: "• Built, deployed, and maintained applications on VPS environments using PM2.",
          },
        ],
        links: ["https://linglow.net"],
      },
      {
        title: "Frontend Developer",
        company: "SmartDev Company",
        period: "03/2021 – 10/2022",
        color: "text-blue-600 dark:text-blue-400",
        project: "M&A Insurance Platform & PowerSave 3-Year Plan (Fubon Life)",
        technologies: [
          "Vue.js",
          "Vuetify",
          "JavaScript",
          "jQuery",
          "HTML5",
          "CSS3",
          "GraphQL",
          "Git",
          "GitLab",
        ],
        responsibilities: [
          {
            vi: "• Phát triển và bảo trì giao diện ứng dụng web responsive phục vụ quy trình thẩm định bảo hiểm cho các thương vụ M&A sử dụng Vue.js và Vuetify.",
            en: "• Developed and maintained responsive web application interfaces for M&A transaction insurance processes using Vue.js and Vuetify.",
          },
          {
            vi: "• Xây dựng hệ thống UI component tái sử dụng nhằm nâng cao tính nhất quán và khả năng bảo trì trong toàn bộ codebase.",
            en: "• Built reusable UI components to improve consistency and maintainability across the application.",
          },
          {
            vi: "• Làm việc trong môi trường Agile/Scrum và trực tiếp trao đổi với khách hàng để làm rõ yêu cầu nghiệp vụ và báo cáo tiến độ định kỳ.",
            en: "• Worked in an Agile/Scrum environment and collaborated directly with clients to clarify requirements and provide progress updates.",
          },
          {
            vi: "• Phát triển và duy trì giao diện người dùng cho website mua bảo hiểm trực tuyến PowerSave của tập đoàn Fubon Life sử dụng JavaScript và jQuery.",
            en: "• Developed and maintained the user interface for PowerSave 3-Year Insurance Plan website offered by Fubon Life using JavaScript and jQuery.",
          },
          {
            vi: "• Phối hợp với đội ngũ Backend tại Singapore để tích hợp các tính năng frontend thông qua GraphQL APIs.",
            en: "• Collaborated with the backend team in Singapore to integrate frontend features with GraphQL APIs.",
          },
          {
            vi: "• Khắc phục các lỗi giao diện và đảm bảo tính tương thích hiển thị chuẩn xác trên mọi trình duyệt (Cross-browser Compatibility).",
            en: "• Fixed UI issues and ensured seamless cross-browser compatibility.",
          },
        ],
        links: ["https://echannel.fubonlife.com.hk/"],
      },
      {
        title: "Frontend Developer",
        company: "NCC ASIA Company",
        period: "12/2019 – 12/2020",
        color: "text-teal-600 dark:text-teal-400",
        project: "Meeting Hub (Hotel Booking Platform)",
        technologies: [
          "Vue.js",
          "Vuex",
          "Axios",
          "Element UI",
          "JavaScript",
          "HTML",
          "CSS",
          "Git",
          "GitLab",
        ],
        responsibilities: [
          {
            vi: "• Phát triển và duy trì giao diện người dùng cho nền tảng website đặt phòng khách sạn trực tuyến Meeting Hub bằng Vue.js và Element UI.",
            en: "• Developed and maintained the user interface for Meeting Hub (Hotel Booking Platform) website using Vue.js and Element UI.",
          },
          {
            vi: "• Tích hợp RESTful APIs thông qua Axios và quản lý state tập trung cho toàn bộ luồng tìm kiếm & đặt phòng với Vuex.",
            en: "• Integrated RESTful APIs with Axios and managed application state using Vuex.",
          },
          {
            vi: "• Xây dựng giao diện web Responsive, tối ưu trải nghiệm người dùng trên thiết bị di động và máy tính bàn.",
            en: "• Built responsive, user-friendly UI with Element UI optimized across mobile and desktop devices.",
          },
          {
            vi: "• Phối hợp chặt chẽ cùng các thành viên trong nhóm phát triển thông qua quy trình quản lý mã nguồn Git và GitLab.",
            en: "• Collaborated effectively with team members using Git and GitLab workflows.",
          },
        ],
        links: [],
      },
    ],
  },

  education: {
    title: {
      vi: "Học vấn",
      en: "Education",
    },
    items: [
      {
        institution: {
          vi: "Trường Đại học Bách khoa – Đại học Đà Nẵng",
          en: "Da Nang University of Science and Technology",
        },
        major: {
          vi: "Kỹ sư Kỹ thuật Cơ điện tử (Điểm TB: 3.00 / 4 — Xếp loại: Khá)",
          en: "Mechatronics Engineering (GPA: 3.00 / 4 — Degree Classification: Good)",
        },
        period: "2011 — 2016",
        color: "text-blue-600 dark:text-blue-400",
      },
    ],
  },

  languages: {
    title: {
      vi: "Ngôn ngữ",
      en: "Languages",
    },
    items: [
      {
        language: {
          vi: "Tiếng Việt",
          en: "Vietnamese",
        },
        proficiency: {
          vi: "Tiếng mẹ đẻ (Bản ngữ)",
          en: "Native",
        },
        color: "text-green-600 dark:text-green-400",
      },
      {
        language: {
          vi: "Tiếng Anh",
          en: "English",
        },
        proficiency: {
          vi: "Đọc hiểu tài liệu chuyên ngành, viết & giao tiếp kỹ thuật",
          en: "Technical documentation, written & technical communication",
        },
        color: "text-blue-600 dark:text-blue-400",
      },
    ],
  },

  contact: {
    title: {
      vi: "Liên hệ với tôi",
      en: "Get In Touch",
    },
    headline: {
      vi: "Cùng tạo nên những sản phẩm chất lượng",
      en: "Let's Build Something Impactful Together",
    },
    subtitle: {
      vi: "Tôi luôn sẵn sàng đón nhận các cơ hội mới ở vị trí Middle Frontend Developer. Hãy liên hệ với tôi để cùng trao đổi!",
      en: "I am actively open to new opportunities as a Middle Frontend Developer. Feel free to reach out and connect!",
    },
    contactInfoTitle: {
      vi: "Thông tin liên hệ",
      en: "Contact Information",
    },
    contactInfo: {
      email: "nguyenduytoanbkdn@gmail.com",
      secondaryEmail: "saolangthang144@gmail.com",
      phone: "034 861 8373",
      linkedin: "https://www.linkedin.com/in/toan-nguyen-dev/",
      github: "https://github.com/NDuyToan",
      location: {
        vi: "Đà Nẵng",
        en: "Da Nang",
      },
    },
    form: {
      namePlaceholder: {
        vi: "Họ và tên của bạn",
        en: "Your full name",
      },
      emailPlaceholder: {
        vi: "Địa chỉ email của bạn",
        en: "you@email.com",
      },
      messagePlaceholder: {
        vi: "Nội dung tin nhắn hoặc dự án bạn muốn trao đổi...",
        en: "Tell me about your project or opportunity...",
      },
      submitButton: {
        vi: "Gửi tin nhắn",
        en: "Send message",
      },
      sendingButton: {
        vi: "Đang gửi...",
        en: "Sending...",
      },
      successMessage: {
        vi: "Cảm ơn bạn đã gửi tin nhắn! Tôi sẽ phản hồi sớm nhất có thể.",
        en: "Thank you for reaching out! I will get back to you as soon as possible.",
      },
    },
  },

  footer: {
    name: {
      vi: "Nguyễn Duy Toản",
      en: "Nguyen Duy Toan",
    },
    description: {
      vi: "Middle Frontend Developer — chuyên xây dựng ứng dụng web hiện đại, scalable và hiệu năng cao với React, Next.js và TypeScript.",
      en: "Middle Frontend Developer — building scalable, high-performance, modern web applications with React, Next.js, and TypeScript.",
    },
    socialLinks: [
      {
        href: "mailto:nguyenduytoanbkdn@gmail.com",
        icon: "fas fa-envelope",
        label: { vi: "Email", en: "Email" },
      },
      {
        href: "https://www.linkedin.com/in/toan-nguyen-dev/",
        icon: "fab fa-linkedin-in",
        label: { vi: "LinkedIn", en: "LinkedIn" },
      },
      {
        href: "https://github.com/NDuyToan",
        icon: "fab fa-github",
        label: { vi: "GitHub", en: "GitHub" },
      },
    ],
    copyright: {
      vi: "© 2026 Nguyễn Duy Toản. Tất cả quyền được bảo lưu.",
      en: "© 2026 Nguyen Duy Toan. All rights reserved.",
    },
  },
};
