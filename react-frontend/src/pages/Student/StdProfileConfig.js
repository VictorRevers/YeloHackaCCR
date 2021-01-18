import React from 'react';
import { Link } from 'react-router-dom';
import { FcDataConfiguration } from 'react-icons/fc';
import { FiMonitor } from 'react-icons/fi';
import { CgWorkAlt } from 'react-icons/cg';
import { BiChevronDown, BiLogOut } from 'react-icons/bi';

import './StudentProfile.css';

export default function StdProfileConfig(){
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
                <div className="pf-container">
                    <div className="info-area">
                        <form>
                            <h1>Informações do perfil:</h1>
                            <label>Foto:</label><br/>
                            <input type="file" /><hr />
                            <input type="text" placeholder="Area de interesse"  /><hr/>
                            <textarea placeholder="Fale um pouco sobre você :)" /><hr/>
                            <label>Boletim:</label><br/>
                            <input type="file" />
                            <hr/>
                            <label>CV:</label><br/>
                            <input type="file" />
                            <hr/>
                            <button>Salvar</button>
                        </form>
                       
                    </div>
                </div>
           </body>
        </div>
    );
}
