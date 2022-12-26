import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import "./Footer.css";
import vercel from "../../img/icons/vercel.png";
import ts from "../../img/icons/ts.png";
import vite from "../../img/icons/vite.png";
import react from "../../img/icons/react.png";
function Footer() {
	return (
		<footer className="footer">
			<h2 className="footer__slogan">PABLO</h2>
			<p className="footer__contact">Minhas redes</p>
			<div className="footer__div__icon">
				<a href="https://github.com/pablogerheim">
					<AiFillGithub className="footer__icon" />
				</a>
				<a href="https://www.linkedin.com/in/pablogmvbraga/">
					<AiFillLinkedin className="footer__icon" />
				</a>
				<a href="contact">
					<AiOutlineMail className="footer__icon" />
				</a>
			</div>
			<div className="footer__div__icon">
				<a>
					<img src={react} alt="react-icon" className="footer__icon__dev" />
				</a>
				<a>
				<img src={ts} className="footer__icon__dev" />
				</a>
				<a>
				<img src={vite} className="footer__icon__dev" />
				</a>
				<a>
				<img src={vercel} className="footer__icon__dev" />
				</a>
			</div>
		</footer>
	);
}

export { Footer };
