const colors = [
    {"color":"#00a3e0 ", "colorCode":"#e6f6fc","imgLink":"./assets/Blue umbrella.png"},
    {"color":"#fdd042", "colorCode":"#fffaed", "imgLink":"./assets/Yello umbrella.png"},
    {"color":"#d82f89", "colorCode":"#ef98efe3","imgLink":"./assets/Pink umbrella.png"},
    {"color":"#000000", "colorCode":"#FFFF"},
    {"color":"#ffa500", "colorCode":"#FFFF"},
    {"color":"#808080", "colorCode":"#FFFF"},
];

// Indicates the selected Color
let activeColor = null;
let uploadedLogo = null;

const btnContainer = document.getElementsByClassName('btn-container');
const mainBody =document.getElementsByClassName('main');
const img = document.getElementById('umbrella');
const loaderIcon = document.getElementById('loader-icon');
const input = document.querySelector("input");
const output = document.querySelector("output");
const uploadBtn = document.getElementsByClassName("upload-btn");
const uploadIcon = document.getElementsByClassName("upload-icon");
const uploadBtnLoaderIcon = document.getElementsByClassName('upld-btn-loder-i');

loaderIcon.classList.toggle('hidden');
uploadBtnLoaderIcon[0].classList.toggle('hidden');

const themeHandler = (data)=>{
    const { colorCode, color, imgLink = "./assets/Blue umbrella.png" } = data;
    activeColor = color;
    uploadBtn[0].style.backgroundColor = activeColor;
    img.classList.toggle('hidden');
    loaderIcon.style.fill = activeColor;
    loaderIcon.classList.toggle('hidden');
    output.classList.toggle('hidden');

    mainBody[0].style.backgroundColor = colorCode;
    setTimeout(()=>{
        loaderIcon.classList.toggle('hidden');
        img.classList.toggle('hidden');
        img.src = imgLink;
        output.classList.toggle('hidden');
    },2000)
}

function displayLogo() {
    let image = "";
    image += `<div >
        <img src="${URL.createObjectURL(uploadedLogo)}" alt="image" class="logo">
      </div>`
    img.classList.toggle('hidden');
    loaderIcon.style.fill = activeColor;
    loaderIcon.classList.toggle('hidden');
    uploadIcon[0].classList.toggle('hidden');
    uploadBtnLoaderIcon[0].classList.toggle('hidden');
    setTimeout(()=>{
        loaderIcon.classList.toggle('hidden');
        img.classList.toggle('hidden');
        output.classList.toggle('hidden');
        output.innerHTML = image;
        uploadBtnLoaderIcon[0].classList.toggle('hidden');
        uploadIcon[0].classList.toggle('hidden');
    },3000)
}

const validationHandler = (file) =>{
    const fileSize = parseFloat(file.size / 1024).toFixed(2);
    if(fileSize < 5 * 1024){
        return true;
    }
    return false;
}

const uploadLogoHandler = () =>{
    const file = input.files;
    const isfileValid = validationHandler(file[0]);

    if(isfileValid){
        uploadedLogo = file[0];    
        output.classList.toggle('hidden');
        displayLogo();
    }
    else{
        alert("Invalid File Size. Pls Upload a File Smaller Than 5MB")
    }
}

input.addEventListener("change", uploadLogoHandler);

 //To Setup Color Buttons on the btn-container
for(let i=0;i<colors.length;i++){
    const { color } = colors[i];
    const btns = document.createElement('button');
    btns.classList.add('btn');
    btns.style.backgroundColor = color.toString();
    btns.addEventListener('click',() => themeHandler(colors[i]));
    btnContainer[0].append(btns);
}


