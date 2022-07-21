import "./styles/Home.css";
import Header from "../components/Header";
import Light from "../components/Light";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Light />
    </div>
  );
}
