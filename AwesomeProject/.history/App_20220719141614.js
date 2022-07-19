/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import React, {useState, useEffect} from 'react';
import {SplashScreen, Statistics} from './src/_screens';
import {subscriptionActions} from './src/_redux/actions';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MenuProvider} from 'react-native-popup-menu';
import {
  Scan,
  Info,
  AboutUs,
  TermsOfUse,
  PrivacyPolicy,
  SignIn,
  SignUp,
  Subscription,
  Calendar,
  WeeklyStats,
  MonthlyStats,
  SubscriptionScreen
} from './src/_screens';
import RNIap, {CoinStore} from 'react-native-iap';
import {checkReceiptAndroid} from './src/_screens/subscription/check-receipt';
import {Platform} from 'react-native';
const Stack = createNativeStackNavigator();

const App = ({
  isLoggedIn,
  receipt,
  setIsSubscribed,
  setSubscription,
  setRestoredPuchases,
}) => {
  const [loading, setLoading] = useState(true);
  const itemSubs = Platform.select({
    default: ['history_access'],
  });

  useEffect(() => {
    setTimeout(async () => {
      try {
        //Initialise IAP
        const success = await RNIap.initConnection();
        //Flush Pending and failed Purchases
        await RNIap.flushFailedPurchasesCachedAsPendingAndroid();
        if (!success) {
          console.log("Couldn't connect to IAP");
          await RNIap.initConnection();
        }
      } catch (e) {
        console.log(e);
      }
      //Get subcriptions on offer
      const subscriptions = await RNIap.getSubscriptions(itemSubs);
      setSubscription({
        ...subscriptions[0],
      });
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

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
  return {
};
};

export default connect(mapStateToProps, actionCreators)(App);
