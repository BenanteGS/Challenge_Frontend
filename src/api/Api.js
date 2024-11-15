import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react"
import axios from "axios";

import logo from '../assets/logo.png'
import lupa from '../assets/lupa.png'
import coracao from '../assets/coracao.png'
import './styles.css'



function Api ({childToParent}) {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    //Responsavel por enviar os dados para o component pai (CharacterDetails.js)
    useEffect(() => {        
        montaLista();
     }, []);

    //Função responsavel por montar a lista de personagens e enviar od dados para o componente pai (CharacterDetails.js)

    function montaLista(){
        axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=0b7355aabdcdbff6191e1a4896e4d78c')
              .then(response => {
                 setUsers(response.data.data.results); 
                 setLoading(false);
             })
             .catch(error => {
                 console.error(error);
                 setLoading(false);
             })
    }

    function detalhesFilme(id) {   

        childToParent(id);
    };


    // Função responsavel por pesquisar o personagens recebendo o nome;

    function pesquisar(event){
        const nome = event.target.value
        if(nome == '') {
            montaLista();
        }        
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${nome}&apikey=0b7355aabdcdbff6191e1a4896e4d78c`)
        .then(response => {
            setUsers(response.data.data.results); 
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        })
    }
    
    if (loading) {
        return <div>Carregando...
        </div>
    }

    return (
        <div className='list-container'>
            <header>
                {/*Logo marvel, texto html, disponibiliza a barra de pesquisa;*/}
                    <img className="logo" src={logo} alt="Marvel Logo" />
                    <h1>EXPLORE O UNIVERSO MARVEL</h1>
                    <p>Mergulhe no dominio deslumbrante de todos os personagens clássicos que você ama e aqueles que você descobrirá em breve!</p>
                    
                {/*Disponibiliza a barra de pesquisa e o input procura o personagem pelo nome ultilizando a função pesquisar*/}  
                <div className="input-container">
                    <input type="text" placeholder='   Procure por heróis' onChange={pesquisar}/>
                    <img src={lupa} alt="Pesquisa" className="search-icon" />
                </div>
            </header>

            <h1>Personagens</h1>
            
            <div className='dados-api' > 
                <div className="api-container">
                    <ul>
                        {/*Mapea a API, extrai os pensonagens que aparecem na lista de personagens */}
                        {users.map(user => (
                            <li className="tambnail" key={user.id}>
                                <img onClick={() => detalhesFilme(user.id)} src={user.thumbnail.path + "." + user.thumbnail.extension}></img>
                                <div>
                                    <div className="div-nome">
                                        <h3>{user.name}</h3>
                                    </div>
                                    <div className="coracao">
                                        <img src={coracao} alt="Coracao" className="coracao" />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Api;