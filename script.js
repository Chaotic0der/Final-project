// Generate a random number we'll use to target our objects
function generateRandomNumberString() {
    const randomNumber = Math.floor(Math.random() * 900000000) + 100000000;
    const randomNumberString = randomNumber.toString();
    return randomNumberString;
}

// Where we will delete our comment cards
function deleteElementById(id) {
    const elementToDelete = document.getElementById(id);
    if (elementToDelete) {
      elementToDelete.remove();
    } else {
      console.error(`Element with ID ${id} not found.`);
    }
}
          
function addcomment(){

    let rndStr = generateRandomNumberString();

    const CMNTCNT = document.getElementById("comments");

    let efid = "edit-form-" + rndStr;

    let eiid = "edit-input-" + rndStr;

    let cswid = "comment-section-words-" + rndStr;

    let ccid = "comment-card-" + rndStr;
    const commentcard = document.createElement('div');
    commentcard.classList.add('postedComments');
    commentcard.id = ccid;

    const pfp = document.createElement('img');
    pfp.classList.add('pfp');
    pfp.src = "pfp.png";

    commentcard.appendChild(pfp);

    const commentbody = document.createElement('div');
    commentbody.classList.add('commentbody');

    const two = document.createElement('div');
    two.classList.add('two');

    const commentWords = document.createElement('div');
    commentWords.classList.add('commentWords');

    const UserName = document.createElement('div');
    UserName.classList.add('UN');

    const cardUN = document.createElement('p');
    let DisplayName = document.getElementById("display-name").value;
    cardUN.innerHTML = DisplayName;
    
    const menudiv = document.createElement('div');
    menudiv.classList.add('menu');

    const editComment = document.createElement('div');
    editComment.innerHTML = "Edit";
    editComment.classList.add("pointer-cursor");
    editComment.classList.add("text-size");
    (function(index) {
        editComment.addEventListener('click', function() {
            makeVisible(index);
        });
    })(rndStr);

    const removeComment = document.createElement('div');
    removeComment.innerHTML = "Delete";
    removeComment.classList.add("pointer-cursor");
    removeComment.classList.add("text-size");
    (function(index) {
        removeComment.addEventListener('click', function() {
            deleteElementById(index);
        });
    })(ccid);

    const commentContainer = document.createElement('div');
    commentContainer.classList.add('commentWords');

    const cardContent = document.createElement('h3');
    let userComment = document.getElementById("comment").value;
    cardContent.innerHTML = userComment;
    cardContent.id = cswid;

    commentContainer.appendChild(cardContent);

    const commentEditForm = document.createElement('div');
    commentEditForm.classList.add('editForm');
    commentEditForm.id = efid;

    const editInput = document.createElement('input');
    editInput.classList.add('editInputTextBox');
    editInput.type = "text";
    editInput.id = eiid;

    const editCommentButton = document.createElement('div');
    // editCommentButton.type = "button";
    editCommentButton.classList.add("pointer-cursor");
    editCommentButton.innerHTML = "Submit";
    editCommentButton.classList.add('editInputSubmitButton');
    (function(index) {
        editCommentButton.addEventListener('click', function() {
            commentEdit(index);
        });
    })(rndStr);

    commentEditForm.appendChild(editInput);
    commentEditForm.appendChild(editCommentButton );
    

    commentWords.appendChild(cardContent);
    
    menudiv.appendChild(editComment);
    menudiv.appendChild(removeComment);

    UserName.appendChild(cardUN);

    two.appendChild(UserName);
    two.appendChild(menudiv);

    commentbody.appendChild(two);

    commentbody.appendChild(commentWords);

    commentbody.appendChild(commentEditForm);

    commentcard.appendChild(commentbody);

    CMNTCNT.appendChild(commentcard);

    document.getElementById('comment').value = '';
    document.getElementById('display-name').value = '';
    
 
}

function makeVisible(rndStr){

    let efid = "edit-form-" + rndStr;
    let eiid = "edit-input-" + rndStr;
    let cswid = "comment-section-words-" + rndStr;

    const Change = document.getElementById(efid);
    Change.style.display= "block";
    document.getElementById(eiid).value = document.getElementById(cswid).innerHTML;

}

function commentEdit(rndStr){

    let efid = "edit-form-" + rndStr;
    let eiid = "edit-input-" + rndStr;
    let cswid = "comment-section-words-" + rndStr;

    document.getElementById(cswid).innerHTML = document.getElementById(eiid).value;
    const Change = document.getElementById(efid);
    Change.style.display= "none";
}
