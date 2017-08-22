import { IndexRoute, Route, Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './components/App'
import Counter from './components/Counter'
import NotFound from './components/NotFound'
import HelloWorld from './components/HelloWorld'

const history = createBrowserHistory()

export default () => (
    <Router history={history }>
        <Route path="/" component={App}>
            <IndexRoute component={Counter}/>
            <Route path="hello-world" component={HelloWorld}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Router>
)

