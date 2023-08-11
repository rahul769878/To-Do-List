let data = [];
let myIndex = -1;

function display() {
    let dataArray = data.map(function(value, index){
        return `<div><p class="title">${value}</p>
        <div class="btn-container">
        
          <button type="button" class="edit-btn" onclick="editItem(${index})">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" 
          class="delete-btn" onclick="deleteItem(${index})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
        </div>`
    })
    document.getElementById("display").innerHTML = dataArray.join(" ");
}


function addItem() {
    let inputValue = document.getElementById("grocery").value;
    if (myIndex<0) {
        data.push(inputValue);   
    }
    else{
        data[myIndex] = inputValue
    }
    document.getElementById("grocery").value = "";
    display();
}

function deleteItem(index) {
    let deleteData = data.splice(index, 1);
    display(deleteData);
}

function clearItems() {
    let clearAll = data.splice(0);
    display(clearAll);
}

function editItem(index) {
    document.getElementById("grocery").value = data[index];
    myIndex = index;
}
