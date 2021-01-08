import React from 'react'
import { Box, Spinner, SpinnerElement } from './styles'

const Hero = () => {
  return (
    <div>
      <Box>
        <Spinner>
          <SpinnerElement/>
          <SpinnerElement/>
          <SpinnerElement/>
          <SpinnerElement/>
          <SpinnerElement/>
        </Spinner>
      </Box>
    </div>
  )
}

export default Hero
