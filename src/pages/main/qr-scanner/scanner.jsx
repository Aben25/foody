import React, { useEffect, useCallback } from "react";
import Quagga from "quagga";

const Scanner = ({ onDetected }) => {
  const _onDetected = useCallback(
    (result) => {
      onDetected(result);
    },
    [onDetected]
  );

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          constraints: {
            width: window.innerHeight*0.4,
            height: window.innerHeight*0.2,
            facingMode: "environment",
          },
        },
        locator: {
          halfSample: true,
          patchSize: "large", // x-small, small, medium, large, x-large
          debug: {
            showCanvas: true,
            showPatches: false,
            showFoundPatches: false,
            showSkeleton: false,
            showLabels: false,
            showPatchLabels: false,
            showRemainingPatchLabels: false,
            boxFromPatches: {
              showTransformed: true,
              showTransformedBox: true,
              showBB: true,
            },
          },
        },
        numOfWorkers: 4,
        decoder: {
          readers: ["code_128_reader"],
          debug: {
            drawBoundingBox: true,
            showFrequency: true,
            drawScanline: true,
            showPattern: true,
          },
        },
        locate: true,
      },
      function (err) {
        if (err) {
          return console.log(err);
        }
        Quagga.start();
      }
    );

    Quagga.onDetected(_onDetected);

    return () => {
      Quagga.offDetected(_onDetected);
    };
  }, [_onDetected]);

  return (
    <div
      id="interactive"
      className="viewport"
      style={{
        overflow: 'hidden', // Ensures content doesn't overflow the rounded corners
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    ></div>
  );
};

export default Scanner;
