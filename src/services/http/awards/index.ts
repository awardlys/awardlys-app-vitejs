import { message } from "antd";
import { api } from "../api";
import { Award } from "../../../types";

export const getAward = async (id: string): Promise<Award | undefined> => {
  try {
    const output = await api.get(`/awards/${id}`);

    return output.data;
  } catch (error) {
    message.error("Não foi possível buscar o jogo");
  }
};

export const fetchAward = async (): Promise<Award[]> => {
  try {
    const output = await api.get("/awards");

    return output.data?.awards;
  } catch (error) {
    message.error("Não foi possível buscar os jogos");
    return [];
  }
};

export const createAward = async (
  data: Omit<Award, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const output = await api.post("/awards", data);

    if (!String(output.status).startsWith("2")) {
      message.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    message.success("Premiação adicionada com sucesso");

    return true;
  } catch (error) {
    message.error("Não foi possível criar a premiação");
    return false;
  }
};

export const updateAward = async (
  id: string,
  data: Omit<Award, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const output = await api.patch(`/awards/${id}`, data);

    if (!String(output.status).startsWith("2")) {
      message.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    message.success("Premiação editada com sucesso");

    return true;
  } catch (error) {
    message.error("Não foi possível criar o jogo");
    return false;
  }
};

export const deleteAward = async (id: string): Promise<void> => {
  try {
    await api.delete(`/awards/${id}`);
    message.info("Jogo excluído com sucesso");
  } catch (error) {
    message.error("Não foi possível excluir o jogo");
  }
};
