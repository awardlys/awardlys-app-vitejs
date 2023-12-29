export interface Category {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface ValueProps {
  name: string;
  description: string;
}
export interface TableCategoryProps {
  search: Category[] | undefined;
}
