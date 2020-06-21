/**
 * @jest-environment jsdom
 */

import { Selector } from './selector'
import { TraitTocBuilder } from './toc-builder'
import {
  generatorTocBuilderCommands,
  TocBuilderCommand
} from './toc-builder-command'

describe('generatorTocBuilderCommands', () => {
  beforeEach(() => {
    const fragment = document.createRange().createContextualFragment(`
<div id="foo">
  <h1></h1>
  <h2></h2>
  <h2></h2>
  <h3></h3>
  <h3></h3>
  <h3></h3>
  <h2></h2>
  <h3></h3>
  <h5></h5>
</div>
    `)

    document.body.appendChild(fragment)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('create some command', () => {
    const iterateCommandCreation = generatorTocBuilderCommands(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById('foo')!,
      ['h1', 'h2', 'h3', 'h4', 'h5']
    )

    const result = [...iterateCommandCreation]

    result.forEach((command) => {
      expect(command).toBeInstanceOf(TocBuilderCommand)
    })
  })
})

describe('TocBuilderCommand', () => {
  let builder: TraitTocBuilder
  let spyOnAddElements: jest.SpyInstance
  let spyOnSetHierarchy: jest.SpyInstance

  class TocBuilder implements TraitTocBuilder {
    addElements(): any {}
    setHierarchy(): any {}
    build(): any {}
    get(): any {}
    getList(): any {}
  }

  beforeEach(() => {
    builder = new TocBuilder()
    spyOnAddElements = jest.spyOn(builder, 'addElements')
    spyOnSetHierarchy = jest.spyOn(builder, 'setHierarchy')
  })

  test('the command calls the builder functions', () => {
    const elements = [document.createElement('div')]

    const command = new TocBuilderCommand(new Selector('h1', 1), elements)

    command.execute(builder)

    expect(spyOnAddElements).toBeCalledWith(elements)
    expect(spyOnSetHierarchy).toBeCalledWith(0)
  })
})
