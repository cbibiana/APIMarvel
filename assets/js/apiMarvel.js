const marvel =
  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b7c31e43010ba3febf3b1d64d127e0e7&hash=f64f84cab6534b87978a16cfc3cdcea1";



const getMarvel = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((datos) => {
        console.log(datos.data);
      fillDataImage(datos.data.results);
    })
    .catch((error) => {
      console.log("error en la api " + error);
    });
};

const getDataImage = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((datos) => {
      fillDataImage(datos);
    })
    .catch((error) => {
      console.log("error en la api" + error);
    });
};


const fillDataImage = (dataImage) => {
  let html = "";
  dataImage.forEach((marvel) => {
  html += '<div class="col-md-4">';
  html += `<img src="${marvel.thumbnail.path}.${marvel.thumbnail.extension}" alt="${marvel.name}" class="img-thumbnail">`;
  html += `<h3 class="title">${marvel.name}</h3>`;
  html += "</div>";
});
  document.getElementById("marvel-row").innerHTML = html;
};

getMarvel(marvel);

//Otra forma de hacerlo.
// const marvel = {
//     render:() =>{

//         const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b7c31e43010ba3febf3b1d64d127e0e7&hash=f64f84cab6534b87978a16cfc3cdcea1";
//         const container = document.querySelector('#marvel-row');
//         let contentHTML = "";

//         fetch(urlAPI)
//         .then(respuesta => respuesta.json())
//         .then((json) => {
//             console.log(json.data)
//             for(const hero of json.data.results) {
//                 let urlHero = hero.urls[0].url;
//                 contentHTML +=  `<div class="col-md-4">
//                 <a href="${urlHero}" target="_blank">
//                     <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
//                 </a>
//                 <h3 class="title">${hero.name}</h3>
//             </div>`;
//             }
//             container.innerHTML=contentHTML;
//         })
//     }
// };


