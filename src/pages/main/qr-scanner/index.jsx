import React, { useState, useCallback, useEffect } from "react";
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
  }, []);

  useEffect(() => {
    if (results.length > 0) {
      navigate("/food-detail", { state: { qrCode: results[0].codeResult.code } });
    }
  }, [results, navigate]);

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
              {results[0] ? results[0].codeResult.code : "No data scanned"}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default QrScanner;
