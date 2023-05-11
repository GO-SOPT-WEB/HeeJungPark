import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Weather from "./components/Weather";
import WeekWeather from "./components/WeekWeather";
import DayWeather from "./components/DayWeather";


const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<MainPage/>}>
                    <Route path = "/day" element = {<Weather/>}>
                        <Route path = ":city" element = {<DayWeather/>} />
                    </Route>
                    <Route path = "/week" element = {<Weather/>}>
                        <Route path = ":city" element = {<WeekWeather/>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;