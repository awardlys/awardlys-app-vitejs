import { useState } from "react";
import { useStoreCategory } from "../store";
import { message } from "antd";

export function useTooltip() {
  const { setTryAgain } = useStoreCategory();
  const [refresh, setRefresh] = useState(false);
  const canRefresh = () => {
    if (refresh) {
      return;
    }
    setRefresh(true);
    setTryAgain(true);

    message.info("Categorias atualizadas");

    setTimeout(() => setRefresh(false), 10000);
  };
  return { canRefresh, refresh };
}
