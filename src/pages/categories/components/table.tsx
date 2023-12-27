import { Table } from "antd";
import { TableCategoryProps } from "../../../types";
import { useTableCategories } from "../hooks/useTableCategories";

export function TableCategory({ search }: Readonly<TableCategoryProps>) {
  const { columns, loading } = useTableCategories();

  return (
    <Table
      rowKey={(record) => record.id}
      loading={loading}
      dataSource={search}
      columns={columns}
    />
  );
}
