import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAward } from "../../services/http/awards";
import { Award } from "../../types";
import { Button, Card, List, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import "./style.css";

const data = [
  {
    title: "Melhor jogo do ano",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
];

export function AwardsAttach() {
  const navigate = useNavigate();
  const { awardId } = useParams();

  const [award, setAward] = useState<Award | undefined>(undefined);

  useEffect(() => {
    if (!awardId) {
      return;
    }

    getAward(awardId).then((data) => setAward(data));
  }, [awardId]);

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

      <div>
        <div>
          <Typography.Title level={5}>Categorias</Typography.Title>
          <Button>Adicionar</Button>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card>{item.title}</Card>
            </List.Item>
          )}
        />
      </div>
    </main>
  );
}
