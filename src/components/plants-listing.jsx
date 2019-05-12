import React from 'react';

import WithImageCDN from "./stock/image.jsx";

function FlowerListing(props) {
    return (
        <article className="product-listing plants">
            <figure className="product">
                <img className="product-image" src={props.imageCDN+"/hue-of-green-syngonium-plant_1.jpg"}/>
            </figure>
            <figure className="product">
                <img className="product-image" src={props.imageCDN+"/hue-of-green-syngonium-plant_2.jpg"}/>
            </figure>
            <figure className="product">
                <img className="product-image" src={props.imageCDN+"/hue-of-green-syngonium-plant_3.jpg"}/>
            </figure>
            <figure className="product">
                <img className="product-image" src={props.imageCDN+"/hue-of-green-syngonium-plant_4.jpg"}/>
            </figure>
            <figure className="product">
                <img className="product-image" src={props.imageCDN+"/hue-of-green-syngonium-plant_5.jpg"}/>
            </figure>
        </article>
    );
}

export default WithImageCDN(FlowerListing);