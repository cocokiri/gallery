import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import Button from "./Button";
import createHashHistory from 'history/createHashHistory';
import myStyle from './css/myStyles.css.js'


const history = createHashHistory();
console.log(history);


const Index = React.createClass({
    render() {
        return (
            <div>HALLLLOOOO
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path="/but" component={Button}/>
                        <Route path="/illustration" component={Button}/>

                    </Switch>
                </Router>
            </div>
        )
    }
})

export default Index;


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
