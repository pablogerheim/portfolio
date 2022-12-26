import { useState } from "react";
import "./About.css";
import doctum from "../../img/icons/doctum.png";
import xpe from "../../img/icons/xpe.png";
import reactNode from "../../img/icons/reactNode.png";


function About() {
	const [activeExperice, setActiveExperice] = useState(3);
	return (
		<section className="about">
			<div className="about__banner">
				<h2 className="about__title">MINHAS EXPERIÊNCIAS</h2>
			</div>
			<div className="about__brands">
				<div
					className={`about__img__arcelor img ${
						activeExperice == 0 && "active"
					}`}
				>
					<button
						className="about__brands__button"
						onClick={() => setActiveExperice(0)}
					></button>
				</div>
				<div
					className={`about__img__montana img ${
						activeExperice == 1 && "active"
					}`}
				>
					<button
						className="about__brands__button"
						onClick={() => setActiveExperice(1)}
					></button>
				</div>
				<div
					className={`about__img__copy img ${activeExperice == 2 && "active"}`}
				>
					<button
						className="about__brands__button"
						onClick={() => setActiveExperice(2)}
					></button>
				</div>
				<div
					className={`about__img__Freela imgfreela ${
						activeExperice == 3 && "active"
					}`}
				>
					<button
						className="about__brands__button"
						onClick={() => setActiveExperice(3)}
					></button>
				</div>
			</div>
			<div className={`about__description `}>
				<div className={`about__bg__freela ${activeExperice != 3 && "none"}`}>
					<h3
						className={`about__description__title ${
							activeExperice != 3 && "none"
						}`}
					>
						Luan MarcktPlace
					</h3>
					<p
						className={`about__description__data ${
							activeExperice != 3 && "none"
						}`}
					>
						07/2022 - Juiz de Fora – MG
					</p>
					<p
						className={`about__description__text ${
							activeExperice != 3 && "none"
						}`}
					>
						Site de apresentação do curço lattering na pratica, utilizado para
						trafego pago.
					</p>
					<p
						className={`about__description__text ${
							activeExperice != 3 && "none"
						}`}
					>
						Design responsivo, configuração do pixel facebook e google
						analitycs.
					</p>
				</div>
				<div className={`about__bg__copy ${activeExperice != 2 && "none"}`}>
					<h3
						className={`about__description__title ${
							activeExperice != 2 && "none"
						}`}
					>
						Copygraph Digital
					</h3>
					<p
						className={`about__description__data ${
							activeExperice != 2 && "none"
						}`}
					>
						05/2021 – 07/2022 - Juiz de Fora – MG
					</p>
					<p
						className={`about__description__text ${
							activeExperice != 2 && "none"
						}`}
					>
						Resolver problemas com relação ao novo ERP em implantação, ensinar
						os colaboradores a utilizar a ferramenta e entrar em contato com
						suporte para reportar erros.
					</p>
					<p
						className={`about__description__text ${
							activeExperice != 2 && "none"
						}`}
					>
						Acesso remoto para configuração de sistema Doc utilizado pela
						empresa para monitorar os contadores das impressoras.
					</p>
					<p
						className={`about__description__text ${
							activeExperice != 2 && "none"
						}`}
					>
						Geração e avaliação de relatórios para controle das maquinas em
						locação principalmente relacionado ao Doc. Atuei no monitoramento do
						plano de internet e realizei cadastro de grandes volumes de dados
						através de macros.
					</p>
				</div>
				<div className={`about__bg__montana ${activeExperice != 1 && "none"}`}>
					<h3
						className={`about__description__title ${
							activeExperice != 1 && "none"
						}`}
					>
						Montana Pizzaria
					</h3>
					<p
						className={`about__description__data ${
							activeExperice != 1 && "none"
						}`}
					>
						01/2020 – 05/2022 - Juiz de Fora – MG
					</p>
					<p
						className={`about__description__text ${
							activeExperice != 1 && "none"
						}`}
					>
						Controle de inventario e fluxo de caixa.
					</p>
					<p
						className={`about__description__text ${
							activeExperice != 1 && "none"
						}`}
					>
						Atuei também na linha de produção.
					</p>
				</div>
				<div className={`about__bg__arcelor ${activeExperice != 0 && "none"}`}>
					<h3
						className={`about__description__title ${
							activeExperice != 0 && "none"
						}`}
					>
						ArcelorMittal
					</h3>
					<p
						className={`about__description__data ${
							activeExperice != 0 && "none"
						}`}
					>
						01/2019 – 01/2020 - Juiz de Fora – MG
					</p>
					<p
						className={`about__description__text ${
							activeExperice != 0 && "none"
						}`}
					>
						Produção e análise de relatórios de acompanhamento da expedição de
						produtos de trefilaria.
					</p>
					<p
						className={`about__description__text ${
							activeExperice != 0 && "none"
						}`}
					>
						Criação de automações em VBA.
					</p>
					<p
						className={`about__description__text ${
							activeExperice != 0 && "none"
						}`}
					>
						Participação em projetos de Melhoria Contínua.
					</p>
					<p
						className={`about__description__text ${
							activeExperice != 0 && "none"
						}`}
					>
						Desenvolvimento de relatórios em Power BI.
					</p>
				</div>
			</div>
			<div className="about__objetivo">
				<h2 className="about__objetivo__title ">OBJETIVO</h2>
				<p className="about__objetivo__text ">
					Atuar na área de desenvolvimento com React.js, Node.js e derivados.
				</p>
				<img
					className="about__objetivo__img"
					src={reactNode}
					alt="icones React e Node.js"
				/>
			</div>
			<div className="about__formacao ">
				<h2 className="about__formacao__title">FORMAÇÃO</h2>
				<div className="about__formacao__div">
					<p className="about__formacao__text">
						Pós graduado em Desenvolvimento Full Stack
					</p>
					<p className="about__formacao__text">XPE – 01/2022 - 12/2022</p>
					<img src={xpe} className="about__formacao__xpe" />
				</div>
				<div className="about__formacao__div">
					<p className="about__formacao__text">
						Graduado em Engenharia de Produção
					</p>
					<p className="about__formacao__text">
						Doctum - JF - MG, 01/2016 - 10/2020
					</p>
					<img src={doctum} className="about__formacao__doctum" />
				</div>
			</div>
		</section>
	);
}
export { About };
