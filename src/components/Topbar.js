import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Topbar.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '500px',
      },
    },
  }));
function Topbar() {
    const classes = useStyles();
    return (
        <>
            <nav className='topbar'>
                <div className="topbar-container">
                    <div className="wrapTopbar">
                        <Link to="/" className="navbar-logo">
                            <img src="img/logo.png"/>
                        </Link>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Tìm khóa học, giảng viên" variant="outlined" />
                        </form>
                        <div className="item-button">
                            <Button variant="contained" href="#" className="buttonHeader">Kích hoạt khóa học <i class="fas fa-lock-open"></i></Button>
                        </div>
                        <div className="cart">
                            <ShoppingCartIcon />
                        </div>
                        <div className="wrapButton">
                            <div className="item-button">
                                <Button variant="contained" href="#" className="buttonHeader login">Đăng Nhập</Button>
                            </div>
                            <div className="item-button">
                                <Button variant="contained" href="#" className="buttonHeader register">Đăng Ký</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Topbar
