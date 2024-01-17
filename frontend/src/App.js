import { Container } from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomeScreen from "./screens/HomeScreen.js";
import EventScreen from "./screens/EventScreen.js";

// remember to add "/" for /event/:id
 
function App() {
  return (
    <>
    <Router>
    <Header />
    <main>
    <Container>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/event/:id" element={<EventScreen/>} />
      </Routes>
    </Container>
    </main>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
