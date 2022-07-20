import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button, useTheme} from '@rneui/themed';

export default function SignInView({handleSignIn, loading}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} h4 h4Style=}}>
        Welcome
      </Text>
      <Text style={styles.text} h3 h3Style={{color: colors?.grey4}}>
        Navy School Ticketing System
      </Text>
      <Input
        placeholder="Email"
        containerStyle={styles.email}
        textContentType="emailAddress"
        keyboardType="email-address"
        returnKeyType="send"
      />
      <Button
        title="Login with Email"
        style={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={handleSignIn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4F46E5',
  },
  buttonContainer: {
    width: 300,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  email: {
    width: 320,
    marginHorizontal: 50,
    marginTop: 40,
  },
  text: {
    textAlignVertical: 'center',
    marginVertical: 10,
    width: 300,
  },
});
