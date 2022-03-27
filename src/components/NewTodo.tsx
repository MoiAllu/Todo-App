import { useRef } from "react";
const NewTodo:React.FC <{onAddTodo:(text:string)=>void}>=(props)=>{
    const todoInputRef=useRef<HTMLInputElement>(null);
    const submitHandler=(events:React.FormEvent)=>{
        events.preventDefault();
        const enteredValue=todoInputRef.current!.value;

        if(enteredValue.trim().length===0){
            //throw an Error
            return;
        }
        props.onAddTodo(enteredValue)
    }
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="text">What todo?</label>
            <input type='text' id='text' ref={todoInputRef}></input>
            <button>Submit</button>
        </form>
    );
}
export default NewTodo;