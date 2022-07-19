import React from 'react'
import { connect } from 'react-redux'

export const controller = (props) => {
  return (
    <div>controller</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(controller)