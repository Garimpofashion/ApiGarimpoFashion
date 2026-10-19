import * as clienteService from '../services/clienteServices.js';
import Joi from 'joi';


export const clienteCreateSchema = Joi.object({
  cpf: Joi.string().length(11).required(),
  nome: Joi.string().required().max(100),
  telefone: Joi.string().required(),
  endereco: Joi.string().required().max(100),
  cidade: Joi.string().max(30).allow(''),
  bairro: Joi.string().max(30).allow(''),
  cep: Joi.string().required(),
  email: Joi.string().email().required().max(50),
  senha: Joi.string().min(6).required(),
});

export const clienteUpdateSchema = Joi.object({
  nome: Joi.string().max(100),
  telefone: Joi.string().required(),
  endereco: Joi.string().max(100),
  cidade: Joi.string().max(30).allow(''),
  bairro: Joi.string().max(30).allow(''),
  cep: Joi.string(),
  email: Joi.string().email().max(50),
  senha: Joi.string().min(6),
}).min(1);

export const listarClientes = async (req, res) => {
    try {
      
      const { cpf, nome, email } = req.query;
  
      const clientes = await clienteService.findAll(cpf, nome, email);
   
      res.json(clientes);
    } catch (err) {
      console.error('Erro ao buscar clientes:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

