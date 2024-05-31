import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Scanner from "./scanner";

const QrScanner = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const _onDetected = useCallback((result) => {
    setResults([result]);
    navigate("/food-detail", { state: { qrCode: result.codeResult.code } });
  }, [navigate]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Paper elevation={3} sx={{ p: 2 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              my: 2
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              QR Code Scanner
            </Typography>
            <Scanner onDetected={_onDetected} />
            <Typography variant="body1" sx={{ mt: 2 }}>
              {results.length > 0 ? "Scanned" : "No data scanned"}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default QrScanner;
