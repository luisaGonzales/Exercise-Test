import React, {Component} from 'react';
import {change} from '../Actions/actions';


const Render = ({type, name, title, code, success}) => {
    return (
        <div className={
            type == 8 ? "border" : "minborder"
          }>
      
            <button onClick={() => change()}>Generar</button> 
            <h1>{name}</h1>
            <h2>{title}</h2>
            <p>{code}</p>
          {success && 
            <h1>Mensaje enviado</h1>
          }

          </div>
    ); 
}

export default Render;