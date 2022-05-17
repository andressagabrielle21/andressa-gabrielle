import React from 'react'
import { Container, Links } from '../assets/styles/NavbarStyle';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <> 
        <Container>
            <div className="Content">
                <h2>Andressa Gabrielle</h2>

                <Links>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/Projects'>Projects</Link>
                    <Link to='/Contact'>Contact</Link>
                </Links>
            </div>
            
        </Container>
    </>
  )
}
