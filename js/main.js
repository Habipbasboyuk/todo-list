const $input = document.querySelector('#input-box');
const $listContainer = document.querySelector('#list-container');
const $button = document.querySelector('button');




    $button.addEventListener('click', ()=> {
        
        if($input.value === '') {
            alert('you must write something');
        } else {
            let $li = document.createElement('li');
            $li.innerHTML = $input.value;
            $listContainer.appendChild($li)
    
            let $span = document.createElement('span');
            $span.innerHTML = '\u00d7';
            $li.appendChild($span);
        }
    
        $input.value = '';
        saveData();
    })




$listContainer.addEventListener('click', (e) => {

    console.log(e)

    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();

        saveData();
    }
}, false);

$input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        $button.click();
    }
})

function saveData() {
    localStorage.setItem('data', $listContainer.innerHTML)
}

function showTask() {
    $listContainer.innerHTML = localStorage.getItem('data');
}

showTask();