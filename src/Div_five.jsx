import React from 'react'
import IMG5 from './imges/fifth-img.jpg'
function Div_five() {
    return (
        <>
            <div className='div5 col-lg-4
        col-sm-6 col-xm-12'>
                <img className='h-100 w-100 ' src={IMG5} alt="" />
                <p className='mt-3'>At Residential Area</p>
                <h2>Rs : 5crore</h2>
                <button className=''>Purchase</button>
            </div>
        </>
    )
}

export default Div_five