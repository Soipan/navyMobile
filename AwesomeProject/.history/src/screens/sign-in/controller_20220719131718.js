import React from 'react'
import { connect } from 'react-redux'

export const SignInController = ({ isLoggedIn, signIn }) => {
  return (
    <div>controller</div>
  )
}

const mapStateToProps = (state) => {
    const { isLoggedIn } = state.authentication;
    return { isLoggedIn }
}

const mapDispatchToProps = (dispatch) => (
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SignInController)