import { useState } from "react"
import { ThemeToggle } from "./ThemeToggle"

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {/* Header */}
            <header className="fixed top-0 w-full bg-background dark:bg-background-dark shadow-md z-50 h-16">
                <nav className="max-w-6xl mx-auto flex justify-between items-center p-4 h-full">
                    <h1 className="text-xl font-bold text-primary dark:text-primary-dark">My Portfolio</h1>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <a href="#hero" className="hover:text-accent dark:hover:text-accent-dark dark:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-accent dark:hover:text-accent-dark dark:text-white">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-accent dark:hover:text-accent-dark dark:text-white">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-accent dark:hover:text-accent-dark dark:text-white">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className="flex items-center space-x-4">
                        <ThemeToggle />

                        <button onClick={toggleMenu} className="md:hidden flex flex-col space-y-1 p-2" aria-label="Toggle menu">
                            <span
                                className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                            ></span>
                        </button>
                    </div>
                </nav>
            </header>

            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleMenu}
            />

            <nav
                className={`fixed top-0 right-0 h-full w-80 bg-background dark:bg-background-dark shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full p-6 pt-20">
                    <ul className="flex flex-col space-y-8 text-lg font-medium">
                        <li>
                            <a
                                href="#hero"
                                className="block hover:text-accent dark:hover:text-accent-dark dark:text-white transition-colors"
                                onClick={toggleMenu}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="block hover:text-accent dark:hover:text-accent-dark dark:text-white transition-colors"
                                onClick={toggleMenu}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="block hover:text-accent dark:hover:text-accent-dark dark:text-white transition-colors"
                                onClick={toggleMenu}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="block hover:text-accent dark:hover:text-accent-dark dark:text-white transition-colors"
                                onClick={toggleMenu}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
