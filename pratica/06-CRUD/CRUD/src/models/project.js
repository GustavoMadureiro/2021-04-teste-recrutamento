class Project{
    initialDate;
    finalDate;
    budget;
    name;

    constructor(initialDate, finalDate, budget, name ){

        this.initialDate = initialDate;
        this.finalDate = finalDate;
        this.budget = budget;
        this.name = name;

    }

    
    // get dataInicial(){
    //     return this.#initialDate
    // }
    
    // get dataFinal(){
    //     return this.#finalDate
    // }
    
    // get budget(){
    //     return this.#budget
    // }
    
    // get name(){
    //     return this.#name
    // }
    
}

module.exports = Project