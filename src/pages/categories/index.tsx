import { Input, Table } from "antd";
import { SearchProps } from "antd/es/input";
import { useState } from "react";
import { awards } from "../../data";
import "./style.css";

const {Search} = Input;

export function Categories() {
  const [search, setSearch] = useState(awards);
  const onSearch: SearchProps["onSearch"] = (value) => {
    const search = awards.filter((item) =>
      item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setSearch(search);
  };

  return (
    <div className="container-categories">
      <Search placeholder="Pesquise" onSearch={onSearch} />
      <Table
        dataSource={search}
        columns={[
          {
            dataIndex: "title",
            title: "Nome",
            sorter: (a, b) => a.title.localeCompare(b.title),
          },
          {
            dataIndex: "subTitle",
            title: "Descrição",
          },
        ]}
      />
    </div>
  );
}
