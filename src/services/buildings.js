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
      effect: () => buildings[0].currentCPS = buildings[0].currentCPS * 2
    }, {
      name: 'carpal tunnel prevention cream',
      owned: false,
      active: false,
      condition: () => buildings[0].owned > 0,
      basePrice: 500,
      effect: () => buildings[0].currentCPS = buildings[0].currentCPS * 2
    }, {
      name: 'ambidextrous',
      owned: false,
      active: false,
      condition: () => buildings[0].owned > 10,
      basePrice: 10000,
      effect: () => buildings[0].currentCPS = buildings[0].currentCPS * 2
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
    upgrades: [{}]
  },
  {
    name: 'mines',
    basePrice: 12000,
    baseCPS: 47,
    currentCPS: 47,
    currentPrice: 12000,
    owned: 0,
    upgrades: [{}]
  },
  {
    name: 'factories',
    basePrice: 130000,
    baseCPS: 260,
    currentCPS: 260,
    currentPrice: 130000,
    owned: 0,
    upgrades: [{}]
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