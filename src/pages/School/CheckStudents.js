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
                <h3>Alunos Cadastrados: 3500 Alunos</h3>
                <h3>Alunos Contratados: 1100 Alunos</h3>
                <h3>Alunos Realizando Cursos: 3200 Alunos</h3>
                <h3>Area de Maior Interesse: Tecnologia </h3>
                
            </div> 
        </div>          
        </div>
    );
}