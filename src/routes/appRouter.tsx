import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import routes from "./routes";


const AppRouter : React.FC  = () =>{

    return (
        <Router>
        <Routes>
            {
                routes.map((routes , i) => (
                   <Route path={routes.path}
                        element={<routes.element />}
                        key={i}
                   /> 
                ))
            }
         </Routes>
         </Router>
    )
}

export default AppRouter ;

