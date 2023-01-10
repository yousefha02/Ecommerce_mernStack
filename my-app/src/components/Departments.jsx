import { Container, Typography,Grid } from '@mui/material'
import React from 'react'
import Department from './Department'

export default function Departments() {
    const categories = ["Man","Woman","Girl","Boy","Old","Baby","Brands","Towel"]
    return (
        <Container sx={{marginTop:"40px",marginBottom:"30px"}}>
            <Typography sx={{fontSize:{sm:"30px",xs:"26px"},fontWeight:"600",textAlign:"center",marginBottom:"20px"}}>Shop By Departments</Typography>
            <Grid container spacing={5}>
            {
                categories.map((item,index)=>
                {
                    return(
                        <Grid key={index+'dep1'} md={3} xs={6} item>
                            <Department item={item}/>
                        </Grid>
                        
                    )
                })
            }
            </Grid>
        </Container>
    )
}
