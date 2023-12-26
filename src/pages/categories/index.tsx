import { Button, Col, Input, Row, Table, Tooltip } from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";

import { FormModal } from "./components/form";
import "./style.css";
import { useCategory } from "./hooks";

const { Search } = Input;

export function Categories() {
  const { isModalOpen, onSearch, search, setIsModalOpen } = useCategory()
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
          <Tooltip>
            <Button icon={<ReloadOutlined />}>
              Atualizar
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Table
            dataSource={search}
            columns={[
              {
                dataIndex: "title",
                title: "Nome",
                sorter: (a, b) => a.title.localeCompare(b.title),
              },
              {
                dataIndex: "subTitle",
                title: "Descrição",
              },
            ]}
          />
        </Col>
      </Row>
      <FormModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </main>
  );
}
