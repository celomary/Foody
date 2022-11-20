import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import Home from "../screens/home.screen";
import Detail from "../screens/detail.screen";

const Stack = createStackNavigator();

const FNavigation: React.FC= () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="detail" component={Detail}/>
        </Stack.Navigator>
    </NavigationContainer>
}


export default FNavigation;