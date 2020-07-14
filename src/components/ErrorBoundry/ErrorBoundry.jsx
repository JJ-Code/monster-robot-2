//Error Boundary only exist for class components but you can use a try catch to do the same thing since there is no hook version of componentdidcatch. To see the the class version see below functional component 


import React from 'react'

const ErrorBoundry = (props) => {
  console.log(props.children);

  try {
    return props.children
  } catch (error) {
    console.log(error);
    return (<h1>Something has went wrong</h1>)

  }
}

export default ErrorBoundry;


// import React, { Component, Fragment } from 'react'

// class ErrorBoundry extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       hasError: false
//     }
//   }

//   componentDidCatch(error, info) {
//     this.setState({ hasError: true })
//     console.log(error);

//   }

//   render() {
//     console.log(this.props)
//     console.log(this.state.hasError)
//     return (
//       <Fragment>
//         {(this.state.hasError === false) ?
//           (this.props.children) : (<h1>Something has went wrong</h1>)}
//       </Fragment>)
//   }
// };

// export default ErrorBoundry;