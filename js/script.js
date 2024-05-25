let navBar = document.querySelector(".navbar");
      let cartItem = document.querySelector(".cart-item-container");
      let searchForm = document.querySelector(".search-form")

     
     
      document.querySelector("#menu-btn").onclick = () =>{
         navBar.classList.toggle("active");
         cartItem.classList.remove("active");
         searchForm.classList.remove("active");

      }

     
      document.querySelector("#cart-btn").onclick = () =>{
         cartItem.classList.toggle("active");
         navBar.classList.remove("active");
         searchForm.classList.remove("active");
         
}

      document.querySelector("#search-btn").onclick = () =>{
         searchForm.classList.toggle("active");
         navBar.classList.remove("active");
         cartItem.classList.remove("active");
         
      }

      window.onscroll = () =>{
         navBar.classList.remove("active");
         cartItem.classList.remove("active");
         searchForm.classList.remove("active");
      }
/*
   const activePage = window.location.pathname;

   const navLinks = document.querySelectorAll('nav a').
   forEach(link =>{
      if(link.href.includes(`${activePage}`)){
         link.classList.add('active')
      }
   })
   */