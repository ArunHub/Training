import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            errors: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            errors: true
        }
    }
    componentDidCatch(error, info){
        console.log(error,'eeeeeeeeeeeeeee');
        console.log(info,'iiiiiiiiiiiiiii');
        
    }
  render() {
      if (this.state.errors) {
          return <h1>Something went wrong</h1>
      }
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
