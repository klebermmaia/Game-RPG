export default function exportClass(classe) {
  const barbaro = {
    nivel1:{
      pv: 12,
      proficiencias: {
        armaduras: {
          leves: true,
          medias: true,
          escudos: true,
        },
        armas: {
          simples: true,
          marciais: true,
        },
        ferramentas: false,
        testesDeResistencias:['for','con'],
        pericias: ['Adestrae animais','Atletismo','Intimidação','Natureza','Percepção','Sobrevivencia'],
        equipamentos:{
          item1:['Machado grande','Qualquer arma marcial corpo a corpo'],
          item2:['Dois machados de mão','Qualquer arma simples'],
          item3:['Pacote de aventureiro e quatro azagaias'],
        },
        habilidades:{
          furia:{
            condicao: 'apenas sem armadura pesada.',
          }
        },
      },
    },
  }


  switch (classe) {
    case 'dwarf':
      return dwarf;
      break;
  }
}
