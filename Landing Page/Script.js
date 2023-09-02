let menuList = document.getElementById("list-box");

menuList.style.maxHeight = "0px";

function menuBtn()
{
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "400px";
        menuList.style.transition = "0.5s";
    }else{
        menuList.style.maxHeight = "0px";
    }
}