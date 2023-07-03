

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
    const searchBar = document.createElement('div');
    searchBar.id = 'search-bar';
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'search-input';
    searchInput.placeholder = 'Pick a location';
    const searchButton = document.createElement('button');
    searchButton.id = 'search-button';
    searchButton.textContent = 'Search';
    searchBar.appendChild(searchInput);
    searchBar.appendChild(searchButton);
    mainContent.appendChild(searchBar);
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