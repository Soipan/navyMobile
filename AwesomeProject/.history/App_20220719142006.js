import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignInScreen
} from './src/screens';
import {Platform} from 'react-native';
const Stack = createNativeStackNavigator();

const App = ({
  isLoggedIn,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 5000);
  }, []);

  // if (loading) {
  //   return <SplashScreen />;
  // }

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen
            name="sign-in"
            options={{animation: 'none'}}
            component={SignInScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

function mapStateToProps(state) {
  const {isLoggedIn} = state.authentication;
  return {isLoggedIn};
}

const actionCreators = (dispatch, props) => {
  return {};
};

export default connect(mapStateToProps, actionCreators)(App);
