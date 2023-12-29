import { Content } from "./components/content";
import { Header } from "./components/header";
import "./style.css";

export function Home() {
  return (
    <main className="container-home">
      <Header />
      <Content />
    </main>
  );
}
