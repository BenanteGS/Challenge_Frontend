import React from "react";
import { useHistory } from "react-router-dom";
import './styles.css';
import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo.png'

// Pagina login: ter como objetivo receber um "username" e "password" passa poder acessar a aplicação

function Login() {

        const history = useHistory(); // inicializa o useHistory

        const handleSubmit = (event) => {
            history.push('/list'); // redireciona para a nova página
        };

//Retorna um formulario de acesso que precisa receber "username" e "password" para conseguir conseguir acessar a pagina CharacterList (Lista de personagens)       
        return (        
                <div className="login-container" style={{ fundo }}> 
                    <img src={logo} alt="Marvel Logo" /> 
                        <section className="form">
                                <form onSubmit={handleSubmit}>
                                        <h1>Seja Bem Vindo!</h1>
                                        <input placeholder="Username" /><br />
                                        <input type="password" placeholder="Password" />
                                        <button className="button" type="submit">
                                            Acessar
                                        </button>
                                </form>
                        </section>
                </div>
        );
    
}

export default Login;
