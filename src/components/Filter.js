import React from 'react';

import { Box, FormControl, InputLabel, Select, MenuItem, 
         TextField, useMediaQuery, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

import DownloadButton from './BaixarPlanilha';

const Filter = ({ pageSize, onPageSizeChange, onFilterTextChange, onExportClick }) => {

  const isScreenSmall = useMediaQuery('(max-width:850px)');

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
        <Box flexDirection="column" sx={{ marginRight: '30px' }}>
            <InputLabel>Filtrar: </InputLabel>
            <TextField id="outlined-required" placeholder="Filtre as informações..." type="search" onChange={onFilterTextChange} />
        </Box>
        <Box flexDirection="column" sx={{ marginRight: '10px' }}>
            <DownloadButton onExportClick={onExportClick} />
        </Box>
        <Box sx={{ marginLeft: 'auto' }}>
            <Link to="/cadastro">
                <Button sx={{ fontSize: '1rem', marginTop: '22px', 
                            height: '55px', backgroundColor: '#D97935',
                            '&:hover': {
                              backgroundColor: '#b96223', 
                            },}} 
                        size="large" variant="contained" endIcon={<AddIcon />}
                >
                    Adicionar Dados
                </Button>
            </Link>
        </Box>
    </Box>
  );
};

export default Filter;