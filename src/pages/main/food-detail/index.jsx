import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Modal, Box, Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

import ChatPage from './../../chat/ChatPage';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};

function FoodDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState('');
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const [messages, setMessages] = useState([]);
  // const handleSendMessage = () => {
  //   setMessages([...messages, message]);
  //   setMessage('');
  // };
  const [messages, setMessages] = useState([
    { content: 'Hello! How can I assist you today?', sender: 'ChatGPT' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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

      </Box>
      <IconButton
        color="primary"
        onClick={handleChatButtonClick}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
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
