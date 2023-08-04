var textData = document.querySelector('.section-data form input[type=text]')

var submitBtn = document.querySelector('input[type=submit]').addEventListener('click', (e)=>{
    e.preventDefault()
    
    var contentDiv = document.querySelector('.list-wraper')

    if(textData.value == ''){
        alert('Por favor, insira um valor...')
    }else

    contentDiv.innerHTML += `
    
    <div class="list-single">
    <h3>${textData.value}</h3>
    <span class="material-symbols-outlined" translate="no">close</span>
    </div>

    `

    textData.value = ''

    var removeBtn = document.querySelectorAll('span')

    for(var i = 0; i < removeBtn.length; i++){
        removeBtn[i].addEventListener('click',(e)=>{
            e.target.parentElement.remove()
        })
    }
})







