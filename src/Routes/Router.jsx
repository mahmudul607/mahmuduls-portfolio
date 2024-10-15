import {
    createBrowserRouter,
    
  } from "react-router-dom";

import Portfolio from "../components/Portfolio/Portfolio";
import Main from "../Lyout/Main";
import New from "../components/New/New";
const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
        children:[
            {
                path: "/",
                element:<New></New>
            },
            {
                path:"/portfolio",
                element:<Portfolio></Portfolio>

            }
        ]

      
    },
  ]);



export default Router;