import { Button, Form, Input, Modal, Space } from "antd";
import { useFormCategory } from "../hooks";
import { useEffect } from "react";

export function FormModal() {
  const {
    form,
    onFinish,
    submitTable,
    isModalOpen,
    setIsModalOpen,
    categoryEdit,
    setCategoryEdit,
  } = useFormCategory();

  useEffect(() => {
    form.setFieldValue("name", categoryEdit?.name);
    form.setFieldValue("description", categoryEdit?.description);
  }, [categoryEdit, form]);

  return (
    <Modal
      destroyOnClose
      title="Nova Categoria"
      footer={false}
      open={isModalOpen}
      onOk={() => {
        setIsModalOpen(false);
        setCategoryEdit(null);
      }}
      onCancel={() => {
        setIsModalOpen(false);
        setCategoryEdit(null);
      }}
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
          name="name"
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
            <Button type="primary" loading={submitTable} htmlType="submit">
              Submit
            </Button>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
}
