import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInView from './components/SignInView';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import CreateView from './components/CreateView';

const Stack = createNativeStackNavigator();

const ViewBoxesWithColorAndText = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SignIn" component={SignInView} /> */}
        <Stack.Screen name="My Tickets" component={ListView} />
        <Stack.Screen name="Detail" component={DetailView} />
        <Stack.Screen name="Create" component={CreateView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ViewBoxesWithColorAndText;
