import { useState } from "react";
import { awards } from "../../../data";
import { SearchProps } from "antd/es/input";

export function useCategory() {
  const [search, setSearch] = useState(awards);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSearch: SearchProps["onSearch"] = (value) => {
    const search = awards.filter((item) =>
      item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setSearch(search);
  };
  return { search, setSearch, onSearch, isModalOpen, setIsModalOpen };
}
