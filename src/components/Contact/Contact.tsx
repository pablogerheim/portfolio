import "./Contact.css";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import emailJS from "@emailjs/browser";
import InputMask from "react-input-mask";
import { SetStateAction, useState } from "react";

function PhoneInput(props: { value: any; onChange: any; }) {
	return (
		<InputMask
			mask="(99) 9 9999-9999"
			className="contact__input"
			maskChar=""
			placeholder="Enter Telephone"
			value={props.value}
			onChange={props.onChange}
		/>
	);
}


function Contact() {
	const [name, setName] = useState<string>("");
	const [subject, setSubject] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [telephone, setTelephone] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const onChange = (e: { target: { value: SetStateAction<string>; }; }) => {
		setTelephone(e.target.value);
	};

	const handleSubmit = () => {

		emailJS
			.send(
				"service_9hicblg",
				"template_w0yjwzj",
				{ name, subject, email, telephone, message },
				"CNgu74YR1IBCE6oLp"
			)
			.then((r: { status: any; text: any; }) => {
				console.log(r.status, r.text),
				setEmail(""),
				setSubject(""),
				setMessage(""),
				setName(""),
				setTelephone(""),
				alert("Mensagem enviada com sucesso."),
				(err: any) => {
					console.log(err);
					alert("Erro ao enviar mensagem.");
				}
			}
			);
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
					<p>Telephone celular para contato</p>
				</div>
			</div>
			<div className="contact__card">
				<AiOutlineMail className="contact__icon" />
				<div className="contact__card__text">
					<h3>pablogerheim@gmail.com</h3>
					<p>Email para contato</p>
				</div>
			</div>
			<div className="contact__form" >
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					className="contact__input"
					id="name"
					name="name"
					placeholder="Enter your name"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					className="contact__input"
					id="email"
					name="email"
					placeholder="Enter email address"
					required
				/>
				<input
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					type="text"
					className="contact__input"
					id="subject"
					name="subject"
					placeholder="Enter Subject"
				/>
				<PhoneInput value={telephone} onChange={onChange} />
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="contact__input"
					name="message"
					id="message"
					rows={4}
					placeholder="Enter Message"
				/>
				<div className="contact__position__button">
					<button type="button" onClick={() => handleSubmit()} className="contact__button">
						<span>ENVIAR MENSAGEM</span>
					</button>
				</div>
			</div>
		</section>
	);
}
export { Contact };
