const newPostBtn = document.getElementById('newPostBtn');
const postForm = document.getElementById('postForm');
const submitPostBtn = document.getElementById('submitPostBtn');
const postsContainer = document.getElementById('postsContainer');
const postTitle = document.getElementById('postTitle');
const postContent = document.getElementById('postContent');

// Sample initial posts
let posts = [
    { title: 'First Post', content: 'This is the content of the first post.' },
    { title: 'Second Post', content: 'This is the content of the second post.' }
];

// Function to display posts
function displayPosts() {
    postsContainer.innerHTML = '';
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postDiv);
    });
}

// Function to show the new post form
function showNewPostForm() {
    postForm.classList.remove('hidden');
}

// Function to hide the new post form
function hideNewPostForm() {
    postForm.classList.add('hidden');
    postTitle.value = '';
    postContent.value = '';
}

// Event listener for clicking the new post button
newPostBtn.addEventListener('click', showNewPostForm);

// Event listener for submitting a new post
submitPostBtn.addEventListener('click', () => {
    const title = postTitle.value;
    const content = postContent.value;
    if (title && content) {
        const newPost = { title, content };
        posts.push(newPost);
        displayPosts();
        postTitle.value = '';
        postContent.value = '';
        // hideNewPostForm();
    } else {
        alert('Please enter both title and content for the post.');
    }
});

// Display initial posts
displayPosts();
