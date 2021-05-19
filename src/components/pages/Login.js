import React, { useState, useEffect } from 'react'
import '../css/login.css'
import {Container} from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { useHistory } from 'react-router-dom';
import content from '../../static/test';

let schema = yup.object().shape({
    email_input: yup.string().email().required(),
    password_input: yup.string().required(),
});
function Login() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    // const history = useHistory();
    // useEffect(() => {
    //   if(localStorage.getItem('user-info')) {
    //       history.push('/')
    //   }   
    // })

    // async function postLogin() {
    //     console.log(email,password)
    //     let item = {email,password}
    //     let result = await fetch('http://learninglanguage.herokuapp.com/api/customer/login', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(item)
    //     });
    //     result = await result.json();
    //     localStorage.setItem("user-info",JSON.stringify(result))
    //     history.push("/")
    // }

    console.log(errors);
    const postLogin = (data) => console.log(data);
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
                <form 
                noValidate 
                autoComplete="off" 
                className="form-login"
                onSubmit={handleSubmit(postLogin)}    
                >
                    <h3 className="title-login">ĐĂNG NHẬP</h3>
                    {content.inputs.map((input, key) => {
                        return (
                        <div className="wrapInput" key={key}>
                            <TextField className="addClass" 
                                name={input.name}
                                // value={email} 
                                id="outlined-basic" 
                                label={ input.label }
                                variant="outlined" 
                                type={input.type}
                                autoComplete="off"
                                // onChange={(e)=>setEmail(e.target.value)}
                                // error
                                // helperText="test validate"
                                {...register(input.name, { required: true })}                     
                            />   
                        </div>
                        );
                    })}
                    <div className="wrapInput">
                    <Button 
                    variant="contained" 
                    className="button"
                    type="submit"
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
