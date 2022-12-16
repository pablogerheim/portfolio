import "./Projects.css";
function Projects() {
	return (
		<section className="projects">
			<div className="projects__banner">
				<h2 className="projects__title">PROJETOS</h2>
			</div>
			<h2 className="projects__content__title">PROJETOS DESENVOLVIDOS</h2>
			<div className="projects__content">
				<div className="projects__card">
					<img src="./src/img/services/s3.png" />
					<h3 className="projects__content__subtitle">
						Desenvolvimento Font-end
					</h3>
					<p>GitHub Search</p>
					<a
						href="https://github.com/pablogerheim/github-search"
						target="_blank"
					>
						Visitar Projeto
					</a>
					<a
						href="https://github.com/pablogerheim/github-search"
						target="_blank"
					>
						Visitar Projeto
					</a>
				</div>
				<div className="projects__card">
					<a href="https://www.google.com/" target="_blank">
						<img src="./src/img/services/s3.png" />
						<h3 className="projects__content__subtitle">
							Desenvolvimento Back-end
						</h3>
						<p>Back end em Node.js e Express.</p>
					</a>
				</div>
			</div>
		</section>
	);
}
export { Projects };
