const buildings = [
  {
    name: 'cursors',
    basePrice: 15,
    baseCPS: .1,
    currentCPS: .1,
    currentPrice: 15,
    owned: 0,
    upgrades: [{
      name: 'reinforced index finger',
      owned: false,
      active: false,
      condition: () => buildings[0].owned > 0,
      basePrice: 100,
      effect: () => buildings[0].currentCPS = buildings[0].currentCPS * 2,
      modifyClickStrength: true
    }, {
      name: 'carpal tunnel prevention cream',
      owned: false,
      active: false,
      condition: () => buildings[0].owned > 0,
      basePrice: 500,
      effect: () => buildings[0].currentCPS = buildings[0].currentCPS * 2,
      modifyClickStrength: true
    }, {
      name: 'ambidextrous',
      owned: false,
      active: false,
      condition: () => buildings[0].owned > 10,
      basePrice: 10000,
      effect: () => buildings[0].currentCPS = buildings[0].currentCPS * 2,
      modifyClickStrength: true
    }]
  },
  {
    name: 'grandmas',
    basePrice: 100,
    baseCPS: 1,
    currentCPS: 1,
    currentPrice: 100,
    owned: 0,
    upgrades: [{
      name: 'forwards from grandma',
      owned: false,
      active: false,
      condition: () => buildings[1].owned > 1,
      basePrice: 1000,
      effect: () => buildings[1].currentCPS = buildings[1].currentCPS * 2
    }, {
      name: 'steel-plated rolling pins',
      owned: false,
      active: false,
      condition: () => buildings[1].owned > 5,
      basePrice: 5000,
      effect: () => buildings[1].currentCPS = buildings[1].currentCPS * 2
    }, {
      name: 'lubricated dentures',
      owned: false,
      active: false,
      condition: () => buildings[1].owned > 25,
      basePrice: 50000,
      effect: () => buildings[1].currentCPS = buildings[1].currentCPS * 2
    },]
  },
  {
    name: 'farms',
    basePrice: 1100,
    baseCPS: 8,
    currentCPS: 8,
    currentPrice: 1100,
    owned: 0,
    upgrades: [{
      name: 'cheap hoes',
      owned: false,
      active: false,
      condition: () => buildings[2].owned > 1,
      basePrice: 11000,
      effect: () => buildings[2].currentCPS = buildings[2].currentCPS * 2
    },{
      name: 'fertilizer',
      owned: false,
      active: false,
      condition: () => buildings[2].owned > 5,
      basePrice: 55000,
      effect: () => buildings[2].currentCPS = buildings[2].currentCPS * 2
    },{
      name: 'cookie trees',
      owned: false,
      active: false,
      condition: () => buildings[2].owned > 25,
      basePrice: 550000,
      effect: () => buildings[2].currentCPS = buildings[2].currentCPS * 2
    }]
  },
  {
    name: 'mines',
    basePrice: 12000,
    baseCPS: 47,
    currentCPS: 47,
    currentPrice: 12000,
    owned: 0,
    upgrades: [{
      name: 'sugar gas',
      owned: false,
      active: false,
      condition: () => buildings[3].owned > 1,
      basePrice: 120000,
      effect: () => buildings[3].currentCPS = buildings[3].currentCPS * 2
    },{
      name: 'megadrill',
      owned: false,
      active: false,
      condition: () => buildings[3].owned > 5,
      basePrice: 600000,
      effect: () => buildings[3].currentCPS = buildings[3].currentCPS * 2
    },{
      name: 'ultradrill',
      owned: false,
      active: false,
      condition: () => buildings[3].owned > 25,
      basePrice: 6000000,
      effect: () => buildings[3].currentCPS = buildings[3].currentCPS * 2
    }]
  },
  {
    name: 'factories',
    basePrice: 130000,
    baseCPS: 260,
    currentCPS: 260,
    currentPrice: 130000,
    owned: 0,
    upgrades: [{
      name: 'sturdier conveyor belts',
      owned: false,
      active: false,
      condition: () => buildings[4].owned > 1,
      basePrice: 1300000,
      effect: () => buildings[4].currentCPS = buildings[4].currentCPS * 2
    },{
      name: 'child labor',
      owned: false,
      active: false,
      condition: () => buildings[4].owned > 5,
      basePrice: 6500000,
      effect: () => buildings[4].currentCPS = buildings[4].currentCPS * 2
    },{
      name: 'sweatshop',
      owned: false,
      active: false,
      condition: () => buildings[4].owned > 25,
      basePrice: 65000000,
      effect: () => buildings[4].currentCPS = buildings[4].currentCPS * 2
    }]
  },
  {
    name: 'banks',
    basePrice: 1400000,
    baseCPS: 1400,
    currentCPS: 1400,
    currentPrice: 1400000,
    owned: 0,
    upgrades: [{}]
  },
  {
    name: 'temples',
    basePrice: 20000000,
    baseCPS: 7800,
    currentCPS: 7800,
    currentPrice: 20000000,
    owned: 0,
    upgrades: [{}]
  },
]




export { buildings }