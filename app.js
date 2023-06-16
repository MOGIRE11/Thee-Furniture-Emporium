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

