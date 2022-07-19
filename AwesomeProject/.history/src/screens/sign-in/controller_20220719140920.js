import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SignInView from './view'

const SignInController = ({ isLoggedIn, signIn, navigation }) => {

    useEffect(() => {
      if (isLoggedIn) {
        navigation.navigate('/home')
      }
    }, [isLoggedIn]);

  return (
    <SignInView handleSignIn={signIn} />
  )
}

const mapStateToProps = (state) => {
    const { isLoggedIn } = state.authentication;
    return { isLoggedIn }
}

const mapDispatchToProps = (dispatch) => (
    return {
        signIn: (credentials) => dispa
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SignInController)