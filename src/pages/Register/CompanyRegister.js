import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import { BiHomeAlt } from 'react-icons/bi';


export default function CompanyRegister(){
    return (
        <div className="register-container">
         <body>
         <div className="content">
            <section>
              <h1>Cadastro de Empresa</h1>
              <p>Contrate e ajude jovens a se desenvolverem!</p>
              <div className="back">
                  <Link className="back-link"  to="/Login"><FiCornerDownLeft size={20} color="black"/>Já tenho cadastro!</Link><br/>
                  <Link className="back-link"  to="/"><BiHomeAlt size={20} color="black"/>Home</Link>
              </div>
            </section>
            <form>
              <input placeholder="Nome da empresa" />
              <input placeholder="Cidade" />
              <input placeholder="Estado" />
              <input placeholder="CNPJ" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Senha" />
              <label>Logo:</label>
              <input type="file" />
        
              <button>Cadastrar!</button>
            </form>
          
           
          </div>
         </body>
        </div>
      );
    }
