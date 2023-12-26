import { useCallback, useMemo, useState } from "react";
import { ColumnsType } from "antd/es/table";
import { Game } from "../../../types";
import { Button, Modal, Space } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { deleteGame } from "../../../services/http/games";
import { useStoreGame } from "../store";

type ColumnProps = {
  handleDelete: (id: string) => Promise<void>;
  handleEdit: (game: Game) => Promise<void>;
};

export const useGameTable = () => {
  const [loading, setLoading] = useState(false);
  const { setHasFetch, setEditGame, setOpen } = useStoreGame();

  const handleDelete = useCallback(
    async (id: string): Promise<void> => {
      Modal.confirm({
        icon: <ExclamationCircleOutlined />,
        content: "Deseja realmente excluir o jogo?",
        onOk: async () => {
          setLoading(true);
          await deleteGame(id);
          setLoading(false);
          setHasFetch(false);
        },
        onCancel: () => Modal.destroyAll(),
        okButtonProps: {
          loading,
        },
      });
    },
    [loading, setHasFetch]
  );

  const handleEdit = useCallback(
    async (game: Game) => {
      setEditGame(game);
      setOpen(true);
    },
    [setEditGame, setOpen]
  );

  const columns = ({
    handleDelete,
    handleEdit,
  }: ColumnProps): ColumnsType<Game> => [
    {
      dataIndex: "title",
      title: "Título",
    },
    {
      dataIndex: "platform",
      title: "Plataforma",
    },
    {
      dataIndex: "createdAt",
      title: "Data de criação",
    },
    {
      dataIndex: "id",
      width: 80,
      render: (id: string, record) => {
        return (
          <Space>
            <Button
              type="text"
              title="Excluir"
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(id)}
            />
            <Button
              type="text"
              title="Editar"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
            />
          </Space>
        );
      },
    },
  ];

  const values = useMemo(
    () => ({ columns: columns({ handleDelete, handleEdit }) }),
    [handleDelete, handleEdit]
  );

  return values;
};
