import { useState } from "react";
import "./Header.css";
import { HiBars4, HiOutlineXMark } from "react-icons/hi2";

function Header() {
	const [navbar, setNavbar] = useState(true);

	return (
		<header className={navbar ? "headerClose" : "headerOpen"}>
			<div className="header__menu">
				<a href="home" className="header__slogan">
					<h1>PABLO</h1>
				</a>
				<button className="header__button" onClick={() => setNavbar(!navbar)}>
					{navbar ? (
						<HiBars4 className="header__icon" />
					) : (
						<HiOutlineXMark className="header__icon" />
					)}
				</button>
			</div>
			<nav className="header__navbar">
				<a href="home" className="header__links">
					INICIO
				</a>
				<a href="about" className="header__links">
					SOBRE
				</a>
				<a href="projects" className="header__links">
					PROJETOS
				</a>
				<a href="contact" className="header__links">
					CONTATO
				</a>
				<a href="services" className="header__links">
					SERVIÇOS
				</a>
			</nav>
		</header>
	);
}

export { Header };
