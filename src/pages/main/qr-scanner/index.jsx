import React, { useState, useCallback } from "react";
import { Container, TextField, Box, InputAdornment, Dialog, DialogContent, DialogActions, IconButton, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Scanner from "./scanner";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const QrScanner = () => {
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const _onDetected = useCallback((result) => {
    setResults([result]);
    window.location.href = `/food-detail?qrCode=${result.codeResult.code}`;
  }, []);

  const handleSearchClick = () => {
    if (searchValue.trim() !== "") {
      setError("");
      window.location.href = `/food-detail?qrCode=${searchValue}`;
    } else {
      setError("Please enter a search value");
    }
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Container 
      sx={{ 
        width:'100dvw',
        height: '100dvh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}
    >
      <Box
        sx={{
          width: "400px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: 3,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2vw'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>Search To get Detail</Typography>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          error={!!error}
          helperText={error}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button 
          style={{ backgroundColor: '#198754', color: 'white', width: '95%' }} 
          onClick={handleSearchClick}
        >
          Search
        </Button>
        <Grid container spacing={2} sx={{ width: '100%' }}>
          <Grid item xs={12} sm={6}>
            <Button 
              style={{ backgroundColor: '#006994', color: 'white', width: '100%' }} 
              onClick={handleDialogOpen}
            >
              Scan Barcode
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button 
              style={{ backgroundColor: '#006994', color: 'white', width: '100%' }} 
              onClick={handleDialogOpen}
            >
              Scan QR
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="md" fullWidth>
        <DialogActions>
          <IconButton onClick={handleDialogClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogContent>
          <Scanner onDetected={_onDetected} />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default QrScanner;
