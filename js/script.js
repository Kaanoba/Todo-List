

    

    let btnAddTaskList = document.querySelector('#btnAddTaskList');
    let taskName = document.querySelector('#taskName');
    let taskListDiv = document.querySelector('#taskListDiv');

    let btnCompletedTask = document.querySelector('#btnCompletedTask');
    let btnRemoveTask = document.querySelector('#btnRemoveTask');
    let btnSelectAll = document.querySelector('#btnSelectAll');

    // --- Görev Ekleme Bölümü ---
     
    let taskList = [];
    let completedTaskList = [];


    btnAddTaskList.addEventListener('click', function (Event) {

        if (taskName.value == null || taskName.value =='') {
            alert('Task Name is empty');
        } else {
            createMiniBox();
        }

        
    })

    function createMiniBox() {
        
        let inputID = taskList.length + 1;

        taskList.push(inputID);

        let div = document.createElement('div');
        div.className = 'mini-box';
        div.id = 'wrapper-div' + inputID;


        let inputElement = document.createElement('input');
        inputElement.type = 'checkbox';
        inputElement.id = 'input-' + inputID;


        let label = document.createElement('label');
        label.setAttribute('for', 'input-' + inputID);
        label.innerText = taskName.value;

        div.appendChild(inputElement);
        div.appendChild(label);

        taskListDiv.appendChild(div)

    }



    // --- Btn Select Group Bölümü --- 


    let selectedList = [];

    btnSelectAll.addEventListener('click', function (Event) {
        taskList.forEach(function(value, index, array){

            let selectİnput = document.querySelector('#input-' + value);

            if (selectİnput.hasAttribute('checked')) {
                selectİnput.removeAttribute('checked');
                

                let removeItemİndex = selectedList.indexOf(value);
                if (removeItemİndex !== -1) {
                    selectedList.splice(removeItemİndex, 1);
                }

                // selectedList.remove(value);

            } else {
                
                selectİnput.setAttribute('checked', 'checked');
                selectedList.push(value);
            }
        })
    })    

    

    

    

    
    
   

    


