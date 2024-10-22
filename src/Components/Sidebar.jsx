
const Sidebar = ({wantCook}) => {
    return (
        <div className="md:w-1/3">
            Want To Cook : {wantCook.length}
        </div>
    );
};

export default Sidebar;