import { Empty, Table } from "antd";
import { useGameTable } from "../hooks/useGameTable";
import { Game } from "../../../types";

type Props = {
  datasource: Game[];
  loading: boolean;
};

export const GameTable = ({ datasource, loading }: Props) => {
  const { columns } = useGameTable();

  return (
    <Table
      rowKey={(record) => record.id}
      loading={loading}
      dataSource={datasource}
      columns={columns}
      locale={{
        emptyText: (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Nenhum jogo encontrado"
          />
        ),
      }}
    />
  );
};
