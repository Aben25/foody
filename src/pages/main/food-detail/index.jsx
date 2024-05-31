import React from "react";
import { useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Chart, IndicatorChart, SisenseContextProvider } from "@sisense/sdk-ui";
import * as DM from "../../../data/data.ts";
import { filterFactory, measureFactory } from "@sisense/sdk-data";

function FoodDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleChatButtonClick = () => {
    navigate("/chat");
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Product Details
        </Typography>
        <IndicatorChart
          dataSet={DM.DataSource}
          dataOptions={{
            value: [
              {
                column: measureFactory.sum(DM.data.ecoscore_score),
              },
            ],
            secondary: [],
            min: [measureFactory.constant(0)],
            max: [measureFactory.constant(125000000)],
          }}
          filters={filterFactory.contains(DM.data.code, 225)}
          styleOptions={{
            indicatorComponents: {
              title: {
                shouldBeShown: true,
                text: "Ecoscore score",
              },
              secondaryTitle: {
                text: "",
              },
              ticks: {
                shouldBeShown: true,
              },
              labels: {
                shouldBeShown: true,
              },
            },
          }}
        />
      </Box>
      <IconButton
        color="primary"
        onClick={handleChatButtonClick}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          bgcolor: "primary.main",
          color: "white",
          "&:hover": {
            bgcolor: "primary.dark",
          },
          width: 56,
          height: 56,
          borderRadius: "50%",
        }}
      >
        <ChatIcon />
      </IconButton>
    </Container>
  );
}

export default FoodDetail;
