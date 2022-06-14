const generateHTML = (pageName) => {
    return `
    <div class="error">
        <h1 class="err">ERROR 101</h1>
    </div>
    <div class="nice_try">
        <h2 class="try">Nice Try! You are not allowed on ${pageName} until you check off all your tasks.</h2>
    </div>
    <div class="get_back">
        <h2 class="get">Get Back to Work!</h2>
    </div>
    `;
};

const generateSTYLES = () => {
    return `
    .body {
        background: blue;
    }
    .error {
        text-align: center;
        align-items: center;
    }
    .err {
        font-size: 50px;
        color: red;
    }
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

    case "www.vsco.com":
        document.head.innerHTML= generateSTYLES();
        document.body.innerHTML = generateHTML("VSCO");
        break;
    
    case "www.tiktok.com":
        document.head.innerHTML= generateSTYLES();
        document.body.innerHTML = generateHTML("TikTok");
        break;
}