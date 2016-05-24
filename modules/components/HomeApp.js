import React from 'react'
import PageHeader from './PageHeader'

export default React.createClass({
  render() {
    return (
      <div className="slds">
        <PageHeader title="-- Home Page --" />
        <p>Hello World</p>
      </div>
    )
  }
})