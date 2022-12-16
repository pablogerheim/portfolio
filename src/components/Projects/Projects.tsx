import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
function Projects() {
	return (
		<section className="projects">
			<div className="projects__banner">
				<h2 className="projects__title">PROJETOS</h2>
			</div>
			<h2 className="projects__content__title">PROJETOS DESENVOLVIDOS</h2>
			<div className="projects__content">
				<div className="projects__card">
					<img
						src="./src/img/projects/github.png"
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">GitHub Search</h3>
					<p>Projeto para procura de usuarios no Git.</p>
					<p>Feito com JS.</p>
					<div className="projects__card__links">
						<a
							href="https://github.com/pablogerheim/github-search"
							target="_blank"
						>
							<AiFillGithub className="projects__card__icon" />
						</a>
						<a
							href="https://github-search-xi-eight.vercel.app/"
							target="_blank"
						>
							<img
								src="./src/img/icons/vercel.png"
								className="projects__card__vercel"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
export { Projects };
