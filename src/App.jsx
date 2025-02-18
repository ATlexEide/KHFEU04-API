import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Songs from "./pages/Songs";
import Episodes from "./pages/Episodes";
import Comics from "./pages/Comics";
import Information from "./pages/Information";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="my-little-wiki/" element={<Home />} />
        <Route path="my-little-wiki/characters" element={<Characters />} />
        <Route path="my-little-wiki/songs" element={<Songs />} />
        <Route path="my-little-wiki/episodes" element={<Episodes />} />
        <Route path="my-little-wiki/comics" element={<Comics />} />
        <Route
          path="my-little-wiki/characters/:id"
          element={<Information category="character" />}
        />
        <Route
          path="my-little-wiki/songs/:id"
          element={<Information category="song" />}
        />
        <Route
          path="my-little-wiki/episodes/:id"
          element={<Information category="episode" />}
        />
        <Route
          path="my-little-wiki/comics/:id"
          element={<Information category="comics-story" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
