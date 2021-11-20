import React, { Component } from 'react';

// import FirstComponent from './components/learning-examples/FirstComponent'
// import SecondComponent from './components/learning-examples/SecondComponent'
// import ThirdComponent from './components/learning-examples/ThirdComponent'
// import Counter, {CounterButton} from './components/counter/Counter'
import ToDoApp from './components/todo/ToDoApp';
// import logo from './logo.svg';
import './bootstrap.css';
import './App.css';

 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter></Counter> */}
        <ToDoApp></ToDoApp>
      </div>
    );
  }
}



// class LearningComponents extends Component{
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />         
//             <FirstComponent></FirstComponent>
//             <SecondComponent></SecondComponent>
//             <ThirdComponent></ThirdComponent>
//         </header>
//       </div>
//     );
//   }
// }






export default App;