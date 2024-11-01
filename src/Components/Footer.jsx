import React from 'react';
import { Table } from '../assets/categories';
import { Link } from 'react-router-dom';
import f_book from '../assets/f_book.svg'
import insta from '../assets/insta.svg'
import x_twit from '../assets/x_twit.svg'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer-container'>
                <div className="stay">
                    <h1>Stay in the know with our <span>weekly newsletter</span></h1>
                </div>
                <div className="list">
                    <form action="">
                        <table>
                            <thead>
                                <tr>
                                    <th>Categories</th>
                                    <th>Navigation</th>
                                    <th>Template</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Table.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.c_1}</td>
                                            <td>{item.c_2}</td>
                                            <td>{item.c_3}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </form>
                </div>
                <div className="Social">
                    <Link to='https://www.facebook.com/login.php/'><img src={f_book} alt="" /></Link>
                    <Link to='https://www.instagram.com/accounts/login/?hl=en'><img src={insta} alt="" /></Link>
                    <Link to='https://x.com/i/flow/login'><img src={x_twit} alt="" /></Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;