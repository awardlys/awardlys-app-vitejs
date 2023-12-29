import { Button, Form, Input, Modal, Space } from "antd";
import { Award } from "../../../types";
import { createAward, updateAward } from "../../../services/http/awards";
import { useStoreAward } from "../Store";
import { useEffect } from "react";
interface AwardlysModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export function AwardlysModal({ open, setOpen }: Readonly<AwardlysModalProps>) {
  const { setHasFetch, editAward, setEditAward } = useStoreAward();
  const [form] = Form.useForm<Award>();
  useEffect(() => {
    if (!editAward) {
      console.log(editAward, "Não passou");
      return;
    }
    console.log(editAward, "Passou");

    form.setFieldValue("title", editAward.title);
    form.setFieldValue("description", editAward.description);
    form.setFieldValue("subTitle", editAward.subTitle);
  }, [editAward, form]);
  return (
    <div>
      <Modal
        onOk={() => {
          setOpen(false);
          setEditAward(undefined);
          form.resetFields();
        }}
        destroyOnClose
        footer={false}
        open={open}
        onCancel={() => {
          form.resetFields();
          setEditAward(undefined);
          setOpen(false);
        }}
        title="Crie uma premiação"
      >
        <Form
          form={form}
          onFinish={async (values) => {
            const response = editAward
              ? await updateAward(editAward.id, values)
              : await createAward(values);
            if (response) {
              setEditAward(undefined);
              setOpen(false);
              setHasFetch(false);
            }
            form.resetFields();
          }}
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item<Award>
            label="Titulo"
            name="title"
            rules={[
              { required: true, message: "Por favor, informe um Título!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Award>
            label="Subtitulo"
            name="subTitle"
            rules={[
              { required: true, message: "Por favor, informe um Subtítulo!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Award>
            label="Descrição"
            name="description"
            rules={[
              {
                required: true,
                message: "Por favor, coloque uma breve descrição!",
              },
            ]}
          >
            <Input.TextArea rows={5} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 16, span: 6 }}>
            <Space>
              <Button htmlType="reset">Limpar</Button>
              <Button type="primary" htmlType="submit">
                Finalizar
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
