import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Audi from "./audi";
import About from "./About";
import Bmw from "./bmw";
import Mercedes from "./mercedes";
import "./card.css";
function Cars(){
    return(
        <div className="wrapper">
        <Card
        img="./audir8.jpg"
        title= "Audi R8"
        desc="The Audi R8 is a mid-engine, 2-seater sports car,[2][3] which uses Audi's trademark quattro permanent all-wheel drive system.[2] It was introduced by the German car manufacturer Audi AG in 2006."
        link="/audi"
        />
        <Card
        img="./bmwi8.jpg"
        title= "BMW i8"
        desc="The BMW i8 was a plug-in hybrid sports car developed by BMW. The i8 was part of BMW's electrified fleet and was marketed under the BMW i sub-brand. The production version of the BMW i8 was unveiled at the 2013 Frankfurt Motor Show "
        link="/bmw"
        />

        <Card
        img="./mercedes.jpg"
        title= "Mercedes s-class"
        desc="`The Mercedes-Benz S-Class, formerly known as Sonderklasse (German for special class, abbreviated as S-Klasse), is a series of full-sized luxury sedans, limousines and armored sedans produced by the German automaker Mercedes-Benz"
        link="/mercedes"
        />
        </div>
    );

}

function Card(props){
    return (
        <div className="card">
            <div className="card_body">
                <img src={props.img} className="card_image"/>
                <h2 className="card_title">{props.title}</h2>
                <p className="card_description">{props.desc}</p>      
            <button className="card_btn"><Link to={props.link}>View Car Details</Link></button>
            </div>
        </div>
        
    );
}

export default Cars;