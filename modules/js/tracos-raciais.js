export default function exportRace(race) {
  const dwarf = {
    atributos: {
      con: 2,
    },
    deslocamente: 7.5,
    visaoNoEscuro: 18,
    vantagens: {
      resilienciaAna: 'Você possui vantagem em testes de resistência contra venenos e resistência contra dano de veneno.',
    },
    proficienciasRaca: {
      armas: {
        machadosDeBatalha: true,
        machadinha: true,
        matelosLeves: true,
        martelosDeGuerra: true,
      },
      ferramentas: {
        artesao: {
          ferreiro: true,
          cervejeiro: true,
          pedreiro: true,
        }
      }
    },
    idiomas: {
      comum: true,
      anao: true,
    },
    subRacas: true,
    listaSubRacas: {
      colina: {
        nome: 'Anão da colina',
        atributos: {
          wis: 1,
        },
        tenacidadeAna: 'Seu máximo de pontos de vida aumentam em 1, e cada vez que o anão da colina sobe um nível, ele recebe 1 ponto de vida adicional.',
        pv: 1, // Mais um ponto de vida por nivel.
      },
      motanha: {
        nome: 'Anão da montanha',
        atributos: {
          for: 2,
        },
        proficiencias: {
          armaduras: {
            leves: true,
            medias: true,
          }
        },
      },
    }
  }
  const elf = {
    atributos: {
      dex: 2,
    },
    deslocamente: 9,
    vantagens: {
      ancestralFeerico: 'Você tem vantagem nos testes de resistência para resistir a ser enfeitiçado e magias não podem colocá-lo para dormir.',
      visaoNoEscuro: {
        distancia: 18,
      },
      transe: 'Elfos não precisam dormir. Ao invés disso,eles meditam profundamente, permanecendo semiconscientes, durante 4 horas por dia. Enquanto medita, um elfo é capaz de sonhar de certo modo. Esses sonhos na verdade são exercícios mentais que se tornam reflexos através de anos de prática. Depois de descansar dessa forma, você ganha os mesmos benefícios que um humano depois de 8 horas de sono.',
    },
    proficiencias: {
      pericias: {
        percepcao: true,
      },
    },
    idiomas: {
      comum: true,
      elfico: true,
    },
    subRacas: true,
    listaSubRacas: {
      alto: {
        nome: 'Alto Elfo',
        atributos: {
          int: 1,
        },
        proficiencias: {
          armas: {
            espadas: {
              longa: true,
              curta: true,
            },
            arcos: {
              longo: true,
              curto: true,
            }
          }
        },
        magias: {
          definidas: false,
          indefinidas: {
            quantidade: 1,
            nivel: 0,
            lista: 'mago',
            habilidadeConjuracao: 'int',
          },
        },
        idiomas: 'Você pode falar, ler e escrever um idioma adicional à sua escolha.',
      },
      floresta: {
        nome: 'Elfo da Floresta',
        atributos: {
          wis: 1,
        },
        proficiencias: {
          armas: {
            espadas: {
              longa: true,
              curta: true,
            },
            arcos: {
              longo: true,
              curto: true,
            }
          }
        },
        deslocamento: 10.5,
        MascaraDaNatureza: 'Você pode tentar se esconder mesmo quando você está apenas levemente obscurecido por folhagem, chuva forte, neve caindo, névoa ou outro fenômeno natural.',
      },
      negro: {
        nome: 'Elfo Negro',
        atributos: {
          car: 1,
        },
        vantagens: {
          visaoNoEscuro: {
            distancia: 36,
          },
        },
        proficiencias: {
          armas: {
            rapieira: true,
            espadas: {
              curta: true,
            },
            besta: {
              mao: true,
            }
          }
        },
        magias: {
          definidas: {
            magia1: {
              nome: 'Globo de luz',
              nivelDisponivel: 3,
              habilidadeConjuracao: 'car',
            },
            magia2: {
              nome: 'Escuridão',
              nivelDisponivel: 5,
              habilidadeConjuracao: 'car',
            },
          },
          indefinidas: false,
        },
      },
    }
  }
  const halfling = {
    atributos: {
      dex: 2,
    },
    deslocamente: 9,
    vantagens: {
      sortudo: true, // Quando você obtiver um 1 natural em uma jogada de ataque ou habilidade ou resistência, você pode jogar de novo o dado e deve utilizar o novo resultado.
      bravura: 'Você tem vantagem em testes de resistência contra ficar amedrontado.',
      agilidadeHalfling: 'Você pode mover-se através do espaço de qualquer criatura que for de um tamanho maior que o seu.',
    },
    proficienciasRaca: {
      pericias: {
        percepcao: true,
      },
    },
    idiomas: {
      comum: true,
      halfling: true,
    },
    subRacas: true,
    listaSubRacas: {
      pesLeve: {
        nome: 'Pés Leves',
        atributos: {
          car: 1,
        },
        vantagens: {
          furtividadeNatural: 'Você pode tentar se esconder mesmo quando possuir apenas a cobertura de uma criatura que for no mínimo um tamanho maior que o seu.'
        }
      },
      robusto: {
        nome: 'Robusto',
        atributos: {
          con: 1,
        },
        vantagens: {
          resiliencia: 'Você tem vantagem em testes de resistência contra veneno e tem resistência contra dano de veneno',
        },
      },
    }
  }
  const human = {
    atributos: {
      for: 1,
      dex: 1,
      con: 1,
      int: 1,
      wis: 1,
      car: 1,
    },
    deslocamente: 9,
    idiomas: {
      comum: true,
      outros: true,
    },
    subRacas: false,
    listaSubRacas: '',
  }
  const gnomo = {
    atributos: {
      int: 2,
    },
    deslocamente: 7.5,
    vantagens: {
      visaoNoEscuro: 18,
      espertezaGnomica: 'Você possui vantagem em todos os testes de resistência de Inteligência, Sabedoria e Carisma contra magia',
    },
    proficienciasRaca: {
      pericias: {
        percepcao: true,
      },
    },
    idiomas: {
      comum: true,
      gnomico: true,
    },
    subRacas: true,
    listaSubRacas: {
      floresta: {
        nome: ' Gnomo da Floresta',
        atributos: {
          dex: 1,
        },
        vantagens: {
          furtividadeNatural: 'Você pode tentar se esconder mesmo quando possuir apenas a cobertura de uma criatura que for no mínimo um tamanho maior que o seu.'
        },
        magias: {
          definidas: {
            magia1: {
              nome: 'Ilusão menor',
              nivel: 0,
              habilidadeConjuracao: 'int',
            },
          },
          indefinidas: false,
        },
        FalarComBestas: 'Através de sons e gestos, você pode comunicar ideias simples para Bestas pequenas ou menores. Gnomos da floresta amam os animais e normalmente possuem esquilos, doninhas, coelhos, toupeiras, pica-paus e outras criaturas como amados animais de estimação.',
      },
      Rochas: {
        nome: 'gnomo das rochas',
        atributos: {
          con: 1,
        },
        vantagens: {
          conhecimentoDeArtifice: 'Toda vez que você fizer um teste de Inteligência (História) relacionado a itens mágicos, objetos alquímicos ou mecanismos tecnológicos, você pode adicionar o dobro do seu bônus de proficiência, ao invés de qualquer bônus de proficiência que você normalmente use.',
        },
      },
    }
  }
  const halfElf = {
    atributos: {
      car: 2,
      outros: 'Mais dois atributos a escolha aumentam em 1',
    },
    deslocamente: 7.5,
    vantagens: {
      visaoNoEscuro: 18,
      ancestralFeerico: 'Você tem vantagem nos testes de resistência para resistir a ser enfeitiçado e magias não podem colocá-lo para dormir.',
      VersatilidadeEmPericia: 'Você ganha proficiência em duas perícias, à sua escolha.',
    },
    idiomas: {
      comum: true,
      elfico: true,
      outros: 'mais um idioma a escolha'
    },
    subRacas: true,
    listaSubRacas: {
      floresta: {
        nome: ' Gnomo da Floresta',
        atributos: {
          dex: 1,
        },
        vantagens: {
          furtividadeNatural: 'Você pode tentar se esconder mesmo quando possuir apenas a cobertura de uma criatura que for no mínimo um tamanho maior que o seu.'
        },
        magias: {
          definidas: {
            magia1: {
              nome: 'Ilusão menor',
              nivel: 0,
              habilidadeConjuracao: 'int',
            },
          },
          indefinidas: false,
        },
        FalarComBestas: 'Através de sons e gestos, você pode comunicar ideias simples para Bestas pequenas ou menores. Gnomos da floresta amam os animais e normalmente possuem esquilos, doninhas, coelhos, toupeiras, pica-paus e outras criaturas como amados animais de estimação.',
      },
      Rochas: {
        nome: 'gnomo das rochas',
        atributos: {
          con: 1,
        },
        vantagens: {
          conhecimentoDeArtifice: 'Toda vez que você fizer um teste de Inteligência (História) relacionado a itens mágicos, objetos alquímicos ou mecanismos tecnológicos, você pode adicionar o dobro do seu bônus de proficiência, ao invés de qualquer bônus de proficiência que você normalmente use.',
        },
      },
    }
  }
  const halfOrc = {
    atributos: {
      for: 2,
      con: 1,
    },
    deslocamente: 7.5,
    vantagens: {
      visaoNoEscuro: 18,
      Ameacador: 'Você adquire proficiência na perícia Intimidação.'
    },
    idiomas: {
      comum: true,
      elfico: true,
      outros: 'mais um idioma a escolha'
    },
    subRacas: true,
    listaSubRacas: {
      floresta: {
        nome: ' Gnomo da Floresta',
        atributos: {
          dex: 1,
        },
        vantagens: {
          furtividadeNatural: 'Você pode tentar se esconder mesmo quando possuir apenas a cobertura de uma criatura que for no mínimo um tamanho maior que o seu.'
        },
        magias: {
          definidas: {
            magia1: {
              nome: 'Ilusão menor',
              nivel: 0,
              habilidadeConjuracao: 'int',
            },
          },
          indefinidas: false,
        },
        FalarComBestas: 'Através de sons e gestos, você pode comunicar ideias simples para Bestas pequenas ou menores. Gnomos da floresta amam os animais e normalmente possuem esquilos, doninhas, coelhos, toupeiras, pica-paus e outras criaturas como amados animais de estimação.',
      },
      Rochas: {
        nome: 'gnomo das rochas',
        atributos: {
          con: 1,
        },
        vantagens: {
          conhecimentoDeArtifice: 'Toda vez que você fizer um teste de Inteligência (História) relacionado a itens mágicos, objetos alquímicos ou mecanismos tecnológicos, você pode adicionar o dobro do seu bônus de proficiência, ao invés de qualquer bônus de proficiência que você normalmente use.',
        },
      },
    }
  }

  switch (race) {
    case 'dwarf':
      return dwarf;
      break;
    case 'elf':
      return elf;
      break;
    case 'halfling':
      return halfling;
      break;
    case 'human':
      return human;
      break;
    case 'gnomo':
      return gnomo;
      break;
    case 'halfElf':
      return halfElf;
      break;
    case 'halfOrc':
      return halfOrc;
      break;
  }
}
