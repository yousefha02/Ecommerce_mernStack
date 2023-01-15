import {Typography,Container,Grid,styled, Box,Rating, TextField, Button} from '@mui/material'
import React ,{useState,useEffect} from 'react'
import Layout from '../components/Layout'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useParams} from 'react-router-dom'
import Loading from '../components/Loading'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Image = styled('img')({
    width:"100%",
    height:"600px"
})

export default function SingleProduct() {

    const [product,setProduct] = useState(null)
    const [load,setLoad] = useState(true)
    const {id} = useParams()

    useEffect(()=>
    {
        async function getProduct()
        {
            try{
                const response = await fetch(`${process.env.REACT_APP_API}product/user/${id}`)
                const data = await response.json()
                setProduct(data.product)
                setLoad(false)
            }
            catch(err)
            {
                console.log(err)
            }
        }
        getProduct()
    },[id])

    const [prod,setProd] = useState({qty:0,size:null,color:null})

    function handleChangeInput(e)
    {
        const {name,value} = e.target
        setProd(back=>
            {
                return {...back,[name]:value}
        })
    }

    return (
        <Layout>
            <Container sx={{marginTop:"30px",marginBottom:"30px"}}>
                {
                !load?
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={5} md={6}>
                        <Image
                        src={`${process.env.REACT_APP_API}images/${product.image}`}/>
                    </Grid>
                    <Grid item xs={12} lg={7} md={6}>
                        <Typography sx={{fontSize:"24px",fontWeight:"600",marginBottom:"10px"}}>{product.title}</Typography>
                        <Box sx={{display:"flex",alignItems:"center",columnGap:"6px"}}>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly sx={{fontSize:"20px"}}/>
                            <Typography sx={{color:"#747579",fontSize:"14px"}}>2,321 reviews</Typography>
                        </Box>
                        <Typography color="error" sx={{fontSize:"20px",margin:"10px 0px 18px"}}>{product.price}$</Typography>
                        <Box sx={{ width: 300,maxWidth:"100%",marginBottom:"25px"}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={prod.color}
                                label="Age"
                                onChange={(e)=>handleChangeInput(e)}
                                name="color"
                                >
                                {product.colors.map((item,index)=>
                                {
                                    return <MenuItem key={index+'p3'} value={item}>{item}</MenuItem>
                                })}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ width: 300,maxWidth:"100%",marginBottom:"25px"}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={prod.size}
                                label="Size"
                                onChange={(e)=>handleChangeInput(e)}
                                name="size"
                                >
                                {product.sizes.map((item,index)=>
                                {
                                    return <MenuItem key={index+'p2'} value={item}>{item.toUpperCase()}</MenuItem>
                                })}
                                </Select>
                            </FormControl>
                        </Box>
                        <TextField type="number" label="Quantity" sx={{width:"100px"}} inputProps={{min:1}} name="qty" onChange={(e)=>handleChangeInput(e)}/>
                        <Box sx={{display:"flex",columnGap:"10px",marginTop:"30px",alignItems:"center"}}>
                            <Button variant="contained" sx={{borderRadius:"50px",width:"300px",height:"40px",maxWidth:"100%"}}>Add to Cart</Button>
                            <Button color="error" variant="outlined" sx={{borderRadius:"50%",width:"50px",height:"50px",minWidth:"0"}}>
                                <FavoriteBorderIcon/>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                :
                <Loading/>
                }
            </Container>
        </Layout>
    )
}
