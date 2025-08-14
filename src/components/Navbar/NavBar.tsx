import { useEffect, useState } from "react";
import "./NavBar.css"
import { MenuIcon, CloseIcon } from "../../common/Icons/Icons";

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

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
                    window.innerWidth >= 700 ?
                        <ul className="ulNavBar">
                            <li className={scrolled ? "liNavBar scrolled" : "liNavBar"} onClick={() => handleScrollToSection("benefits")}>Beneficios</li>
                            <li className={scrolled ? "liNavBar scrolled" : "liNavBar"} onClick={() => handleScrollToSection("howItWorks")}>Cómo funciona</li>
                            <li className={scrolled ? "liNavBar scrolled" : "liNavBar"} onClick={() => handleScrollToSection("price")}>Precio</li>
                        </ul>
                        :
                        <div
                            className="divIconContainer"
                            onClick={() => setIsOpen(true)}
                        >
                            <MenuIcon
                                width="35px"
                                height="35px"
                                fill="white"
                            />
                        </div>
                }
            </div>
            {
                window.innerWidth <= 700 &&
                <div className={`sideBar ${isOpen ? "open" : ""}`}>
                    <div
                        className="divIconContainer closeButton"
                        onClick={() => setIsOpen(false)}
                    >
                        <CloseIcon
                            width="35px"
                            height="35px"
                            fill="white"
                        />
                    </div>
                    <ul className="ulSideBar">
                        <li className="liSideBar" onClick={() => {
                            handleScrollToSection("benefits")
                            setIsOpen(false)
                        }}>Beneficios</li>
                        <li className="liSideBar" onClick={() => {
                            handleScrollToSection("howItWorks")
                            setIsOpen(false)
                        }}>Cómo funciona</li>
                        <li className="liSideBar" onClick={() => {
                            handleScrollToSection("price")
                            setIsOpen(false)
                        }}>Precio</li>
                    </ul>
                </div>
            }
        </nav>
    );
}

export default NavBar;
