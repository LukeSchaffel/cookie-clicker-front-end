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
      owned: true,
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
    }]
  },
  {
    name: 'grandmas',
    basePrice: 100,
    baseCPS: 1,
    currentCPS: 1,
    currentPrice: 100,
    owned: 0,
    upgrades: [{}]
  },
  {
    name: 'farms',
    basePrice: 1100,
    baseCPS: 8,
    currentCPS: 8,
    currentPrice: 1100,
    owned: 0,
    upgrades: [{}]
  }
]




export { buildings }