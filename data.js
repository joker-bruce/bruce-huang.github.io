export const bio = [
    "Yo, Sup, Welcome! This is Bruce.",
    `I am a passionate scholar in the field of AI for Science, especially in Chemistry.`,
    `Also, feel free to contact me if you want to know more about my research and collaboration opportunity.`,
    "Thanks for taking the time to learn about me!",
];

export const skills = [
    {
        title: "Languages",
        skillName: "JavaScript, TypeScript",
        color: "1",
        percentage: "80",
    },
    {
        title: "Frameworks/Libraries",
        skillName: "Angular, RxJS, NGXS",
        color: "6",
        percentage: "70",
    },
    {
        title: "Design",
        skillName: "HTML, Bootstrap, Tailwind",
        color: "4",
        percentage: "70",
    },
    {
        title: "Version Control",
        skillName: "GitHub, JIRA, Bitbucket",
        color: "7",
        percentage: "70",
    },
    {
        title: "Tools",
        skillName: "Postman, Chrome DevTools",
        color: "3",
        percentage: "80",
    },
    {
        title: "Analytics",
        skillName: "CleverTap, Countly",
        color: "5",
        percentage: "50",
    },
    {
        title: "IDE",
        skillName: "VS Code",
        color: "6",
        percentage: "70",
    },
];

export const projects = {
    aiForChemistry: [
        {
            projectName: "Application of Large Language Models in Chemistry Reaction Data Extraction and Cleaning",
            image: "images/llm_chem.png",
            summary:
                "Application of Large Language Models in Chemistry Reaction Data Extraction and Cleaning, CIKM 2024",
            preview: "https://dl.acm.org/doi/pdf/10.1145/3627673.3679874",
            techStack: ["Chemistry", "Machine Learning", "LLM", "Information Retrieval"],
        },
        {
            projectName: "MolX: Enhancing Large Language Models for Molecular Learning with A Multi-Modal Extension",
            image: "images/molx.png",
            summary:
                "MolX: Enhancing Large Language Models for Molecular Learning with A Multi-Modal Extension",
            preview: "https://arxiv.org/abs/2406.06777",
            techStack: ["Chemistry", "Machine Learning", "LLM", "Representation Learning", "Multimodal"],
        },
        {
            projectName: "Are we making much progress? Revisiting chemical reaction yield prediction from an imbalanced regression perspective",
            image: "images/imbalance.png",
            summary:
                "Are we making much progress? Revisiting chemical reaction yield prediction from an imbalanced regression perspective. WWW 2024",
            preview: "https://arxiv.org/pdf/2402.05971.pdf",
            techStack: ["Chemistry", "Machine Learning", "Yield Prediction", "Imbalanced data"],
        },
        
    ],
    chemistry: [
        {
            projectName: "New stilbenes from Cajanus cajan inhibit adipogenesis in 3T3-L1 adipocytes through down-regulation of PPARγ",
            image: "images/ppar.png",
            summary:
                "New stilbenes from Cajanus cajan inhibit adipogenesis in 3T3-L1 adipocytes through down-regulation of PPARγ. Bioorganic Chemistry",
            preview: "https://www.sciencedirect.com/science/article/pii/S0045206824007569",
            techStack: ["Stilbenes", "Cajanus cajan", "PPARγ", "Anti-adipogenesis", "Adipocyte differentiation"],
        },
        {
            projectName: "Four new isocoumarins from Cajanus cajan",
            image: "images/isocoumarins.png",
            summary:
                "Four new isocoumarins from Cajanus cajan. RSC Advances",
            preview: "https://pubs.rsc.org/en/content/articlehtml/2024/ra/d3ra08149d",
            techStack: ["Organic Chemistry", "Analytical Chemistry"],
        },
        {
            projectName: "Three new anti-inflammatory stilbenoids and a diphenyl ether derivative from Cajanus cajan",
            image: "images/anti-inflam.png",
            summary:
                "Three new anti-inflammatory stilbenoids and a diphenyl ether derivative from Cajanus cajan. Natural Product Research",
            preview: "https://doi.org/10.1080/14786419.2023.2297862",
            techStack: ["Cajanus Cajan", "Stilbenoids", "Biosynthesis"],
        },
    ],
    others: [
        {
            projectName: "ChefFusion: Multimodal Foundation Model Integrating Recipe and Food Image Generation",
            image: "images/chefFusion.png",
            summary:
                "ChefFusion: Multimodal Foundation Model Integrating Recipe and Food Image Generation, CIKM 2024",
            preview: "https://arxiv.org/pdf/2409.12010",
            techStack: ["Food Computing", "Multimodal", "LLM", "Recipe Generation", "Food Image Generation"],
        },
    ],
    androidProjects: [
        {
            projectName: "NITW-CSE",
            image: "images/nitwcse.jpg",
            summary:
                "The Application display details of Department courses, reference books, research, publication and faculty profile.",
            preview: "https://github.com/vinaysomawat/NITW-CSE",
            techStack: ["JAVA", "XML", "Android"],
        },
        {
            projectName: "CareerHigh-App",
            image: "images/carrerhigh.png",
            summary:
                "The Application display the webpages of website careerhigh.in in android devices.",
            preview: "https://github.com/vinaysomawat/CareerHigh-Android",
            techStack: ["JAVA", "XML", "Android"],
        },
    ],
    freelanceProjects: [
        {
            projectName: "SnylloAir.com",
            image: "images/snylloair.png",
            summary:
                "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
            preview: "https://www.snylloair.com/",
            techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
        },
        {
            projectName: "Delivery+",
            image: "images/AM-Logo-.png",
            summary: "Android Application to display website in android devices.",
            preview:
                "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
            techStack: ["Android", "JAVA", "Play Store"],
        },
    ],
};

