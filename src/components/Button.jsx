import React from 'react';
import { Content } from '../assets/styles/ButtonStyle';

export default function Button(props) {
  const buttonName = props.buttonName;
  return (
    <Content> 
        {buttonName}
    </Content>
  )
}
