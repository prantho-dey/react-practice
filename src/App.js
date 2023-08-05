import React from "react";
import './App.css';
// import Me from './components/Me'

import Components from './components/classComponents';
import Check from './components/props_style';





function App() {
  return (
    <div className="App">
      

      <Check name="Prantho" profession="developer">
        <p>In est populo utroque, sed te populo deleniti appareat. Cu appareat suavitate philosophia sit. An delenit gubergren est, atqui ornatus nam at, vim error nostro eu. Usu soleat indoctum cu, legere viderer moderatius no sea, eam iisque denique explicari cu.</p>
      </Check>
      <Check name="Priom" profession="Student"/>
      <Check name="Avi" profession="Degital Marketer"/>

      <Components country="Bangladesh"/>
      <Components country="India"/>
    </div>
  );
}

export default App;
