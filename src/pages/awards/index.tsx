import { AwardlysTable } from "./Components/table";
import "./style.css";
import Search from "antd/es/input/Search";
import { AwardlysModal } from "./Components/modal";
import { Button, Col, Row, Tooltip, message } from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { useAwards } from "./Hooks/useAwards";
import { useState } from "react";
import { useStoreAward } from "./Store";

export function Awards() {
  const { setHasFetch, setOpen, open, search, setSearch } = useStoreAward();
  const { handleSearch } = useAwards();
  const [refresh, setRefresh] = useState(true);
  const canRefresh = () => {
    if (!refresh) {
      return;
    }

    setRefresh(false);
    setHasFetch(false);
    message.info("Jogos atualizados");

    setTimeout(() => setRefresh(true), 10000);
  };

  console.log(search);

  return (
    <main className="div-container">
      <Row gutter={[24, 24]} justify="end">
        <Col>
          <Button
            type="primary"
            onClick={() => setOpen(true)}
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
            onSearch={(value) => {
              setSearch(value);
            }}
          />
        </Col>
        <Col>
          <Tooltip
            title={
              !refresh
                ? "Aguarde 10 segundos até poder atualizar novamente"
                : null
            }
          >
            <Button
              disabled={!refresh}
              icon={<ReloadOutlined />}
              onClick={canRefresh}
            >
              Atualizar
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <AwardlysTable search={handleSearch(search)} />
        </Col>
      </Row>
      <AwardlysModal open={open} setOpen={(value) => setOpen(value)} />
    </main>
  );
}
