import {Outlet} from 'react-router-dom';
import PageLayout from '../components/PageLayout';

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