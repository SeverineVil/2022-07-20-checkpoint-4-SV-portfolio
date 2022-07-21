import "./styles/Home.css";
import Neon from "../components/Neon";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Neon />
    </div>
  );
}
