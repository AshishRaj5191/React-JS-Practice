import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import React from "react";

// 1. States Using Class Based Component

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }

//   Increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Welcome to class based state component</h1>
//         <p>Clicked{this.state.count}</p>
//         <button onClick={this.Increment}>Click Me</button>
//       </div>
//     );
//   }
// }


// 2. Counter Project

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       text: "",
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ text: e.target.value });
//   };

//   render() {
//     const text = this.state.text;
//     const charcount = text.length

//     return (
//       <div>
//         <h2>Character Count</h2>
//         <textarea
//           value={text}
//           onChange={this.handleChange}
//           placeholder="Type your post here..."
//         ></textarea>
//         <p>
//           Character count: {charcount}
//         </p>
//       </div>
//     );
//   }
// }


// Project Switch Button

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isToggled: false,
//     };
//   }

//   handleToggle = () => {
//     this.setState((prevState) => ({
//       isToggled: !prevState.isToggled,
//     }));
//   };

//   render() {
//     const { isToggled } = this.state;
//     return (
//       <div>
//         <button
//           onClick={this.handleToggle}
//           style={{
//             padding: "10px 20px",
//             fontSize: "16px",
//             backgroundColor: isToggled ? "red" : "green",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           {isToggled? 'OFF': 'ON'}
//         </button>
//       </div>
//     );
//   }
// }

// export default App;


// States with functional states

function App() {
    const [count, setCount] = useState(0)

    function inc() {
        setCount(count+1)
    }

    function dec() {
        setCount(count-1)
    }
  return (
    <div>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        {count}
    </div>
  )
}

export default App