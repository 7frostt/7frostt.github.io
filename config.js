// ============================================================
// ❄️ 7FROSTT PORTFOLIO CONFIGURATION
// Edit anything in this file to update your portfolio instantly!
// ============================================================

const CONFIG = {
    // 1. Personal Details & Bio
    profile: {
        handle: "7frostt",
        nickname: "Al",
        fullName: "Muhammad Raja Alkautsar",
        title: "Senior Roblox Engine Specialist & Full-Stack Web Architect",
        bio: "Known locally as Al. Crafting scalable client-server frameworks, custom physics, and data systems in Luau, alongside production web systems with Laravel, PHP, MySQL, and Tailwind.",
        email: "itzmeraja035@gmail.com",
        githubUrl: "https://github.com/7frostt",
        location: "Indonesia",
        statusText: "Open to Builds"
    },

    // 2. Quick Counter Stats
    stats: [
        { number: "15+", label: "Production Builds" },
        { number: "120K+", label: "Lines of Luau & PHP" },
        { number: "99.9%", label: "System Uptime Rate" },
        { number: "3+ Yrs", label: "Engineering Exp" }
    ],

    // 3. CLI Terminal Commands & Answers (Add new ones here anytime!)
    terminalCommands: {
        help: `Available Shell Commands:
  - <span class="text-sky-400">whoami</span>   : View bio and full name
  - <span class="text-sky-400">skills</span>   : List engine & web technology stack
  - <span class="text-sky-400">projects</span> : View major featured repositories
  - <span class="text-sky-400">contact</span>  : Get email & GitHub links
  - <span class="text-sky-400">clear</span>    : Clear terminal screen`,

        whoami: `7frostt (Al)
Role     : Senior Roblox Engine Specialist & Full-Stack Web Architect
Location : Indonesia
Bio      : Passionate about Luau client-server frameworks, custom game physics, and modern web architectures using Laravel & Tailwind.`,

        skills: `ROBLOX & LUAU  : Frameworks, DataStores, Raycasting, Physics, Voxel Engines
FULL-STACK WEB : Laravel (PHP), MySQL, REST APIs, JavaScript, Tailwind CSS
TOOLS & SCRIPT : Git/GitHub, Python, MediaPipe, XAMPP, VS Code`,

        projects: `1. Sukarobot Web Portal [Laravel/PHP/MySQL]
2. 4rtifacts & Aether-Tide [Luau Engine Framework]
3. Maison Co. Boutique [Modern Web App]
4. AI Hand-Tracking Tool [Python/MediaPipe]`,

        contact: `Email  : itzmeraja035@gmail.com
GitHub : https://github.com/7frostt`
    },

    // 4. Featured Projects List
    projects: [
        {
            title: "Web Sukarobot Sukabumi",
            category: "web",
            badge: "Web Dev • Internship",
            description: "Full-stack web application developed for Sukarobot Sukabumi internship. Powered by Laravel 11, PHP, and MySQL database managing educational & robotics catalog data.",
            tags: ["#Laravel", "#PHP8.3", "#MySQL", "#Tailwind"],
            githubUrl: "https://github.com/Rijalpratama23/web_sukarobot_sukabumi"
        },
        {
            title: "4rtifacts & Aether-Tide Engine",
            category: "roblox",
            badge: "Roblox Studio",
            description: "Custom Roblox experiences featuring modular Luau client-server frameworks, optimized item replication, custom inventory data structures, and atmospheric combat mechanics.",
            tags: ["#Luau", "#DataStore2", "#CustomPhysics"],
            githubUrl: "https://github.com/7frostt"
        },
        {
            title: "Maison Co. Boutique Web",
            category: "web",
            badge: "Web Dev",
            description: "High-end modern boutique showcase site featuring smooth client-side filtering, animated UI transitions, responsive glassmorphism themes, and RESTful product routing.",
            tags: ["#JavaScript", "#HTML5", "#CSS3"],
            githubUrl: "https://github.com/7frostt"
        },
        {
            title: "Voxel Digging & Physics Engine",
            category: "roblox",
            badge: "Roblox Studio",
            description: "Procedural voxel terrain destruction and excavation mechanics. Optimized server-authoritative hitboxes and client-side particle interpolation for smooth performance.",
            tags: ["#Luau", "#Raycasting", "#Voxels"],
            githubUrl: "https://github.com/7frostt"
        },
        {
            title: "Desktop AI Gesture & Vision",
            category: "tools",
            badge: "Tools & AI",
            description: "Real-time camera hand landmark tracking tool created with Python and Google MediaPipe. Enables gesture-based OS inputs and custom event listeners.",
            tags: ["#Python", "#MediaPipe", "#OpenCV"],
            githubUrl: "https://github.com/7frostt"
        },
        {
            title: "Wasteline - Survival Project",
            category: "roblox",
            badge: "Roblox Studio",
            description: "Solo survival game build with dynamic weather cycles, custom HUD interfaces, stamina & hunger attributes, and server-side inventory security.",
            tags: ["#RobloxStudio", "#Luau", "#UI/UX"],
            githubUrl: "https://github.com/7frostt"
        }
    ]
};