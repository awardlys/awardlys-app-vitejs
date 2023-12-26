import { Table, message } from "antd";
import { useEffect } from "react";
import { useStoreCategory } from "../store";
import { getCategories } from "../../../services/http/categories";


export function TableCategory() {
  const { tryAgain, categoriesData, setCategoriesData, loading, setLoading, setTryAgain } = useStoreCategory()

  useEffect(() => {
    if (!tryAgain) {
      return;
    }
    setLoading(true)
    getCategories()
      .then((res) => setCategoriesData(res))
      .catch((err) => message.error(err))
      .finally(() => {
        setLoading(false)
        setTryAgain(false)
      })

  }, [setCategoriesData, setLoading, setTryAgain, tryAgain])

  return (
    <Table
      rowKey={(record) => record.id}
      loading={loading}
      dataSource={categoriesData}
      columns={[
        {
          dataIndex: "name",
          title: "Nome",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          dataIndex: "description",
          title: "Descrição",
        },
      ]}
    />)
}