// import React, { Component } from 'react'

// import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
// import HelloWorldService from '../../api/todo/HelloWorldService.js'


// // TODO keep comment when replacing this!!
// class WelcomeComponent extends Component {
//   // execute following to make node backwards compatible
//   // export NODE_OPTIONS=--openssl-legacy-provider
//   constructor(props) { //TODO gooogle how to convert to function OR try using Welcomecomp from other oR check course 
//     // on how done
//     super(props);
//     this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
//     this.state = {
//       welcomeMessage: "",
//     };
//     this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
//   }
//   render() {
//     console.log("hello");
//     console.log(sessionStorage.getItem("bearer-token"));
//     return (
//       <>
//         <h1>Welcome</h1>
//         <div className="container">
//           Welcome {this.props.params.name}. You can manage your Todos{" "}
//           <Link to="/todos">here</Link>
//         </div>
//         <div className="container">
//           Click here to get a customised welcome message.
//           <button
//             onClick={this.retrieveWelcomeMessage}
//             className="btn btn-success"
//           >
//             Get Welcome Message
//           </button>
//         </div>
//         <div className="container">{this.state.welcomeMessage}</div>
//       </>
//     );
//   }
//   retrieveWelcomeMessage() {
//     HelloWorldService.executeHelloWorldService().then((response) =>
//       this.handleSuccessfulResponse(response)
//     );
//     // .catch()
//     // console.log('retrieve clicked')
//   }
//   handleSuccessfulResponse(response) {
//     this.setState({ welcomeMessage: response.data[1].name });
//   }
// }

// export default WelcomeComponent

// import axios from "axios"
import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { retrievePetsApi } from '../../api/todo/PetShopApiService'

function WelcomeComponent() {
  const { username } = useParams()
  const [message, setMessage] = useState(null)

  function callPetShopRestApi() {
    retrievePetsApi()
    .then((response) => successfulResponse(response))
    .catch((error) => errorResponse(error))
    .finally(() => console.log('clean up'))
  }

  function successfulResponse(response) {
    setMessage(response.data[2].name)
    console.log(response)
  }
  function errorResponse(error) {
    console.log(error)
  }
  return (
    <div className="Welcome">
      <h1>Welcome {sessionStorage.getItem('username')}</h1>
      <div>
        Browse <Link to="/todos">Go here</Link>
      </div>
      <div>
        <button className="btn btn-success m-1" onClick={callPetShopRestApi}>
          Call Hello World
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  )
}

export default WelcomeComponent