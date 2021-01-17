import React from 'react';
import './Company.css';
import {BiLogOut} from 'react-icons/bi'
import {FiCornerDownLeft} from 'react-icons/fi';

import {Link} from 'react-router-dom';

export default function Company(){
    return(
        <div className="company-container">

         <div className="content">
            <section>
                <h3>NOME DA EMPRESA</h3>
                <h3>LOGO DA EMPRESA</h3>
                <p>Ajude jovens a se desenvolverem!</p>
                <Link className="back-link" to="/company"><FiCornerDownLeft size={20} color="black" />Voltar</Link><br/>
                <Link className="back-link" to="/"><BiLogOut size={20} color="black" />Sair</Link>
            </section>
            <form>
              <input placeholder="Cargo" />
              <input placeholder="Area" />
              <textarea placeholder="Descrição" />
              <button>Cadastrar Vaga!</button>
            </form>
           
        </div>          
    </div>
    );
}