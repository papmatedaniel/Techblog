document.getElementById('menu-toggle').addEventListener('click', function () {
  document.body.classList.toggle('nav-active');
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        // Toggle the 'open' class for the menu button
        this.classList.toggle("open");

        // Toggle the visibility of the menu
        if (navMenu.style.transform === "translateX(0%)") {
            navMenu.style.transform = "translateX(-100%)";
        } else {
            navMenu.style.transform = "translateX(0%)";
        }
    });
});


// function loadMoreArticles() {
//   const articleGrid = document.querySelector('.article-grid');
//   const newArticle = document.createElement('article');
//   newArticle.className = 'article-card';
//   newArticle.innerHTML = `
//       <img src="https://placehold.co/600x400?text=Új+Technológia" alt="Futurisztikus technológiai eszköz, holografikus kijelzővel" class="article-image">
//       <div class="article-content">
//           <h3 class="article-title">Új technológiai áttörés</h3>
//           <p class="article-excerpt">Forradalmi fejlesztés változtathatja meg mindennapi életünket...</p>
//       </div>
//   `;
//   articleGrid.appendChild(newArticle);
// }

// window.addEventListener('scroll', () => {
//   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
//       loadMoreArticles();
//   }
// });
