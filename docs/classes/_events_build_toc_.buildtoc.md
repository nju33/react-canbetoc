[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["events/build-toc"](../modules/_events_build_toc_.md) › [BuildToc](_events_build_toc_.buildtoc.md)

# Class: BuildToc

After did mount, fires mainly to construct a table of contents entry

## Hierarchy

* **BuildToc**

## Implements

* [TraitEvent](../interfaces/_events_event_.traitevent.md)

## Index

### Constructors

* [constructor](_events_build_toc_.buildtoc.md#constructor)

### Properties

* [tocEntryDomAdaptor](_events_build_toc_.buildtoc.md#private-readonly-tocentrydomadaptor)
* [tocEntryService](_events_build_toc_.buildtoc.md#private-readonly-tocentryservice)
* [tocListItemAdaptor](_events_build_toc_.buildtoc.md#private-readonly-toclistitemadaptor)

### Methods

* [useCase](_events_build_toc_.buildtoc.md#usecase)

## Constructors

###  constructor

\+ **new BuildToc**(`tocEntryDomAdaptor`: [TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md), `tocListItemAdaptor`: [TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md), `tocEntryService`: [TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md)): *[BuildToc](_events_build_toc_.buildtoc.md)*

*Defined in [src/events/build-toc.ts:20](https://github.com/nju33/react-canbetoc/blob/0f1d85b/src/events/build-toc.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`tocEntryDomAdaptor` | [TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md) |
`tocListItemAdaptor` | [TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md) |
`tocEntryService` | [TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md) |

**Returns:** *[BuildToc](_events_build_toc_.buildtoc.md)*

## Properties

### `Private` `Readonly` tocEntryDomAdaptor

• **tocEntryDomAdaptor**: *[TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md)*

*Defined in [src/events/build-toc.ts:22](https://github.com/nju33/react-canbetoc/blob/0f1d85b/src/events/build-toc.ts#L22)*

___

### `Private` `Readonly` tocEntryService

• **tocEntryService**: *[TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md)*

*Defined in [src/events/build-toc.ts:24](https://github.com/nju33/react-canbetoc/blob/0f1d85b/src/events/build-toc.ts#L24)*

___

### `Private` `Readonly` tocListItemAdaptor

• **tocListItemAdaptor**: *[TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md)*

*Defined in [src/events/build-toc.ts:23](https://github.com/nju33/react-canbetoc/blob/0f1d85b/src/events/build-toc.ts#L23)*

## Methods

###  useCase

▸ **useCase**(`baseElementRef`: RefObject‹Element›, `selectors`: string[]): *ReturnType‹TraitBuildToc["useCase"]›*

*Defined in [src/events/build-toc.ts:27](https://github.com/nju33/react-canbetoc/blob/0f1d85b/src/events/build-toc.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`baseElementRef` | RefObject‹Element› |
`selectors` | string[] |

**Returns:** *ReturnType‹TraitBuildToc["useCase"]›*
