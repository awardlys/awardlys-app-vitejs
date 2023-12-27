import { Form } from "antd";
import { useState } from "react";
import { ValueProps } from "../../../types";
import {
  postCategory,
  updateCategory,
} from "../../../services/http/categories";
import { useStoreCategory } from "../store";

export function useFormCategory() {
  const {
    isModalOpen,
    setIsModalOpen,
    setTryAgain,
    categoryEdit,
    setCategoryEdit,
  } = useStoreCategory();
  const [form] = Form.useForm<ValueProps>();
  const [submitTable, setSubmitTable] = useState(false);
  const onFinish = async (value: ValueProps) => {
    setSubmitTable(true);
    if (categoryEdit?.id) {
      await updateCategory(categoryEdit.id, value);
    } else {
      await postCategory(value);
    }
    setCategoryEdit(null);
    setSubmitTable(false);
    setIsModalOpen(false);
    setTryAgain(true);
    form.resetFields();
  };
  return {
    form,
    submitTable,
    onFinish,
    isModalOpen,
    setIsModalOpen,
    categoryEdit,
    setCategoryEdit,
  };
}
