import React from 'react'
import { Container } from '../assets/styles/AboutStyle'
import Button from '../components/Button';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div>
        <Container>
            <div className="Content">
                <div className="aboutText">
                    <h2>My name is <span>Andressa Gabrielle!</span></h2>

                    <p>I’m a Frontend Developer from Brazil, focused on the solution of problems and in the best experience for the users.</p>

                    <p>I love working with Web Development, designing and developing accessible and user-friendly websites. My goal is to make the diffence with those projects.</p>

                    <Button className="btn" buttonName="Download Resumé"/>
                </div>

                <div className="skills">
                    <h2>My main <span>skills:</span> </h2>

                    <ul>
                        <li>HTML and CSS (SCSS/SASS)</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Styled Components</li>
                        <li>Python</li>
                        <li>Node.js</li>
                        <li>Git and GitHub</li>
                        <li>SCRUM and Agile Culture</li>
                        <li>Fundamentals of UX/UI Design</li>
                    </ul>
                </div>
            </div>
        </Container>
    </motion.div>
  )
}
