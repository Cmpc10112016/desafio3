const fs = require('fs').promises

class Contenedor {
    constructor(path) {
        this.path = path

    }
    async save(objeto) {
        try {
            const leer = await fs.readFile(this.path, 'utf-8');
            const data = JSON.parse(leer);
            let id;
            data.length === 0 
                (id = 1) 
                (id = data[data.length - 1].id + 1);
            const newProduct = {...objeto, id };
            data.push(newProduct);
            await fs.writeFile(this.path, JSON.stringify(data, null, 2), 'utf-8');
            return newProduct.id;
        } catch (error) {
            console.log(error) 
        }
    }
    async getById(id) {
        try {
            const leer = await fs.readFile(this.path, 'utf-8');
            const data = JSON.parse(leer);
            const obj = data.find(obj => obj.id === id);
            if (obj) {
                return obj
            }
            return null
        } catch (error) {
            console.log(error)
        }
    }
    async getAll() {
        const leer = await fs.readFile(this.path, 'utf-8');
        return JSON.parse(leer)
    }
    async deleteById(id) {
        try {
            const leer = await fs.readFile(this.path, "utf-8");
            const data = JSON.parse(leer);
            const obj = data.filter(obj => obj.id === id);
            const borrar = await fs.writeFile(this.path, JSON.stringify([], null, 2), 'utf-8')
        } catch (error) {
            console.log(error)
        }
    }
    async deleteAll() {
        try {
            await fs.writeFile(this.path, JSON.stringify([], null, 2), 'utf-8');
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = Contenedor