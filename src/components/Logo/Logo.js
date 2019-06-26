import React from 'react'
import Tilt from 'react-tilt'
import brain from './icons8-brain-100.png'
import './Logo.css'

const Logo = () =>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2 " options={{ max : 50 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"><img src={brain} alt='Logo'/></div>
            </Tilt>
        </div>
    )
}

export default Logo