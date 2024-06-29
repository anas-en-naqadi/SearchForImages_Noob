

document.addEventListener('DOMContentLoaded', function () {

var input = document.getElementById('sarch') ;
var button = document.getElementById('but');
var cmp = 1 ;
var container = document.querySelector('.container');
var req = new XMLHttpRequest();
var nextp = document.getElementById("buti");
button.addEventListener('click',function searchImage(){

    var key = "0jy69O-eyD8g_-TXpZbhfK3kXtI9vX0ea6gVGrzshG4";
    var url = `https://api.unsplash.com/search/photos?page=${cmp}&query=${input.value}&client_id=${key}&per_page=12`;
    req.open('GET',url);
    req.send();
if(input.value){


    req.onload = function (){
        if (req.status === 200) {
            const data = JSON.parse(req.response);

            data.results.forEach(function (result) {
                var img = document.createElement('img');
                img.src = result.urls.small;
                img.id ="img";
                container.appendChild(img);
            });
            nextp.style.display = "block";

        }
        if(req.status == 400){


        }
    }}
})

nextp.addEventListener('click',function(){

    cmp++;
    var key = "0jy69O-eyD8g_-TXpZbhfK3kXtI9vX0ea6gVGrzshG4";
    var url = `https://api.unsplash.com/search/photos?page=${cmp}&query=${input.value}&client_id=${key}&per_page=12`;
    req.open('GET',url);
    req.send();
if(input.value){


    req.onload = function (){
        if (req.status === 200) {
            const data = JSON.parse(req.response);

            data.results.forEach(function (result) {
                var img = document.createElement('img');
                img.src = result.urls.small;
                img.id ="img";
                container.appendChild(img);
            });
            nextp.style.display = "block";

        }
        if(req.status == 400){


        }
    }}
    
})



})