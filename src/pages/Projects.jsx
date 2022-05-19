import React from 'react';
import { Container } from '../assets/styles/ProjectsStyle';
import Project from '../components/Project';
import {motion} from 'framer-motion';

export default function Projects() {

  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity: 0}}> 
      <Container>
        <h1>Projects</h1>
        
        <Project
          title="What's on cinemas?" 
          projectInfo="A React aplication consuming TMDB API showing movies and its informations playing on cinemas right now. This project used the Styled Components and the React Router DOM libraries."
          buttonName = 'GitHub Repository'
          imgLink = 'https://user-images.githubusercontent.com/25774210/160446288-8ac8a19b-8b61-44b9-82bf-e75250f96666.png'
          repLink = 'https://github.com/andressagabrielle21/now-playing-movies'
        />

        <Project
          title="URL Shortify" 
          projectInfo="This project was developed with Python, Django Framework, JavaScript, HTML and CSS (SCSS/SASS). And the application was deployed on Heroku."
          buttonName = 'GitHub Repository'
          imgLink = 'https://user-images.githubusercontent.com/25774210/160290228-dc6ba95e-e9c4-455e-bb76-dd986ebe268f.png'
          repLink = 'https://github.com/andressagabrielle21/shortify-urls'
        />

        <Project
          title="Arnaldo's Client List" 
          projectInfo="A CRUD App developed with React, Firebase/Firestore and Styled Components."
          buttonName = 'GitHub Repository'
          imgLink = 'https://user-images.githubusercontent.com/25774210/163079801-7378fc40-80e4-43a7-bb0a-184b24077ed2.png'
          repLink = 'https://github.com/andressagabrielle21/arnaldos-contact-list'
        />

        <Project
          title="Genius Game" 
          projectInfo="Test your memory with this classic game. Project developed with HTML, CSS, JavaScript and jQuery."
          buttonName = 'GitHub Repository'
          imgLink = 'https://user-images.githubusercontent.com/25774210/168482166-d92ea52f-2930-4d5b-8a91-cfa9b5eef2bf.png'
          repLink = 'https://github.com/andressagabrielle21/genius-game'
        />
        
    </Container>

    </motion.div>
    
  )
}