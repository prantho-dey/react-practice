import React from "react";
import './App.css';
// import Me from './components/Me'

import Components from './components/classComponents';
import Check from './components/props_style';
import Message from './components/Message';
import Counter from './components/Counter';
import FuncationClick from './components/FuncationClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';




function App() {
  return (
    <div className="App">
      

      {/* Props */}
      <Check name="Prantho" profession="developer">
        <p>In est populo utroque, sed te populo deleniti appareat. Cu appareat suavitate philosophia sit. An delenit gubergren est, atqui ornatus nam at, vim error nostro eu. Usu soleat indoctum cu, legere viderer moderatius no sea, eam iisque denique explicari cu.</p>
      </Check>
      <Check name="Priom" profession="Student"/>
      <Check name="Avi" profession="Degital Marketer"/>

      <Components country="Bangladesh"/>
      <Components country="India"/>

      {/* Set State */}
      <Message />

      {/* Event Handling */}
      <Counter />

      <FuncationClick />

      <ClassClick />

      <br/>
      <br/>
      {/* Mathods As Props */}
      <ParentComponent />

      {/* Condational Approach */}
      <UserGreeting />

    </div>
  );
}

export default App;


