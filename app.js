const button = document.querySelector('.btn');
var input = document.querySelector('.input');
const container = document.querySelector('.container')

class item{
    constructor(itemname){
        this.creatediv(itemname);

    }

    creatediv(itemname){
        let input = document.createElement('input')
        input.value = itemname;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = 'text';

        let itembox = document.createElement('div');
        itembox.classList.add('items')

        let editbutton = document.createElement('button');
        editbutton.innerHTML = 'EDIT';
        editbutton.classList.add('edit');

        let removebutton = document.createElement('button');
        removebutton.innerHTML = 'REMOVE';
        removebutton.classList.add('remove');

        container.appendChild(itembox);
        itembox.appendChild(input);
        itembox.appendChild(editbutton);
        itembox.appendChild(removebutton);

        editbutton.addEventListener('click' , () => this.edit(input))
        removebutton.addEventListener('click' , () => this.remove(itembox))
    }

    edit(input){
        input.disabled = !input.disabled;
    }

    remove(item){
        container.removeChild(item);
    }
}

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

button.addEventListener('click' , check);
input.addEventListener('click',(e) => {
    if(e.which == 13){
       check();
   }
})