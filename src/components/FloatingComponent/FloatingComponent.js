import React from 'react'
import { AlarmFill } from 'react-bootstrap-icons';
import './Floatingcompo.css';
const Data = [
    {
        id: 1,
        img: ("https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWF0dHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"),
        text:"Mattress"

    },
    {
        id: 1,
        img: ("https://images.unsplash.com/photo-1580460848000-d3ed1051700f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGlsbG93c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"),
        text:"Pillows"

    },
   
    {
        id: 1,
        img: ("https://images.unsplash.com/photo-1513807016779-d51c0c026263?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
        text:"Kids Pilows"

    },
    {
        id: 1,
        img: ("https://plus.unsplash.com/premium_photo-1666211976026-e2635ba30a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y3VzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"),
        text:"Cushions"

    },
    {
        id: 1,
        img: ("https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9sc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"),
        text:"Bolster"

    },
    {
        id: 1,
        text:"Explore ALL"

    },
]


const FloatingComponent = () => {
    return (
        <>
            <div className='banner-main' id='testcus' >

                <div id="ModalContent" className='row justify-content-md-center' hidden='true' >
                    {Data.map((item)=>(
                        <div className="col-md-4" > <div className='bannercard' style={{ backgroundImage: `url(${item.img})` }} >
                        <div className="dv-conta">
                            <p className='blurtxt'>{item.text}</p>
                        </div>
                    </div></div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FloatingComponent