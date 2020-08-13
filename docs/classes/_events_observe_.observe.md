[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["events/observe"](../modules/_events_observe_.md) › [Observe](_events_observe_.observe.md)

# Class: Observe

## Hierarchy

* **Observe**

## Implements

* [TraitEvent](../interfaces/_events_event_.traitevent.md)

## Index

### Properties

* [update](_events_observe_.observe.md#private-readonly-update)

### Methods

* [useCase](_events_observe_.observe.md#usecase)

## Properties

### `Private` `Readonly` update

• **update**: *throttle‹(Anonymous function)›* = throttle(
    500,
    (tocEntries: TraitTocEntry[], ioEntries: IntersectionObserverEntry[]) => {
      const validIoElements = ioEntries.map((ioEntry) => ioEntry.target)

      const filterLatestIntersected = createFilterLatestIntersected()
      const filteredLatestIntersected = filterLatestIntersected(tocEntries)
      const filterActive = createFilterActive(validIoElements)
      const filteredActive = filterActive(tocEntries)

      filteredLatestIntersected.forEach((tocEntry) => {
        // If the entry is activating yet,
        // the entry skips deactivating
        if (!filteredActive.includes(tocEntry)) {
          tocEntry.inactivate()
        }
      })

      filteredActive.forEach((tocEntry) => {
        tocEntry.activate()
        pipe(
          tocEntry.getElementDataId(),
          map((id) => {
            history.replaceState('', '', `#${id}`)
          })
        )
      })
    }
  )

*Defined in [src/events/observe.ts:37](https://github.com/nju33/react-canbetoc/blob/21df68e/src/events/observe.ts#L37)*

## Methods

###  useCase

▸ **useCase**(`optionTocEntries`: Option‹[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]›, `memoizedIntersectionObserverInit`: IntersectionObserverInit): *ReturnType‹TraitObserve["useCase"]›*

*Defined in [src/events/observe.ts:67](https://github.com/nju33/react-canbetoc/blob/21df68e/src/events/observe.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`optionTocEntries` | Option‹[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]› |
`memoizedIntersectionObserverInit` | IntersectionObserverInit |

**Returns:** *ReturnType‹TraitObserve["useCase"]›*
