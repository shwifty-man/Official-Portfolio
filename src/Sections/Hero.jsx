import spaceMan from '../assets/astronaut_floating.svg'

function Hero() {
  return (
    <>
    <div className="hero-outer-container">
    <div className="content">
      <h1 id="Name">Timothy Williams</h1>
      <h2>Full-Stack Engineer</h2>
      <p>Passionate about building responsive, efficient, and user-friendly web applications.</p>
    </div>
    <div className="button-container">
      <button className="buttons work-button">View my work</button>
      <button className="buttons resume-button">Resume</button>
    </div>
    <img className='space-man-svg' src={spaceMan} alt="space man" />
    </div>
    </>
  );
}

export default Hero;
