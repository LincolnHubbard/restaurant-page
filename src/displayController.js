import { contactContent } from "./contactContent";
import { mainContent } from "./mainContent";
import { menuContent } from "./menuContent";

export const displayController = (() => {
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
        homeButton.addEventListener('click', () => {
            if (activePage == EActivePage.HOME) return;
            activePage = EActivePage.HOME;
            changeListUnderline();
            updateContentPadding();
            mainContent.loadMainContent();
        });

        menuButton = document.getElementById("menu");
        menuButton.addEventListener('click', () => {
            if (activePage === EActivePage.MENU) return;
            activePage = EActivePage.MENU;
            updateContentPadding();
            changeListUnderline();
            menuContent.loadMenuContent();
            console.log('menu clicked');
        });

        contactButton = document.getElementById("contact");
        contactButton.addEventListener('click', () => {
            if (activePage === EActivePage.CONTACT) return;
            activePage = EActivePage.CONTACT;
            changeListUnderline();
            updateContentPadding();
            contactContent.loadContactContent();
            console.log('contact clicked');
        });
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

    const updateContentPadding = () => {
        const content = document.getElementById('content');
        if (activePage === EActivePage.CONTACT) {
            content.classList.add('contact-active');
        } else {
            content.classList.remove('contact-active');
        }
    };

    return { createDisplay };
})();
