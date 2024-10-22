import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";


const App = () => {

  const [wantCook, setWantCook] = useState([]);

  const handleWantCook = (recipe)=>{

    const isExist = wantCook.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id);

    if(!isExist){
      setWantCook([...wantCook, recipe]);
    } else {
      alert("Recipe already exists in the queue..!!");
    }

    
  }

  return (
    <div className="container mx-auto px-4">
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      {/* Recipe Cards Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Cards Section */}
        <Recipes handleWantCook={handleWantCook}></Recipes>
        {/* Sidebar */}
        <Sidebar wantCook={wantCook}></Sidebar>
      </section>
    </div>
  );
};

export default App;