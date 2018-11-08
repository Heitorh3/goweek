import { createStackNavigator } from 'react-navigation';  

import Longin from './pages/Login';
import Timeline from './pages/TimeLine';
import New from './pages/New';

const Routes = createStackNavigator({
    Longin,
    Timeline,
    New
});

export default Routes;