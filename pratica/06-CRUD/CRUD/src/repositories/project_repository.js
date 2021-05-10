const projectSchema = require ("../database/schema/projectschema")
const connection = require ("../database/connection")
const Project = require ("../models/project")

class ProjectReposirory{

    async add(project){
        await connection.initConnection()
        const projectobj = new Project(new Date() , new Date(), 1000.00, "projeto1")
        const newProject = await projectSchema.create(projectobj)
        await connection.endConnection()
    }
    
    getById(id){
        const project = new Project(id, '01/01/2020', '01/02/2020', 1000.00, 'otavio')
        console.log('Projeto encontrado:', project)
    }

    update(project){
        console.log('Projeto atualizado:', project)
    }

    delete(project){
        console.log('Projeto deletado:', project)
    
}

}

module.exports = ProjectReposirory