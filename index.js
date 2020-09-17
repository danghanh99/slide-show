window.onload = function(){
    var anh = document.getElementsByTagName("a");
    i=0;
    setInterval(function(){
        document.getElementById("img-show").src = anh[i].href;
        i++;
        content = "Ảnh : " + parseInt(i);
        document.getElementById("img-number").innerText = content;
        if (i==7) i=0; 
    },1000);
}
    

