console.log('test');
//hack together enum 

const mainContent = (() => {

    const loadMainContent = () => {
        const container = document.getElementById("content");
        container.textContent = "";
        const header = document.createElement('h1');
        header.textContent = "SAVOR EVERY SUNSET"

        const tagline = document.createElement('p');
        tagline.textContent = "Exquisite dining, seasonal flavors, and expectional service.";

        const address = document.createElement('p');
        address.id = "address";
        address.textContent = "1234 SE Elm Street"

        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order-now');
        const orderButton = document.createElement('button');
        orderButton.id = "order";
        orderButton.textContent = "Order Now";
        orderDiv.appendChild(orderButton);

        container.appendChild(header);
        container.appendChild(tagline);
        container.appendChild(address);
        container.appendChild(orderDiv);
        };



    return {loadMainContent};
})();

const menuContent = (() => {

    const loadMenuContent = () => {
        const container = document.getElementById("content");
        container.textContent = "";
    };

    return {loadMenuContent};

})();

const contactContent = (() => {
    const loadContactContent = () => {
        const container = document.getElementById("content");
        container.textContent = "";
    };

    return {loadContactContent};
})();


const displayController = (() => {
    let homeButton;
    let menuButton;
    let contactButton;

    const EActivePage = Object.freeze({
        HOME: 'home',
        MENU: 'menu',
        CONTACT: 'contact',
    });

    let activePage;

    const createDisplay = () => {
        mainContent.loadMainContent();

        homeButton = document.getElementById("home");
        homeButton.classList.toggle('underline');
        activePage = EActivePage.HOME;
        homeButton.addEventListener('click', () =>{
            if (activePage == EActivePage.HOME) return;
            activePage = EActivePage.HOME;
            changeListUnderline();
            mainContent.loadMainContent();
        })

        menuButton = document.getElementById("menu");
        menuButton.addEventListener('click', () => {
            if (activePage === EActivePage.MENU) return;
            activePage = EActivePage.MENU;
            changeListUnderline();
            menuContent.loadMenuContent();
            console.log('menu clicked');
        })

        contactButton = document.getElementById("contact");
        contactButton.addEventListener('click', () => {
            if (activePage === EActivePage.CONTACT) return;
            activePage = EActivePage.CONTACT;
            changeListUnderline();
            contactContent.loadContactContent();
            console.log('contact clicked');
        })
    };

    const changeListUnderline = () => {
        switch (activePage) {
            case EActivePage.HOME:
                homeButton.classList.add('underline');
                menuButton.classList.remove('underline');
                contactButton.classList.remove('underline');
                break;
            case EActivePage.MENU:
                homeButton.classList.remove('underline');
                menuButton.classList.add('underline');
                contactButton.classList.remove('underline');
                break;
            case EActivePage.CONTACT:
                homeButton.classList.remove('underline');
                menuButton.classList.remove('underline');
                contactButton.classList.add('underline');
                break;
        
            default:
                break;
        }
    };

    return {createDisplay};
})();

page = displayController.createDisplay();

// mainContent.loadMainContent();