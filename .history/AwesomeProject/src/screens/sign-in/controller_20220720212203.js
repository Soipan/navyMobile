import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SignInView from './view'

const SignInController = ({ isLoggedIn, signIn, navigation, loading }) => {

    useEffect(() => {
      if (isLoggedIn) {
        navigation.navigate('/home')
      }
    }, [isLoggedIn]);

  return (
    <SignInView handleSignIn={signIn} loading={loading}/>
  )
}

const mapStateToProps = (state) => {
    const loading = state.loading.models.authentication;
    const { isLoggedIn } = state.authentication;
    return { isLoggedIn, loading }
}

const mapDispatchToProps = (dispatch) => ({}
    return {
        
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SignInController)