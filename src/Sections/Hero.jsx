
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
          <button onClick={() => window.open('https://docs.google.com/document/d/1ixyvqENs8VhKP-o2o6-DcmCeLRQKeH2Mk3h-c5fdEdE/edit?usp=sharing', '_blank')} className="buttons resume-button">
            Resume
          </button>
        </div>
      </div>

      <img className='space-man-svg' src={spaceMan} alt="space man" />


      <div id="skills-scroll"></div>
    </>
  );
}

export default Hero;
