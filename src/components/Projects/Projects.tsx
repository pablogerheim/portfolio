import "./Projects.css";
import vercel from "../../img/icons/vercel.png";
import pokedex from "../../img/projects/pokedex.png";
import controleGastos from "../../img/projects/controleGastos.png";
import coreLab from "../../img/projects/coreLab.png";
import cotacao from "../../img/projects/cotacao.png";
import criptos from "../../img/projects/criptos.png";
import elections from "../../img/projects/elections.png";
import fullForm from "../../img/projects/fullForm.png";
import github from "../../img/projects/github.png";
import lettering from "../../img/projects/lettering.png";
import loja from "../../img/projects/loja.png";
import makeBase from "../../img/projects/makeBase.png";
import marketSplit from "../../img/projects/marketSplit.png";
import msVue from "../../img/projects/msVue.png";
import node from "../../img/projects/node.js.svg.png";
import portfolio from "../../img/projects/portfolio.png";
import workShop from "../../img/projects/workShop.png";


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
						src={github}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">GitHub Search</h3>
					<p>Projeto para procura de usuarios no Git.</p>
					<p>Feito com JavaScript.</p>
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
								src={vercel}
								className="projects__card__vercel"
							/>
						</a>
					</div>
				</div>
				<div className="projects__card">
					<img src={pokedex} className="projects__card__img" />
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
							<img src={vercel} className="projects__card__vercel" />
						</a>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={workShop}
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
							src={vercel}
							className="projects__card__vercelF"
						/>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={marketSplit}
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
							src={vercel}
							className="projects__card__vercelF"
						/>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={loja}
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
								src={vercel}
								className="projects__card__vercel"
							/>
						</a>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={coreLab}
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
							src={vercel}
							className="projects__card__vercelF"
						/>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={portfolio}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Portfolio</h3>
					<p>
						Projeto para me apresentar, o qual esta sendo exibido agora, com
						isso foi desabilitado o botão Vercel.
					</p>
					<p>Feito com React.js.</p>
					<div className="projects__card__links">
						<a href="https://github.com/pablogerheim/portfolio" target="_blank">
							<AiFillGithub className="projects__card__icon" />
						</a>
						<img
							src={vercel}
							className="projects__card__vercelF"
						/>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={lettering}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Lettering</h3>
					<p>Projeto para venda do curso lettering no trafego pago.</p>
					<p>Feito com React.js.</p>
					<div className="projects__card__links">
						<a href="https://github.com/pablogerheim/lettering" target="_blank">
							<AiFillGithub className="projects__card__icon" />
						</a>
						<a href="https://lettering.vercel.app/" target="_blank">
							<img
								src={vercel}
								className="projects__card__vercel"
							/>
						</a>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={criptos}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Criptos</h3>
					<p>Projeto - curso pós-MBA - Apresenta moedas criptos existentes.</p>
					<p>Feito com Next.js.</p>
					<div className="projects__card__links">
						<a href="https://github.com/pablogerheim/criptos" target="_blank">
							<AiFillGithub className="projects__card__icon" />
						</a>
						<a href="https://criptos-nine.vercel.app/" target="_blank">
							<img
								src={vercel}
								className="projects__card__vercel"
							/>
						</a>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={elections}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Elections</h3>
					<p>
						Projeto - curso pós-MBA - Apresenta uma eleição de super herois
						conforme as informações passadas por um objeto.
					</p>
					<p>Feito com React.js.</p>
					<div className="projects__card__links">
						<a href="https://github.com/pablogerheim/elections" target="_blank">
							<AiFillGithub className="projects__card__icon" />
						</a>
						<a href="https://elections-delta.vercel.app/" target="_blank">
							<img
								src={vercel}
								className="projects__card__vercel"
							/>
						</a>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={makeBase}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Make up Base</h3>
					<p>
						Projeto - curso pós-MBA - Apresenta uma grande variedade de produtos
						de maquiagem e oferece filtros para procurá-los.
					</p>
					<p>Feito com JavaScrip.</p>
					<div className="projects__card__links">
						<a
							href="https://github.com/pablogerheim/make-up-base"
							target="_blank"
						>
							<AiFillGithub className="projects__card__icon" />
						</a>
						<a href="https://make-up-base-bice.vercel.app/" target="_blank">
							<img
								src={vercel}
								className="projects__card__vercel"
							/>
						</a>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={cotacao}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Cotação de Fundos</h3>
					<p>
						Projeto - curso pós-MBA - Apresentar uma série de investimentos e o
						percentual de valorização ou desvalorização com a variação de
						preços.
					</p>
					<p>Feito com React.js.</p>
					<div className="projects__card__links">
						<a
							href="https://github.com/pablogerheim/cotacoes-fundos"
							target="_blank"
						>
							<AiFillGithub className="projects__card__icon" />
						</a>
						<a href="https://cotacoes-fundos.vercel.app/" target="_blank">
							<img
								src={vercel}
								className="projects__card__vercel"
							/>
						</a>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={fullForm}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Full Form</h3>
					<p>
						Projeto tem como objetivo pratica, essa consiste em seguir um figma
						a risca.
					</p>
					<p>Feito com React.js.</p>
					<div className="projects__card__links">
						<a href="https://github.com/pablogerheim/full-form" target="_blank">
							<AiFillGithub className="projects__card__icon" />
						</a>
						<a href="https://full-form.vercel.app/" target="_blank">
							<img
								src={vercel}
								className="projects__card__vercel"
							/>
						</a>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={controleGastos}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Controle de Gastos</h3>
					<p>
						Projeto - curso pós-MBA - oferece uma forma de registrar gastos do
						dia a dia para que seja mais fácil controlá-los, visualiza-los e
						acompanhá-los.
					</p>
					<p>Feito com React.js e Node.js.</p>
					<div className="projects__card__links">
						<a
							href="https://github.com/pablogerheim/controle-de-gastos"
							target="_blank"
						>
							<AiFillGithub className="projects__card__icon" />
						</a>
						<img
							src={vercel}
							className="projects__card__vercelF"
						/>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={msVue}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">MS Vue</h3>
					<p>
						Este projeto apresente a primeira versão do aplicativo Market Split
						mas não oferece funcionalidades.
					</p>
					<p>Feito com Vue.js.</p>
					<div className="projects__card__links">
						<a href="https://github.com/pablogerheim/MS-Vue" target="_blank">
							<AiFillGithub className="projects__card__icon" />
						</a>
						<img
							src={vercel}
							className="projects__card__vercelF"
						/>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={node}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Pet Shop</h3>
					<p>
						Projeto - curso pós-MBA - Consiste em um back-end de um pet shop,
						oferece as rotas para cadastrar proprietários, animais, serviços e
						os relaciona.
					</p>
					<p>Feito com Node.js.</p>
					<div className="projects__card__links">
						<a href="https://github.com/pablogerheim/pet-shop" target="_blank">
							<AiFillGithub className="projects__card__icon" />
						</a>
						<img
							src={vercel}
							className="projects__card__vercelF"
						/>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={node}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Car Models</h3>
					<p>
						Projeto - curso pós-MBA - Primeiro projeto Node.js, oferece formas
						de se consultar um JSON com várias marcas de carro.
					</p>
					<p>Feito com Node.js.</p>
					<div className="projects__card__links">
						<a href="https://github.com/pablogerheim/car-list" target="_blank">
							<AiFillGithub className="projects__card__icon" />
						</a>
						<img
							src={vercel}
							className="projects__card__vercelF"
						/>
					</div>
				</div>
				<div className="projects__card">
					<img
						src={node}
						className="projects__card__img"
					/>
					<h3 className="projects__content__subtitle">Delivery</h3>
					<p>
						Projeto - curso pós-MBA - Oferece um sistema de delivery onde é
						possível realizar o crud de pedidos, verificar seu status e oferece
						um relatório básico.
					</p>
					<p>Feito com Node.js.</p>
					<div className="projects__card__links">
						<a href="https://github.com/pablogerheim/delivery" target="_blank">
							<AiFillGithub className="projects__card__icon" />
						</a>
						<img
							src={vercel}
							className="projects__card__vercelF"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
export { Projects };
