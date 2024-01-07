import React from 'react'
import { Link } from 'react-router-dom';
import  arrow  from '../assets/icons/arrow.svg';

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>
      {text}
    </p>

    {btnText && <Link to={link} className='neo-brutalism-white neo-btn'>
      <p className='font-medium sm:text-xl'>{btnText}</p>
      <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
    </Link> }
  </div>
)

const renderContent = {
    1: (
        <InfoBox
        link="/about"
        text={<p>Hi! I'm <span className='font-semibold'>Sergio Martin</span>
        <br />
        <br />
        I'm trying to be a UI Designer & Developer, I'm from Spain,
        but I would like to work with people from everywhere!</p>}
    />
    ),
    2: (
        <InfoBox
            link="/about"
            text="I've worked in many companies, with experience in multiple areas and projects!"
            btnText="Learn more about me"
        />
    ),
    3: (
        <InfoBox
        link="/projects"
        text="Worked in different personal and proffesional projects, always looking for innovation!"
        btnText="Curious about what I do?"
    />
    ),
    4: (
        <InfoBox
        link="/contact"
        text="Need a project done? Looking for a dev? Want to drink a coffee?"
        btnText="Contact me!"
    />
    )
};

const HomeInfo = ({currentStage}) => {

  return renderContent[currentStage] || null;
}

export default HomeInfo