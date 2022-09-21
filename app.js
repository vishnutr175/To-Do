
//creating variables


let Todo_inp=document.querySelector(".to_inp");
let Todo_butn=document.querySelector(".to_btn");
let Todo_ul=document.querySelector(".todo_list");



Todo_butn.addEventListener("click",fun1_butn_click);
// check error
Todo_ul.addEventListener("click",del_fun);



function fun1_butn_click(e){
    const TodoDiv=document.createElement('div');
    
    TodoDiv.classList.add("todo");

    const Toli=document.createElement('li');
    Toli.classList.add("todoitems");
    Toli.innerText=Todo_inp.value;
    TodoDiv.appendChild(Toli);

    //trash 
    const trash_button=document.createElement('button');
    trash_button.classList.add("Trash");
    trash_button.innerText="Delete"
    TodoDiv.appendChild(trash_button);
   


    Todo_ul.appendChild(TodoDiv);
    //clr input
    Todo_inp.value="";
    //e.preventDefault();



}
//del fun
function del_fun(e){
    const item=e.target

    if (item.classList[0]==="Trash"){
        const todo=item.parentElement;
        todo.remove();

    }


}