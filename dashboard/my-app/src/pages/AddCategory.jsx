import { Box,Paper,Typography,Button,TextField,InputLabel,MenuItem,FormControl,Select} from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'
import {useSelector} from 'react-redux'
import { useSnackbar } from 'notistack';
import { useEffect } from 'react'

export default function AddCategory() {
    const {closeSnackbar,enqueueSnackbar} = useSnackbar()
    const {token} = useSelector((state)=>state.admin)
    const [title,setTitle] = useState(null)
    const [load,setLoad] = useState(false)
    const [departments,setDepartments] = useState([])
    const [department,setDepartment] = useState(null)

    async function createCategory(e)
    {
        closeSnackbar()
        e.preventDefault()
        try{
            setLoad(true)
            const response = await fetch(`${process.env.REACT_APP_API}category/create`,{
                method:"POST",
                headers:{
                    "Authorization":token,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({title:title.toLowerCase(),departmentId:department})
            })
            const data = await response.json()
            if(response.status!==200&&response.status!==201)
            {
                setLoad(false)
                enqueueSnackbar(data.message,{variant:"error",autoHideDuration:2500})
                throw new Error('failed occured')
            }
            enqueueSnackbar(data.message,{variant:"success",autoHideDuration:2500})
            setTitle('')
            setDepartment(null)
            setLoad(false)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    useEffect(()=>
    {
        async function getDepartments()
        {
            try{
                const response = await fetch(`${process.env.REACT_APP_API}department/all`,{
                    headers:{
                        "Authorization":token,
                    }
                })
                const data = await response.json()
                setDepartments(data.departments)
            }
            catch(err)
            {
                console.log(err)
            }
        }
        getDepartments()
    },[])

    return (
        <Layout>
            <Box sx={{maxWidth:"100%",width:{md:"550px"},marginTop:"30px",marginBottom:"40px"}}>
                <Typography sx={{fontSize:"22px",fontWeight:"600",marginBottom:"10px"}}>Add Category</Typography>
                <Paper sx={{padding:"16px 12px"}}>
                    <TextField label="Title" fullWidth type="text" sx={{marginBottom:"20px"}} 
                    onChange={(e)=>setTitle(e.target.value)} value={title}/>
                    <FormControl fullWidth sx={{marginBottom:"14px"}}>
                        <InputLabel id="demo-simple-select-label">Department</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={department}
                        label="Department"
                        onChange={(e)=>setDepartment(e.target.value)}
                        >
                        {
                            departments?.map((depart,index)=>
                            {
                                return <MenuItem key={index+'ops'} value={depart._id}>{depart.title}</MenuItem>
                            })
                        }
                        </Select>
                    </FormControl>
                    {
                        !load?
                        <Button variant="contained" sx={{width:"100%"}} onClick={(e)=>createCategory(e)}>
                            Add Category
                        </Button>
                        :
                        <Button variant="contained" sx={{width:"100%"}}>load...</Button>
                    }
                </Paper>
            </Box>
        </Layout>
    )
}
