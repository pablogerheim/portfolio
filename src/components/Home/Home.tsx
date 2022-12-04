import "./Home.css";
function Home() {
	return (
    <section className="home">
      <h2 className="home__title">Bem vindos! </h2>
      <h2 className="home__sub__title"> SOU PABLO BRAGA </h2>
      <p className="home__text"> Desenvolvedor JavaScript </p>
      <div className="home__section">
        <button className="home__button">Ver Projetos</button>
        <button className="home__button">Baixar curriculum</button>
      </div>
    </section>
  );
}

export { Home };
