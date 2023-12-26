import { Button, Form, Input, Modal, Space } from "antd";
import { useFormCategory } from "../hooks";
import { useStoreCategory } from "../store";

export function FormModal() {
  const { form, onFinish } = useFormCategory();
  const { isModalOpen, setIsModalOpen } = useStoreCategory()

  return (
    <Modal
      destroyOnClose
      title="Nova Categoria"
      footer={false}
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form
        onFinish={onFinish}
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          hasFeedback
          name="title"
          label="Nome"
          rules={[{ required: true, message: "Por favor digite um titulo" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          hasFeedback
          name="description"
          label="Descrição"
          rules={[
            { required: true, message: "Por favor digite uma breve descrição" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal >
  );
}
