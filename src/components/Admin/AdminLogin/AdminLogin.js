import React from 'react';
import './AdminLogin.scss';

const AdminLogin = () => {
    return (
        <div className ="AdminLogin">
            <input type ="text" placeholder ="아이디" className ="AdminLogin-id" />
            <input type ="password" placeholder ="비밀번호" className ="AdminLogin-pwd" />
        </div>
    );
}

export default AdminLogin;