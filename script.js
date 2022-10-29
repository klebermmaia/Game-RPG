import exportRace from './modules/js/tracos-raciais.js';
class CreateSheet{
  constructor(){
    this.character = {
      nivel: 1,
    };
  }
  name(value){
    this.character.name = value;
  }
  race(value){
    const raca = document.getElementById('race');
    const subRaca = document.querySelector('[data-raca="secundaria"]');
    const selectSubRaca = document.querySelector('[data-raca-select="sub-raca"]');
    this.character.race = value;
    const infoRaca = exportRace(value);

    if(infoRaca.subRacas == true){
      selectSubRaca.innerHTML = ''; // Limpa o HTML para não somar mais options no select.
      subRaca.classList.remove('none'); // remove para aparecer opções de sub-raças.

      const listaSubRacas = Object.keys(infoRaca.listaSubRacas); // Retorna uma array com as Sub-raças.
      for(let c = 0; c < listaSubRacas.length; c++){
        let novoElemento = document.createElement('option'); // Cria novo elemento option para o select.
        selectSubRaca.appendChild(novoElemento);
      }

      const options = selectSubRaca.childNodes
      options.forEach((item, index)=>{ // Adiciona nome das sub-classes de forma dinâmica. 
        let nome = infoRaca.listaSubRacas[listaSubRacas[index]].nome
        item.innerText = nome;
      });
    } else{
      subRaca.classList.add('none');
    }
  }
  subRaces(value){
    this.character.subRace = value;
  }
}
const sheet = new CreateSheet(); 
function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  sheet[name](value);
}
const creationBox = document.querySelector('[data-creation="box"]');
creationBox.addEventListener('change', handleChange)


// const characterSheet = {
//   attributes: {}
// };
// const createSheet = {
//   name(value) {
//     characterSheet.name = value;
//   },
//   races(value) {
//     characterSheet.race = value;
//   },
//   class(value) {
//     characterSheet.class = value;
//   },
//   background(value) {
//     characterSheet.background = value;
//   },
//   attributes(value) {
//     const attributes = document.getElementsByName('attributes');
//     let attributesName = ['for', 'dex', 'con', 'int', 'wis', 'car',];
//     attributesName.forEach(item => {
//       attributes.forEach(attribute => {
//         characterSheet.force = value;
//         characterSheet.dexterity = value;
//         characterSheet.constitution = value;
//         characterSheet.intelligence = value;
//         characterSheet.wisdom = value;
//         characterSheet.charisma = value;
//       })
//     })
//   },
// };
// function handleChange(event) {
//   const name = event.target.name;
//   const value = event.target.value;
//   createSheet[name](value);
// }
// const creationBox = document.querySelector('[data-creation="box"]');
// creationBox.addEventListener('change', handleChange)
