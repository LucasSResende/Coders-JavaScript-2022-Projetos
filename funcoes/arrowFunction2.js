function Gente() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 100000)
}
    

new Gente