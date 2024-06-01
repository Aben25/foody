
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Modal, Box } from '@mui/material';

import {
  Table,
  IndicatorChart,
  SisenseContextProvider,
} from "@sisense/sdk-ui";
import * as DM from "../../../data/data.ts";
import { filterFactory, measureFactory } from "@sisense/sdk-data";


import ChatPage from './../../chat/ChatPage';


function FoodDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Extracting QR Code from URL parameters or default to '2255'
  const queryParams = new URLSearchParams(location.search);
  const qrCode = queryParams.get('qrCode') || '255';


  const handleChatButtonClick = () => {
    // navigate('/chat');
    handleOpen();
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
          }}
          filters={filterFactory.equals(DM.data.code, qrCode)} // Using QR code as a filter with default
          styleOptions={{
            indicatorComponents: {
              title: {
                shouldBeShown: true,
                text: "Ecoscore Score",
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
      <Table
        dataSet={DM.DataSource}
        dataOptions={{
          columns: [
            {
              column: DM.data.product_name,
              name: "Product Name",
            },
            DM.data.energy_100g,
          ],
        }}
        filters={filterFactory.equals(DM.data.code, qrCode)} // Using QR code as a filter with default
        styleOptions={{
          rowsPerPage: 12,
          height: 420,
        }}
      />
      </Box>
      <IconButton
        color="primary"
        onClick={handleChatButtonClick}
        sx={{
          position: 'fixed',
          bottom: 50,
          right: 50,
          bgcolor: 'primary.main',
          color: 'white',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
          width: 56,
          height: 56,
          borderRadius: '50%',
        }}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >

          <ChatPage />


        </Modal>
        <ChatIcon />
      </IconButton>
    </Container>
  );
}

export default FoodDetail;