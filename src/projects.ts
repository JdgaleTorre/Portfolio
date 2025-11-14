export interface ProjectData {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    challenge: string;
    image: string;
    tags: string[];
    category: string;
    liveUrl: string;
    codeUrl: string;
    status: string;
    features: string[];
    technicalDetails: { title: string; description: string }[];
    techStack: {
        frontend?: string[];
        backend?: string[];
        database?: string[];
        cloud?: string[];
        tools?: string[];
    };
}

export const projectsData: ProjectData[] = [
    {
        id: "devtools",
        title: "DevTools",
        description: 'AI-powered productivity and task management system with intelligent scheduling, automated workflows, and real-time collaboration features.',
        fullDescription:
            "DevTools is a comprehensive productivity platform designed to streamline team workflows and enhance individual productivity through AI-powered automation. The system leverages machine learning algorithms to predict task durations, suggest optimal scheduling, and automate routine workflows.",
        challenge:
            "The main challenge was integrating multiple AI models for different features while maintaining a responsive, real-time user experience.",
        image: "/images/devtools.jpg",
        tags: ["React", "TypeScript", "AI/LLMs", "Vercel", "PostgreSQL"],
        category: "AI",
        liveUrl: "https://devtools.josegale.com",
        codeUrl: "https://github.com/JdgaleTorre/DevTools",
        status: "Live",
        features: [
            "AI-powered task prioritization and scheduling",
            "Natural language task creation",
            "Real-time collaboration",
            "Mobile-responsive design",
            "Dark mode support",
        ],
        technicalDetails: [
            {
                title: "AI Integration",
                description:
                    "Implemented GPT-4 API for natural language processing enabling conversational task creation.",
            },
            {
                title: "Real-time Architecture",
                description:
                    "WebSocket connections with optimistic UI updates and rollback support.",
            },
            {
                title: "Performance Optimization",
                description:
                    "Code splitting, lazy loading, and optimized caching reduced bundle size by 40%.",
            },
            {
                title: "Database Design",
                description:
                    "Optimized PostgreSQL schema.",
            },
        ],
        techStack: {
            frontend: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
            backend: ["Next.js", "tRPC", "NextAuth", "Drizzle ORM"],
            database: ["PostgreSQL"],
            cloud: ["Vercel"],
            tools: ["Docker", "GitHub Actions"],
        },

    },

    {
        id: "movinder",
        title: "Movinder",
        description: "Movinder is an intelligent movie recommendation platform combining collaborative & content-based filtering using neural networks.",
        fullDescription:
            `Movinder is a mobile-friendly web application built with Next.js that allows users to rate movies and receive personalized recommendations. The app collects rating data to train its own neural network, which combines content-based and collaborative filtering techniques to provide highly accurate and personalized movie suggestions.`,
        challenge:
            "Building accurate recommendations while handling large datasets and real-time requests.",
        image: "/images/movinder.jpg",
        tags: ["Python", "Django", "Machine Learning", "React", "PostgreSQL"],
        category: "AI",
        liveUrl: "https://movinder.josegale.com",
        codeUrl: "https://github.com/JdgaleTorre/Movinder",
        status: "Live",
        features: [
            "Neural network-based recommendations",
            "Collaborative filtering",
            "Content-based filtering",
            "User review system",
            "Similar movies discovery",
            "Advanced search",
            "TMDB API integration",
        ],
        technicalDetails: [
            {
                title: "Machine Learning",
                description:
                    "Hybrid recommendation system trained on 10k+ ratings achieving 85% accuracy.",
            },
            {
                title: "Data Pipeline",
                description:
                    "ETL pipeline for ingesting and cleaning movie metadata with caching strategies.",
            },
        ],
        techStack: {
            frontend: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
            backend: ["Next.js", "tRPC", "NextAuth", "Prisma"],
            database: ["PostgreSQL"],
            cloud: ["Vercel"],
            tools: ["Docker", "GitHub Actions"],
        },
    },

    {
        id: "pokedex",
        title: "Pokedex",
        description:
            "Pokédex is a fan-made Pokémon encyclopedia built with Next.js and TypeScript.",
        fullDescription:
            "Full interactive Pokémon encyclopedia with advanced filtering, evolution chains, and comparisons.",
        challenge:
            "Efficiently handling datasets from PokéAPI while maintaining fast performance.",
        image: "/images/pokedex.jpg",
        tags: ["React", "RESTful APIs", "Tailwind CSS", "TypeScript"],
        category: "Frontend",
        liveUrl: "https://pokedex.josegale.com",
        codeUrl: "https://github.com/JdgaleTorre/Pokedex",
        status: "Live",
        features: [
            "Search & filtering",
            "Detailed stats and information",
            "Evolution chain visualization",
            "Full mobile responsiveness",
        ],
        technicalDetails: [
            {
                title: "API Integration",
                description:
                    "Efficient caching using React Query with prefetching.",
            },
            {
                title: "Performance Optimization",
                description:
                    "Virtual list rendering and lazy loading for high performance.",
            },
            {
                title: "UI/UX Design",
                description:
                    "Clean Tailwind UI with animations and type-based color schemes.",
            },
        ],
        techStack: {
            frontend: ["React", "TypeScript", "Tailwind CSS", "React Query"],
            backend: ["PokéAPI (External)"],
            tools: ["ESLint", "Prettier"],
        },
    },

    {
        id: "memory-game",
        title: "Memory Game",
        description:
            "A classic memory-matching game demonstrating JavaScript logic and animations.",
        fullDescription:
            "Interactive memory-matching card game with animations, sound effects, and scoring.",
        challenge:
            "Implementing smooth animations without sacrificing mobile performance.",
        image: "/images/memoryGame.jpg",
        tags: ["JavaScript", "CSS3", "HTML5", "Animations"],
        category: "Frontend",
        liveUrl: "https://jdgaletorre.github.io/MemoryGame/",
        codeUrl: "https://github.com/JdgaleTorre/MemoryGame",
        status: "Live",
        features: [
            "3 difficulty levels",
            "Smooth 3D card flips",
            "Timer & score system",
        ],
        technicalDetails: [
            {
                title: "CSS Animations",
                description:
                    "3D card flip animations with transitions.",
            },
            {
                title: "State Management",
                description:
                    "Custom event system with persistent storage.",
            },
        ],
        techStack: {
            frontend: ["JavaScript", "HTML5", "CSS3"],
            cloud: ["GitHub"]
        },
    },

    {
        id: "game-of-life",
        title: "Game of Life",
        description:
            "A real-time visualization of Conway’s Game of Life.",
        fullDescription:
            "Interactive cellular automaton simulation with patterns, speed control, and customizable grid.",
        challenge:
            "Optimizing the algorithm for large grids (100×100+) at 60 FPS.",
        image: "/images/gameOfLife.jpg",
        tags: ["JavaScript", "Canvas", "Algorithms", "HTML5"],
        category: "Frontend",
        liveUrl: "https://jdgaletorre.github.io/GameOfLife2/",
        codeUrl: "https://github.com/JdgaleTorre/GameOfLife2",
        status: "Live",
        features: [
            "Interactive grid",
            "Classic Game of Life patterns",
            "Random/grid drawing",
        ],
        technicalDetails: [
            {
                title: "Algorithm Optimization",
                description:
                    "Optimized neighbor-counting using typed arrays & double buffering.",
            },
            {
                title: "Canvas Rendering",
                description:
                    "Only redraws changed cells for high performance.",
            },
        ],
        techStack: {
            frontend: ["JavaScript", "HTML5 Canvas", "CSS3"],
            cloud: ["GitHub"]
        },
    },

    {
        id: "pomodoro",
        title: "Pomodoro Timer",
        description:
            "A minimalist PWA Pomodoro Timer built with Next.js.",
        fullDescription:
            "Modern Pomodoro app with offline support, customizable intervals, and analytics.",
        challenge:
            "Building an offline-first PWA with accurate timers.",
        image: "/images/pomodoro.jpg",
        tags: ["React", "PWA", "Tailwind CSS"],
        category: "Frontend",
        liveUrl: "https://pomodoro-timer-lac.vercel.app/",
        codeUrl: "https://github.com/JdgaleTorre/PomodoroTimer",
        status: "Live",
        features: [
            "Clean UI",
            "Sound alerts",
        ],
        technicalDetails: [
            {
                title: "PWA",
                description:
                    "Service worker caching and offline asset support.",
            },
        ],
        techStack: {
            frontend: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
            cloud: ["Vercel"]
        },
    },
];
