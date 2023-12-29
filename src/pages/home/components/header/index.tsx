import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

export function Header() {
  return (
    <header className="container-header">
      <div>
        <img width={96} src="./logo.svg" alt="" />
        <Link to={"/admin"}>
          {" "}
          <Button icon={<UserOutlined />} type="primary">
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
}
