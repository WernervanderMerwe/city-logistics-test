import React from "react";

import { getData } from "../utils/api";
import { Button } from "./Button";

const useChuckNorrisCategories = (handleClick) => {
  const [categories, setCategories] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);

  React.useEffect(() => {
    setIsFetching(true);
    getData("/api/chucknorris/categories", null)
      .then((result) => {
        setCategories(result.data);
        handleClick(result.data[0]);
      })
      .finally(() => setIsFetching(false));
  }, []);

  return {
    isFetching,
    categories,
  };
};

function Categories({ handleClick, selectedCategory }) {
  const { isFetching, categories } = useChuckNorrisCategories(handleClick);

  return (
    <div className="categories border border-orange-400 rounded-lg flex justify-center p-4 flex-wrap">
      <Loading isFetching={isFetching}>
        <div className="grid grid-flow-row gap-3 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {categories.length > 0 ? (
            categories.map((i) => (
              <Button
                key={i}
                onClick={() => handleClick(i)}
                className={selectedCategory === i ? "bg-blue-500" : ""}
                label={i.charAt(0).toUpperCase() + i.slice(1)}
              />
            ))
          ) : (
            <p>No categories found, there must be a problem!</p>
          )}
        </div>
      </Loading>
    </div>
  );
}

function Loading({ isFetching, children }) {
  if (isFetching) return <h1>Loading...</h1>;
  return children;
}

export default Categories;
