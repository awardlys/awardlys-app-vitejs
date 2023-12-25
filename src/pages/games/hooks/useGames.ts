import { useCallback, useEffect, useMemo } from "react";

import { fetchGames } from "../../../services/http/games";
import dayjs from "dayjs";
import { useStoreGame } from "../store";

export const useGame = () => {
  const { hasFetch, setLoading, setData, setHasFetch, data, setSearch } =
    useStoreGame();

  const handleSearch = useCallback(
    (filter: string) => {
      return data.filter((item) =>
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

    fetchGames()
      .then((value) => {
        const mapped = value.map((item) => ({
          ...item,
          createdAt: dayjs(item.createdAt).format("DD/MM/YYYY hh:mm"),
        }));

        setData(mapped);
      })
      .finally(() => {
        setLoading(false);
        setHasFetch(true);
      });
  }, [hasFetch, setData, setHasFetch, setLoading, setSearch]);

  const values = useMemo(
    () => ({
      handleSearch,
    }),
    [handleSearch]
  );

  return values;
};
