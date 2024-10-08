import React from 'react'
import { BsInboxFill, BsInfoCircle } from 'react-icons/bs';
import PageHeaderContent from '../../components/PageHeaderContent';
import { Animate } from 'react-simple-animate'
import './styles.scss';
import { DiApple,DiAndroid } from 'react-icons/di'
import { FaDev,FaDatabase } from 'react-icons/fa';

const personalDetails = [
  {
    label: "Name:",
    value: "Anupama Singh Yadav",

  },
  {
    label: "Age:",
    value: "21",

  },
  {
    label: "Address",
    value: "Lucknow",

  },
  {
    label: "Email:",
    value: "Anupamay9919@gmail.com",

  },
  {
    label: "Contact No:",
    value: "+91-9919299506",

  },
];
const jobsummary='We are seeking a talented and versatile Web Developer to join our dynamic team. As a Web Developer, you will be responsible for designing, developing, and maintaining both front-end and back-end components of our web applications. You will work closely with our product and design teams to deliver high-quality, scalable, and efficient solutions.'

const About = () => {

  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircle size={40}/>}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
           <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform:'translateX(-900px)'
        }}
        end={{
          transform:'translateX(0px)'
        }}
        >
          <h3>Web Developer</h3>
          <p>{jobsummary}</p>
        </Animate>
        

      

          <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform:'translateX(500px)'
        }}
        end={{
          transform:'translateX(0px)'
        }}
        >
         <h3 className="personalInformationHeaderText">Personal Information</h3>
        <ul>
           {personalDetails.map((item, i) => (
  <li key={i}>
    <span className="title">{item.label}</span>
    <span className="value">{item.value}</span>
  </li>
))}
        </ul>
        </Animate>
        </div>
        <div className="about__content__servicesWrapper">
             <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform:'translateX(600px)'
        }}
        end={{
          transform:'translateX(0px)'
        }}
        >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
            <FaDev size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div>
            <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div>
            <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div>
            <DiApple size={60} color="var(--yellow-theme-main-color)"/>
          </div>
            </div>
            </Animate>
          </div>
          
        </div>
       
      
      
      </section>
  )
}
  
export default About;