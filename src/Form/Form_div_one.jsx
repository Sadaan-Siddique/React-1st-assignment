import React from 'react'

function Form_div_one() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
          <label className='fw-bold'>First Name</label> <input type="text" className="form-control border-1 border-dark" placeholder="First name" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
          <label className='fw-bold'>Last Name</label> <input type="text" className="form-control border-1 border-dark" placeholder="Last name" />
        </div>
      </div>
    </>
  )

}

export default Form_div_one