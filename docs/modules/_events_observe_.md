[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["events/observe"](_events_observe_.md)

# Module: "events/observe"

## Index

### Classes

* [Observe](../classes/_events_observe_.observe.md)

### Type aliases

* [TraitObserve](_events_observe_.md#traitobserve)

### Functions

* [createFilterActive](_events_observe_.md#const-createfilteractive)
* [createFilterLatestIntersected](_events_observe_.md#const-createfilterlatestintersected)

## Type aliases

###  TraitObserve

Ƭ **TraitObserve**: *[TraitEvent](../interfaces/_events_event_.traitevent.md)‹void, [Option‹[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]›, IntersectionObserverInit]›*

*Defined in [src/events/observe.ts:9](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/events/observe.ts#L9)*

## Functions

### `Const` createFilterActive

▸ **createFilterActive**(`validElements`: Element[]): *function*

*Defined in [src/events/observe.ts:14](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/events/observe.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`validElements` | Element[] |

**Returns:** *function*

▸ (`tocEntries`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`tocEntries` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |

___

### `Const` createFilterLatestIntersected

▸ **createFilterLatestIntersected**(): *function*

*Defined in [src/events/observe.ts:29](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/events/observe.ts#L29)*

**Returns:** *function*

▸ (`tocEntries`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`tocEntries` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |
