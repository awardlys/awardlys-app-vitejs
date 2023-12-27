import { useState } from "react";
import { Content } from "./components/content";
import { Header } from "./components/header";
import "./style.css";
import { Button } from "antd";
import { BulbFilled, BulbTwoTone } from "@ant-design/icons";

export function Home() {
  const [mode, setMode] = useState(false);
  return (
    <main className={`container-home ${mode ? "dark-mode" : ""}`}>
      <Button
        type={mode ? "default" : "primary"}
        icon={mode ? <BulbTwoTone /> : <BulbFilled />}
        onClick={() => setMode(!mode)}
      />
      <Header />
      <Content />
    </main>
  );
}
