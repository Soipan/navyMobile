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
    const loading = state.loading.models.authentication;
    const { isLoggedIn } = state.authentication;
    return { isLoggedIn, loading }
}

const mapDispatchToProps = (dispatch) => (
    return {
        signIn: (credentials) => dispatch.authentication.signIn(credentials)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SignInController)