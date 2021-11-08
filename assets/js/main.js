// Variables pour la navigation des pages
const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');

// Variables pour le tri du Portfolio
const filterBtn = document.querySelectorAll('.filter-item');
const itemCategory = document.querySelectorAll('.item-category');


// Navigation entre les pages
for (let i = 0; i < navItemLinks.length; i++) {
    // On ajoute les événements sur le clic
    navItemLinks[i].addEventListener('click', function() {
        const itemLinkText = this.textContent.toLowerCase();

        for (let i = 0; i < pages.length; i++) {
            if (pages[i].classList.contains(itemLinkText)) {

                pages[i].classList.add('active');
                navItemLinks[i].classList.add('active');

            } else {
                
                pages[i].classList.remove('active');
                navItemLinks[i].classList.remove('active');
            }

        }
    });
}


// Ajout des events sur les boutons de filtres
for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function(){

        // on retire toutes les classes active des boutons filtres
        for (let i = 0; i < filterBtn.length; i++) {
            filterBtn[i].classList.remove('active');
        }

        // On ajoute la classe active au bouton de filtre cliqué
        this.classList.add('active');

        // On affiche les éléments correspondant au filtre cliqué
        for (let i = 0; i < itemCategory.length; i++) {
            const itemCategoryText = itemCategory[i].textContent;
            switch(this.textContent) {
                case itemCategoryText:
                    itemCategory[i].parentElement.classList.add('active');
                    break;
                case 'Tout':
                    itemCategory[i].parentElement.classList.add('active');
                    break;
                default:
                    itemCategory[i].parentElement.classList.remove('active');
            }
        }
    });
}

