import React from 'react';
import './Landing.css'
import logo from '../../assets/logo.jpg';

import {Link} from 'react-router-dom';

export default function Landing(){
    return(
        <div className="landing-container">
        <body>
         <h1>Yelo</h1>
         <div className="content">
            <section>
                <img src={logo} width={200}></img>
                <p>Com o Yelo você pode ajudar jovens a entrar no mercado de trabalho com capacitação ou ser um jovem em busca de um grande futuro!</p>
            </section>
            <div className="btnlinks">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/register"><button>Cadastro Aluno</button></Link>
                <Link><button>Cadastro Empresa</button></Link>
                <Link><button>Cadastro Escola</button></Link>
            </div> 
        </div>          
        </body> 
    </div>
    );
}