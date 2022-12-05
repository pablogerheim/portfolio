import "./About.css";
function About() {
	return (
		<section className="about">
			<div className="about__banner">
				<h2 className="about__title">MINHAS EXPERIÊNCIAS</h2>
			</div>
			<div className="about__brands">
				<div className="about__img__arcelor img"></div>
				<div className="about__img__montana img"></div>
				<div className="about__img__copy img"></div>
        <div className="about__img__Freela img">Freelance</div>
			</div>
			<div className="about__description">
        <h3 className="about__description__title none">Luan MarcktPlace </h3>
        <p className="about__description__data none">07/2022 - Juiz de Fora – MG</p>
        <p className="about__description__text none">
					- Site de apresentação do curço lattering na pratica, utilizado para trafego pago.
				</p>
        <p className="about__description__text none">
					- Design responsivo, configuração do pixel facebook e google analitycs.
				</p>
        <div className="">

				<h3 className="about__description__title ">Copygraph Digital </h3>
				<p className="about__description__data">05/2021 – 07/2022 - Juiz de Fora – MG</p>
				<p className="about__description__text">
					- Resolver problemas com relação ao novo ERP em implantação, ensinar
					os colaboradores a utilizar a ferramenta e entrar em contato com
					suporte para reportar erros.
				</p>
				<p className="about__description__text">
					- Acesso remoto para configuração de sistema Doc utilizado pela
					empresa para monitorar os contadores das impressoras.
				</p>
				<p className="about__description__text">
					- Geração e avaliação de relatórios para controle das maquinas em
					locação principalmente relacionado ao Doc. Atuei no monitoramento do
					plano de internet e realizei cadastro de grandes volumes de dados
					através de macros.
				</p>
        </div>
				<h3 className="about__description__title none">Montana Pizzaria </h3>
				<p className="about__description__data none">01/2020 – 05/2022 - Juiz de Fora – MG</p>
				<p className="about__description__text none">- Controle de inventario e fluxo de caixa.</p>
				<p className="about__description__text none">- Atuei também na linha de produção.</p>
				<h3 className="about__description__title none">ArcelorMittal </h3>
				<p className="about__description__data none">01/2019 – 01/2020 - Juiz de Fora – MG</p>
				<p className="about__description__text none">
					- Produção e análise de relatórios de acompanhamento da expedição de
					produtos de trefilaria.
				</p>
				<p className="about__description__text none">- Criação de automações em VBA.</p>
				<p className="about__description__text none">- Participação em projetos de Melhoria Contínua.</p>
				<p className="about__description__text none">- Desenvolvimento de relatórios em Power BI.</p>
			</div>
      <div className="about__objetivo ">
        <h2 className="about__objetivo__title ">OBJETIVO</h2>
        <p className="about__objetivo__text ">Atuar na área de desenvolvimento com React.js, Node.js e derivados.</p>
      </div>
      <div className="about__formacao ">
        <h2 className="about__formacao__title">FORMAÇÃO</h2>
        <p>Pós graduado em Desenvolvimento Full Stack</p>
        <p>IGTI – 01/2022 - 12/2022</p>
        <p>Graduado em Engenharia de Produção</p>
        <p> Doctum - JF - MG, 01/2016 - 10/2020</p>
      </div>
		</section>
	);
}
export { About };
