'use client'

import React, { useState } from 'react'

function Ejercicio01() {
    const [palabra,setPalabra]=useState('')
    const [resultado, setResultado] = useState('')
    const matriz =[
        [1,200,200],
        [1,1,200]
    ]
   
    //se crea la funcion que analiza el automata
    const analizar=()=>{
        const palabra = identificador.value
        let i = 0
        let estado = 0
        let caracter = 0
        let c = palabra.split('')
        const patronLetter= new RegExp('[a-zA-Z]')

        const patronDigit=new RegExp('[0-9]')
      
        
      while (i < c.length) {
        if (patronLetter.test(c[i])) {
            caracter = 0;
        } else if (patronDigit.test(c[i])) {
            caracter = 1;
        } else {
            caracter = 2;
        }
        estado = matriz[estado][caracter]; // Corrección aquí
        if (estado === 200) {
            setResultado('Es un identificador  no válido');
            return;
        }
        i++;
       
      }
    
    if (estado === 1) {
        setResultado('Es un identificador válido');
    }
 
    }
  return (
    <div>
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

export default Ejercicio01