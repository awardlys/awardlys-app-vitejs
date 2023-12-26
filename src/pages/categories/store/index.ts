import { create } from "zustand";
import { Category } from "../../../types";

type StoreProps = {
  tryAgain: boolean;
  categoriesData: Category[];
  loading: boolean;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  setLoading: (value: boolean) => void;
  setTryAgain: (value: boolean) => void;
  setCategoriesData: (value: Category[]) => void;
};

export const useStoreCategory = create<StoreProps>((set) => ({
  tryAgain: true,
  categoriesData: [],
  loading: false,
  isModalOpen: false,
  setIsModalOpen: (value) => set({ isModalOpen: value }),
  setTryAgain: (value) => set({ tryAgain: value }),
  setCategoriesData: (value) => set({ categoriesData: value }),
  setLoading: (value) => set({ loading: value }),
}));
