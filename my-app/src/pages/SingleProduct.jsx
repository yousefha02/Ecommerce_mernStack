import {Typography,Container,Grid,styled, Box,Rating, TextField, Button} from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Image = styled('img')({
    width:"100%",
    height:"600px"
})

export default function SingleProduct() {
    return (
        <Layout>
            <Container sx={{marginTop:"30px",marginBottom:"30px"}}>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={5} md={6}>
                        <Image
                        src="https://matalan-content.imgix.net/uploads/asset_file/asset_file/438245/1665144101.803449-S2941897_C47Q_Alt4.jpg?ixlib=rails-4.2.0&cs=tinysrgb&auto=compress%2Cformat&fm=pjpg&w=900&fit=crop&ar=900%3A0&s=e07d3aa79534ad425d8f6b77b4eb3083"/>
                    </Grid>
                    <Grid item xs={12} lg={7} md={6}>
                        <Typography sx={{fontSize:"24px",fontWeight:"600",marginBottom:"10px"}}>Men Slip On Shoes</Typography>
                        <Box sx={{display:"flex",alignItems:"center",columnGap:"6px"}}>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly sx={{fontSize:"20px"}}/>
                            <Typography sx={{color:"#747579",fontSize:"14px"}}>2,321 reviews</Typography>
                        </Box>
                        <Typography color="error" sx={{fontSize:"20px",margin:"10px 0px"}}>80.90$</Typography>
                        <Typography sx={{fontSize:"16px",margin:"10px 0px 6px",fontWeight:"400"}}>Color</Typography>
                        <Box sx={{display:"flex",columnGap:"8px",padding:"0px 4px",flexWrap:"wrap",marginBottom:"20px"}}>
                            {
                                ["red","blue","green"].map((item,index)=>
                                {
                                    return <Box sx={{width:"25px",height:"25px",borderRadius:"50%",backgroundColor:item}} key={index+'la1'}></Box>
                                })
                            }
                        </Box>
                        <Typography sx={{fontSize:"16px",margin:"10px 0px 6px",fontWeight:"400"}}>Size</Typography>
                        <Box sx={{display:"flex",columnGap:"8px",padding:"0px 4px",flexWrap:"wrap",marginBottom:"20px"}}>
                            {
                                ["40","41","42"].map((item,index)=>
                                {
                                    return <Box sx={{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"#dee2e6",
                                            fontWeight:"600",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"14px"}} 
                                            key={index+'lb1'}>{item}</Box>
                                })
                            }
                        </Box>
                        <Typography sx={{fontSize:"16px",margin:"10px 0px 6px",fontWeight:"400"}}>Quantity</Typography>
                        <TextField type="number" sx={{width:"100px"}}/>
                        <Box sx={{display:"flex",columnGap:"10px",marginTop:"30px",alignItems:"center"}}>
                            <Button variant="contained" sx={{borderRadius:"50px",width:"300px",height:"40px",maxWidth:"100%"}}>Add to Cart</Button>
                            <Button color="error" variant="outlined" sx={{borderRadius:"50%",width:"50px",height:"50px",minWidth:"0"}}>
                                <FavoriteBorderIcon/>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}
