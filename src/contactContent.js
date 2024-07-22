export const contactContent = (() => {
    const loadContactContent = () => {
        const container = document.getElementById("content");
        container.textContent = "";
        container.classList.add('contact-active');

        const contactContainer = document.createElement('div');
        contactContainer.id = "contact-container";

        const contentLeft = document.createElement('div');
        contentLeft.id = "content-left";
        contactContainer.appendChild(contentLeft);

        const contentRight = document.createElement('div');
        contentRight.id = "content-right";

        const header = document.createElement('h1');
        header.textContent = "RESERVATIONS";

        const formContainer = document.createElement('form');
        const reserveForm = document.createElement('ul');
        reserveForm.id = "reserve-form";

        const listName = document.createElement('li');
        const labelName = document.createElement('label');
        labelName.setAttribute('for', 'name');
        labelName.textContent = "NAME";

        const inputName = document.createElement('input');
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('name', 'name');
        inputName.setAttribute('id', 'name');
        inputName.required = true;

        listName.appendChild(labelName);
        listName.appendChild(inputName);

        const listPhone = document.createElement('li');
        const labelPhone = document.createElement('label');
        labelPhone.setAttribute('for', 'phone');
        labelPhone.textContent = "PHONE NO";

        const inputPhone = document.createElement('input');
        inputPhone.setAttribute('type', 'tel');
        inputPhone.setAttribute('name', 'phone');
        inputPhone.setAttribute('id', 'phone');
        inputPhone.required = true;

        listPhone.appendChild(labelPhone);
        listPhone.appendChild(inputPhone);

        const listDate = document.createElement('li');
        const labelDate = document.createElement('label');
        labelDate.setAttribute('for', 'date');
        labelDate.textContent = "DATE";

        const inputDate = document.createElement('input');
        inputDate.setAttribute('type', 'date');
        inputDate.setAttribute('name', 'date');
        inputDate.setAttribute('id', 'date');
        inputDate.required = true;


        listDate.appendChild(labelDate);
        listDate.appendChild(inputDate);

        const listGuests = document.createElement('li');
        const labelGuests = document.createElement('label');
        labelGuests.setAttribute('for', 'guests');
        labelGuests.textContent = "PARTY OF";

        const inputGuests = document.createElement('input');
        inputGuests.setAttribute('type', 'guests');
        inputGuests.setAttribute('name', 'guests');
        inputGuests.setAttribute('id', 'guests');
        inputGuests.required = true;


        listGuests.appendChild(labelGuests);
        listGuests.appendChild(inputGuests);

        reserveForm.appendChild(listName);
        reserveForm.appendChild(listPhone);
        reserveForm.appendChild(listDate);
        reserveForm.appendChild(listGuests);


        const submitButton = document.createElement('button');
        submitButton.textContent = "Book Now";




        formContainer.appendChild(reserveForm);
        formContainer.appendChild(submitButton);

        contentRight.appendChild(header);
        contentRight.appendChild(formContainer);
        contactContainer.appendChild(contentRight);



        container.appendChild(contactContainer);


    };

    return { loadContactContent };
})();
