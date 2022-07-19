import React from 'react'
import { connect } from 'react-redux'

export const SignInController = (props) => {
  return (
    <div>controller</div>
  )
}

const mapStateToProps = (state) => {
    const { credentials } = state.signIn
}

const mapDispatchToProps = (dispatch) => (
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SignInController)