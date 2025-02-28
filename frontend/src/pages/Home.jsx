import React from "react";
import NewsFeed from "../components/NewsFeed";
import CategorySelector from "../components/CategorySelector";



const Home = () => {
  return (
    <>
   
    <div className="max-w-4xl mx-auto mt-4">
        <h1 className="text-2xl font-bold text-center mb-4">📰 News App</h1>
        <CategorySelector />
        <NewsFeed />
      </div>
    
    </>
    
  );
};

export default Home;
