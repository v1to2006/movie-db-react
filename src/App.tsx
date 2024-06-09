import NavigationBar from "./components/Navbar";
import { z } from "zod";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

const responseCardType = z.object({
  id: z.number(),
  title: z.string(),
  release_date: z.string(),
  poster_path: z.string().or(z.null()),
});

export const responseType = z.object({
  page: z.number(),
  results: z.array(responseCardType),
  total_pages: z.number(),
  total_results: z.number(),
});

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
};

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchQuery" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
