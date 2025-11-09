let container = document.getElementById("images");
let likeButton = document.getElementById("like");
let dislikeButton = document.getElementById("dislike");
let nombreClick = 0;

let xhr = new XMLHttpRequest();

xhr.open("GET", "data.json", true);

xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
        if (xhr.status === 200){
            data = JSON.parse(xhr.responseText);
            let i = 0;
            data.forEach(element => {
                i++;
                let card = document.createElement('div');
                card.innerHTML = `<img src="${element.image}" alt="">
                                  <div>
                                    <h1>${element.title}</h1>
                                    <p>${element.description}</p>
                                  </div>`;
                card.id = `card${i}`;
                card.style.display = 'flex';
                card.style.flexDirection = 'column';
                card.style.border = '1px solid black';
                card.style.borderRadius = '30px';
                card.style.overflow = 'hidden';
                card.style.position = 'absolute';
                card.style.top = `${20*i}px`;
                card.style.width = '100%';
                const details = card.querySelector('div');
                details.style.display = 'flex';
                details.style.flexDirection = 'column';
                details.style.padding = '15px';
                details.style.gap = '5px';
                details.style.backgroundColor = 'white';
                const title = card.querySelector('h1');
                title.style.fontSize = '1.5rem'
                container.appendChild(card);
            });
            let currentCard = data.length;
            dislikeButton.addEventListener("click", ()=>{document.getElementById(`card${currentCard--}`).style.display = 'none';nombreClick ++;});
            let carteAimees = [];
            likeButton.addEventListener("click", ()=>{carteAimees.push(document.getElementById(`card${currentCard}`));document.getElementById(`card${currentCard--}`).style.display = 'none';nombreClick ++;});
            // if(nombreClick === data.length){
            //     // let buttonAfficher = document.createElement('button');
            //     // buttonAfficher.innerText = 'Afficher cartes aimees';
            //     document.getElementById('container').innerHTML = '<button>Afficher cartes aimees</button>'
            // }
        }
        
    }
}

xhr.send();
