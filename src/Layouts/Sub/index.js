import React from 'react';
import Main from "../../Main";
import Aside from '../../Aside';
import Footer from "../../Footer";

function Sub(){
    return(
        <React.Fragment>
            <Main />
            <Aside />
            <Footer />
        </React.Fragment>
    )
}

export default Sub;