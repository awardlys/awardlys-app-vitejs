import { Button, Col, Input, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { FormModal } from "./components/form";
import "./style.css";
import { useCategory } from "./hooks";
import { TableCategory } from "./components/table";
import { TooltipCategories } from "./components/tooltip";
import { useStoreCategory } from "./store";
import { useState } from "react";

const { Search } = Input;

export function Categories() {
  const { setIsModalOpen } = useStoreCategory();
  const [search, setSearch] = useState("");
  const { onSearch } = useCategory();

  return (
    <main className="container-categories">
      <Row gutter={[24, 24]} justify={"end"}>
        <Col>
          <Button
            type="primary"
            className="button-new-category"
            onClick={() => setIsModalOpen(true)}
            icon={<PlusOutlined />}
          >
            Novo
          </Button>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col sm={24} md={16} lg={12} xl={8}>
          <Search
            placeholder="Busque pelo nome"
            onSearch={(value) => setSearch(value)}
          />
        </Col>
        <Col>
          <TooltipCategories />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <TableCategory search={onSearch(search)} />
        </Col>
      </Row>
      <FormModal />
    </main>
  );
}
