import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Students from '../pages/Students';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';
import ResetPt2 from '../pages/ResetPt2';
import Insert from '../pages/Insert';
import Notes from '../pages/Notes';
import Absences from '../pages/Absences';

const Stack = createNativeStackNavigator();



export default function Routes(){   
    return(
        <Stack.Navigator>
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
            <Stack.Screen
                name="Students"
                component={Students}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Insert"
                component={Insert}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Notes"
                component={Notes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Absences"
                component={Absences}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
        
        
    )
}