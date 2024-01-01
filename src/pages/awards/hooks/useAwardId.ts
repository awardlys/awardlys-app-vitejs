import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Award, Category, Game } from "../../../types";
import { fetchGames } from "../../../services/http/games";
import { getCategories } from "../../../services/http/categories";
import { getAward } from "../../../services/http/awards";

type Data = Category & {
  games: string[];
};

export function useAwardId() {
  const navigate = useNavigate();
  const { awardId } = useParams();

  const [data, setData] = useState<Data[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const [categories, setCategories] = useState<Category[]>([]);
  const [award, setAward] = useState<Award | undefined>(undefined);
  const [modal, setModal] = useState({
    selectCategories: false,
    selectGames: false,
    viewGames: false,
  });

  useEffect(() => {
    if (!awardId) {
      return;
    }

    fetchGames().then((data) => setGames(data));
    getCategories().then((data) => setCategories(data));
    getAward(awardId).then((data) => setAward(data));
  }, [awardId]);

  return {
    data,
    games,
    award,
    modal,
    setData,
    navigate,
    setModal,
    categories,
    selectedCategory,
    setSelectedCategory,
  };
}
