import React from 'react'
import Layout from '../components/Layout'
import {Box, Paper, TextField, Typography, FormControlLabel,Chip, Checkbox, FormLabel,styled, Button,InputLabel,FormControl
    ,Select,OutlinedInput,MenuItem} from '@mui/material'
import { useTheme } from '@mui/material/styles';
const Input = styled("input")({})

export default function AddProduct() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    function getStyles(name, personName, theme) {
            return {
            fontWeight:
                personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
            };
        }
    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setPersonName(
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };

    const names = [
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Black',
    'White',
    'Brown',
    'Gray',
    'Pink',
    'Orange'
    ];

    return (
        <Layout>
            <Box sx={{maxWidth:"100%",width:{md:"550px"},marginTop:"30px"}}>
                <Typography sx={{fontSize:"24px",fontWeight:"600",marginBottom:"10px"}}>Add Product</Typography>
                <Paper sx={{padding:"16px 12px"}}>
                    <TextField label="Title" fullWidth type="text" sx={{marginBottom:"20px"}}/>
                    <TextField label="Price" fullWidth type="number" sx={{marginBottom:"20px"}}/>
                    <FormControl sx={{marginBottom:"14px"}} fullWidth>
                        <InputLabel id="demo-multiple-chip-label">Color</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                        {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}>
                            {name}
                        </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <Box sx={{display:'flex',flexDirection:"column",marginBottom:"15px"}}>
                        <FormLabel>Size : </FormLabel>
                        <Box>
                            <FormControlLabel control={<Checkbox/>} label="XL" />
                            <FormControlLabel control={<Checkbox/>} label="L" />
                            <FormControlLabel control={<Checkbox/>} label="M" />
                            <FormControlLabel control={<Checkbox/>} label="S" />
                        </Box>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"column",columnGap:"8px",marginBottom:"24px"}}>
                        <FormLabel sx={{marginBottom:"4px"}}>Image : </FormLabel>
                        <Input type="file" sx={{width:"100%",border:"1px solid #dde0e3",padding:"8px 5px"}}/>
                    </Box>
                    <Button variant="contained" sx={{width:"100%"}}>Add Product</Button>
                </Paper>
            </Box>
        </Layout>
    )
}
