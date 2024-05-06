let user = document.getElementById("userid");
let name = document.getElementsByClassName("name");

function displayUser(result){

    if (!result.avatar_url) {
        document.getElementById("userData").innerHTML=`<h1>User Not Found</h1>`
        return;
    }
    if (!result.bio) {
        result.bio=''
    }
    if (!result.name) {
        result.name=''
    }

    document.getElementById("userData").innerHTML = `
                <div class="left">
                <div class="logo"><img src=${result.avatar_url} alt=""></div>
                <div class="info">
                    <p class="name">${result.name}</p>
                    <p class="bio">${result.bio}</p>
                </div>
            </div>
            <div class="right">
                <div class="followData">
                    <div class="followers">
                        <h3>Followers</h3>
                        <p>${result.followers}</p>
                    </div>
                    <div class="following">
                        <h3>Following</h3>
                        <p>${result.following}</p>
                    </div>
                    <div class="repo">
                        <h3>repo</h3>
                        <p>${result.public_repos}</p>
                    </div>
                </div>
                <a href=${result.html_url} target="_blank">
                <div class="viewProfile">
                <button class="btn2">View Profile</button>
                </div>
                </a>
            </div>
    `
}
async function fetchUser(username) {
    let response = await fetch(`https://api.github.com/users/${username}`)
    let result = await response.json();
    console.log(result)
    displayUser(result)
}



document.querySelector(".btn1").addEventListener("click", () => {
    document.getElementById("userData").innerHTML=`<span class="loader"></span>`
    let username = user.value;
    fetchUser(username);
})



