import { Button, Modal, Space, Table, Tag } from "antd";
import { Award } from "../../../types";
import {
  ArrowRightOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useStoreAward } from "../store";
import { useCallback } from "react";
import { deleteAward } from "../../../services/http/awards";
import { useNavigate } from "react-router-dom";

interface AwardlysTableProps {
  search: Award[];
}

export function AwardlysTable({ search }: Readonly<AwardlysTableProps>) {
  const navigate = useNavigate();
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
            render: (status: string) => {
              const colors = {
                draft: "warning",
                active: "green",
                expired: "red",
              } as Record<string, string>;

              return <Tag color={colors[status]}>{status}</Tag>;
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
                  <Button
                    type="text"
                    title="Ativar"
                    icon={<ArrowRightOutlined />}
                    onClick={() => navigate(`/admin/awards/${id}`)}
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
