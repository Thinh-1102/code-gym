




function start(){
    handleListItem(function(item){
        console.log(item)
    })
}

start()

// Hiện list danh sách
var listIcon = document.querySelector('.list-icon');
var fullResult = document.querySelector('.full-result')
listIcon.onlick = function(){
    fullResult.classList.add('open')
}

//tạo list danh sách
function handleListItem(callback){
    var goodsApiUrl = "http://localhost:3000/goods";
    fetch(goodsApiUrl)
    .then(function(reponse){
        return reponse.json
    })
    .then(callback)
}