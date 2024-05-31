import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    <div style={{ margin: "30px" }}>
      <p>QR Code Scanner</p>
      <Scanner onDetected={_onDetected} />
      <p>{results[0] ? results[0].codeResult.code : "No data scanned"}</p>
    </div>
  );
};

export default QrScanner;
