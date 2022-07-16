import React from "react";
import { Search } from "../pages/search";
import { Details } from "../pages/detail";

interface Routes {
    name:string;
    path:string;
    element: React.FC;
    exact:boolean;
}

const routes : Routes[] = [
 
    {
     name:'Search',
     path:'/',
     element:Search,
     exact:true   
    },
    {
        name:'Detail',
        path:'gif/:name/:gif',
        element:Details,
        exact:true   
       }
    
]

export default routes;