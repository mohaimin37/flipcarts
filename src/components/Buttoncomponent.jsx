import React from 'react'
import {Button,ButtonGroup} from "@mui/material"


function Buttoncomponent() {
  return (
    <div>
      <ButtonGroup className='button12'>
  <Button className='button2'>-</Button>
  <Button className='button3' disabled>1</Button>
  <Button className='button4'>+</Button>
</ButtonGroup>
    </div>
  )
}

export default Buttoncomponent
