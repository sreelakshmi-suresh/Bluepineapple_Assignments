import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import Person1 from "../Person1";
import Person2 from "../Person2";

export const SidenavData =[
    {
        title:"Home",
        link:"/",
        comp:<Home/>,
    },
    {
        title:"Cars",
        link:"/person1",
        comp: <Person1/>,
    },
    {
        title:"Images",
        link:"/person2",
        comp:<Person2/>,
    },
    {
        title:"Contact",
        link:"/contact"
    }
]