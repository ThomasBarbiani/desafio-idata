import React from 'react';
import { useState } from 'react';

import { Box, FormControl, InputLabel, Select, MenuItem, 
        TextField, useMediaQuery, Button, DialogActions, 
        DialogContent, DialogTitle, Dialog } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';

const Filter = ({ pageSize, onPageSizeChange, onFilterTextChange, onExportClick }) => {
    
    const isScreenSmall = useMediaQuery('(max-width:850px)');
    const [openConfirmation, setOpenConfirmation] = useState(false);

    const onExport = () => {
        setOpenConfirmation(true);
    };

    const handleConfirmationClose = () => {
        setOpenConfirmation(false);
    };

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
            <Box flexDirection="column" sx={{ marginRight: "30px" }}>
                <InputLabel>Filtrar: </InputLabel>
                <TextField id="outlined-required" placeholder="Filtre as informações..." type="search" onChange={onFilterTextChange} />
            </Box>
            <Box flexDirection="column" sx={{ marginRight: "10px" }}>
                <Button
                    sx={{ fontSize: '1rem', marginTop: '22px', height: '55px' }}
                    size="large"
                    variant="contained"
                    endIcon={<DownloadIcon />}
                    onClick={onExport}
                >
                    Baixar Planilha
                </Button>
            </Box>
            <Dialog open={openConfirmation} onClose={handleConfirmationClose} maxWidth="sm" fullWidth>
                <DialogTitle>Confirmação de Download</DialogTitle>
                <DialogContent>
                    <p>Tem certeza que deseja baixar a planilha?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmationClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={onExportClick} color="primary">
                        Baixar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Filter;