import React from 'react'
import Side from './side/index'
import { StyledBottle, StyledSides } from './style'

const Bottle = () => {
  return (
    <StyledBottle>
      <StyledSides>
        <Side></Side>
        <Side></Side>
        <Side></Side>
        <Side></Side>
        <Side></Side>
        <Side></Side>
      </StyledSides>
    </StyledBottle>
  )
}

export default Bottle
