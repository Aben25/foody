import React from "react";
import { Box } from "@mui/material";
import { IndicatorChart } from "@sisense/sdk-ui";
import { measureFactory } from "@sisense/sdk-data";

// Updated Indicator component
const Indicator = ({
  title,
  imeasure,
  dataSource,
  color,
  filters,
  primaryValueFormat,
  SecondaryValueFormat,
  ShowSecondaryValue,
  SecondaryValue, // Accept SecondaryValue as a prop
  SecondaryValueTitle,
}) => {
  return (
    <Box
      sx={{
        borderRadius: 3,
        boxShadow: 1,
        backgroundColor: "white",
        p: 2,
        mr: 2,
      }}
    >
      <IndicatorChart
        dataSet={dataSource}
        dataOptions={{
          value: [
            {
              column: imeasure,
              color: color,
              numberFormatConfig: { name: primaryValueFormat },
            },
          ],
          secondary:
            ShowSecondaryValue && SecondaryValue
              ? [
                  {
                    column: SecondaryValue, 
                    color: "red",
                    
                  },
                ]
              : [],
        }}
        styleOptions={{
          indicatorComponents: {
            title: { shouldBeShown: true, text: title },
            secondaryTitle: {
              shouldBeShown: ShowSecondaryValue && SecondaryValue,
              text: SecondaryValueTitle,
              

      
            },
          },
        }}
        filters={filters}
      />
    </Box>
  );
};

export default Indicator;
