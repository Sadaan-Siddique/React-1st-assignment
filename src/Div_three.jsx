import React from 'react'
import IMG3 from './imges/third-img.jpg'
function Div_three() {
    return (
        <>
            <div className='div3 col-lg-4
        col-sm-6 col-xm-12'>
                <img className='h-100 w-100 ' src={IMG3} alt="" />
                <p className='mt-3'>Brown House</p>
                <h2>Rs : 2.75crore</h2>
                <button className=''>Purchase</button>
            </div>
        </>
    )
}

export default Div_three