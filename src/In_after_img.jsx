import React from 'react'
import Div_one from './Div_one'
import Div_two from './Div_two'
import Div_three from './Div_three'
import Div_four from './Div_four'
import Div_five from './Div_five'
import Div_six from './Div_six'

function In_after_img() {
  return (
    <React.Fragment>
      <div className="in_after_img row text-center">
        <Div_one/>
        <Div_two/>
        <Div_three/>
        <Div_four/>
        <Div_five/>
        <Div_six/>
      </div>
    </React.Fragment>
  )
}

export default In_after_img