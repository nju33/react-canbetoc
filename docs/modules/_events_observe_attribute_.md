[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["events/observe-attribute"](_events_observe_attribute_.md)

# Module: "events/observe-attribute"

## Index

### Classes

* [ObserveAttribute](../classes/_events_observe_attribute_.observeattribute.md)

### Type aliases

* [TraitObserveAttribute](_events_observe_attribute_.md#traitobserveattribute)

### Variables

* [reduceToValidEntries](_events_observe_attribute_.md#const-reducetovalidentries)

## Type aliases

###  TraitObserveAttribute

Ƭ **TraitObserveAttribute**: *[TraitEvent](../interfaces/_events_event_.traitevent.md)‹void, [string, RefObject‹Element›, [TraitStrategy](../interfaces/_strategies_strategy_.traitstrategy.md), Option‹[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]›]›*

*Defined in [src/events/observe-attribute.ts:12](https://github.com/nju33/react-canbetoc/blob/a20943a/src/events/observe-attribute.ts#L12)*

## Variables

### `Const` reduceToValidEntries

• **reduceToValidEntries**: *function* = reduce<
  Option<TraitTocEntry>,
  TraitTocEntry[]
>([], (result, optionTocEntry) => {
  if (isSome(optionTocEntry)) {
    const tocEntry = optionTocEntry.value

    pipe(
      tocEntry.getElementDataHierarcyLevel(),
      map(() => {
        if (!result.includes(tocEntry)) {
          result.push(optionTocEntry.value)
        }
      })
    )
  }

  return result
})

*Defined in [src/events/observe-attribute.ts:17](https://github.com/nju33/react-canbetoc/blob/a20943a/src/events/observe-attribute.ts#L17)*

#### Type declaration:

▸ (`fa`: Array‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`fa` | Array‹A› |
