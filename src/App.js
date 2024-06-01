
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { QrCode } from '@mui/icons-material';
import FoodDetail from './pages/main/food-detail';
import QrScanner from './pages/main/qr-scanner';
import ChatPage from './pages/chat/ChatPage';


function App() {
  return (
    <Router>
    <Container>
    
    <Routes>
          <Route path="/" element={<QrScanner />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path='/food-detail' element={<FoodDetail />} />
         </Routes>
  </Container>
  </Router>
  );
}

export default App;
