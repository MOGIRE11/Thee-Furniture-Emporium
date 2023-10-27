const filterInput=document.getElementById('search');
const listItems=document.querySelectorAll('#myUl li');

filterInput.addEventListener('input',function()
{
    const filterValue=filterInput.value.toLowerCase();
    
    listItems.forEach(item=>
        {
            const text=item.textContent.toLowerCase();
            item.style.display=text.includes(filterValue)?
            'block':'none';
        });
    
});


// increase search input length onclick
const searchItem=document.querySelector('.navsearch');
const searchInput=document.querySelector('#search');
searchItem.addEventListener('click', function(e){
    searchItem.style.width='250px';
    searchInput.style.display='flex';
    searchInput.style.width='85%';
});
