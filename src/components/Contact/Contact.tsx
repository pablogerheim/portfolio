import "./Contact.css";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
function Contact() {
	const handleSubmit = () => {
		event?.preventDefault();
	};
	return (
		<section className="contact">
			<div className="contact__banner">
				<h2 className="contact__title">CONTATO</h2>
			</div>
			<div className="contact__card">
				<AiOutlineHome className="contact__icon" />
				<div className="contact__card__text">
					<h3>Juiz de Fora - MG - Brasil</h3>
					<p>Residencia atual</p>
				</div>
			</div>
			<div className="contact__card">
				<BsTelephone className="contact__icon" />
				<div className="contact__card__text">
					<h3>55-32-99959-8800</h3>
					<p>Telefone celular para contato</p>
				</div>
			</div>
			<div className="contact__card">
				<AiOutlineMail className="contact__icon" />
				<div className="contact__card__text">
					<h3>pablogerheim@gmail.com</h3>
					<p>Email para contato</p>
				</div>
			</div>
			{/* <form className="contact__form" onSubmit={() => handleSubmit}>
				<input
					type="text"
					className="contact__input"
					id="name"
					name="name"
					placeholder="Enter your name"
				/>
				<input
					type="email"
					className="contact__input"
					id="email"
					name="email"
					placeholder="Enter email address"
				/>
				<input
					type="text"
					className="contact__input"
					id="subject"
					name="subject"
					placeholder="Enter Subject"
				/>
				<textarea
					className="contact__input"
					name="message"
					id="message"
					rows={4}
					placeholder="Enter Message"
				/>
				<div className="contact__position__button">
					<button type="submit" value="submit" className="contact__button">
						<span>ENVIAR MENSAGEM</span>
					</button>
				</div>
			</form> */}
		</section>
	);
}
export { Contact };
