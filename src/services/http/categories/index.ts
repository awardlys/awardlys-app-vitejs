import { message } from "antd";
import { api } from "../api";
import { Category } from "../../../types";

export const getCategories = async (): Promise<Category[]> => {
  try {
    const output = await api.get("/categories");

    return output.data?.categories;
  } catch (error) {
    message.error("Não foi possível buscar os categorias");
    return [];
  }
};

export const postCategory = async (
  data: Omit<Category, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const output = await api.post("/categories", data);

    if (!String(output.status).startsWith("2")) {
      message.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    message.success("Category adicionada com sucesso");

    return true;
  } catch (error) {
    message.error("Não foi possível criar a categoria");
    return false;
  }
};

export const updateCategory = async (
  id: string,
  data: Omit<Category, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const output = await api.patch(`/categories/${id}`, data);

    if (!String(output.status).startsWith("2")) {
      message.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    message.success("Categoria editada com sucesso");

    return true;
  } catch (error) {
    message.error("Não foi possível criar o categoria");
    return false;
  }
};

export const deleteGame = async (id: string): Promise<void> => {
  try {
    await api.delete(`/categories/${id}`);
    message.info("Categoria excluído com sucesso");
  } catch (error) {
    message.error("Não foi possível excluir a categoria");
  }
};
