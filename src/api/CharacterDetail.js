import React, { useState, useEffect } from "react"
import axios from "axios";

import logo from '../assets/logo.png'
import coracao from '../assets/coracao.png'
import './styles.css'



function CharacterDetail({childToParent}) {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    //Solicita od dados do componente filho (Api.js)
    useEffect(() => {        
        montaDetalhe(childToParent);
     }, []);

    function montaDetalhe(id){
        
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=0b7355aabdcdbff6191e1a4896e4d78c`)
        .then(response => {
            setUsers(response.data.data.results); 
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        })
    }
    
    //Retorna os dados do componente de detalhes do personagem (CharacterDetails.js)

    return (
        <div className='list-container'>
            <header>
                
                <img src={logo} alt="Marvel Logo" />
                
                    
            </header>
            
            <div className='dados-api' > 
                <div className="api-container">
                    <ul>
                    
                        {users.map(user => (
                            <li className="div-nome">
                                <div><h1>Nome: {user.name}</h1></div>                       
                            <img src={user.thumbnail.path + "." + user.thumbnail.extension}></img>
                            <div><h4>Descrição:</h4>{user.description}</div>
                            <div><h4>Ultimo Quadrinho:</h4>{user.modified}</div>
                            <div><h4>Quadrinhos:</h4>{user.comics.available}</div>
                            <img src={user.comics.available + "." + user.comics.collectionURI}></img>
                            </li>
                            
                        ))}
                    </ul>
                </div>
            </div>
            <footer></footer>
        </div>
    )
}
export default CharacterDetail;