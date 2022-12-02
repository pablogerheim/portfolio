import "./Home.css";
function Home() {
	return (
		<section className="home">
            <h1 className="home__title">Bem vindos ao portfolio.</h1>
			<div className="home__section">
				<button>Baixar curriculum</button>
				<button>Ver Projetos</button>
			</div>
		</section>
	);
}

export { Home };
