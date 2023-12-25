import { Button, Form, Input, Select, Space, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useCreateGameForm } from "../hooks/useCreateGameForm";
import { Game } from "../../../types";
import { useEffect } from "react";
import { useStoreGame } from "../store";

const { Option } = Select;

export const CreateGameForm = () => {
  const { onFinish } = useCreateGameForm();
  const { loading, editGame } = useStoreGame();
  const [form] = Form.useForm<Game>();

  useEffect(() => {
    if (!editGame) {
      return;
    }

    form.setFieldValue("title", editGame.title);
    form.setFieldValue("description", editGame.description);
    form.setFieldValue("platform", editGame.platform);
    form.setFieldValue("image_url", editGame.image_url);
  }, [editGame, form]);

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Nome do jogo"
        name="title"
        hasFeedback
        rules={[
          { required: true, message: "Por favor, insira o nome do jogo" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Descrição"
        name="description"
        rules={[
          { required: true, message: "Por favor, insira a descrição do jogo" },
        ]}
      >
        <Input.TextArea rows={5} />
      </Form.Item>

      <Form.Item
        label="Plataforma"
        name="platform"
        hasFeedback
        rules={[{ required: true, message: "Selecione uma plataforma" }]}
      >
        <Select placeholder="Selecione uma plataforma">
          <Option key={0} value="windows">
            Windows
          </Option>
          <Option key={1} value="mac">
            Mac
          </Option>
          <Option key={2} value="linux">
            Linux
          </Option>
        </Select>
      </Form.Item>

      <Form.Item
        hidden={Boolean(editGame?.id)}
        label="Imagem"
        name="image_url"
        hasFeedback
      >
        <Form.Item valuePropName="file" noStyle>
          <Upload.Dragger
            beforeUpload={() => false}
            onChange={(info) => {
              form.setFieldValue("image_url", info.file.name);
            }}
            name="file"
            maxCount={1}
            multiple={false}
          >
            <p>
              <InboxOutlined />
            </p>
            <p>Clique ou arraste um arquivo para fazer o envio</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 16, span: 6 }}>
        <Space>
          <Button htmlType="reset">Limpar</Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            Finalizar
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
