console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetchImg()
});

function fetchImg(){
    console.log('fetching!')
}


function addImageElements(json){
    const imgLink = json.message
    const imgDiv = document.querySelector('#dog-image-container')

    imgLink.forEach(link => {
        img.src = link
        img.alt = "dog ceo image"
        imgDiv.appendChild(img)
    })
}

function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => addBreeds(json))

}

function addBreeds(json){
    const breed = Object.entries(json.message)
    const breedUl = document.querySelector('#dog-breeds')

    breed.forEach(breed => {
        const liElement = document.createElement("li")
        liElement.textContent = breed
        breedUl.appendChild(liElement)
    })
}


//fetch('https://dog.ceo/api/breeds/image/random/4') .then(function(response) {
  //  return response.json();
//}) .then(function(json) {
  //  console.log(json)
//});