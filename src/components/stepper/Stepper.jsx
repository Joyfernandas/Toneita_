import React, { Component } from 'react'
import Stepper from 'react-stepper-js'
import 'react-stepper-js/dist/index.css'

const Go=()=> {
    return <Stepper
      color="rgb(255, 142, 21)"
      fontSize="10px"
      fontColor="#000000"
      steps={[
        { label: "Ordered" },
        { label: "store pickup" },
        { label: "Dispatched" },
        { label: "Out of Delivery" },
        { label: "Delivered" }
      ]}
      line={1} 
      currentStep={3}
    />
   
}

export default Go