import { ReloadOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useTooltip } from "../hooks";

export function TooltipCategories() {
  const { refresh, canRefresh } = useTooltip()
  return (
    <Tooltip
      title={
        refresh
          ? "Aguarde 10 segundos até poder atualizar novamente"
          : null
      }
    >
      <Button
        disabled={refresh}
        icon={<ReloadOutlined />}
        onClick={canRefresh}
      >
        Atualizar
      </Button>
    </Tooltip>
  )
}