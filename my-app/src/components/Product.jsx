import { Box,Button,styled, Typography } from '@mui/material'
import React from 'react'

const Image = styled("img")({
    width:"100%",
    height:"220px",
})

export default function Product({item}) {
    return (
        <Box sx={{textAlign:"center"}}>
            <Image alt={item} 
            src={"https://matalan-content.imgix.net/uploads/asset_file/asset_file/415517/1658328435.5188096-S2783072_C101_Alt10.jpg?ixlib=rails-4.2.0&cs=tinysrgb&auto=compress&fm=jpg&w=320&h=448&fit=fit&s=70e63927cd410f0cfcc68e68185af8a5"}/>
            <Typography sx={{fontSize:"13px",fontWeight:"400",marginTop:"10px",height:"32px"}}>{item.length>40?`${item.slice(0,37)}...`:item}</Typography>
            <Typography sx={{fontSize:"15px",fontWeight:"600",marginTop:"12px"}}>$18</Typography>
            <Button fullWidth variant="outlined" sx={{marginTop:"10px"}}>View</Button>
        </Box>
    )
}
