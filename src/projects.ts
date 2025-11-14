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
    year: string;
    teamSize: string;
    duration: string;
    role: string;
    status: string;
    features: string[];
    technicalDetails: { title: string; description: string }[];
    results: { icon: string; value: string; label: string }[];
    techStack: {
        frontend?: string[];
        backend?: string[];
        database?: string[];
        cloud?: string[];
        tools?: string[];
    };
    contributions: string[];
}

export const projectsData: ProjectData[] = [
    {
        id: "devtools",
        title: "DevTools",
        description: `DevTools is a productivity and project management platform designed to streamline workflows through an intuitive Kanban-style interface. Built with a modern stack (Next.js, TypeScript, tRPC, Drizzle ORM, and Tailwind CSS), it allows users to create boards, manage tasks, and visualize progress effortlessly. The app features AI-powered assistance to automatically generate and organize tasks, saving time and improving planning efficiency. With real-time updates, customizable themes, and drag-and-drop functionality, DevTools provides a modern and elegant experience for developers and teams looking to optimize their daily work.`,
        fullDescription:
            "DevTools is a comprehensive productivity platform designed to streamline team workflows and enhance individual productivity through AI-powered automation. The system leverages machine learning algorithms to predict task durations, suggest optimal scheduling, and automate routine workflows.",
        challenge:
            "The main challenge was integrating multiple AI models for different features while maintaining a responsive, real-time user experience.",
        image: "/images/devtools.jpg",
        tags: ["React", "TypeScript", "AI/LLMs", "Node.js", "PostgreSQL"],
        category: "AI",
        liveUrl: "https://devtools.josegale.com",
        codeUrl: "https://github.com/JdgaleTorre/DevTools",
        year: "2024",
        teamSize: "5 developers",
        duration: "8 months",
        role: "Lead Full Stack Developer",
        status: "Live",
        features: [
            "AI-powered task prioritization and scheduling",
            "Natural language task creation",
            "Smart deadline prediction",
            "Real-time collaboration",
            "Automated workflow triggers",
            "Analytics dashboard",
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
                    "Optimized PostgreSQL schema capable of supporting 100k+ concurrent users.",
            },
        ],
        results: [
            { icon: "📈", value: "40%", label: "Productivity Increase" },
            { icon: "👥", value: "50k+", label: "Active Users" },
            { icon: "⚡", value: "99.9%", label: "Uptime" },
        ],
        techStack: {
            frontend: ["React", "TypeScript", "Tailwind CSS", "React Query", "Zustand"],
            backend: ["Node.js", "Express.js", "WebSocket", "JWT"],
            database: ["PostgreSQL", "Redis"],
            cloud: ["AWS EC2", "AWS S3", "AWS Lambda"],
            tools: ["Docker", "GitHub Actions", "Jest", "Cypress"],
        },
        contributions: [
            "Architected entire system from ground up",
            "Integrated OpenAI GPT-4 API",
            "Built real-time collaboration system",
            "Optimized database queries",
            "Implemented testing suite",
        ],
    },

    {
        id: "movinder",
        title: "Movinder",
        description: `Movinder is a mobile-friendly web application built with Next.js that allows users to rate movies and receive personalized recommendations. The app collects rating data to train a neural network, which powers a content-based filtering system for accurate movie suggestions.`,
        fullDescription:
            "Movinder is an intelligent movie recommendation platform combining collaborative & content-based filtering using neural networks.",
        challenge:
            "Building accurate recommendations while handling large datasets and real-time requests.",
        image: "/images/movinder.jpg",
        tags: ["Python", "Django", "Machine Learning", "React", "PostgreSQL"],
        category: "AI",
        liveUrl: "https://movinder.josegale.com",
        codeUrl: "https://github.com/JdgaleTorre/Movinder",
        year: "2023",
        teamSize: "4 developers",
        duration: "6 months",
        role: "Full Stack Developer & ML Engineer",
        status: "Live",
        features: [
            "Neural network-based recommendations",
            "Collaborative filtering",
            "Content-based filtering",
            "User review system",
            "Watchlist management",
            "Similar movies discovery",
            "Advanced search",
            "TMDB API integration",
        ],
        technicalDetails: [
            {
                title: "Machine Learning",
                description:
                    "Hybrid recommendation system trained on 10M+ ratings achieving 85% accuracy.",
            },
            {
                title: "Data Pipeline",
                description:
                    "ETL pipeline for ingesting and cleaning movie metadata with caching strategies.",
            },
            {
                title: "Scalable Backend",
                description:
                    "Django REST API with Celery for asynchronous recommendation tasks.",
            },
            {
                title: "Frontend Experience",
                description:
                    "Responsive React UI with animations and skeleton loading states.",
            },
        ],
        results: [
            { icon: "🎯", value: "85%", label: "Accuracy Rate" },
            { icon: "⭐", value: "4.8/5", label: "User Rating" },
            { icon: "🎬", value: "100k+", label: "Movies Cataloged" },
        ],
        techStack: {
            frontend: ["React", "Redux", "TypeScript", "SCSS"],
            backend: ["Python", "Django", "Celery", "TensorFlow"],
            database: ["MongoDB", "Redis"],
            cloud: ["Google Cloud Run", "Cloud Storage"],
            tools: ["Docker", "GitHub Actions", "Jupyter"],
        },
        contributions: [
            "Designed and trained neural network",
            "Built Django REST API",
            "Implemented authentication and profiles",
            "Created React UI",
            "Database optimization",
        ],
    },

    {
        id: "pokedex",
        title: "Pokedex",
        description:
            "Pokédex is a fan-made Pokémon encyclopedia built with Next.js and TypeScript.",
        fullDescription:
            "Full interactive Pokémon encyclopedia with advanced filtering, evolution chains, and comparisons.",
        challenge:
            "Efficiently handling large datasets from PokéAPI while maintaining fast performance.",
        image: "/images/pokedex.jpg",
        tags: ["React", "RESTful APIs", "Tailwind CSS", "TypeScript"],
        category: "Frontend",
        liveUrl: "https://pokedex.josegale.com",
        codeUrl: "https://github.com/JdgaleTorre/Pokedex",
        year: "2023",
        teamSize: "Solo project",
        duration: "3 months",
        role: "Full Stack Developer",
        status: "Live",
        features: [
            "Browse all Pokémon with pagination",
            "Advanced search & filtering",
            "Detailed stats and information",
            "Evolution chain visualization",
            "Comparison mode",
            "Favorites system",
            "Type effectiveness calculator",
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
                title: "State Management",
                description:
                    "Context API with persistent user favorites.",
            },
            {
                title: "UI/UX Design",
                description:
                    "Clean Tailwind UI with animations and type-based color schemes.",
            },
        ],
        results: [
            { icon: "⚡", value: "90+", label: "Performance Score" },
            { icon: "🎮", value: "1000+", label: "Pokémon Listed" },
            { icon: "📱", value: "100%", label: "Mobile Responsive" },
        ],
        techStack: {
            frontend: ["React", "TypeScript", "Tailwind CSS", "React Query"],
            backend: ["PokéAPI (External)"],
            tools: ["Vite", "ESLint", "Prettier"],
        },
        contributions: [
            "Designed full UI",
            "Integrated PokéAPI",
            "Built comparison & filtering",
            "Mobile-first optimizations",
        ],
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
        year: "2022",
        teamSize: "Solo project",
        duration: "1 month",
        role: "Frontend Developer",
        status: "Live",
        features: [
            "3 difficulty levels",
            "Smooth 3D card flips",
            "Timer & score system",
            "High score tracking",
            "Sound effects",
            "Responsive grid",
            "Keyboard support",
            "Reset options",
        ],
        technicalDetails: [
            {
                title: "Game Logic",
                description:
                    "Efficient card shuffling algorithm with a custom game state machine.",
            },
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
            {
                title: "Accessibility",
                description:
                    "Keyboard navigation and ARIA support.",
            },
        ],
        results: [
            { icon: "🎮", value: "15k+", label: "Games Played" },
            { icon: "⭐", value: "4.7/5", label: "User Rating" },
            { icon: "🏆", value: "3", label: "Difficulty Levels" },
        ],
        techStack: {
            frontend: ["JavaScript", "HTML5", "CSS3"],
            tools: ["Webpack", "Babel"],
        },
        contributions: [
            "Designed game logic",
            "Built animations",
            "Implemented scoring system",
            "Accessibility improvements",
        ],
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
        year: "2021",
        teamSize: "Solo project",
        duration: "1 month",
        role: "Frontend Developer",
        status: "Live",
        features: [
            "Interactive grid",
            "Classic Game of Life patterns",
            "Speed controls",
            "Grid customization",
            "Generation counter",
            "Random/grid drawing",
            "Import/export patterns",
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
            {
                title: "Web Workers",
                description:
                    "Parallel processing of generation updates.",
            },
            {
                title: "Pattern Library",
                description:
                    "JSON-based format with preview system.",
            },
        ],
        results: [
            { icon: "⚡", value: "60 FPS", label: "Performance" },
            { icon: "🔢", value: "100x100", label: "Grid Size" },
            { icon: "🎨", value: "20+", label: "Patterns" },
        ],
        techStack: {
            frontend: ["JavaScript", "HTML5 Canvas", "CSS3"],
            tools: ["Webpack", "Web Workers"],
        },
        contributions: [
            "Implemented algorithm & rendering",
            "Built pattern library",
            "Added real-time controls",
            "Web worker optimization",
        ],
    },

    {
        id: "pomodoro",
        title: "Pomodoro Timer",
        description:
            "A minimalist PWA Pomodoro Timer built with Next.js.",
        fullDescription:
            "Modern Pomodoro app with offline support, customizable intervals, and analytics.",
        challenge:
            "Building an offline-first PWA with accurate timers and background sync.",
        image: "/images/pomodoro.jpg",
        tags: ["React", "PWA", "Tailwind CSS"],
        category: "Frontend",
        liveUrl: "https://pomodoro-timer-lac.vercel.app/",
        codeUrl: "https://github.com/JdgaleTorre/PomodoroTimer",
        year: "2022",
        teamSize: "Solo project",
        duration: "2 months",
        role: "Frontend Developer",
        status: "Live",
        features: [
            "Custom intervals",
            "Notifications",
            "Focus session analytics",
            "Offline support",
            "Background timer",
            "Clean UI",
            "Sound alerts",
        ],
        technicalDetails: [
            {
                title: "PWA",
                description:
                    "Service worker caching and offline asset support.",
            },
            {
                title: "Timer Accuracy",
                description:
                    "Web Workers for background time tracking.",
            },
            {
                title: "Data Persistence",
                description:
                    "IndexedDB storage with background sync.",
            },
            {
                title: "Analytics",
                description:
                    "Recharts-based productivity visualizations.",
            },
        ],
        results: [
            { icon: "⏱️", value: "10k+", label: "Sessions Completed" },
            { icon: "📊", value: "5k+", label: "Active Users" },
            { icon: "💯", value: "100%", label: "Offline Support" },
        ],
        techStack: {
            frontend: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
            tools: ["Vite", "Workbox", "Web Workers", "IndexedDB"],
        },
        contributions: [
            "Built full application",
            "Implemented PWA features",
            "Created analytics dashboard",
            "Implemented notifications",
        ],
    },
];
