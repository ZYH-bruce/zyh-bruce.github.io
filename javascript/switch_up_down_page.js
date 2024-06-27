const pathName = window.location.pathname;
const match = pathName.match(/(html|css|javascript)_(\d+)\.html$/);

const series = match[1];
const currentPageNumber = parseInt(match[2], 10);
const maxPages = 6;

const navigationContainer = document.querySelector('.tutorial_navigation');

if (currentPageNumber > 1) {
        const prevPageNumber = currentPageNumber - 1;
        const prevButton = createButton(`${series}_${prevPageNumber}.html`, '« 上一个教程', 'previous');
        navigationContainer.appendChild(prevButton);
} else {
        const homeButton = createButton('../../index.html', '返回主目录', 'home');
        navigationContainer.appendChild(homeButton);
}

if (currentPageNumber < maxPages) {
        const nextPageNumber = currentPageNumber + 1;
        const nextButton = createButton(`${series}_${nextPageNumber}.html`, '下一个教程 »', 'next');
        navigationContainer.appendChild(nextButton);
} else {
        const homeButton = createButton('../../index.html', '返回主目录', 'home');
        navigationContainer.appendChild(homeButton);
}

function createButton(href, text, className) {
        const button = document.createElement('a');
        button.href = href;
        button.textContent = text;
        button.className = className;
        return button;
}