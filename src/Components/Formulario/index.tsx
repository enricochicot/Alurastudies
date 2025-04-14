import React from 'react';
import Botao from '../Botao';
import './Formulario.module.scss';


class Formulario extends React.Component{
    render(){
        return (
            <form className='novaTarefa'>
                <div className='input-container'>
                  <label htmlFor="tarefa">
                   Adicione um novo estudo
                  </label>
                  <input
                  type="text"
                  name="tarefa"
                  id="tarefa"
                  placeholder="O que você deseja estudar?"
                  required
                   />
                </div>
                <div className='input-container'>
                  <label>
                    Tempo 
                  </label>
                  <input
                  type="text"
                  step="1"
                  name="tempo"
                  id="tempo"
                  min="00:00:00"
                  max="01:30:00"
                  required
                   />
                </div>
                <Botao>Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario;