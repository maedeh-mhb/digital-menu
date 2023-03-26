import {Routes,Route} from 'react-router-dom';
import CategoryPage from '../../pages/category/CategoryPage';
import HomePage from '../../pages/main/HomePage';
import MainPage from '../../pages/main/MainPage';

function Navigation(props) {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/categories/*' element={<CategoryPage/>}/>
            </Route>
        </Routes>
    );
}

export default Navigation;