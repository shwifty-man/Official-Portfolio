
import spaceMan from '../assets/astronaut_floating.svg'

function Hero({ targetElement }) {
  return (
    <>
      <div className="content">
        <h1 id="Name">Timothy Williams</h1>
        <h2>Full-Stack Engineer</h2>
        <p>Passionate about building responsive, efficient, and user-friendly web applications.</p>
        <div className="button-container">
          <button onClick={() => { targetElement.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }); }} className="buttons work-button">View my work</button>
          <a href="/Timothy_Williams_Full-Stack_Engineer_Resume.pdf" target='_blank'>
            <button className="buttons resume-button">Resume</button>
          </a>
        </div>
      </div>

      <img className='space-man-svg' src={spaceMan} alt="space man" />


      <div id="skills-scroll"></div>
    </>
  );
}

export default Hero;
