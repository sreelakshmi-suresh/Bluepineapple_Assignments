import React, { Component } from "react";
import "./App.css";
import { Routes,Route,Link } from "react-router-dom";
import { SidenavData } from "./SidenavMenu";
import Person1 from "../Person1";
import Home from "../Home";
import Person2 from "../Person2";


function SideNav(){
    return(
        <div className="SideNav">
            <ul className="SidenavMenu">
                {SidenavData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="Row"
                            >
                            {" "}
                            <div>
                            <div><Link to={`${val.link}`}>{val.title}</Link></div>
                            </div>
                            <div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideNav;