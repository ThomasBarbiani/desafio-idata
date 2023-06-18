import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const BaixarPlanilha = ({ onExportClick }) => {
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const onExport = () => {
    setOpenConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setOpenConfirmation(false);
  };

  const handleClick = () => {
    onExportClick();
    handleConfirmationClose();
  };

  return (
    <>
      <Button
        sx={{ fontSize: '1rem', marginTop: '22px', height: '55px',
              backgroundColor: '#527186',
              '&:hover': {
                backgroundColor: '#435866', 
              }, }}
        size="large"
        variant="contained"
        endIcon={<DownloadIcon />}
        onClick={onExport}
      >
        Baixar Planilha
      </Button>
      <Dialog open={openConfirmation} onClose={handleConfirmationClose} maxWidth="sm" fullWidth>
          <DialogTitle>Confirmação de Download</DialogTitle>
              <DialogContent>
                <p>Tem certeza que deseja baixar a planilha?</p>
              </DialogContent>
          <DialogActions>
              <Button onClick={handleConfirmationClose} color="primary">
                Cancelar
              </Button>
              <Button onClick={handleClick} color="primary">
                Baixar
              </Button>
          </DialogActions>
      </Dialog>
    </>
  );
};

export default BaixarPlanilha;