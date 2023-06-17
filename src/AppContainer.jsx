import {login} from "./reduxjs-toolkit/authReducer";
import App from "./App";
import React from 'react';
import {connect} from "react-redux";

class AppContainer extends React.Component {

    componentDidMount() {

        if(this.props.addCookie){

        }
        
    }
    
    render() {
        return <>
            <App 

             />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        authReducer: state.authReducer
    }
}


export default connect(mapStateToProps, {login})(AppContainer);