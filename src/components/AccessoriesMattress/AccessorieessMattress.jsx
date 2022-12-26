import React from 'react'
import { TouchableOpacityButton } from '../../DesignHelper/HelperComponents'
import './AccessorieesMattress.css'

function AccessorieessMattress() {
  return (
    <>
{/* 
        <div className="container">
            <div className="col-md-3">
            <div className='card1' id='img1'>
            <h3>Pillows</h3>
            <img src='assets/images/pillow.png' alt="img1" className='img-fluid'/>

            <button> SHOP NOW </button>
        </div>
            </div>
            <div className="col-md-3">
            <div className='card1'  id='img2'>
            <h3>Swatches</h3>
            <img src='assets/images/Mattress.png' alt="img2" className='img-fluid'/>
            <button> SHOP NOW </button>
        </div>
            </div>
            <div className="col-md-3">
            <div className='card1'  id='img3'>
            <h3>Cushion</h3>
            <img src='assets/images/Cushions.png' alt="img3" className='img-fluid'/>
            <button> SHOP NOW </button>
        </div>
            </div>
            <div className="col-md-3"><div className='card1'  id='img4'>
            <h3>Bolster</h3>
            <img src='assets/images/Bolster.png' alt="img4" className='img-fluid'/>
            <button> SHOP NOW </button>
        </div></div>

        </div> */}
    <div><h1 className='accmat'>Accessories Of Mattress</h1></div>
    <div className='cards'>
        <div className='card1' id='img1'>
            <h3>Pillows</h3>
            <img src='assets/images/pillow.png' alt="img1" className='img-fluid'/>

            <button> SHOP NOW </button>
        </div>

        <div className='card1'  id='img2'>
            <h3>Swatches</h3>
            <img src='assets/images/Mattress.png' alt="img2" className='img-fluid'/>
            <button> SHOP NOW </button>
        </div>
        <div className='card1'  id='img3'>
            <h3>Cushion</h3>
            <img src='assets/images/Cushions.png' alt="img3" className='img-fluid'/>
            <button> SHOP NOW </button>
        </div>
        <div className='card1'  id='img4'>
            <h3>Bolster</h3>
            <img src='assets/images/Bolster.png' alt="img4" className='img-fluid'/>
            <button> SHOP NOW </button>
        </div>
    </div>
    

    </>
  )
}

export default AccessorieessMattress