import "./Home.css";
import { saveAs } from 'file-saver';
import pdfFile from '../../assets/Curriculum_Pablo.pdf';


function Home() {

	function downloadPDF() {
  const pdfName = 'Curriculum_Pablo.pdf';
  
  fetch(pdfFile)
    .then(response => response.blob())
    .then(blob => {
      saveAs(blob, pdfName);
    });
}
	return (
		<section className="home">
			<h2 className="home__title">Bem vindo(a)s! </h2>
			<h2 className="home__sub__title"> SOU PABLO BRAGA </h2>
			<p className="home__text"> Desenvolvedor JavaScript </p>
			<div className="home__section">
				<a href="projects">
					<button className="home__button">Ver Projetos</button>
				</a>
				<button className="home__button" onClick={downloadPDF}>Baixar curriculum</button>
			</div>
		</section>
	);
}

export { Home };
