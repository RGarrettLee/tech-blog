const newPostHandler = async function (event) {
    const postTitle = document.querySelector('#postTitle').value.trim();
    const postInput = document.querySelector('#postInput').value.trim();

    const response = await fetch('/api/post/new', {
        method: 'POST',
        body: JSON.stringify({ title: postTitle, content: postInput }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to create post');
    }
}

document
    .querySelector('#postSubmit')
    .addEventListener('click', newPostHandler);