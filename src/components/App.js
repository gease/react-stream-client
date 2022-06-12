import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import history from "../history";
import StreamDelete from "./stream/StreamDelete";
import StreamEdit from "./stream/StreamEdit";
import StreamList from "./stream/StreamList";
import StreamShow from "./stream/StreamShow";
import StreamCreate from "./stream/StreamCreate";
import Header from "./Header";

const App = () => {
    console.log(history);
    return <div className="ui container">
            <Router history={history}>
                <Header />
                <Switch>
                <Route path='/' exact component={StreamList}/>
                <Route path='/stream/edit/:id' exact component={StreamEdit}/>
                <Route path='/stream/create' exact component={StreamCreate} />
                <Route path='/stream/:id' exact component={StreamShow} />
                <Route path='/stream/delete/:id' exact component={StreamDelete} />
                </Switch>
            </Router>
        </div>;
}

export default App;
