'use client'

import React, { useState } from 'react'

function Ejercicio03() {
  const [palabra,setPalabra]=useState('')
  const [resultado, setResultado] = useState('')
  const matriz =[
      [1,2,200],
      [1,1,200]
      [2,2,200]
  ]
 
  //se crea la funcion que analiza el automata
  const analizar=()=>{
      const palabra = identificador.value
      let i = 0
      let estado = 0
      let caracter = 0
      let c = palabra.split('')
      console.log(palabra,c);
      const patron0= new RegExp('0')
      const patron1=new RegExp('1')
    
      
    while (i < c.length) {
      if (patron0.test(c[i])) {
          caracter = 0;
      } else if (patron1.test(c[i])) {
          caracter = 1;
      } else {
          caracter = 2;
      }
      estado = matriz[estado][caracter];
      console.log(estado); // Corrección aquí
      if (estado == 200) {
          setResultado('Es una palabra no válida');
          console.log('estado no valido');
          return;
      }
      i++;
     
    }
  
  if (estado == 1) {
      setResultado('Es una palabra válido');
  }else{
    console.log('No valido');
  }

  }
return (
  <div>
      <div className='p-3 text-center text-lg m-2'>
            <h2 className='p-3 text-center font-bold'>Ejercicio 03</h2>
            <h2 className='p-3 text-center'>Crea un DFA que acepten todas las cadenas que inicien con "0"</h2>
      </div>
      <div className='p-3 text-center text-lg m-2'>
          <input className='text-center border-2 border-yellow-400 rounded-md'type="text" placeholder='Coloca la entrada' id='identificador' value={palabra} onChange={(e)=>setPalabra(e.target.value)}/>
      </div>
      <div className='p-3 text-center'>
          <button  className='p-4 text-center rounded-md bg-yellow-400 text-lg'onClick={analizar}>Analiza la entrada</button>
      </div>
      <div className='p-3 text-center'>
          {resultado}
      </div>
  </div>
)

}
export default Ejercicio03