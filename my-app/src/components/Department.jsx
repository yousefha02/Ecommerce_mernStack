import { Box,styled } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
const Image = styled('img')({
    borderRadius:"50%"
})

const LinkReact = styled(Link)({display:"block",width:"100%"})

export default function Department({item}) {
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Image sx={{width:{xl:"250px",lg:"220px",md:"180px",sm:"250px",xs:"140px"},height:{xl:"250px",lg:"220px",md:"180px",sm:"250px",xs:"140px"}}} 
            src={'https://matalan-content.imgix.net/uploads/asset_file/asset_file/454963/1672311084.5887127-WK45-HOMEPAGE_circle_4.jpg?ixlib=rails-4.2.0&w=264&ar=264%3A255&fm=avif&dpr=1.5&q=30&cs=tinysrgb&s=df51cd8e0f639ce79ff6f039fef50f7e'}
            alt={item}/>
            <LinkReact to="/">
                <Box sx={{backgroundColor:"#f8f5f8",textTransform:"uppercase",textAlign:"center",padding:"10px",marginTop:"8px",
                transition:".3s",":hover":{backgroundColor:"#ff5252",color:"white"}}}>{item}</Box>
            </LinkReact>
        </Box>
    )
}
