import React from 'react';
import './StudentProfile.css';
import { Link } from 'react-router-dom';
import {FcDataConfiguration} from 'react-icons/fc';
import {FiMonitor} from 'react-icons/fi';
import {CgWorkAlt} from 'react-icons/cg';
import {BiChevronDown} from 'react-icons/bi';

export default function Student(){
    return(
        <div className="student-container">
            <header>
            <div class="navbar">
                <div class="dropdown">
                    <button class="dropbtn"><p>Fulano de Tal<BiChevronDown size={20} color="black" /> </p></button>
                <div class="dropdown-content">
                    <Link><p><FcDataConfiguration size={20} color="black"/> Configurar Perfil</p></Link>            
            </div>
         </div>
                <Link><p><FiMonitor size={20} color="black"/> Cursos</p></Link>
                <Link><p><CgWorkAlt size={20} color="black" /> Vagas</p></Link>   
            </div>
            </header>
           <body>

           </body>
        </div>
    );
}