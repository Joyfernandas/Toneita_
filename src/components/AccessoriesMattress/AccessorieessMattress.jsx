import React from 'react'
import './AccessorieesMattress.css'

function AccessorieessMattress() {
  return (
    <>
    <div><h1 className='accmat'>Accessories Of Mattress</h1></div>
    <div className='cards'>
        <div className='card1' id='img1'>
            <h3>Pillows</h3>
            <img src='assets/images/Pillow.png' alt="img1"/>
            <button> SHOP NOW </button>
        </div>

        <div className='card1'  id='img2'>
            <h3>Swatches</h3>
            <img src='assets/images/Mattress.png' alt="img2"/>
            <button> SHOP NOW </button>
        </div>
        <div className='card1'  id='img3'>
            <h3>Cushion</h3>
            <img src='assets/images/Cushions.png' alt="img3"/>
            <button> SHOP NOW </button>
        </div>
        <div className='card1'  id='img4'>
            <h3>Bolster</h3>
            <img src='assets/images/Bolster.png' alt="img4"/>
            <button> SHOP NOW </button>
        </div>
    </div>
    
    </>
  )
}

export default AccessorieessMattress