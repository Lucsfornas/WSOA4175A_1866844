const items = document.querySelectorAll('.itemwrap')

items.forEach(itm => {
    itm.addEventListener('mouseover', () => {
        itm.childNodes[1].classList.add('darkenimg');
    })
    itm.addEventListener('mouseout', () => {
        itm.childNodes[1].classList.remove('darkenimg');
    })
})