import React from "react";
import { useSelector } from "react-redux";

const NewsList = () => {
  const { news, loading, error } = useSelector((state) => state.news);

  if (loading) return <p className="text-center text-lg text-blue-600 font-medium">Fetching news...</p>;
  if (error) return <p className="text-center text-red-500 font-semibold">{error}</p>;

  return (
    <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {news.map((item, index) => (
    <div key={index} className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 hover:shadow-2xl transition">
      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
      <p className="text-gray-600 text-sm">{item.content}</p>
      <p className="text-gray-500 text-xs mt-2"><strong>Category:</strong> {item.category}</p>
      <p className="text-gray-500 text-xs"><strong>Author:</strong> {item.author}</p>
    </div>
  ))}
</div>
  );
};

export default NewsList;
