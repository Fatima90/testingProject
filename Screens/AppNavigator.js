import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Stories from '../Stories';


// the app root component
const AppNavigator = createStackNavigator({
    Home: {
        screen: Stories,
    }
})

export default createAppContainer(AppNavigator);