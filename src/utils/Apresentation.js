export const handleBgColor = () =>{
    const nav = document.querySelector('nav')
    const navHeight = nav.getBoundingClientRect().height
    const cardPosition = document.querySelector('#my-card').getBoundingClientRect().top
    const condition = cardPosition - navHeight < 0  
    
    nav.classList.toggle('bg-active', condition)
} 
export const smoothScroll = (e) =>{
    e.preventDefault();
    const target = e.target
    const href = target.getAttribute("href") || "#home";
    const offsetTop = href != "#home" ? document.querySelector(href).offsetTop : 0;
    
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
};