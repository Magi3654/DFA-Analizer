'use client'

import React, { useState } from 'react'

function Ejercicio04() {
    const [palabra,setPalabra]=useState('')
    const [resultado, setResultado] = useState('')
    const matriz =[
        [1,0,200],
        [2,0,200],
        [2,2,200]
    ]
   
    //se crea la funcion que analiza el automata
    const analizar=()=>{
        const palabra = identificador.value
        let i = 0
        let estado = 0
        let caracter = 0
        let c = palabra.split('')
        const patronAa= new RegExp('a')
        const patronBb= new RegExp('b')
      
        
      while (i < c.length) {
        if (patronAa.test(c[i])) {
            caracter = 0;
        } else if (patronBb.test(c[i])) {
            caracter = 1;
        } else {
            caracter = 2;
        }
        estado = matriz[estado][caracter]; // Corrección aquí
        if (estado == 200) {
            setResultado('Es un identificador  no válido');
            return;
        }
        i++;
       
      }
    
    if (estado == 2) {
        setResultado('Es un identificador válido');
    }else{
        setResultado('Es una palabra no válida')
    }
 
    }
  return (
    <div>
        <div className='p-3 text-center text-lg m-2'>
            <h2 className='p-3 text-center font-bold'>Ejercicio 04</h2>
            <h2 className='p-3 text-center'>Crea un DFA que acepte todas las cadenas donde cada "a" debe ser seguida de una "b" con alfabeto a y b</h2>
        </div>
        <div className='p-3 text-center text-lg m-2'>
            <input className='text-center border-2 border-yellow-400 rounded-md'type="text" placeholder='Coloca la entrada' id='identificador' value={palabra} onChange={(e)=>setPalabra(e.target.value)}/>
        </div>
        <div className='p-3 text-center'>
            <button  className='p-4 text-center rounded-md bg-yellow-400 text-lg'onClick={analizar}>Analiza la entrada</button>
        </div>
        <div className='p-3 text-center text-2xl underline-offset-8 font-bold'>
            {resultado}
        </div>
    </div>
  )
  
}

export default Ejercicio04