import './styles.css'
import React, { useState } from "react"
import Api from '../../api/Api';
import CharacterDetail from '../../api/CharacterDetail'


//Pagina da lista de personagens: Responsavel pelo consuma da api e extração de dados atravez de pesquisa

function CharacterList() {
  const [data, setData] = useState('');

  const childToParent = (childdata) => {
    setData(childdata);
  }

  if(data === ''){
    return (        
      <Api childToParent={childToParent} />
    )
  } else {
    return (
      <CharacterDetail childToParent={data} />
    )
  }

};

export default CharacterList;