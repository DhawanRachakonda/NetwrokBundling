import React from 'react';
import {Route, Redirect} from "react-router-dom";
import Flowers from '../components/good_bandwidth/flowers.jsx';
import Cakes from '../components/good_bandwidth/cakes.jsx';
import Plants from '../components/good_bandwidth/plants.jsx';
import Home from '../components/good_bandwidth/home.jsx';

function RoutesDef() {
    return(
        <React.Fragment>
            <Route exact path="/flowers" component={Flowers}/>
            <Route exact path="/cakes" component={Cakes}/>
            <Route exact path="/plants" component={Plants}/>
            <Route exact path="/" component={Home} />
        </React.Fragment>
    );
}

export default RoutesDef;