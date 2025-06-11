import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br/><br/><TextField label="Name" variant="outlined" ></TextField><br/><br/>
        <TextField label="Age" variant="outlined" ></TextField><br/><br/>
        <TextField label="Dept" variant="outlined" ></TextField><br/><br/>
        <TextField label="Salary" variant="outlined" ></TextField><br/><br/>
        <Button variant="contained" >Add</Button>
    </div>
  )
}

export default Add