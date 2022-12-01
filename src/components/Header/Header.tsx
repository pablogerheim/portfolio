import { useState } from "react";
import "./Header.css";
import { HiBars4, HiOutlineXMark } from "react-icons/hi2";

function Header() {
	const [navbar, setNavbar] = useState(true);

	return (
		<header className={navbar ? "headerClose" : "headerOpen"}>
			<div className="header__menu">
				<h2 className="header__slogan">PABLO</h2>
				<button className="header__button" onClick={() => setNavbar(!navbar)}>
					{navbar ? (
						<HiBars4 className="header__icon" />
					) : (
						<HiOutlineXMark className="header__icon" />
					)}
				</button>
			</div>
			<nav className="header__navbar">
				<a className="header__links">INICIO</a>
				<a className="header__links">SOBRE</a>
				<a className="header__links">PROJETOS</a>
				<a className="header__links">CONTATO</a>
				<a className="header__links">SERVIÇOS</a>
			</nav>
		</header>
	);
}

export { Header };
