import { useCallback, useEffect } from "react";
import { useStoreAward } from "../Store";
import { fetchAward } from "../../../services/http/awards";
import dayjs from "dayjs";

export function useAwards() {
  const { hasFetch, setHasFetch, setData, setLoading, data } = useStoreAward();
  const handleSearch = useCallback(
    (filter: string) => {
      return data?.filter((item) =>
        item.title.toLowerCase().includes(filter.toLowerCase().trim())
      );
    },
    [data]
  );

  useEffect(() => {
    if (hasFetch) {
      return;
    }

    setLoading(true);
    fetchAward()
      .then((data) => {
        setData(
          data.map((item) => ({
            ...item,
            createdAt: dayjs(item.createdAt).format("DD/MM/YYYY HH:mm"),
          }))
        );
      })
      .finally(() => {
        setLoading(false);
        setHasFetch(true);
      });
  }, [hasFetch, setData, setLoading, setHasFetch]);

  return { handleSearch };
}
