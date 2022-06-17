import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import { useContext } from 'react';
import { AuthContext } from '../context/auth';
import HeaderTabs from './header/HeaderTabs';

const NavigationScreen = () => {
    const [state, setState] = useContext(AuthContext);
    const authenticated = state && state.token !== "" && state.user !== null;

    return (
        <Stack.Navigator initialRouteName="Home">
            {authenticated ? <Stack.Screen name="Home" component={Home} options={{ headerRight: () => <HeaderTabs />}}/> : (
                <>
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                </>
            )}
            
        </Stack.Navigator>
    )
}

export default NavigationScreen
