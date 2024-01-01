import {
  Button,
  Card,
  Empty,
  List,
  Modal,
  Select,
  Space,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import {
  EditOutlined,
  EyeOutlined,
  LeftOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useAwardId } from "./hooks/useAwardId";

import "./style.css";

export function AwardsAttach() {
  const {
    data,
    games,
    award,
    modal,
    setData,
    navigate,
    setModal,
    categories,
    selectedCategory,
    setSelectedCategory,
  } = useAwardId();

  return (
    <main>
      <div className="award-title">
        <Button
          onClick={() => navigate("/admin/awards")}
          type="text"
          icon={<LeftOutlined />}
        ></Button>
        <Typography.Title level={4}>{award?.title}</Typography.Title>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            onClick={() =>
              setModal((prev) => ({ ...prev, selectCategories: true }))
            }
          >
            <PlusOutlined />
            <span>Adicionar categorias</span>
          </Button>
        </Card>
        <List
          footer={false}
          rowKey={(data) => data.id}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            column: 6,
          }}
          locale={{
            emptyText: (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Nenhuma categoria adicionada"
              />
            ),
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "space-between",
                  height: "196px",
                }}
                actions={[
                  <Tooltip key="edit" title="Editar jogos">
                    <EditOutlined
                      onClick={() => {
                        setSelectedCategory(item.id);
                        setModal((prev) => ({ ...prev, selectGames: true }));
                      }}
                    />
                  </Tooltip>,
                  <Tooltip key="see" title="Visualizar jogos selecionados">
                    <EyeOutlined
                      onClick={() => {
                        setSelectedCategory(item.id);
                        setModal((prev) => ({ ...prev, viewGames: true }));
                      }}
                    />
                  </Tooltip>,
                ]}
              >
                <div>
                  <Typography.Title level={5}>{item.name}</Typography.Title>
                  <Typography.Paragraph ellipsis={{ rows: 3 }}>
                    {item.description}
                  </Typography.Paragraph>
                </div>

                <Space direction="horizontal">
                  <strong>Jogos adicionados</strong>
                  <Tag color="blue">{item.games?.length}</Tag>
                </Space>
              </Card>
            </List.Item>
          )}
        />
      </div>

      <Modal
        title="Selecione as categorias"
        open={modal.selectCategories}
        onCancel={() =>
          setModal((prev) => ({ ...prev, selectCategories: false }))
        }
        onOk={() => setModal((prev) => ({ ...prev, selectCategories: false }))}
        okText="Continuar"
        cancelText="Voltar"
      >
        <Select
          style={{ width: "100%" }}
          mode="multiple"
          allowClear
          placeholder="Selecione as categorias"
          onChange={(value: string[]) => {
            const items = categories
              .filter((item) => value.includes(item.id))
              .map((item) => ({ ...item, games: [] }));
            setData(items);
          }}
          options={categories.map((category) => ({
            label: category.name,
            value: category.id,
          }))}
        />
      </Modal>

      <Modal
        destroyOnClose
        title="Selecione os jogos"
        open={modal.selectGames}
        onCancel={() => setModal((prev) => ({ ...prev, selectGames: false }))}
        onOk={() => setModal((prev) => ({ ...prev, selectGames: false }))}
        okText="Continuar"
        cancelText="Voltar"
      >
        <Select
          style={{ width: "100%" }}
          mode="multiple"
          allowClear
          placeholder="Selecione os jogos"
          onChange={(value: string[]) => {
            setData((prev) => {
              const categoryIndex = prev.findIndex(
                (item) => item.id === selectedCategory
              );

              prev[categoryIndex].games = value;

              return prev;
            });
          }}
          options={games.map((game) => ({
            label: game.title,
            value: game.id,
          }))}
        />
      </Modal>

      <Modal
        destroyOnClose
        title="Jogos selecionados"
        open={modal.viewGames}
        onCancel={() => setModal((prev) => ({ ...prev, viewGames: false }))}
        onOk={() => setModal((prev) => ({ ...prev, viewGames: false }))}
        okText="Continuar"
        cancelText="Voltar"
      >
        <List
          locale={{
            emptyText: (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Nenhuma jogo adicionado"
              />
            ),
          }}
          dataSource={games.filter((game) => {
            const categoryIndex = data.findIndex(
              (item) => item.id === selectedCategory
            );

            return data[categoryIndex]?.games?.includes(game.id);
          })}
          renderItem={(item) => <List.Item>{item?.title}</List.Item>}
        />
      </Modal>
    </main>
  );
}
