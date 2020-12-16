const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
input.setAttribute('placeholder','내용을 입력하세요.');
const addBtn = document.querySelector('.footer__button');

function onAdd (){
    const text = input.value;
    if (text ===''){
        input.focus();
        return;
    }
    const item = createItem(text);   
    items.appendChild(item);
    item.scrollIntoView({block:'center'});
    input.value = '';
    input.focus();
}

    
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class' , 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class' , 'item');

    const name = document.createElement('span');
    name.setAttribute('class' , 'item__name');
    name.innerText = text;
    
    const delBtn = document.createElement('button');
    delBtn.setAttribute('class','item__delete');
    delBtn.innerHTML='<i class="far fa-trash-alt"></i>';
    delBtn.addEventListener('click' ,()=>{
        items.removeChild(itemRow);
    });

    const divider = document.createElement('div');
    divider.setAttribute('class' , 'item__divider');

    item.appendChild(name);
    item.appendChild(delBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(divider);

    return itemRow;
    
}

addBtn.addEventListener('click' , ()=>{
    onAdd();
});

input.addEventListener('keypress', event=>{
    if(event.key === 'Enter') {
        onAdd();
    }
});




