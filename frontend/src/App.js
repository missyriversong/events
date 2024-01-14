import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Container } from "react-bootstrap";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";


function App() {
  return (
    <>
    <Router>
    <Header />
    <main>
    <Container>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/event:id" element={<ProductScreen/>} />
      </Routes>
    </Container>
    </main>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
