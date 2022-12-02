import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import "./Footer.css";
function Footer() {
	return (
		<footer className="footer">
			<h2 className="footer__slogan">PABLO</h2>
			<p className="footer__contact">Minhas redes</p>
			<div className="footer__div__icon">
				<a href="https://github.com/pablogerheim">
					<AiFillGithub className="footer__icon"/>
				</a>
				<a href="https://www.linkedin.com/in/pablogmvbraga/">
					<AiFillLinkedin  className="footer__icon"/>
				</a>
				<a href="contact">
					<AiOutlineMail  className="footer__icon"/>
				</a>
			</div>
		</footer>
	);
}

export { Footer };
