import React from 'react'

export default class Container extends React.Component {
  render () {
    return (
      <div>
        {'Container'}
        {this.props.children}
      </div>
    )
  }
}
