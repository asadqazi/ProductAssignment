import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../ui/home/HomeScreen';
import CartScreen from '../ui/cart/CartScreen';

const Home = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Home.Navigator>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Cart" component={CartScreen} />
    </Home.Navigator>
  );
};

const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
