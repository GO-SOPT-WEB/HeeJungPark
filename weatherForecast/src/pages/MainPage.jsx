import PageLayout from "../components/PageLayout";
import Search from "../components/Search";
import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
        <PageLayout>
            <Search />
            <Outlet />
        </PageLayout>
    );
};

export default MainPage;
