import React, {lazy} from 'react';
import {Route, Redirect} from "react-router-dom";

const Flowers = lazy(() => import('../components/low_bandwidth/flowers.jsx'));
const Cakes = lazy(() => import('../components/low_bandwidth/cakes.jsx'));
const Plants = lazy(() => import('../components/low_bandwidth/plants.jsx'));
const Home = lazy(() => import('../components/low_bandwidth/home.jsx'));

function LazyRoutes() {
    return (
        <React.Fragment>
            <Route exact path="/flowers" component={Flowers}/>
            <Route exact path="/cakes" component={Cakes}/>
            <Route exact path="/plants" component={Plants}/>
            <Route exact path="/" component={Home} />
        </React.Fragment>
    );
}

export default LazyRoutes;