var heading = document.getElementById('head1');
        var heading2 = document.getElementById('head2');
        var btn = document.getElementById('mid-btn');

        window.addEventListener('load', () => {
            heading.style.marginRight = '0px'
            heading2.style.marginRight = '0px'
            btn.style.marginRight = '0px'
        })

        var logo = document.getElementById('logohead')
        var nav = document.getElementById('head')
        var top_btn = document.getElementById('mid-btn1')
        window.addEventListener('load', () => {
            logo.style.marginLeft = '0px'
            top_btn.style.marginRight = '0px'
            // nav.style.display = 'flex'
        })

        var mid = document.getElementById('mid-2')
        window.addEventListener('load', () => {
            mid.style.display = 'flex'
        })

        // var middle = document.getElementById('middle');
        // middle.addEventListener('mouseenter', ()=>{
        //     mid.style.padding = '0px'
        // })

        // mid.addEventListener('onscroll' , ()=>{
        //     console.log("Helo")
        // })
        // var cards = document.getElementById('cards')
        // window.addEventListener('scroll',()=>{
        //     if(pageYOffset > 1000){
        //         cards.style.padding = '40px'
        //     }
        // })

        var nav_class = document.getElementsByClassName('head')
        var x = window.matchMedia("(max-width:860px)");
        if (x.matches) {
            nav.classList.add('head')
        }
        var nav_btn = document.getElementById("nav-btn")
        var nav_close = document.getElementById("nav-close")
        nav_btn.addEventListener("click", () => {
            nav_class[0].style.marginLeft = '0px'
        })
        nav_close.addEventListener("click", () => {
            nav_class[0].style.marginLeft = '-210px'
        })

        var register_btn = document.getElementById('register');
        var register_btn_cancel = document.getElementById('register-cancel');
        var register_model = document.getElementById('model');

        register_btn.addEventListener("click",()=>{
            register_model.style.display = 'block'
        })
        register_btn_cancel.addEventListener("click",()=>{
            register_model.style.display = 'none'
        })