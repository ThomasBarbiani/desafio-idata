import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, TextField, useMediaQuery } from '@mui/material';

const Filter = ({ pageSize, onPageSizeChange, onFilterTextChange }) => {

    const isScreenSmall = useMediaQuery('(max-width:560px)');


    return (
        <Box display={isScreenSmall ? 'block' : 'flex'} alignItems="center" marginBottom={2} spacing={2}>
        <Box flexDirection="column">
            <InputLabel>Quantidades de Linhas: </InputLabel>
            <FormControl sx={{ width: 180, marginRight: 4 }}>
                <Select value={pageSize} onChange={onPageSizeChange}>
                    <MenuItem value={19} selected>
                    20 linhas
                    </MenuItem>
                    <MenuItem value={49}>50 linhas</MenuItem>
                    <MenuItem value={99}>100 linhas</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Box flexDirection="column">
            <InputLabel>Filtrar: </InputLabel>
            <TextField id="outlined-required" placeholder="Filtre alguma coluna..." type="search" onChange={onFilterTextChange} />
        </Box>
        </Box>
    );
};

export default Filter;