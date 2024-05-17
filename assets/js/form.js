const userName = document.getElementById('userName');
const blogTitle = document.getElementById('blogTitle');
const blogContent = document.getElementById('blogContent');

function saveEnteredBlogPost() {
    // Save related form data as an object
    const enteredBlogPost = {
        userName: userName.value,
        blogTitle: blogTitle.value,
        blogContent: blogContent.value
    };
    localStorage.setItem('enteredBlogPost', JSON.stringify(enteredBlogPost));
}

submitButton.addEventListener('click', function () {
    if (userName.value === "" || blogTitle.value === "" || blogContent.value === "") {
        alert('wrong submission')
    }
    else {
        saveEnteredBlogPost();
        location.href = './blog.html';
    }
});