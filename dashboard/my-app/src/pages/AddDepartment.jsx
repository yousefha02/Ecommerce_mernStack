import { Box,Paper,Typography,Button,TextField, styled} from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'
import ImageIcon from '@mui/icons-material/Image';

const Image = styled('img')({
    width:"100%",
    height:"300px",
    marginTop:"14px",
    borderRadius:"8px"
})

export default function AddDepartment() {
    const [title,setTitle] = useState(null)
    const [image,setImage] = useState(null)

    return (
        <Layout>
            <Box sx={{maxWidth:"100%",width:{md:"550px"},marginTop:"30px",marginBottom:"40px"}}>
                <Typography sx={{fontSize:"24px",fontWeight:"600",marginBottom:"10px"}}>Add Department</Typography>
                <Paper sx={{padding:"16px 12px"}}>
                    <TextField label="Title" fullWidth type="text" sx={{marginBottom:"20px"}} 
                    onChange={(e)=>setTitle(e.target.value)}/>
                    <input type="file" id='image' hidden onChange={(e)=>setImage(e.target.files[0])}/>
                    <label htmlFor='image'>
                        <Box sx={{backgroundColor:"#ff5252",width:"45px",height:"45px",borderRadius:"50%",display:"flex",
                        justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
                            <ImageIcon sx={{color:"white"}}/>
                        </Box>
                    </label>
                    {image&&<Image src={URL.createObjectURL(image)}/>}
                    <Button variant="contained" sx={{width:"100%",marginTop:"16px"}}>Add Product</Button>
                </Paper>
            </Box>
        </Layout>
    )
}
