import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Col, Input, Modal, Row, Tooltip, message } from "antd";

import "./style.css";
import { CreateGameForm } from "./components/form";
import { useGame } from "./hooks/useGames";
import { GameTable } from "./components/table";
import { useState } from "react";
import { useStoreGame } from "./store";

export function Games() {
  const {
    open,
    setOpen,
    loading,
    search,
    setSearch,
    setEditGame,
    editGame,
    setHasFetch,
  } = useStoreGame();

  const { handleSearch } = useGame();

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

  return (
    <main className="container">
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
          <Input.Search
            placeholder="Busque pelo nome"
            onSearch={(value) => setSearch(value)}
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
          <GameTable datasource={handleSearch(search)} loading={loading} />
        </Col>
      </Row>

      <Modal
        title={editGame?.id ? "Editando " + editGame?.title : "Criar novo jogo"}
        destroyOnClose
        open={open}
        footer={false}
        onCancel={() => {
          setEditGame(undefined);
          setOpen(false);
        }}
      >
        <CreateGameForm />
      </Modal>
    </main>
  );
}
