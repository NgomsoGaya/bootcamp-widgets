function greetingWidget(){
    return{
        name: "",
        greeting: "",
        greet(){
        let neighboursname = this.name
        this.greeting = "Hello, " + neighboursname
        }
    }
}
