import { Button, Col, Input, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { FormModal } from "./components/form";
import "./style.css";
import { useCategory } from "./hooks";
import { TableCategory } from "./components/table";
import { TooltipCategories } from "./components/tooltip";

const { Search } = Input;

export function Categories() {
  const { onSearch, setIsModalOpen } = useCategory()

  return (
    <main className="container-categories">
      <Row gutter={[24, 24]} justify={"end"}>
        <Col>
          <Button type="primary" className="button-new-category" onClick={() => setIsModalOpen(true)} icon={<PlusOutlined />}>
            Novo
          </Button>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col sm={24} md={16} lg={12} xl={8}>
          <Search placeholder="Pesquise pelo nome" onSearch={onSearch} />
        </Col>
        <Col >
          <TooltipCategories />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <TableCategory />
        </Col>
      </Row>
      <FormModal />
    </main >
  );
}
