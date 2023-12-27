import { useEffect } from "react";
import { useStoreCategory } from "../store";
import { getCategories } from "../../../services/http/categories";
import { message } from "antd";
import dayjs from "dayjs";

export function useCategory() {
  const {
    tryAgain,
    setCategoriesData,
    setLoading,
    setTryAgain,
    categoriesData,
  } = useStoreCategory();

  const onSearch = (value: string) =>
    categoriesData.filter((item) =>
      item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase().trim())
    );

  useEffect(() => {
    if (!tryAgain) {
      return;
    }
    setLoading(true);
    getCategories()
      .then((res) =>
        setCategoriesData(
          res.map((category) => ({
            ...category,
            createdAt: dayjs(category.createdAt).format("DD/MM/YYYY HH:MM"),
          }))
        )
      )
      .catch((err) => message.error(err))
      .finally(() => {
        setLoading(false);
        setTryAgain(false);
      });
  }, [setCategoriesData, setLoading, setTryAgain, tryAgain]);

  return { onSearch };
}
