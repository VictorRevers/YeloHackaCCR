import React from 'react';
import './Company.css';
import {BiLogOut} from 'react-icons/bi'

import {Link} from 'react-router-dom';

export default function Company(){
    return(
        <div className="company-container">

         <div className="content">
            <section>
                <h3>NOME DA EMPRESA</h3>
                <h3>LOGO DA EMPRESA</h3>
                <p>Ajude jovens a se desenvolverem!</p>
                <Link className="back-link" to="/"><BiLogOut size={20} color="black" />Sair</Link>
            </section>
            <div className="btnlinks">
                <Link to="/newjob"><button>Cadastrar Vagas</button></Link>
            </div> 
        </div>          
    </div>
    );
}