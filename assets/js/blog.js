const blogList = document.querySelector('#blogList');

let blogEntries = [];

function renderBlogEntries() {
    // Clear todoList element and update todoCountSpan
    blogList.textContent = '';

    // Render a new li for each todo
    for (let i = 0; i < blogEntries.length; i++) {
        const blogEntry = blogEntries[i];

        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const hr = document.createElement('hr');
        h2.textContent = blogEntry.blogTitle;
        h3.textContent = `Author: ${blogEntry.userName}`;
        p.textContent = blogEntry.blogContent;
        

        li.setAttribute('data-index', i);
        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(h3);
        blogList.appendChild(li);
        blogList.appendChild(hr);
    }
}

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    location.href = './index.html';
});

function init() {
    const storedBlogs = JSON.parse(localStorage.getItem('storedBlogPosts'));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedBlogs !== null) {
      blogEntries = storedBlogs;
    }

    renderBlogEntries();
};
init();