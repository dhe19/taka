import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurService from "./components/OurService";
import Popular from "./components/Popular/Popular";
import Menu from "./components/Menu/Menu";
import ReviewCard from "./components/card/ReviewCard";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurService />
      <Popular />
      <Menu />
      <Comments />
    </div>
  );
}

export default App;
