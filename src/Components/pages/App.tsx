import React from 'react';
import Formulario from '../Formulario';
import Lista from '../Lista';
import style from './App.module.scss';
import Cronometro from '../Cronometro/Relogio';
import Relogio from '../Cronometro/Relogio';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro/>
      <Relogio/>
    </div>
  );
}

export default App;
