import React from 'react'

export default function SignInView({ handleSignIn, loading }) {
  return (
    <View style={styles.container}>
    <Text style={styles.text} h4 h4Style={{color: colors?.grey4}}>
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
      onPress={() => navigation.navigate('My Tickets')}
    />
  </View>
  )
}
