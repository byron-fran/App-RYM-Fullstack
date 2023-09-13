import {AboutInfo, AboutGrid,AboutParrafo,AboutTitulo, AboutContainer ,AboutImage} from '../layout/layout'
import '../layout/layout.css'
function About() {
  return (
    <AboutContainer>
    <AboutTitulo>Hola soy un Desarollador
    <section className="animation">
    <div className="first"><div>autodidacta</div></div>
    <div className="second"><div>movil</div></div>
    <div className="third"><div>web</div></div>
  </section>
     </AboutTitulo>
      <AboutInfo>
       <AboutGrid>
        <div>
            <AboutParrafo>Estoy aprendiendo día a día, todo lo relacionado con la programacion, tanto web, como móvil e incluso en un futuro el desarollo de videojuegos con unity y c#.
                Pero por ahora estoy mas centrado en el desarollo web y movil ya que son mis pasatiempos favoritos y en un futuro espero que sea mi trabajo.
            </AboutParrafo>
        </div>
        <div>
            < AboutImage src="image/byron.jpg" alt="image-autor"  />
        </div>
      </AboutGrid>
    </AboutInfo>
    </AboutContainer>

  );
}

export default About;
