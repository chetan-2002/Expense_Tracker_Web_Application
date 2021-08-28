//this file is the starting point for any react project

//importing reactdom object from react-dom
import ReactDOM from 'react-dom';

//applying custom css to this file
import './index.css';

//App is a custom component,this shows how to import a react component from another file
import App from './App';

//root is a div container that is inside /public/index.html file
//this is for rendering the app inside that div element
ReactDOM.render(<App />, document.getElementById('root'));
