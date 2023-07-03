import React from 'react';
import "./home.css";
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';

export const Home = () => {
    return (
        <div>
            <div className="jumbotron">
                <ItemListContainer saludo={"Bienvenido a Nébula"}/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, error suscipit expedita quod eius aperiam nisi neque, placeat distinctio temporibus debitis id nemo. Possimus fugit beatae ex, inventore ipsa dicta? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, error suscipit expedita quod eius aperiam nisi neque, placeat distinctio temporibus debitis id nemo. Possimus fugit beatae ex, inventore ipsa dicta?</p>
                <hr className="my-4"/>
                <p>bla bla bla bla bla bla </p>
                <a className="btn btn-primary btn-Ig" href="#" role="button">Learn more</a>
            </div>
        </div>
    )}    


    8.31