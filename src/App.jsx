import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";


const App = () => {
  return (
    <div className="container mx-auto px-4">
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      {/* Recipe Cards Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Cards Section */}
        <Recipes></Recipes>
        {/* Sidebar */}
        <Sidebar></Sidebar>
      </section>
    </div>
  );
};

export default App;