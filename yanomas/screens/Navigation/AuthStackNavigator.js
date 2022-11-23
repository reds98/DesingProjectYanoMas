import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import SigninScreen from '../screens/SigninScreen';
// import SignupScreen from '../screens/SignupScreen';
import Login from '../Login/Login';
import Register from '../Register/Register';
import StackHeader from './utils/StackHeader';
import { Provider as PaperProvider } from 'react-native-paper';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () =>{
    return (
        <AuthStack.Navigator
            initialRouteName="Signup"
            headerMode="screen"
            screenOptions={{
               header:({scene,navigation})=>(
                   <StackHeader scene={scene} navigation={navigation}/>
               )
            
            }}
        >
            <AuthStack.Screen
                name="Signin"
                component={Login}
                options={
                    {headerTitle: "Sign In"}
                }/>
            <AuthStack.Screen
                name="Signup"
                component={Register}
                options={
                    {headerTitle: "Sign Up"}
                }/>
        </AuthStack.Navigator>
    );

}

export default AuthStackNavigator;