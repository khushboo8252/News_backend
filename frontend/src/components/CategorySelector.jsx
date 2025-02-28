import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsByCategory } from "../redux/newsSlice";

const categories = ["Technology", "Sports", "Health", "Business"];

const CategorySelector = () => {
  const dispatch = useDispatch();
  const { loading, selectedCategory } = useSelector((state) => state.news);

  const handleCategoryClick = (category) => {
    dispatch(getNewsByCategory(category));
  };

  return (
    <div className="p-6 flex flex-wrap justify-center gap-4 bg-gray-100 rounded-lg shadow-md">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 shadow-md
            ${
              selectedCategory === category
                ? "bg-blue-700 text-white scale-105 shadow-lg"
                : "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
            } 
            ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          aria-label={`View ${category} news`}
          disabled={loading}
        >
          {loading && selectedCategory === category ? "Loading..." : category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
