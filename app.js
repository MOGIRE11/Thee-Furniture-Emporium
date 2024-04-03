//const filterInput=document.getElementById('search');
// const listItems=document.querySelectorAll('#myUl li');
//const listItems = Array.from(document.querySelectorAll("#myUl li"));

// filterInput.addEventListener('input',function()
// {
//     const filterValue=filterInput.value.toLowerCase();
    
//     listItems.forEach(item=>
//         {
//             const text=item.textContent.toLowerCase();
//             item.style.display=text.includes(filterValue)?
//             'block':'none';
//         });
    
// });


// const searchItem=document.querySelector('.navsearch');
// const searchInput=document.querySelector('#search');
// searchItem.addEventListener('click', function(){
//     searchItem.style.width='250px';
//     searchInput.style.display='flex';
//     searchInput.style.width='85%';
// });


// hamburger menu
const burger=document.querySelector('.listMenu');
const ourList=document.querySelector('.nav-list');
const exitList=document.querySelector('.cross')

burger.addEventListener('click',function(){
    ourList.classList.toggle('open-list')
});

exitList.addEventListener('click',function(){
    ourList.classList.remove('open-list');
});

const chevron=document.querySelector('.chevron');
chevron.onclick=()=>{
    chevron.classList.toggle('down');
    productList.classList.toggle('show-more-products');
};

const productList=document.querySelector('.more-products');
productList.addEventListener('click',function(){
    productList.classList.toggle('show-more-products');
});




