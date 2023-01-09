import React from 'react'
import IMG1 from './imges/first-img.jpg'
function Div_one() {
    return (
        <>
            <div className='div1 col-lg-4
        col-sm-6 col-xm-12'>
                <img className='h-100 w-100 ' src={IMG1} alt="" />
                <p className='mt-3'>Green House</p>
                <h2>Rs : 2crore</h2>
                <button className=''>Purchase</button>
            </div>
        </>
    )
}

export default Div_one