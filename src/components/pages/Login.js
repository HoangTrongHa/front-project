import React, { useState, useEffect } from 'react'
import '../css/login.css'
import {Container} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
      if(localStorage.getItem('user-info')) {
          history.push('/')
      }   
    })
    async function postLogin() {
        console.log(email,password)
        let item = {email,password}
        let result = await fetch('http://learninglanguage.herokuapp.com/api/customer/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/")
    }
    return (
        <div>
            <Container>
                <div className="wrapImg">
                    <img
                    className="img-login"
                    src="img/loginimg.png"
                    />
                </div>
                <div className="wrapLogin">
                <form noValidate autoComplete="off" className="form-login">
                    <h3 className="title-login">ĐĂNG NHẬP</h3>
                    <div className="wrapInput">
                        <TextField className="addClass" value={email} id="outlined-basic" label="email" variant="outlined" type="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="wrapInput">
                        <TextField id="outlined-basic" value={password} label="Password" variant="outlined" type="password"
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="wrapInput">
                    <Button variant="contained" className="button"
                        onClick={postLogin}
                    >
                       ĐĂNG NHẬP
                    </Button>
                    </div>
                </form>
                </div>
            </Container>
        </div>
    )
}

export default Login
