import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';


export default function Register(){
    return (
        <div className="register-container">
         <body>
         <div className="content">
            <section>
              <h1>Cadastro</h1>
              <p>Cadastre-se agora e desenvolva sua carreira!</p>
              <div className="back">
                  <Link className="back-link"  to="/Login"><FiCornerDownLeft size={20} color="black"/>Já tenho cadastro!</Link>
              </div>
            </section>
            <form>
              <input placeholder="Nome" />
             
              <input type="number" placeholder="Idade" id="age" />
            
              <input type="email" placeholder="Email" />
             
              <input type="password" placeholder="Senha" />
              <label>Escola:</label>
              <input list="schools" />
              <datalist id="schools">
                <option value="Colégio Federal XXX" />
                <option value="Colégio Municipal YYY" />
                <option value="Colégio Estadual ZZZ" />
              </datalist>
              <label>Boletim:</label>
              <input type="file" />
              <button>Cadastrar!</button>
               
               
              
            </form>
          
           
          </div>
         </body>
        </div>
      );
    }
