
class todo {
    id:string;
    text:string;
    constructor(todoText:string){
        this.text=todoText;
        this.id=new Date().toISOString();
    }
}
export default todo;