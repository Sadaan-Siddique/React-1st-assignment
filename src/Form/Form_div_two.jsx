import React from 'react'

function Form_div_two() {
    return (

        <>
            <div className="form-group mt-5">
                <label for="exampleInputEmail1" className='fw-bold'>Email address</label>
                <input type="email" className="form-control border-1 border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
            </div>
        </>
    )
}

export default Form_div_two