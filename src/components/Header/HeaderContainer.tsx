import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {StateType} from "../../redux/redux-store";
import {AuthDataType, setUserData} from "../../redux/auth-reducer";
import axios from "axios";


type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

type PropsType = MapStateToPropsType & {
    setUserData: (data: AuthDataType) => void
}


class HeaderContainer extends Component<PropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                const {id, email, login} = response.data.data
                if (response.data.resultCode === 0) {
                    this.props.setUserData({userId: id, email, login})
                }
            })
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}/>
        );
    }
}


const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer);