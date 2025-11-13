type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    section: string;
};

export default function HeroButton({
    children,
    className,
    section
}: ButtonProps) {
    return (
        <button
            onClick={() => {
                const element = document.getElementById(section);
                console.log(element);
                if (element) {
                    const offset = 80;
                    const elementPosition =
                        element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: elementPosition - offset,
                        behavior: "smooth",
                    });
                }
            }}
            className={`group cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center space-x-2 ${className}`}
        >
            {children}
        </button >
    );
}
