[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["events/observe-attribute"](../modules/_events_observe_attribute_.md) › [ObserveAttribute](_events_observe_attribute_.observeattribute.md)

# Class: ObserveAttribute

## Hierarchy

* **ObserveAttribute**

## Implements

* [TraitEvent](../interfaces/_events_event_.traitevent.md)

## Index

### Constructors

* [constructor](_events_observe_attribute_.observeattribute.md#constructor)

### Properties

* [mutationObserverAdaptor](_events_observe_attribute_.observeattribute.md#private-readonly-mutationobserveradaptor)
* [tocEntryService](_events_observe_attribute_.observeattribute.md#private-readonly-tocentryservice)

### Methods

* [getRelatedTocEntries](_events_observe_attribute_.observeattribute.md#private-getrelatedtocentries)
* [getTocEntryByTocElement](_events_observe_attribute_.observeattribute.md#private-gettocentrybytocelement)
* [useCase](_events_observe_attribute_.observeattribute.md#usecase)

## Constructors

###  constructor

\+ **new ObserveAttribute**(`mutationObserverAdaptor`: [TraitMutationObserverAdaptor](../interfaces/_entities_mutation_observer_adaptor_.traitmutationobserveradaptor.md), `tocEntryService`: [TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md)): *[ObserveAttribute](_events_observe_attribute_.observeattribute.md)*

*Defined in [src/events/observe-attribute.ts:37](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/events/observe-attribute.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`mutationObserverAdaptor` | [TraitMutationObserverAdaptor](../interfaces/_entities_mutation_observer_adaptor_.traitmutationobserveradaptor.md) |
`tocEntryService` | [TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md) |

**Returns:** *[ObserveAttribute](_events_observe_attribute_.observeattribute.md)*

## Properties

### `Private` `Readonly` mutationObserverAdaptor

• **mutationObserverAdaptor**: *[TraitMutationObserverAdaptor](../interfaces/_entities_mutation_observer_adaptor_.traitmutationobserveradaptor.md)*

*Defined in [src/events/observe-attribute.ts:39](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/events/observe-attribute.ts#L39)*

___

### `Private` `Readonly` tocEntryService

• **tocEntryService**: *[TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md)*

*Defined in [src/events/observe-attribute.ts:40](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/events/observe-attribute.ts#L40)*

## Methods

### `Private` getRelatedTocEntries

▸ **getRelatedTocEntries**(`tocEntries`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

*Defined in [src/events/observe-attribute.ts:49](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/events/observe-attribute.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`tocEntries` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |

**Returns:** *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

___

### `Private` getTocEntryByTocElement

▸ **getTocEntryByTocElement**(`tocElement`: Element): *Option‹[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)›*

*Defined in [src/events/observe-attribute.ts:43](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/events/observe-attribute.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`tocElement` | Element |

**Returns:** *Option‹[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)›*

___

###  useCase

▸ **useCase**(`id`: string, `tocBaseElementRef`: RefObject‹Element›, `strategy`: [TraitStrategy](../interfaces/_strategies_strategy_.traitstrategy.md), `optionTocEntries`: Option‹[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]›): *void*

*Defined in [src/events/observe-attribute.ts:57](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/events/observe-attribute.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`tocBaseElementRef` | RefObject‹Element› |
`strategy` | [TraitStrategy](../interfaces/_strategies_strategy_.traitstrategy.md) |
`optionTocEntries` | Option‹[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]› |

**Returns:** *void*
