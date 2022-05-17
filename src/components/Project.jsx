import React from 'react'
import { Container } from '../assets/styles/ProjectStyle'
import Button from './Button'

export default function Project(props) {
    const title = props.title;
    const projectInfo = props.projectInfo;
    const buttonName = props.buttonName;
    const imgLink = props.imgLink;
    const repLink = props.repLink;

  return (
    <Container> 
        <div className="text">
            <h2>{title}</h2>

            <p>{projectInfo}</p>

            <a href={repLink}><Button buttonName={buttonName}/></a>
        </div>
        <div className="projectSnapshot">
            <img src={imgLink} alt="" />
        </div>
    </Container>  
    
  )
}
