export const menuContent = (() => {

    const loadMenuContent = () => {
        const container = document.getElementById("content");
        container.textContent = "";

        const menuContainer = document.createElement('div');
        menuContainer.id = "menu-container";
        menuContainer.appendChild(createSection1());
        menuContainer.appendChild(createSection2());
        menuContainer.appendChild(createSection3());

        container.appendChild(menuContainer);
    };

    const createSection1 = () => {
        const section = document.createElement('div');
        section.className = "menu-section";

        let sectionHeader = document.createElement('h2');
        sectionHeader.textContent = "STARTERS";

        const menuItem1 = document.createElement('div');
        menuItem1.className = "menu-item";
        let itemName1 = document.createElement('p');
        itemName1.textContent = "Grilled Peach & Burrata Salad";
        let itemPrice1 = document.createElement('span');
        itemPrice1.id = "price";
        itemPrice1.textContent = "$12";
        menuItem1.appendChild(itemName1);
        menuItem1.appendChild(itemPrice1);

        const menuItem2 = document.createElement('div');
        menuItem2.className = "menu-item";
        let itemName2 = document.createElement('p');
        itemName2.textContent = "Tomato Basil Bruschetta";
        let itemPrice2 = document.createElement('span');
        itemPrice2.id = "price";
        itemPrice2.textContent = "$8";
        menuItem2.appendChild(itemName2);
        menuItem2.appendChild(itemPrice2);

        section.appendChild(sectionHeader);
        section.appendChild(menuItem1);
        section.appendChild(menuItem2);
        return section;
    };

    const createSection2 = () => {
        const section = document.createElement('div');
        section.className = "menu-section";

        let sectionHeader = document.createElement('h2');
        sectionHeader.textContent = "MAIN COURSES";

        const menuItem1 = document.createElement('div');
        menuItem1.className = "menu-item";
        let itemName1 = document.createElement('p');
        itemName1.textContent = "Lemon Herb Grilled Chicken";
        let itemPrice1 = document.createElement('span');
        itemPrice1.id = "price";
        itemPrice1.textContent = "$24";
        menuItem1.appendChild(itemName1);
        menuItem1.appendChild(itemPrice1);

        const menuItem2 = document.createElement('div');
        menuItem2.className = "menu-item";
        let itemName2 = document.createElement('p');
        itemName2.textContent = "Vegetable Stuffed Portobello Mushrooms";
        let itemPrice2 = document.createElement('span');
        itemPrice2.id = "price";
        itemPrice2.textContent = "$20";
        menuItem2.appendChild(itemName2);
        menuItem2.appendChild(itemPrice2);

        section.appendChild(sectionHeader);
        section.appendChild(menuItem1);
        section.appendChild(menuItem2);
        return section;
    };

    const createSection3 = () => {
        const section = document.createElement('div');
        section.className = "menu-section";

        let sectionHeader = document.createElement('h2');
        sectionHeader.textContent = "MAIN COURSES";

        const menuItem1 = document.createElement('div');
        menuItem1.className = "menu-item";
        let itemName1 = document.createElement('p');
        itemName1.textContent = "Summer Berry Mojito";
        let itemPrice1 = document.createElement('span');
        itemPrice1.id = "price";
        itemPrice1.textContent = "$10";
        menuItem1.appendChild(itemName1);
        menuItem1.appendChild(itemPrice1);

        const menuItem2 = document.createElement('div');
        menuItem2.className = "menu-item";
        let itemName2 = document.createElement('p');
        itemName2.textContent = "Iced Lavender Lemonade";
        let itemPrice2 = document.createElement('span');
        itemPrice2.id = "price";
        itemPrice2.textContent = "$6";
        menuItem2.appendChild(itemName2);
        menuItem2.appendChild(itemPrice2);

        section.appendChild(sectionHeader);
        section.appendChild(menuItem1);
        section.appendChild(menuItem2);
        return section;
    };

    return { loadMenuContent };

})();