export const experience = [
    {
        title: "Shiprocket (Bigfoot Solution Private Limited)",
        duration: "September 2022 - Present",
        subtitle: "Software Engineer",
        details: [
            "Working in support and escalation team."
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
        icon: "truck ",
    },
    {
        title: "Biofourmis India Private Limited",
        duration: "April 2022 - Jul 2023",
        subtitle: "Software Engineer",
        details: [
            `Implemented microfrontends using the Module Federation Plugin in Angular.
            Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
            `Upgraded application with a dynamic base URL for flexible operation across multiple regions and verticals, leading to
            recognition with the Biofourmis Bravo award in Q1, 2023.`,
            `Implemented RxState for managing local state in components, resulting in elegant and reactive facades.`,
            `Utilized Twilio-Video for group video call rooms and Countly for Web Analytics.`,
            `Integrated NGXS WebSocket, enhancing state management and replacing legacy service injections.`,
            `Implemented extensive RxJS usage for reactive programming, resulting in efficient data handling, improved state
            management, and enhanced application performance.`,
            `Dramatically optimized load time and performance through code splitting, lazy loading, caching, and preload`,
            `Enhanced video call experience by implementing real-time switching of I/O devices and audio level indicators,
            resulting in reduced audio issues and increased user satisfaction.`,
            `Owned and led successful Angular application upgrades from version 12 to 13 and 14, improving performance
            and enhancing features.`,
        ],
        tags: ["JavaScript", "Angular", "RxJS", "NGXS", "TypeScript", "RxState", "Webpack", "Optimization"],
        icon: "heartbeat",
    },
    {
        title: "Novopay Solutions Private Limited",
        duration: "June 2020 - April 2022",
        subtitle: "Software Engineer",
        details: [
            `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
            and Money transfer.`,
            `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
            Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
            `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
            `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
        icon: "qrcode",
    },
    {
        title: "ThinkPedia LLP",
        duration: "May 2019 - June 2019",
        subtitle: "SDE Intern",
        details: [
            `Developed a customer web application for social media management, supporting the advertisement domain.`,
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
        icon: "group",
    },
];

export const education = [
    {
        title: "PhD in Computer Science and Engineering",
        duration: "2023.9-Now",
        subtitle: "University of Notre Dame Du Lac",
        details: [],
        tags: [
            "AI for Science",
            "Chemistry",
            "Computer-Aided Synthesis",
        ],
        icon: "book",
    },
    {
        title: "Bachelor of Science in Computer Science and Chemistry",
        duration: "2019.8-2023.5",
        subtitle: "University of Wisconsin Madison",
        details: [],
        tags: ["Chemistry", "Computer Science"],
        icon: "graduation-cap",
    },
];

export const footer = [
    {
        label: "Resources",
        data: [
            {
                text: "Enable Dark/Light Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Print this page",
                func: "window.print()",
            },
            {
                text: "Clone this page",
                link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
            },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/xiaobao-bruce-huang-15878823b/",
            },
            {
                text: "Twitter",
                link: "https://twitter.com/BruceHU90978862",
            },
            {
                text: "Google Scholar",
                link: "https://scholar.google.com/citations?user=t_qARfwAAAAJ&hl=en",
            },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Bruce Huang.",
        ],
    },
];
