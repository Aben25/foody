import React, { useState } from 'react';
import { BarcodeScanner } from 'react-barcode-scanner';
import 'react-barcode-scanner/polyfill';

const BarcodeScannerComponent = () => {
  const [barcodeData, setBarcodeData] = useState('');

  const handleDetected = (result) => {
    if (result) {
      setBarcodeData(result.text);
    }
  };

  return (
    <div style={{ width: '100%', height: '360px' }}>
      <BarcodeScanner
        onDetected={handleDetected}  // Correct prop name is onDetected
        options={{
          formats: ['qr_code', 'code_128'], // Add other formats as needed
          delay: 500, // Adjust the delay for more sensitive scanning
        }}
      />
      <p>Scanned Barcode Data: {barcodeData}</p>
    </div>
  );
};

export default BarcodeScannerComponent;
