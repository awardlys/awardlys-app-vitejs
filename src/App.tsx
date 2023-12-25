import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet, useNavigate, useLocation, redirect } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

export function App() {
  const navigate = useNavigate();
  const path = useLocation().pathname.split("/")[2];

  if (!path) {
    redirect("/admin/awards");
  }
  console.log();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            display: "flex",
            justifyContent: collapsed ? "center" : "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
          <span
            style={{
              opacity: collapsed ? 0 : 1,
              color: "white",
              display: collapsed ? "none" : "inline",
              transition: "opacity 1s ease-out",
            }}
          >
            Awardlys
          </span>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[path]}
          items={[
            {
              key: "awards",
              onClick: () => navigate("/admin/awards"),
              icon: <UserOutlined />,
              label: "Premiações",
            },
            {
              key: "categories",
              onClick: () => navigate("/admin/categories"),
              icon: <VideoCameraOutlined />,
              label: "Categorias",
            },
            {
              key: "games",
              onClick: () => navigate("/admin/games"),
              icon: <UploadOutlined />,
              label: "Jogos",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}></Header>
        <Content
          style={{
            margin: "24px 16px 0 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>Awardlys ©2024</Footer>
      </Layout>
    </Layout>
  );
}
