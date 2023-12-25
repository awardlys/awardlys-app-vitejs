export type Award = {
  id: string;
  key: string;
  title: string;
  subTitle: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  status: boolean;
};

export const awards: Award[] = [
  {
    id: "0",
    key: "0",
    title: "CS:GO",
    subTitle: "Counter-Strike",
    description: "",
    createdAt: "2020-05-22",
    updatedAt: "2023-12-23",
    status: false,
  },
  {
    id: "1",
    key: "1",
    title: "A pugle",
    subTitle: "Tale",
    description: "",
    createdAt: "2019-02-02",
    updatedAt: "2023-01-23",
    status: true,
  },
  {
    id: "2",
    key: "2",
    title: "God of War",
    subTitle: "Deus da guerra",
    description: "",
    createdAt: "2018-09-14",
    updatedAt: "2019-10-23",
    status: true,
  },
];
