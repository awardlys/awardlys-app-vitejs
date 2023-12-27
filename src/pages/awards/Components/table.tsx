import { Button, Modal, Space, Table, Tag } from "antd";
import { Award } from "../../../types";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useStoreAward } from "../Store";
import { useCallback } from "react";
import { deleteAward } from "../../../services/http/awards";

interface AwardlysTableProps {
  search: Award[];
}

export function AwardlysTable({ search }: Readonly<AwardlysTableProps>) {
  const { setLoading, setHasFetch, loading, setEditAward, setOpen } =
    useStoreAward();

  const handleEdit = useCallback(
    async (award: Award) => {
      setEditAward(award);
      setOpen(true);
    },
    [setEditAward, setOpen]
  );

  const handleDelete = useCallback(
    async (id: string): Promise<void> => {
      Modal.confirm({
        icon: <ExclamationCircleOutlined />,
        content: "Deseja realmente excluir o jogo?",
        onOk: async () => {
          setLoading(true);
          await deleteAward(id);
          setLoading(false);
          setHasFetch(false);
        },
        onCancel: () => Modal.destroyAll(),
        okButtonProps: {
          loading,
        },
      });
    },
    [loading, setHasFetch, setLoading]
  );
  return (
    <div>
      <Table
        dataSource={search}
        columns={[
          {
            dataIndex: "title",
            title: "Titulo",
            sorter: (a, b) => a.title.localeCompare(b.title),
          },
          {
            dataIndex: "subTitle",
            title: "Plataforma",
          },
          {
            dataIndex: "createdAt",
            title: "Data de criação",
          },
          {
            dataIndex: "status",
            title: "Status da Premiação",
            render: (status) => {
              return (
                <Tag color={status ? "green" : "red"}>
                  {status ? "Ativo" : "Expirado"}
                </Tag>
              );
            },
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
        ]}
      />
    </div>
  );
}
