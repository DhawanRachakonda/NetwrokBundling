import React from 'react';

import WithImageCDN from "./stock/image.jsx";

function FlowerListing(props) {
    return (
        <article className="product-listing plants">
            <figure className="product">
                <img className="product-image" src={props.imageCDN+"/chocolate-truffle-cream-cake-half-kg_1.jpg"}/>
            </figure>
            <figure className="product">
                <img className="product-image" src={props.imageCDN+"/chocolate-truffle-cream-cake-half-kg_2.jpg"}/>
            </figure>
            <figure className="product">
                <img className="product-image" src={props.imageCDN+"/chocolate-truffle-cream-cake-half-kg_3.jpg"}/>
            </figure>
            <figure className="product">
                <img className="product-image" src={props.imageCDN+"/chocolate-truffle-cream-cake-half-kg_4.jpg"}/>
            </figure>
            <figure className="product">
                <img className="product-image" src={props.imageCDN+"/chocolate-truffle-cream-cake-half-kg_5.jpg"}/>
            </figure>
        </article>
    );
}

export default WithImageCDN(FlowerListing);