import React from 'react';
import './StudentProfile.css';
import { Link } from 'react-router-dom';
import { FcDataConfiguration } from 'react-icons/fc';
import { FiMonitor } from 'react-icons/fi';
import { CgWorkAlt } from 'react-icons/cg';
import { BiChevronDown, BiLogOut } from 'react-icons/bi';
import avatar from '../../assets/img_avatar.png';

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
              <div className="student-infos">
                <div className="informations" >
                    <div class="card">
                        <img src={avatar} />
                        <div class="container">
                        <h1><b>Fulano de Tal</b></h1>
                        <h4>Cidade-Estado:</h4> <p>Rio de Janeiro-RJ</p>
                        <h4>Área de interesse</h4> <p>Economia</p>
                        <h4>Área de interesse</h4> <p>Economia</p>
                        <h4>Boletim:</h4> <p>boletim.pdf</p>
                        <h4>Curriculo:</h4> <p>curriculo.pdf</p>
                    </div>
            </div>  
                </div>
              </div>
        </div>
    );
}