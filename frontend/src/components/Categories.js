import React from "react";
import { getData } from "../utils/api";

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

function Categories({ handleClick }) {
  const { isFetching, categories } = useChuckNorrisCategories(handleClick);

  return (
    <div className="categories border border-orange-500 rounded-lg text-lg sm:text-2xl font-bold flex justify-center p-4 flex-wrap">
      <Loading isFetching={isFetching}>
        <div className="grid grid-flow-row gap-3 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 ">
          {categories.length > 0 ? (
            categories.map((i) => (
              <button
                className="bg-blue-400 rounded-md p-1 hover:bg-blue-600"
                key={i}
                onClick={() => handleClick(i)}
              >
                {i.charAt(0).toUpperCase() + i.slice(1)}
              </button>
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
