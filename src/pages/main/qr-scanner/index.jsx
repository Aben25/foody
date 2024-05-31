import React, { useState, useCallback } from "react";
import Scanner from "./scanner";
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const QrScanner = () => {
  const [results, setResults] = useState([]);

  const _onDetected = useCallback((result) => {
    setResults([result]);
    window.location.href = `/food-detail?qrCode=${result.codeResult.code}`;
  }, []);

  return (
    <Container>
    <Box>
      <p>Barcode Scanner</p>
      <Scanner onDetected={_onDetected} />
    </Box>
    </Container>
  );
};

export default QrScanner;
