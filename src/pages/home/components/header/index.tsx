import { Button } from "antd";
import "./style.css";
import { UserOutlined } from "@ant-design/icons";

export function Header() {
  return (
    <header className="container-header">
      <div className="header-left">
        <img src="./icons8.png" alt="" />
        <h1>Awards</h1>
      </div>
      <div className="header-right">
        <Button icon={<UserOutlined />} type="primary">
          Login
        </Button>
      </div>
    </header>
  );
}
