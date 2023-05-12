import {Outlet} from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Search from "../components/Search";
const Weather = () => {

    
    return (
        <>
            <PageLayout>
                <Outlet/>
            </PageLayout>
        </>
    )
}
export default Weather;