import { Button, Form, Input, Modal, Space } from "antd";
import { Dispatch, SetStateAction } from "react";
import { useFormCategory } from "../hooks";

interface FormModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export function FormModal({ isModalOpen, setIsModalOpen }: Readonly<FormModalProps>) {
  const { form, handleCancel, handleOk, submittable } = useFormCategory({ setIsModalOpen })

  return (
    <Modal destroyOnClose title="Nova Categoria" footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
        <Form.Item hasFeedback name="title" label="Nome" rules={[{ required: true, message: "Por favor digite um titulo" }]}>
          <Input />
        </Form.Item>
        <Form.Item hasFeedback name="description" label="Descrição" rules={[{ required: true, message: 'Por favor digite uma breve descrição' }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" disabled={!submittable}>
              Submit
            </Button>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>

  )
}