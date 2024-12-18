const text = document.getElementById('textarea');
const result = document.getElementById('result');
const container = document.getElementById('container-textarea');
const limit = 250;

result.textContent = 0+"/"+limit;
text.addEventListener("input",function(){
    let textLength = text.value.length;
    result.textContent = textLength+"/"+limit;

    if(textLength >= limit){
        container.style.borderColor = "#dd0d00";
        result.style.color = "#dd0d00";
        text.value = textarea.value.substring(0, limit-1);
    }
    else{
        container.style.borderColor = "#000";
        result.style.color = "#000";
    }
});