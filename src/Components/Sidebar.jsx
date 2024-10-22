
const Sidebar = ({ wantCook }) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            {/* Want to cook table */}
            <div className="overflow-x-auto">
                <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">
                    Want To Cook: {wantCook.length}
                </h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wantCook.map((recipe, index) =>
                                <tr key={index} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                    <td>
                                    <button onClick={() => console.log("OK")} className="bg-green-400 rounded-full px-2  md:px-4 md:py-1 my-2 text-gray-800 font-medium">Preparing</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* Currently cooking table */}
        </div>
    );
};

export default Sidebar;