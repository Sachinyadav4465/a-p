import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/PageHeaderContent';
import { skillsData } from './utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate'; // Assuming you are using 'react-simple-animate' for animation
import { Line } from 'rc-progress'; // Assuming you are using 'rc-progress' for progress bar
import './styles.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-Content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: 'translateX(-200px)'
              }}
              end={{
                transform: 'translateX(0px)'
              }}
            >
              <h3 className="skills__content-wrapper__inner-Content__category-text">{item.label}</h3>
              <div className="skills__content-wrapper__inner-Content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="1"
                    key={j}
                  >
                    <div className="progressbar-wrapper">
                      <p>{skillItem.skillsName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
