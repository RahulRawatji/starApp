const colors = [
    {"colorName":"blue", "colorCode":"#e6f6fc"},
    {"colorName":"yellow", "colorCode":"#fffaed"},
    {"colorName":"magenta", "colorCode":"#ef98efe3"},
    {"colorName":"black", "colorCode":"#FFFF"},
    {"colorName":"orange", "colorCode":"#FFFF"},
    {"colorName":"grey", "colorCode":"#FFFF"},
];

// Indicates the selected Color
let activeColor = null;
let uploadedLogo = null;

const btnContainer = document.getElementsByClassName('btn-container');
const mainBody =document.getElementsByClassName('main');
const img = document.getElementById('umbrella');
const loader = document.getElementById('loader-icon');
const input = document.querySelector("input");
const output = document.querySelector("output");

loader.classList.toggle('hidden');

const themeHandler = (color, colorName)=>{
    activeColor = colorName;
    img.classList.toggle('hidden');
    loader.style.fill = activeColor;
    loader.classList.toggle('hidden');
    output.classList.toggle('hidden');
    switch(color) {
        case "#e6f6fc":
            mainBody[0].style.backgroundColor = color;
            setTimeout(()=>{
                loader.classList.toggle('hidden');
                img.classList.toggle('hidden');
                img.src ="./assets/Blue umbrella.png";
                output.classList.toggle('hidden');
            },2000)
        
          break;

        case "#fffaed":
            mainBody[0].style.backgroundColor = color;
            setTimeout(()=>{
                loader.classList.toggle('hidden');
                img.classList.toggle('hidden');
                img.src = "./assets/Yello umbrella.png";
                output.classList.toggle('hidden');
            },2000)
           
          break;
        case "#ef98efe3":
            mainBody[0].style.backgroundColor = color;
            setTimeout(()=>{
                loader.classList.toggle('hidden');
                img.classList.toggle('hidden');
                img.src ="./assets/Pink umbrella.png";
                output.classList.toggle('hidden');
            },2000)
            
            break;
        default:

          // code block
      }   
}

function displayLogo() {
    let image = "";
    image += `<div >
        <img src="${URL.createObjectURL(uploadedLogo)}" alt="image" class="logo">
      </div>`
      img.classList.toggle('hidden');
      loader.style.fill = activeColor;
      loader.classList.toggle('hidden');
    setTimeout(()=>{
        loader.classList.toggle('hidden');
        img.classList.toggle('hidden');
        output.classList.toggle('hidden');
        output.innerHTML = image;
    },3000)
}


input.addEventListener("change", () => {
    const file = input.files;
    uploadedLogo = file[0]
    output.classList.toggle('hidden');
    displayLogo();
 })

 //To Setup Color Buttons on the btn-container
for(let i=0;i<colors.length;i++){
    const { colorCode,colorName } = colors[i];
    const btns = document.createElement('button');
    btns.classList.add('btn');
    btns.style.backgroundColor = colorName;
    btns.addEventListener('click',() => themeHandler(colorCode,colorName));
    btnContainer[0].append(btns);
}


