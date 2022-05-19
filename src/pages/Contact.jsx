import React from 'react';
import { Content } from '../assets/styles/ContactStyle';
import ContactMe from '../assets/img/contact-me.png';
import Linkedin from '../assets/img/linkedin.png';
import Github from '../assets/img/github.png';
import Instagram from '../assets/img/instagram.png';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Content>
        <img src={ContactMe} alt="" />

        <div className="info">
          <h1>Let’s get in touch!</h1>

          <h3> <span>E-mail:</span> <a href="mailto:andressagss21@gmail.com">andressagss21@gmail.com</a> </h3>

          <h2>Check out my socials</h2>
          <div className="socials">
            <a href="https://www.linkedin.com/in/andressa-gabrielle-souza-611857138/"><img src={Linkedin} alt="LinkedIn icon" /></a>
            <a href="https://github.com/andressagabrielle21"><img src={Github} alt="Github icon" /></a>
            <a href="https://www.instagram.com/andressagabriele/"><img src={Instagram} alt="Instagram icon" /></a>
          </div>
        </div>
      </Content>
    </motion.div>
  )
}
