import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

export function Header() {
  return (
    <header className="container-header">
      <div>
        <div className="container-logo">
          <img src="./award-logo.png" alt="" />
          <h1>Awards</h1>
        </div>
        <div className="container-logo">
          <Link to={"/admin"}>
            {" "}
            <Button icon={<UserOutlined />} type="primary">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
