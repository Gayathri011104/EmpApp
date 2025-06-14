import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Add = (props) => {
   var[emp,setemp]=useState({Name:"",Age:"",Dept:"",Salary:""})
   var navigate=useNavigate()
   var location = useLocation()
   console.log("loc: ",location.state)

   const inputHandler = (e) => {
    setemp({...emp, [e.target.name]:e.target.value});
    console.log(emp);
   };

   const addHandler=()=>{
    if(location.state !==null){
      axios.put("http://localhost:3004/update/"+location.state.val._id,emp)
     .then((res)=>{
      alert(res.data.message)
      navigate("/view")
    })
  }
    else{
    axios.post("http://localhost:3004/add",emp)
    .then((res)=>{
      alert(res.data.message)
      navigate("/view")
    })
   }
   } 
   useEffect(() =>{
    if(location.state !== null){
      setemp({
        ...emp,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Dept: location.state.val.Dept,
        Salary: location.state.val.Salary,
      });
    }
   },[]);

  return (
    <div>
       
        <br/><br/><h3>EMPLOYEES</h3><br/><br/>
        <TextField label="Name" variant="outlined" name="Name" value={emp.Name} onChange={inputHandler}></TextField><br/><br/>
          <TextField label="Age" variant="outlined"  name="Age" value={emp.Age} onChange={inputHandler}></TextField><br/><br/>
        <TextField label="Dept" variant="outlined"  name="Dept" value={emp.Dept} onChange={inputHandler}></TextField><br/><br/>
        <TextField label="Salary" variant="outlined"  name="Salary"value={emp.Salary} onChange={inputHandler}></TextField><br/><br/>
        <Button variant="contained" color="secondary" onClick={addHandler} >SUBMIT</Button>
    </div>
  )
}

export default Add