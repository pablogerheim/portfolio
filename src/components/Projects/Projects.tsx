import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
function Projects() {
	return (
		<section className="projects">
			<div className="projects__banner">
				<h2 className="projects__title">PROJETOS</h2>
			</div>
			<h2 className="projects__content__title">PROJETOS DESENVOLVIDOS</h2>
			<p className="warning"> Projetos com back-end ainda não estão online. </p>
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
				<div className="projects__card">
					<img
						src="./src/img/projects/pokedex.png"
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Pokedex</h3>
					<p>Projeto para procura de pokemons.</p>
					<p>Feito com React.js.</p>
					<div className="projects__card__links">
						<a href="https://github.com/pablogerheim/pokedex" target="_blank">
							<AiFillGithub className="projects__card__icon" />
						</a>
						<a
							href="https://pokedex-o65a3tnni-pablogerheim.vercel.app/"
							target="_blank"
						>
							<img
								src="./src/img/icons/vercel.png"
								className="projects__card__vercel"
							/>
						</a>
					</div>
				</div>
				<div className="projects__card">
					<img
						src="./src/img/projects/workShop.png"
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Work Shop</h3>
					<p>
						Projeto para exibição de produtos e captação de potenciais clientes.
					</p>
					<p>Feito com React.js & Node.js.</p>
					<div className="projects__card__links">
						<a href="https://github.com/pablogerheim/work-shop" target="_blank">
							<AiFillGithub className="projects__card__icon" />
						</a>
						<img
							src="./src/img/icons/vercel.png"
							className="projects__card__vercelF"
						/>
					</div>
				</div>
				<div className="projects__card">
					<img
						src="./src/img/projects/marketSplit.png"
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Market Split</h3>
					<p>
						Projeto para ajudar na divisão de valores de uma compra em grupo.
					</p>
					<p>Feito com React.js & Nedo.js.</p>
					<div className="projects__card__links">
						<a
							href="https://github.com/pablogerheim/market-split"
							target="_blank"
						>
							<AiFillGithub className="projects__card__icon" />
						</a>
						<img
							src="./src/img/icons/vercel.png"
							className="projects__card__vercelF"
						/>
					</div>
				</div>
				<div className="projects__card">
					<img
						src="./src/img/projects/loja.png"
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Loja Next</h3>
					<p>
						Projeto - Curso pós-MBA - objetivo deste projeto é a estudo de next
						renderização SSG/SSR/ISR.
					</p>
					<p>Feito com Next.js.</p>
					<div className="projects__card__links">
						<a href="https://github.com/pablogerheim/loja" target="_blank">
							<AiFillGithub className="projects__card__icon" />
						</a>
						<a href="https://loja-puce.vercel.app/" target="_blank">
							<img
								src="./src/img/icons/vercel.png"
								className="projects__card__vercel"
							/>
						</a>
					</div>
				</div>
				<div className="projects__card">
					<img
						src="./src/img/projects/coreLab.png"
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Core Lab Test</h3>
					<p>
						Projeto de processo seletivo, crud, filtro e favoritar um produto.
					</p>
					<p>Feito com React.js & Nedo.js.</p>
					<div className="projects__card__links">
						<a
							href="https://github.com/pablogerheim/core-lab-pablo"
							target="_blank"
						>
							<AiFillGithub className="projects__card__icon" />
						</a>
						<img
							src="./src/img/icons/vercel.png"
							className="projects__card__vercelF"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
export { Projects };
