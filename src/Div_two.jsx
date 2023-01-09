import React from 'react'
import IMG2 from './imges/second-img.jpg'
function Div_two() {
    return (
        <>
            <div className='div2 col-lg-4
        col-sm-6 col-xm-12'>
                <img className='h-100 w-100 ' src={IMG2} alt="" />
                <p className='mt-3'>White House</p>
                <h2>Rs : 2.5crore</h2>
                <button className=''>Purchase</button>
            </div>
        </>
    )
}

export default Div_two