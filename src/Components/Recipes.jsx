import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("recipes.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    recipes.map(recipe => <div key={recipe.recipe_id} className="card bg-base-100 shadow-xl">
                        <figure className="px-8 pt-6">
                            <img className="md:h-52 w-full rounded-xl"
                                src={recipe.recipe_image}
                                alt="Recipe Image" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg text-gray-800 font-medium">{recipe.recipe_name}</h2>
                            <p className="text-gray-600 text-base">{recipe.short_description}</p>
                            <h3 className="text-lg text-gray-800 font-medium">Ingredients: {recipe.ingredients.length}</h3>
                            <ul className="ml-8">
                                {
                                    recipe.ingredients.map((ingredient, index) => {
                                       return <li className="list-disc text-gray-600" key={index}>{ingredient}</li>
                                    })
                                }
                            </ul>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Recipes;