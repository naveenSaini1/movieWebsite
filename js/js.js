console.log('hello');
let array = [];

let searchButton = document.getElementById('searchs');
searchButton.addEventListener('click', function () {

    for (let i = 0; i < document.links.length; i++) {
        array.push(document.links[i].text)
        let inputValue = document.getElementById('search-icon');

        if (inputValue == document.links[i].innerText) {
            console.log(document.links[i].text);
            document.links[0].style.border = "5px solid green";
        }
        else {
            // console.log(document.links[i].text);
            document.links[i].style.border = "5px solid red";
        }
    }
});
console.log(array);

// ajax implements 

let ajaxMenu = document.getElementById('menus1');
ajaxMenu.addEventListener('click', function () {
    console.log('djfldj');
    
    let allContent = document.querySelector('.all-content');
    let str = '';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'hollywood_dub.html', true);
    xhr.onload = function () {
        console.log(xhr.response);
        str+=xhr.responseText;
    }
    allContent.innerHTML=str;
    xhr.send();
});