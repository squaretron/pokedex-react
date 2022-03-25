import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";

function App() {
    return (
        <Router>
            <h1>Darsh's Pokedex</h1>

            {/* Routes */}
            <Routes>
                <Route path="/" exact element={<Pokedex />} />
                <Route path="/pokemon/:id" element={<Pokemon />} />
            </Routes>
        </Router>
    );
}

export default App;
