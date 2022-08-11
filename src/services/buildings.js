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
      condition: () => this.owned > 0,
      basePrice: 100,
      effect: () => this.currentCPS = this.currentCPS * 2
    }, {
      name: 'carpal tunnel prevention cream',
      condition: () => this.owned > 0,
      basePrice: 500
    }]
  },
  {
    name: 'grandmas',
    basePrice: 100,
    baseCPS: 1,
    currentPrice: 100,
    owned: 0
  },
  {
    name: 'farms',
    basePrice: 1100,
    baseCPS: 8,
    currentPrice: 1100,
    owned: 0
  }
]




export { buildings }