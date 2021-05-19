import React from 'react'
import './Footer.css'
import {Row, Col, Container} from 'react-bootstrap';
import content from '../static/test';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="wrapFooter">
                <Row>
                    <Col col lg="4" col md="3" col sm="4" col xs="6">
                        <img src="img/logo.png" />
                        <ul className="listItem">
                       {
                        content.unica.map((item,key) => {
                            return (
                                <li>
                                    <Link to="/" className="unicaLink">
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })
                       }
                    </ul>
                    </Col>
                    <Col col lg="4" col md="3" col sm="4" col xs="6">
                        <span className="titleFooter">Về Unica</span>
                        <ul className="listItem">
                       {
                        content.about_unica.map((item,key) => {
                            return (
                                <li>
                                    <Link to="/" className="unicaLink">
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })
                       }
                    </ul>
                    </Col>
                    <Col col lg="4" col md="3" col sm="4" col xs="6">
                        <span className="titleFooter">Hợp tác liên kết</span>
                        <ul className="listItem">
                        {
                        content.cooperation.map((item,key) => {
                            return (
                                <li>
                                    <Link to="/" className="unicaLink">
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })
                       }
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer
