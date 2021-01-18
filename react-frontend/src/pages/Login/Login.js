import React from 'react';
import '../Register/Register.css';
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';
import { BiHomeAlt } from 'react-icons/bi';

export default function Login(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Login Page</h1>
                    <p>Entre e encontre sua oportunidade!</p>
                    <Link className="back-link"  to="/register"><FiCornerDownRight size={20} color="black"/>Ainda não sou cadastrado!</Link><br/>
                    <Link className="back-link"  to="/"><BiHomeAlt size={20} color="black"/>Home</Link>
                </section>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <Link to="/company"><button>Entrar!</button></Link>
                </form>
            </div>
        </div>
    );
}