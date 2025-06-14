import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const View = () => {
    var[user,setuser]=useState([])
    var navigate = useNavigate()


    axios.get("http://localhost:3004/view")
    .then((res)=>{
        console.log(res.data)
        setuser(res.data)
    })
    const delValue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3004/delete/"+id)
        .then((res)=>{
            alert(res.data.message)
            //window.location.reload()
        })
    }
    const updateValue=(val)=>{
        navigate("/add",{ state:{ val } });
        };
    
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead><br/><br/>
                    <TableRow>
                        <TableCell sx={{ fontWeignt: 'bold' }}>Name</TableCell>
                        <TableCell sx={{ fontWeignt: 'bold' }}>Age</TableCell>
                        <TableCell sx={{ fontWeignt: 'bold' }}>Dept</TableCell>
                        <TableCell sx={{ fontWeignt: 'bold' }}>Salary</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>


                        {user.map((val)=>{
                        return(
                    <TableRow>
                        <TableCell>{val.Name} </TableCell>
                        <TableCell>{val.Age}</TableCell>
                        <TableCell>{val.Dept}</TableCell>
                         <TableCell>{val.Salary}</TableCell>
                         <TableCell>
                            <Button variant="contained"
                             onClick={()=>{updateValue(val)}} >UPDATE</Button>&nbsp; &nbsp;
                            <Button variant="contained"
                             onClick={()=>{delValue(val._id)}} >DELETE</Button>
                         </TableCell>
                    </TableRow>
                    )
                })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View