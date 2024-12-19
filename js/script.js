// data à travailler : il s'agit d'un objet contenant un tableau de membres
const data = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality"
            ]
        },
        {
            "name": "Fatality",
            "age": 33,
            "secretIdentity": "Isaac Mewton",
            "powers": [
                "Fatality resistance"
            ]
        },
        {
            "name": "Running Lady",
            "age": 24,
            "secretIdentity": "Britney Sears",
            "powers": [
                "Speed of light"
            ]
        }
    ]
}

document.querySelector("#squad_title").innerHTML =`
<h1>${data.squadName}</h1>
        <h2><span> <b>Hommetown : </b> ${data.homeTown} //  </span>
        <span> <b>formed : </b> ${data.formed}  </span></h2>
`; 





            for(item of data.members ){
        document.querySelector("#super_cards").innerHTML += `
        <div class="col-3 bg-light rounded rounded-2">
            <h2 class="text-center">${item.name}</h2>
            <ul>
                <li>
                    <b>Secret identity : </b>  ${item.secretIdentity}
                 </li>
                 <li>
                    <b>Age : </b> ${item.age}
                 </li>
                 <li>
                    <b>Superpowers : </b> <ul>
                                           <li> ${item.powers} </li>
                                          </ul>
                 </li>
            </ul>
        </div>
        `
    }

