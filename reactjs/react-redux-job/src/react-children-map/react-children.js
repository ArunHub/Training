import React from 'react';

const ReactChildren = (props) => {
  return (
    React.Children.map(props.children, (t) => {
      return <div>{t.props.children}</div>
    })
  )
}

export default ReactChildren;