import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className='p-8 bg-cyan-700 space-y-5'>
        <div>
            <h1 className='text-4xl text-center text-cyan-50'>Automatas finitos deterministas</h1>
        </div>
        

        <nav>
            <ul className='flex justify-evenly uppercase'>
                <li className='bg-amber-400 rounded-md p-3 shadow-lg'>
                  <Link href={'/ejercicio01'}>Ejercicio 1</Link>
                </li>
                <li className='bg-amber-400 rounded-md p-3 shadow-lg'>
                <Link href={'/ejercicio02'}>Ejercicio 2</Link>
                </li>
                <li className='bg-amber-400 rounded-md p-3 shadow-lg'>
                <Link href={'/ejercicio03'}>Ejercicio 3</Link>
                </li>
               
            </ul> 
        </nav>
    </header>
    
  )
}