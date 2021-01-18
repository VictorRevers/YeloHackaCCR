import React from 'react';
import './Jobs.css';
import { Link } from 'react-router-dom';
import { FcDataConfiguration } from 'react-icons/fc';
import { FiMonitor } from 'react-icons/fi';
import { CgWorkAlt } from 'react-icons/cg';
import { BiChevronDown, BiLogOut } from 'react-icons/bi';

export default function Courses(){
    return(
        <div className="student-container">
        <header>
        <div class="navbar">
            <div class="dropdown">
            <Link to="/studentprofile"><button class="dropbtn"><p>Fulano de Tal<BiChevronDown size={20} color="black" /> </p></button></Link>
            <div class="dropdown-content">
                <Link to="/stdprofconfig"><p><FcDataConfiguration size={20} color="black"/> Configurar Perfil</p></Link>            
        </div>
     </div>
            <Link to="/courses"><p><FiMonitor size={20} color="black"/> Cursos</p></Link>
            <Link to="/jobs"><p><CgWorkAlt size={20} color="black" /> Vagas</p></Link>   
            <Link to="/"><p><BiLogOut size={20} color="black" /> Sair</p></Link>   
        </div>
        </header>
        <body>
            <div className="obs">
                <h1>Em breve teremos vagas para você :)!</h1>
            </div>
        </body>
        </div>
    );

}