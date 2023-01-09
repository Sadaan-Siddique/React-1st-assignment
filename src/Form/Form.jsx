import React from 'react'
import Form_div_one from './Form_div_one'
import Form_div_two from './Form_div_two'
import Form_Div_Three from './Form_Div_Three'
import Form_Div_Four from './Form_Div_Four'
function Form() {
    return (
        <>
            <form className='mt-5 p-5'>
                <h1 className='text-center mt-3 fw-bolder'>Contact Details</h1>
                <Form_div_one/>
                <Form_div_two/>
                <Form_Div_Three/>
                <Form_Div_Four/>
                <button type="submit" className="mt-3">Submit</button>
            </form>
        </>
    )
}

export default Form