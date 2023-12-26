import { message } from "antd";
import { api } from "../api";
import { Game } from "../../../types";

export const fetchGames = async (): Promise<Game[]> => {
  try {
    const output = await api.get("/games");

    return output.data?.games;
  } catch (error) {
    message.error("Não foi possível buscar os jogos");
    return [];
  }
};

export const createGame = async (
  data: Omit<Game, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const output = await api.post("/games", data);

    if (!String(output.status).startsWith("2")) {
      message.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    message.success("Game adicionado com sucesso");

    return true;
  } catch (error) {
    message.error("Não foi possível criar o jogo");
    return false;
  }
};

export const updateGame = async (
  id: string,
  data: Omit<Game, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const output = await api.patch(`/games/${id}`, data);

    if (!String(output.status).startsWith("2")) {
      message.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    message.success("Game editado com sucesso");

    return true;
  } catch (error) {
    message.error("Não foi possível criar o jogo");
    return false;
  }
};

export const deleteGame = async (id: string): Promise<void> => {
  try {
    await api.delete(`/games/${id}`);
    message.info("Jogo excluído com sucesso");
  } catch (error) {
    message.error("Não foi possível excluir o jogo");
  }
};
