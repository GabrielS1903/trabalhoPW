import User from '../models/user.js'

export const getUsersList = async () => {
    const usersList = await User.find()
    return usersList
}

export const getUser = async (id) => {
    const user = User.findById(id)
    return user
}

export const createUser = async (params) => {
    const user = new User({
        nome: params.nome,
        email: params.email,
        idade: params.idade,
        genero: params.genero,
        telefone: params.telefone,
        cpf: params.cpf,
        rg: params.rg
    })

    await user.save()
    return user
}

export const deleteUser = async (id) => {
    await User.findByIdAndDelete(id)
}

export const updateUser = async (id, params) => {
    const user = await User.findByIdAndUpdate(id, {
        nome: params.nome,
        email: params.email,
        idade: params.idade,
        genero: params.genero,
        telefone: params.telefone,
        cpf: params.cpf,
        rg: params.rg
    }, {
        new: true
    })
    return user
}