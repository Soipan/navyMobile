
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignInScreen
  SubscriptionScreen
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
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Scan"
            options={{animation: 'none'}}
            component={Scan}
          />
          <Stack.Screen
            name="sign-in"
            options={{animation: 'none'}}
            component={SignIn}
          />
          <Stack.Screen
            name="Privacy Policy"
            options={{animation: 'none'}}
            component={PrivacyPolicy}
          />
          <Stack.Screen
            name="Terms of Use"
            options={{animation: 'none'}}
            component={TermsOfUse}
          />
          <Stack.Screen
            name="info"
            options={{animation: 'none'}}
            component={Info}
          />
          <Stack.Screen
            name="about-us"
            options={{animation: 'none'}}
            component={AboutUs}
          />
          <Stack.Screen
            name="sign-up"
            options={{animation: 'none'}}
            component={SignUp}
          />
          <Stack.Screen
            name="subscription"
            options={{animation: 'none'}}
            component={SubscriptionScreen}
          />
          <Stack.Screen
            name="calendar"
            options={{animation: 'none'}}
            component={Calendar}
          />
          <Stack.Screen
            name="weekly-stats"
            options={{animation: 'none'}}
            component={WeeklyStats}
          />
          <Stack.Screen
            name="monthly-stats"
            options={{animation: 'none'}}
            component={MonthlyStats}
          />
           <Stack.Screen
            name="statistics"
            options={{animation: 'none'}}
            component={Statistics}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

function mapStateToProps(state) {
  const {isLoggedIn} = state.authentication;
  return {receipt, isLoggedIn};
}

const actionCreators = (dispatch, props) => {
  return {};
};

export default connect(mapStateToProps, actionCreators)(App);
