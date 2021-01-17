import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import { BiHomeAlt } from 'react-icons/bi';


export default function SchoolRegister(){
    return (
        <div className="register-container">
         <body>
         <div className="content">
            <section>
              <h1>Cadastro de Escola</h1>
              <p>Cadastre sua escola e ajude seus alunos a se desenvolverem!</p>
              <div className="back">
                  <Link className="back-link"  to="/Login"><FiCornerDownLeft size={20} color="black"/>Já tenho cadastro!</Link><br/>
                  <Link className="back-link"  to="/"><BiHomeAlt size={20} color="black"/>Home</Link>
              </div>
            </section>
            <form>
              <input placeholder="Nome da escola" />
              <input placeholder="Cidade" />
              <input placeholder="Estado" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Senha" />
        
              <button>Cadastrar!</button>
            </form>
          
           
          </div>
         </body>
        </div>
      );
    }
