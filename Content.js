
// TODO LIST MANAGER

const items = [{"item":"Item One", "status": 0},
                {"item":"Item  Two", "status": 1}];


const itemsStr = JSON.stringify(items);
console.log(itemsStr);

//Get item from local storage
function fetchItems() {
    const itemsList = document.querySelector('ul.todo-items');
    itemsList.innerHTML = '';
    var newItemHTML = '';
    try{
        var items = localStorage.getItem('todo-items');
        var itemsArr = JSON.parse(items);

        for (var i = 0; i < itemsArr.length; i++) {
            var status = '';
            if(itemsArr[i].status == 1) {
                status = 'class="done"';
            }
            newItemHTML += `<li data-itemindex="${i}">
            <span class="item">${itemsArr[i].item}</span>
            <div><span>&#10004;&#65039;</span>
            <span>&#128465;</span></div>
            </li>`
            itemsArr[i]
        }
        itemsList.innerHTML = newItemHTML;
    } catch(e) {

    }
    
}

//Store item in local storage
function saveItems(obj) {
    var string = JSON.stringify(obj);
    localStorage.setItem('todo-items', string);
}












// SOCIAL MEDIA BLOCKER

const generateHTML = (pageName) => {
    return `
    <div class="error">
        <h1 class="error">ERROR 101</h1>
    </div>
    <div>
        <h2 class="allowed">You are not allowed on ${pageName} until you check off all your tasks.</h2>
        <h2 class="get">Get Back to Work!</h2>
    </div>
    <div class="logoclass">
        <img class="logo" src="FocusCheck Logo.png" alt="Logo">
    </div>
    `;
};

const generateSTYLES = () => {
    return `
    <style>
    body {
        background: rgb(173,225,255);
        background: radial-gradient(circle, rgba(173,225,255,1) 50%, rgba(255,255,255,1) 100%);
    }
    .error {
        font-size: 120px;
        text-align: center;
        color: #38B6FF;
        font-family:sans-serif;
        margin-top: 10rem;
    }
    
    .allowed {
        font-size: 30px;
        text-align: center;
        color: black;
        font-family:sans-serif;
    }
    
    .get {
        margin-top: -0.5rem;
        font-size: 50px;
        text-align: center;
        color: black;
        font-family:sans-serif;
    }
    
    .logo {
        height: 150px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    </style> 
    `;
};

switch (window.location.hostname) {
    case "www.facebook.com":
        document.head.innerHTML= generateSTYLES();
        document.body.innerHTML = generateHTML("Facebook");
        break;

    case "www.netflix.com":
        document.head.innerHTML= generateSTYLES();
        document.body.innerHTML = generateHTML("Netflix");
        break;

    case "www.pinterest.com":
        document.head.innerHTML= generateSTYLES();
        document.body.innerHTML = generateHTML("Pinterest");
        break;

    case "www.instagram.com":
        document.head.innerHTML= generateSTYLES();
        document.body.innerHTML = generateHTML("Instagram");
        break;

    case "www.linkedin.com":
        document.head.innerHTML= generateSTYLES();
        document.body.innerHTML = generateHTML("Linkedin");
        break;

    case "www.vsco.co":
        document.head.innerHTML= generateSTYLES();
        document.body.innerHTML = generateHTML("VSCO");
        break;
    
    case "www.tiktok.com":
        document.head.innerHTML= generateSTYLES();
        document.body.innerHTML = generateHTML("TikTok");
        break;

    case "www.discord.com":
        document.head.innerHTML= generateSTYLES();
        document.body.innerHTML = generateHTML("Discord");
        break;
}