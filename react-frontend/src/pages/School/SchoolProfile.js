import React from 'react';
import {Link} from 'react-router-dom';
import './SchoolProfile.css';
import { BiLogOut } from 'react-icons/bi';

export default function SchoolProfile(){
    return(
        <div className="scpf-container">
         <div className="content">
            <section>
                <h1>Colégio Pedro II</h1>
                <p>Acompanhe o desenvolvimento de seus alunos!</p>
                <Link className="back-link" to="/"><BiLogOut size={20} color="black" />Sair</Link> 
            </section>
            <div className="btnlinks">
                <Link to="/chkstd"><button>Acompanhar Alunos</button></Link>
            </div> 
        </div>          
        </div>
    );
}