import { create } from "zustand";
import { Award } from "../../../types";

type StoreProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  data: Award[];
  setData: (value: Award[]) => void;
  hasFetch: boolean;
  setHasFetch: (value: boolean) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  search: string;
  setSearch: (value: string) => void;
  editAward?: Award;
  setEditAward: (value?: Award) => void;
};

export const useStoreAward = create<StoreProps>((set) => ({
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
  editAward: undefined,
  setEditAward: (value) =>
    set({
      editAward: value,
    }),
}));
