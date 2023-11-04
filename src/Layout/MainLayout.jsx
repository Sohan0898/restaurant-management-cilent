import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="font-gabarito">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;