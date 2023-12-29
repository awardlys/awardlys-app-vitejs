import { useState } from "react";
import { useStoreCategory } from "../store";
import { deleteCategory } from "../../../services/http/categories";
import { Button, Modal, Space } from "antd";
import { Category } from "../../../types";
import { ColumnsType } from "antd/es/table";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

export function useTableCategories() {
  const { setTryAgain, loading, setCategoryEdit, setIsModalOpen } =
    useStoreCategory();
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDelete = async (id: string) => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: "Deseja realmente excluir o jogo?",
      onOk: async () => {
        setDeleteLoading(true);
        await deleteCategory(id);
        setDeleteLoading(false);
        setTryAgain(true);
      },
      onCancel: () => Modal.destroyAll(),
      okButtonProps: {
        loading: deleteLoading,
      },
    });
  };

  const handleEdit = (category: Category) => {
    setCategoryEdit(category);
    setIsModalOpen(true);
  };

  const columns: ColumnsType<Category> = [
    {
      dataIndex: "name",
      title: "Título",
    },
    {
      dataIndex: "description",
      title: "Descrição",
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
  return { columns, loading };
}
