import { Form } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface FormModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export function useFormCategory({ setIsModalOpen }: FormModalProps) {
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState(false);
  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return { form, submittable, handleOk, handleCancel };
}
