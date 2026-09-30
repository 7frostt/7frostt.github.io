// ============================================================
// ❄️ 7FROSTT PORTFOLIO CONFIGURATION
// ============================================================

const CONFIG = {
    // 1. Personal Details & Bio
    profile: {
        handle: "7frostt",
        nickname: "Al",
        fullName: "Muhammad Raja Alkautsar",
        title: "Founder @ Tideline • Roblox Studio & Full-Stack Developer",
        bio: `Hi! I'm Al (also known as 7Frostt), an Indonesian Roblox Developer and Project Manager with a passion for building fun, scalable, and polished game systems.

I specialize in gameplay programming, progression systems, multiplayer mechanics, UI logic, and overall game architecture. Alongside programming, I also enjoy planning features, organizing development workflows, and helping teams turn ideas into playable experiences.

I'm currently working with multiple Roblox development teams while also developing my own original projects. I enjoy solving technical challenges, optimizing systems, and creating gameplay that feels rewarding for players.

I'm always open to collaborating with developers, studios, and teams on exciting Roblox projects.`,
        discord: "7frostt_",
        githubUrl: "https://github.com/7frostt",
        location: "Indonesia",
        statusText: "Open to Builds"
    },

    // 2. Stats
    stats: [
        { number: "3 Yrs", label: "Full-Stack Roblox" },
        { number: "Tideline", label: "Founder" },
        { number: "NovaForge", label: "Scripter" },
        { number: "Ascend", label: "Project Manager" }
    ],

    // 3. CLI Terminal Commands
    terminalCommands: {
        help: `Available Commands:
  - <span class="text-sky-400">whoami</span>      : View bio & identity
  - <span class="text-sky-400">experiences</span> : View full roles & builds
  - <span class="text-sky-400">contact</span>     : Get discord & github
  - <span class="text-sky-400">clear</span>       : Clear screen`,

        whoami: `7frostt (Al)
Roles   : Founder @ Tideline | Scripter @ NovaForge | PM @ Ascend
Discord : 7frostt_
GitHub  : https://github.com/7frostt`,

        experiences: `1. Tideline [Founder]
2. Scripter @ NovaForge Studio (2026 - Present)
3. Project Manager @ Ascend (2026 - Present)
4. Full-Stack Roblox Developer (2023 - Present)`,

        contact: `Discord : 7frostt_
GitHub  : https://github.com/7frostt`
    },

    // 4. Featured Experiences & Roles
    experiences: [
        {
            title: "Founder - Tideline",
            category: "roblox",
            badge: "Founder • 2026",
            description: "Founder and lead developer behind Tideline, directing vision, game architecture, and core mechanics.",
            tags: ["#Founder", "#RobloxEngine", "#Luau", "#ProjectLead"],
            githubUrl: "https://github.com/7frostt"
        },
        {
            title: "Scripter - NovaForge Studio",
            category: "roblox",
            badge: "Roblox Studio • 2026 - Present",
            description: "Gameplay programmer building modular and scalable Luau systems, performance optimization, and custom game mechanics.",
            tags: ["#Luau", "#GameplayProgramming", "#Optimization"],
            githubUrl: "https://github.com/7frostt"
        },
        {
            title: "Project Manager - Ascend",
            category: "tools",
            badge: "Management • 2026 - Present",
            description: "Managing development milestones, task priorities, testing feedback, and team production workflows.",
            tags: ["#ProjectManager", "#Milestones", "#TeamWorkflow"],
            githubUrl: "https://github.com/7frostt"
        },
        {
            title: "Full-Stack Roblox Developer",
            category: "roblox",
            badge: "Independent • 2023 - Present",
            description: "Designing original Roblox experiences from concept to release: gameplay logic, multiplayer systems, UI, data saving, and Rojo pipelines.",
            tags: ["#RobloxStudio", "#Luau", "#Rojo", "#DataSaving"],
            githubUrl: "https://github.com/7frostt"
        }
    ]
};