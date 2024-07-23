const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const premierPost = document.getElementById("post-one");
const emePost = document.getElementById("post-two");
const troisPost = document.getElementById("post-three")

// postNum is which object, element is which key
function renderItems(postNum, element){
    posts.forEach((post, index) => {

    });
    const specificPost = posts[postNum]; // Accessing the post


    const render = `<div class="insta-cont"> <div class="container"> <div class="top-post"><img class="float-right userIcons" src="${specificPost["avatar"]}" alt=""></div>
    <div><h3>${specificPost["name"]}<br><span class="lower-text">${specificPost["location"]}</span></h3> 
    
    <div class="img-cont"><img id="main-img" class="post-image" src="${specificPost["post"]}" alt=""></div> </div>
     <div class="interact">
     <img class="icon" src="images/icon-heart.png">
     <img class="icon" src="images/icon-comment.png">
     <img class="icon" src="images/icon-dm.png">
     </div>
     <h3 class="likes">${specificPost["likes"]} likes<h3>
     <p class="username-comment"> <span class="username-text">${specificPost["username"]}</span> ${specificPost["comment"]} </p>`

    element.innerHTML = render
}

renderItems(2, troisPost)
renderItems(0, emePost)
renderItems(1, premierPost)
