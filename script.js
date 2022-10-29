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
    if(infoRaca.subRacas){
      selectSubRaca.innerHTML = ''; // Limpa o HTML para não somar mais options no select.
      subRaca.classList.remove('none'); // remove para aparecer opções de sub-raças.
      const listaSubRacas = Object.keys(infoRaca.subRacas); // Retorna uma array com as Sub-raças.
      // console.log(infoRaca.subRacas[listaSubRacas[1]])
      for(let c = 0; c < listaSubRacas.length; c++){
        let novoElemento = document.createElement('option'); // Cria novo elemento option para o select.
        selectSubRaca.appendChild(novoElemento);
        /*
        =========================================================================
          PROXIMO PASSO BEM AQUI.
          * Adicionar para cada option a opção segundo a raça selecionada.
          * Ultilizar texto do array da linha 20 (listaSubRacas), em cada opção.
          * Da teu jeito de fazer isso kleber de amanhã, eu to com sono, boa noite 😴
        =========================================================================
        */
      }

    } else{
      console.log('não existe')
    }
  }
  subRaca(){
    
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
