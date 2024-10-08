import React from 'react'
import { useNavigate } from 'react-router-dom';
import{Animate} from 'react-simple-animate'
import './styles.scss';
const Home = () => {
    const navigate = useNavigate();
  
  


    const handleNavigateToPage = (path) => {
    navigate(path);
  };



  
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Anupama  
          <br />
           Web Developer
        </h1>

      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform:'translateY(550px)'
        }}
        end={{
          transform:'translateX(0px)'
        }}
      >
      <div className="home__contact-me">
          <button onClick={() => handleNavigateToPage('/about')}>About me</button>
          <br />
          <button onClick={() => handleNavigateToPage('/skills')}>Skills</button>
          <br />
          <button onClick={() => handleNavigateToPage('/resume')}>Resume</button>
          <br />
          <button onClick={() => handleNavigateToPage('/contact')}>Hire me</button>
          <br />
          <button onClick={() => handleNavigateToPage('/portfolio')}>Portfolio</button>
        </div>
      </Animate>
      
      
      </section>
  )
}

export default Home;