import "./Home.css";
function Home() {
	return (
		<section className="home">
			<h2 className="home__title">Bem vindo(a)s! </h2>
			<h2 className="home__sub__title"> SOU PABLO BRAGA </h2>
			<p className="home__text"> Desenvolvedor JavaScript </p>
			<div className="home__section">
				<a href="projects">
					<button className="home__button">Ver Projetos</button>
				</a>
				{/* <button className="home__button">Baixar curriculum</button> */}
			</div>
		</section>
	);
}

export { Home };
