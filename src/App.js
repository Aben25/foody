import "./App.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { QrCode } from "@mui/icons-material";
import FoodDetail from "./pages/main/food-detail";
import QrScanner from "./pages/main/qr-scanner";

import { SisenseContextProvider } from "@sisense/sdk-ui";

function App() {
  return (
    <SisenseContextProvider
      url="https://artba.sisense.com" // replace with the URL of your Sisense instance
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWQ1YzBjZmRkYWQxZGE5MTUxYjNjOTE5IiwiYXBpU2VjcmV0IjoiMTYxNmQxYWUtOGFiMS03YzcxLTAxZjYtZTViMmY5M2Y1YmZlIiwic3NvVG9rZW4iOiIwNTQ0NzI0YS05YTI0LTQ0ZDItMjEyOC1hNGM4NWY2OGUzY2MiLCJhbGxvd2VkVGVuYW50cyI6WyI2MzA4NzAyNTEwN2M0YjAwMWJkYmNkOWIiXSwidGVuYW50SWQiOiI2MzA4NzAyNTEwN2M0YjAwMWJkYmNkOWIifQ.0YggGIMxLaK6VmmSvtWFLkNlDL7CjodAWxV6MAN2qFU"
    >
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<QrScanner />} />
            <Route path="/food-detail" element={<FoodDetail />} />
          </Routes>
        </Container>
      </Router>
    </SisenseContextProvider>
  );
}

export default App;
