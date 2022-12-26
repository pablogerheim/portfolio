import "./Services.css";
import s1 from "../../img/services/s1.png"
import s3 from "../../img/services/s3.png";
function Services() {
	return (
		<section className="services">
			<div className="services__banner">
				<h2 className="services__title">SERVIÇOS</h2>
			</div>
				<h2 className="service__content__title">SERVIÇOS OFERECIDOS</h2>
			<div className="services__content">
				<div className="services__card">
					<img src={s1} />
					<h3 className="service__content__subtitle">Desenvolvimento Font-end</h3>
					<p>Designes responsivos em React.js.</p>
				</div>
				<div className="services__card">
					<img src={s3} />
					<h3 className="service__content__subtitle">Desenvolvimento Back-end</h3>
					<p>Back end em Node.js e Express.</p>
				</div>
			</div>
		</section>
	);
}
export { Services };
