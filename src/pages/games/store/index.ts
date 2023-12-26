import { create } from "zustand";
import { Game } from "../../../types";

type StoreProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  data: Game[];
  setData: (value: Game[]) => void;
  hasFetch: boolean;
  setHasFetch: (value: boolean) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  search: string;
  setSearch: (value: string) => void;
  editGame?: Game;
  setEditGame: (value?: Game) => void;
};

export const useStoreGame = create<StoreProps>((set) => ({
  open: false,
  setOpen: (value) =>
    set({
      open: value,
    }),
  data: [],
  setData: (value) =>
    set({
      data: value,
    }),
  hasFetch: false,
  setHasFetch: (value) =>
    set({
      hasFetch: value,
    }),
  loading: false,
  setLoading: (value) =>
    set({
      loading: value,
    }),
  search: "",
  setSearch: (value) =>
    set({
      search: value,
    }),
  editGame: undefined,
  setEditGame: (value) =>
    set({
      editGame: value,
    }),
}));
