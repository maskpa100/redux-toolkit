
import Header from "./Header";
import React from 'react';
import {connect} from "react-redux";



class HeaderContainer extends React.Component {

    render() {
        return <>
            <Header 
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


export default connect(mapStateToProps)(HeaderContainer);