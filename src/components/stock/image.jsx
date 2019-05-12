import React from "react";

function is4g() {
    return CURRENT_BANDWIDTH == '4g';
}

function getImageURL() {
    return `/assets/images${is4g()?'/x':'/l'}`;
}

function withImageCDN(Component) {
    return function(props) {
        return (<Component imageCDN={getImageURL()} {...props}/>);
    }
}

export default withImageCDN;