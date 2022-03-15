import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import HelloComponent from './component/HelloComponent';
import LoginComponent from './component/Login';

// function HelloComponent() {
//   return HelloComponent
// }

// const HelloComponent()=>
// {
//   return HelloComponent
// }

// class.StateFullComponent extends React.components{
//   render(){
//     return<p>StateFullComponent</p>
//   }
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
class Test extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {hello : "World!"};
    }

    componentDidMount()
    {
        console.log("componenrWillMount()");
    }

    componentDidMount()
    {
        console.log("componentDidMount() ");
    }

    changeState()
    {
        this.setState({ hello : "Geek!"});
    }

    render()
    {
        return (
            <div>
                <h1>GeeksForGeeks.org, Hello{this.state.hello }</h1>
                <h2>
                    <a onClick={this.changeState.bind(this)}>Press Here!</a>
                </h2>
            </div>
        );
    }

    shouldComponentUpdate(_nextProps, _nextState)
    {
        console.log("shouldComponentUpdate() ");
        return true;
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate() ");
    }
}
// ReactDOM.render(
//     <Test />,
//     document.getElementById('root')
// );
ReactDOM.render(
    <LoginComponent />,
    document.getElementById('root')
);
export default Test;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
