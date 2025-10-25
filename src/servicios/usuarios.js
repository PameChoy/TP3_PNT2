import axios from "axios";

class ServicioUsuarios {
    #url

    constructor(){
        this.#url = 'https://68fad03594ec960660239e60.mockapi.io/usuarios'
    }

    getAll = async() => {
        try {
            const rta = await axios.get(this.#url)
            //console.log(rta.data)
            return rta.data
        }
        catch(error){
            console.error(error)
        }
    }
}

export default ServicioUsuarios