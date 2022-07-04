class NavBar{
    constructor(MobileMenu,NavLists,NavLinks){
        this.MobileMenu=document.querySelector(MobileMenu);
        this.NavLists=document.querySelector(NavLists);
        this.NavLinks=document.querySelector(NavLinks);
        this.activeClass="active";
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this);
        this.NavLists.classList.toggle(this.activeClass);
    }
    addClickEvent(){
        this.MobileMenu.addEventListener("click",this.handleClick);
    }
    init(){
        if(this.MobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

let dado=new NavBar(".mobile-menu",".nav-list",".nav-list li");
dado.addClickEvent();