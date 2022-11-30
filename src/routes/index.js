import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';
import ResetPt2 from '../pages/ResetPt2';

const Stack = createNativeStackNavigator();

export default function Routes(){   
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ResetPt2"
                component={ResetPt2}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}