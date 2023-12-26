import { Form } from "antd";
import { useState } from "react";
import { ValueProps } from "../../../types";

export function useFormCategory() {
  const [form] = Form.useForm<ValueProps>();
  const [submittable, setSubmittable] = useState(false);
  const onFinish = (value: ValueProps) => {
    console.log(value);
  };
  return {
    form,
    setSubmittable,
    submittable,
    onFinish,
  };
}
