import React from 'react';
import "./notFound.css";
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div>
            <div className="jumbotron">
                <h1>La página que estás buscando no existe</h1>
                <br/>
                <Link className="Button empty comprar" to="/">Ir a comprar</Link>
            </div>
        </div>
    )}    


