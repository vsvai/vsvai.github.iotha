console.log("hello world");
//tsc --outFile ../app.js app.ts
// Import and add each page to the DOM
document.body.addEventListener('click', (event) => {
    console.log("hello world");

    if (event.target.dataset.section) {
        handleSectionTrigger(event);
    } else if (event.target.dataset.modal) {
        handleModalTrigger(event);
    } else if (event.target.classList.contains('modal-hide')) {

        hideAllModals()
    }


})

function handleSectionTrigger(event) {
    hideAllSectionsAndDeselectButtons()
    alert(event.target.dataset.section);
    alert(event.target.classList)
        // Highlight clicked button and show view
    event.target.classList.add('is-selected')

    // Display the current section
    const sectionId = `${event.target.dataset.section}-section`
    alert(sectionId);
    document.getElementById(sectionId).classList.add('is-shown')

    // Save currently active button in localStorage
    const buttonId = event.target.getAttribute('id')
    alert(buttonId)

}

function activateDefaultSection() {
    document.getElementById('button-menus').click()
}

function showMainContent() {
    document.querySelector('.js-nav').classList.add('is-shown')
    document.querySelector('.js-content').classList.add('is-shown')
}

function handleModalTrigger(event) {
    hideAllModals()
    const modalId = `${event.target.dataset.modal}-modal`
    document.getElementById(modalId).classList.add('is-shown')
}

function hideAllModals() {
    const modals = document.querySelectorAll('.modal.is-shown')
    Array.prototype.forEach.call(modals, (modal) => {
        modal.classList.remove('is-shown')
    })
    showMainContent()
}

function hideAllSectionsAndDeselectButtons() {
    const sections = document.querySelectorAll('.js-section.is-shown')
    Array.prototype.forEach.call(sections, (section) => {
        section.classList.remove('is-shown')
    })

    const buttons = document.querySelectorAll('.nav-button.is-selected')
    Array.prototype.forEach.call(buttons, (button) => {
        button.classList.remove('is-selected')
    })
}

function displayAbout() {
    document.querySelector('#about-modal').classList.add('is-shown')
}

const links = document.querySelectorAll('link[rel="import"]')

// Import and add each page to the DOM

Array.prototype.forEach.call(links, (link) => {
    let template = link.import.querySelector('.task-template')
    let clone = document.importNode(template.content, true)
        // console.log(link.href);
    document.querySelector('.content').appendChild(clone)
})