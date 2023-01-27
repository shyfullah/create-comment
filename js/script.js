// step1: Select the Post Button

document.getElementById('btn').addEventListener('click', function(){

    // Step 2: Get The comment from p tag

    const comment = document.getElementById('comment');

    const newComment = comment.value;

    // Show to comment in p tag

    const commentContainer = document.getElementById('comment-container');

    const p = document.createElement('p');

    p.innerText = newComment;

    commentContainer.appendChild(p);

    // Step 4: clear comment Box

    comment.value = '';

})