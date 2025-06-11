import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h3>EmpApp</h3>&nbsp;&nbsp;

                <Link to={"/add"}>
                <Button variant='contained' sx= {{ color:'white' }} >Add</Button>
                </Link>&nbsp;&nbsp;

                <Link to={"/view"}>
                <Button variant='contained' sx= {{ color:'white' }} >View</Button>
                </Link>&nbsp;&nbsp;

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar