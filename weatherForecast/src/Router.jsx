import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Weather from "./components/Weather";
import WeekWeather from "./components/WeekWeather";
import DayWeather from "./components/DayWeather";
import ErrorPage from "./pages/ErrorPage";
const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<MainPage/>}>
                    <Route path = "/day" element = {<Weather/>}>
                        <Route path = ":area" element = {<DayWeather/>} />
                    </Route>
                    <Route path = "/week" element = {<Weather/>}>
                        <Route path = ":area" element = {<WeekWeather/>} />
                    </Route>
                </Route>
                <Route path = "/error" element = {<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;