const inputElement = document.querySelector(".to-do-input");
const addTasks = document.querySelector(".add-tasks");
const textLists = document.querySelector(".tasks-lists");

let myToDos = [];

addTasks.addEventListener("click", () => {
  if (inputElement.value !== "") { //daca utilizatorul scrie ceva
    myToDos.push(inputElement.value); //adauga tasku-ul in array-ul myToDos
    // localStorage.setItem('myToDos',myToDos)
    inputElement.value = "";
  }
  showText();
});

const showText = () => {
  // myToDos = localStorage.getItem('myTodos')
  let htmlBlock = "";
  for (let i = 0; i < myToDos.length; i++) {
    let liElement = `<li class="list-group-item">${myToDos[i]}
   
      <button type="button" class="btn btn-primary delete-element">Delete</button>
      <button type="button" class="btn btn-info edit-element">Edit task</button>

      <div class="input-group mb-3" hidden>
  <input type="text" class="form-control edit-input"  aria-label="Recipient's username" aria-describedby="basic-addon2" value = '${myToDos[i]}'>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary save-me" type="button">Save me</button>
  </div>
</div>

      </li>`;
    htmlBlock += liElement;
  }

  textLists.innerHTML = htmlBlock;

  const deleteElement = document.querySelectorAll(".delete-element"); //querySelectorAll => [{},{},{}], querySelector => {}
  for (let i = 0; i < deleteElement.length; i++) { 
    deleteElement[i].addEventListener("click", () => { //{}.addEventListener
      myToDos.splice(i, 1);
      showText();
    });
  }

  const editElement = document.querySelectorAll(".edit-element"); //querySelectorAll =>toate butoanele de edit [{},{},{}]
  for (let i = 0; i < editElement.length; i++) {
    editElement[i].addEventListener("click", () => {
      editElement[i].parentElement.children[2].removeAttribute("hidden");
    });
    const saveMeButton = document.querySelectorAll('.save-me') // [ {}, {} ]
    const editInputElement = document.querySelectorAll('.edit-input') //
    for (let i=0; i < saveMeButton.length; i++){
      saveMeButton[i].addEventListener('click', ()=>{
         // ia textul din inputul pentru editare
         myToDos[i] = editInputElement[i].value //ce anume inlocuiesc = cu ce imi doresc sa inclocuiesc
         //inlocuieste textul din li cu cel nou
         showText()
         //ascunde input-ul de editare
      })
    }
  }
};


// add task button > se adauga li > edit > se afiseaza inputul de editare > modificam taskul