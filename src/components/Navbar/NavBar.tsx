import { useEffect, useState } from "react";
import "./NavBar.css"

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScolled = window.scrollY > 10;
            setScrolled(isScolled)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    })

    const handleScrollToSection = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav className="navBar">
            <div className={scrolled ? "navBarContainer scrolled" : "navBarContainer"}>
                <h1
                    className="titleNavBar"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Bookify
                </h1>
                <ul>
                    <li onClick={() => handleScrollToSection("benefits")}>Beneficios</li>
                    <li onClick={() => handleScrollToSection("howItWorks")}>Cómo funciona</li>
                    <li onClick={() => handleScrollToSection("price")}>Precio</li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
