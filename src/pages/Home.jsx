import React from 'react'
import { Container } from '../assets/styles/HomeStyles'
import Profile from '../assets/img/profile.png';
import { motion } from 'framer-motion'
 
export default function Home() {
  return (
    <> 
        <Container>
            <motion.div className="Content" initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <div className="text">
                    <h2>Hello!</h2>

                    <h1>My name is <span>Andressa!</span> </h1>
                    <h1>I'm a <span>Frontend Developer.</span> </h1>
                </div>

                <img src={Profile} alt='shopping cart'/>
            </motion.div>
        </Container>
        
    </>
  )
}
