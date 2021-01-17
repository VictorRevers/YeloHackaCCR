import React from 'react';
import './StudentProfile.css';
import { Link } from 'react-router-dom';
import { FcDataConfiguration } from 'react-icons/fc';
import { FiMonitor } from 'react-icons/fi';
import { CgWorkAlt } from 'react-icons/cg';
import { BiChevronDown, BiLogOut } from 'react-icons/bi';

export default function Student(){
    return(
        <div className="student-container">
            <header>
            <div class="navbar">
                <div class="dropdown">
                    <button class="dropbtn"><p>Fulano de Tal<BiChevronDown size={20} color="black" /> </p></button>
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
              <div className="student-infos">
                <div className="informations" >
                    <h1>Perfil</h1>
                    <h3>Nome:</h3>
                    <p>Fulano de Tal</p>
                    <h3>Idade</h3>
                    <p>16 Anos</p>
                    <h3>Cidade/Estado</h3>
                    <p>Rio de Janeiro - RJ</p>
                    <h3>Sobre Mim:</h3>
                    <p>Sou estudante do segundo ano e gosto muito de física, química e matemática</p>
                    <h3>Área de interesse:</h3>
                    <p>Economia</p>
                    <h3>Boletim:</h3>
                    <p>Boletim.pdf</p>
                    <h3>Currículo:</h3>
                    <p>Meucv.pdf</p>
                </div>
              </div>
           </body>
        </div>
    );
}