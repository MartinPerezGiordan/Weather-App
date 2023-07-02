

function createHeader(){
    const header = document.createElement('header');
    const logo = document.createElement('div');
    logo.id = 'logo';
    logo.textContent = 'Weather App';
    header.appendChild(logo);
    document.body.appendChild(header);
}

function createMain(){
    const mainContent = document.createElement('div');
    mainContent.id = 'main-content';
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'search-input';
    searchInput.placeholder = 'Search';
    mainContent.appendChild(searchInput);
    const searchButton = document.createElement('button');
    searchButton.id = 'search-button';
    searchButton.textContent = 'Search';
    mainContent.appendChild(searchButton);
    document.body.appendChild(mainContent);
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.textContent = 'Footer content';
    document.body.appendChild(footer);
}

function createHTML(){
    createHeader();
    createMain();
    createFooter();
}

export {createHTML}