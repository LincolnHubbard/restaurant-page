console.log('test');

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


const displayController = (() => {
    let homeButton;
    let menuButton;
    let contactButton;

    const createDisplay = () => {
        mainContent.loadMainContent();

        homeButton = document.getElementById("home");
        homeButton.addEventListener('click', () =>{
            homeButton.classList.toggle('underline');
            mainContent.loadMainContent();
        })

        menuButton = document.getElementById("menu");
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('underline');
            menuContent.loadMenuContent();
            console.log('menu clicked');
        })
    };

    return {createDisplay};
})();

page = displayController.createDisplay();

// mainContent.loadMainContent();