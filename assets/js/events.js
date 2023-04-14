const buttons = document.querySelectorAll('.btn')
const eventItems = document.querySelectorAll('.event-item')

buttons.forEach((button)=> {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const filter = e.target.dataset.filter
        
        eventItems.forEach((item)=> {
            if (filter === 'all'){
                item.style.display = 'block'
            } else {
                if (item.classList.contains(filter)){
                    item.style.display = 'flex'
                } else {
                    item.style.display = 'none'
                }
            }
        })
    })
})


let fixedNav = document.getElementById("nav");
window.addEventListener("scroll",()=>{
    window.scrollY > 100 ? fixedNav.classList.add('NavActive') : fixedNav.classList.remove('NavActive');
})