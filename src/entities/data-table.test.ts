import { DataTable, TraitDataTable } from './data-table'

describe('DataTable', () => {
  describe('HTMLAttribute', () => {
    let dataTable: TraitDataTable

    beforeEach(() => {
      dataTable = new DataTable('fooTable', 'fooNamespace')
    })

    test('get the attribute', () => {
      const attribute = dataTable.getAttribute('fooColumn')

      expect(attribute.toString()).toBe('data-fooTable-fooNamespace-fooColumn')
    })

    test('toSelector', () => {
      const attribute = dataTable.getAttribute('fooColumn')
      const selector = attribute.toSelector('fooValue')

      expect(selector.toString()).toBe(
        '[data-fooTable-fooNamespace-fooColumn="fooValue"]'
      )
    })
  })

  describe('HTMLSelector', () => {
    let dataTable: TraitDataTable

    beforeEach(() => {
      dataTable = new DataTable('fooTable', 'fooNamespace')
    })

    test('without a value', () => {
      const selector = dataTable.getSelector('fooColumn')

      expect(selector.toString()).toBe('[data-fooTable-fooNamespace-fooColumn]')
    })

    test('with a value', () => {
      const selector = dataTable.getSelector('fooColumn', 'fooValue')

      expect(selector.toString()).toBe(
        '[data-fooTable-fooNamespace-fooColumn="fooValue"]'
      )
    })

    test('toAttribute', () => {
      const selector = dataTable.getSelector('fooColumn', 'fooValue')
      const attribute = selector.toAttribute()

      expect(attribute.toString()).toBe('data-fooTable-fooNamespace-fooColumn')
    })
  })
})
