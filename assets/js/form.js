const userName = document.getElementById('userName');
const blogTitle = document.getElementById('blogTitle');
const blogContent = document.getElementById('blogContent');
let storedBlogPosts = [];

function saveEnteredBlogPost() {
    // Save related form data as an object
    let enteredBlogPost = {
        userName: userName.value,
        blogTitle: blogTitle.value,
        blogContent: blogContent.value
    };

    let storedBlogPosts = JSON.parse(localStorage.getItem('storedBlogPosts'));

    if (storedBlogPosts === null) {
        storedBlogPosts = [];
        storedBlogPosts.push(enteredBlogPost);
        localStorage.setItem('storedBlogPosts', JSON.stringify(storedBlogPosts));
    }
    else {
        storedBlogPosts.push(enteredBlogPost);
        localStorage.setItem('storedBlogPosts', JSON.stringify(storedBlogPosts));
    }
};

submitButton.addEventListener('click', function () {
    if (userName.value === "" || blogTitle.value === "" || blogContent.value === "") {
        alert('Please fill out all required fields and submit again.')
    }
    else {
        saveEnteredBlogPost();
        location.href = './blog.html';
    }
});