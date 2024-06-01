import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { Modal, Box, Grid, Paper } from "@mui/material";
import {
  PivotTable,
  IndicatorChart,
  PieChart,
  BarChart,
} from "@sisense/sdk-ui";
import * as DM from "../../../data/data.ts";
import { filterFactory, measureFactory } from "@sisense/sdk-data";
import ChatPage from "./../../chat/ChatPage";

function FoodDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [foodName, setFoodName] = useState("Food Name");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Extracting QR Code from URL parameters or default to '1881'
  const queryParams = new URLSearchParams(location.search);
  const qrCode = queryParams.get("qrCode") || "1881";

  const handleChatButtonClick = () => {
    handleOpen();
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Product Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <IndicatorChart
                dataSet={DM.DataSource}
                dataOptions={{
                  value: [
                    {
                      column: measureFactory.sum(DM.data.calcium),
                    },
                  ],
                }}
                filters={filterFactory.equals(DM.data.barcode, qrCode)}
                styleOptions={{
                  indicatorComponents: {
                    title: {
                      shouldBeShown: true,
                      text: "Calcium",
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
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <IndicatorChart
                dataSet={DM.DataSource}
                dataOptions={{
                  value: [
                    {
                      column: measureFactory.sum(DM.data.vitamin_c),
                    },
                  ],
                }}
                filters={filterFactory.equals(DM.data.barcode, qrCode)}
                styleOptions={{
                  indicatorComponents: {
                    title: {
                      shouldBeShown: true,
                      text: "Vitamin C",
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
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <BarChart
                dataSet={DM.DataSource}
                dataOptions={{
                  category: [DM.output.nutrition_type],
                  value: [measureFactory.sum(DM.output.nutrition_value)],
                }}
                filters={filterFactory.equals(DM.data.barcode, qrCode)}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <PieChart
                dataSet={DM.DataSource}
                dataOptions={{
                  category: [DM.output.nutrition_type],
                  value: [measureFactory.sum(DM.output.nutrition_value)],
                }}
                styleOptions={{
                  subtype: "pie/donut",
                }}
              />
            </Paper>
          </Grid>

       
        </Grid>
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ChatPage />
      </Modal>
    </Container>
  );
}

export default FoodDetail;
