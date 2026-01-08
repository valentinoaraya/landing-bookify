import { useEffect, useState } from "react";
import "./NavBar.css"
import { MenuIcon } from "../../common/Icons/Icons";

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
                    className={scrolled ? "titleNavBar scrolled" : "titleNavBar"}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Bookify
                </h1>
                {
                    window.innerWidth >= 0 ?
                        <ul className="ulNavBar">
                            <li className={scrolled ? "liNavBar scrolled" : "liNavBar"} onClick={() => handleScrollToSection("benefits")}>Beneficios</li>
                            <li className={scrolled ? "liNavBar scrolled" : "liNavBar"} onClick={() => handleScrollToSection("forEveryone")}>Ventajas</li>
                            <li className={scrolled ? "liNavBar scrolled" : "liNavBar"} onClick={() => handleScrollToSection("price")}>Precio</li>
                            <li className={scrolled ? "liNavBar scrolled" : "liNavBar"} onClick={() => handleScrollToSection("support")}>Soporte</li>
                        </ul>
                        :
                        <div>
                            <MenuIcon
                                width="35px"
                                height="35px"
                                fill="white"
                            />
                        </div>
                    }
            </div>
        </nav>
    );
}

export default NavBar;
