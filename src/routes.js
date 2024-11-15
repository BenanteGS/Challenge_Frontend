import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from "./pages/Login";
import CharacterList from "./pages/CharacterList";

//Responsavel pelas rotas da URL

function Routes(){
    return(
        <BrowserRouter >
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/list" component={CharacterList}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes