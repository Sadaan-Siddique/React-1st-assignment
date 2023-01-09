import React from 'react'
import IMG4 from './imges/fourth-img.jpg'
function Div_four() {
    return (
        <>
            <div className='div4 col-lg-4
        col-sm-6 col-xm-12'>
                <img className='h-100 w-100 ' src={IMG4} alt="" />
                <p className='mt-3'>At Venice City</p>
                <h2>Rs : 3crore</h2>
                <button className=''>Purchase</button>
            </div>
        </>
    )
}

export default Div_four