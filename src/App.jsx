import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [wantCook, setWantCook] = useState([]);

  const [currentCook, setCurrentCook] = useState([]);

  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleWantCook = (recipe) => {
    const isExist = wantCook.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );

    if (!isExist) {
      setWantCook([...wantCook, recipe]);
    } else {
      alert("Recipe already exists in the queue..!!");
    }
  };

  const handleRemove = (id) => {
    // Find which recipe should be removed
    const deletedRecipe = wantCook.find((recipe) => recipe.recipe_id === id);

    // Remove from want to cook table
    const updatedCook = wantCook.filter((recipe) => recipe.recipe_id !== id);
    setWantCook(updatedCook);
    setCurrentCook([...currentCook, deletedRecipe]);
  };

  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };

  return (
    <div className="container mx-auto w-11/12 mb-10">
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      {/* Recipe Cards Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Cards Section */}
        <Recipes handleWantCook={handleWantCook}></Recipes>
        {/* Sidebar */}
        <Sidebar
          wantCook={wantCook}
          handleRemove={handleRemove}
          currentCook={currentCook}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </div>
  );
};

export default App;
