import { useCallback, useMemo } from "react";
import { createGame, updateGame } from "../../../services/http/games";
import { Game } from "../../../types";
import { useStoreGame } from "../store";

type GameInput = Omit<Game, "id" | "createdAt" | "updatedAt">;

export const useCreateGameForm = () => {
  const { setOpen, setHasFetch, editGame, setEditGame } = useStoreGame();

  const onFinish = useCallback(
    async (data: GameInput) => {
      const output = editGame?.id
        ? await updateGame(editGame.id, data)
        : await createGame(data);

      setHasFetch(false);
      setEditGame(undefined);
      setOpen(!output);
    },
    [editGame?.id, setEditGame, setHasFetch, setOpen]
  );

  const values = useMemo(
    () => ({
      onFinish,
    }),
    [onFinish]
  );

  return values;
};
