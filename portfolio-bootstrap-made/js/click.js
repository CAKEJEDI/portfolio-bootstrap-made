let parent = document.querySelector('.parent');
let hasChild = document.querySelector('.has-child');

parent.addEventListener("click",(e)=>{
    e.preventDefault();
    parent.classList.toggle("active");

})

hasChild.addEventListener("click",e=>{
    e.preventDefault();
    e.stopPropagation();
    hasChild.classList.toggle("active");
})