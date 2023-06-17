import {login} from "../../reduxjs-toolkit/authReducer";
import Login from "./Login";
import React from 'react';
import {connect} from "react-redux";



class LoginContainer extends React.Component {

    componentDidUpdate() {
      //this.props.me();
        
    }
    
    render() {
        return <>
            <Login 
                login={this.props.login}
                authReducer={this.props.authReducer}
             />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        authReducer: state.authReducer
    }
}


export default connect(mapStateToProps, {login})(LoginContainer);