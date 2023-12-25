import { useCallback, useMemo } from "react";
import { Game } from "../../../types";
import { createGame, updateGame } from "../../../services/http/games";
import { useStoreGame } from "../store";

type GameInput = Omit<Game, "id" | "createdAt" | "updatedAt">;

export const useCreateGameForm = () => {
  const { setOpen, setHasFetch, editGame } = useStoreGame();

  const onFinish = useCallback(
    async (data: GameInput) => {
      const output = editGame?.id
        ? await updateGame(editGame.id, data)
        : await createGame(data);

      setHasFetch(false);
      setOpen(!output);
    },
    [editGame?.id, setHasFetch, setOpen]
  );

  const values = useMemo(
    () => ({
      onFinish,
    }),
    [onFinish]
  );

  return values;
};
