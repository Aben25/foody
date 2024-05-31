import React, { useState, useCallback } from "react";
import Scanner from "./scanner";

const QrScanner = () => {
  const [results, setResults] = useState([]);

  const _onDetected = useCallback((result) => {
    setResults([result]);
    window.location.href = `/food-detail?qrCode=${result.codeResult.code}`;
  }, []);

  return (
    <div style={{ margin: "30px" }}>
      <p>Barcode Scanner</p>
      <Scanner onDetected={_onDetected} />
      <p>{results[0] ? results[0].codeResult.code : "No data scanned"}</p>
    </div>
  );
};

export default QrScanner;
