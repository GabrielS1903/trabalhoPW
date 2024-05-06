import { Router } from 'express'
import { getUsersList, getUser, createUser, deleteUser, updateUser } from '../services/user.js'
import validator from 'validator';
import cpfCheck from 'cpf-check';

const validateEmail = (email) => {
    return validator.isEmail(email);
};

const validateCPF = (cpf) => {
    return cpfCheck.validate(cpf);
};

const router = Router()

router.get("/listaUsuarios", async (request, response) => {
    const usersList = await getUsersList()
    return response.status(200).send(usersList)
})

router.get("/unicoUsuario/:id", async (request, response) => {
    const user = await getUser(request.params.id)
    return response.status(200).send(user)
})

router.post("/criarUsuario", async (request, response) => {
    const params = {
        nome: request.body.nome,
        email: request.body.email,
        idade: request.body.idade,
        genero: request.body.genero,
        telefone: request.body.telefone,
        cpf: request.body.cpf,
        rg: request.body.rg
    }

    if (!validateEmail(params.email)) {
        return response.status(400).json({ error: 'E-mail inválido' });
    }

    if (!validateCPF(params.cpf)) {
        return response.status(400).json({ error: 'CPF inválido' });
    }

    try {
        const user = await createUser(params);
        return response.status(201).json(user);
    } catch (error) {
        return response.status(500).json({ error: 'Erro interno do servidor' });
    }
})

router.delete("/deletarUsuario/:id", async (request, response) => {
    await deleteUser(request.params.id)
    
    return response.status(204).send()
})

router.put("/alterarUsuario/:id", async (request, response) => {
    const user = await updateUser(request.params.id, {
        nome: request.body.nome,
        email: request.body.email,
        idade: request.body.idade,
        genero: request.body.genero,
        telefone: request.body.telefone,
        cpf: request.body.cpf,
        rg: request.body.rg
    })

    if (!validateEmail(user.email)) {
        return response.status(400).json({ error: 'E-mail inválido' });
    }

    if (!validateCPF(user.cpf)) {
        return response.status(400).json({ error: 'CPF inválido' });
    }

    return response.status(200).send(user)
})

export default router