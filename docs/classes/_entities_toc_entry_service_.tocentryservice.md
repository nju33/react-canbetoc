[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["entities/toc-entry-service"](../modules/_entities_toc_entry_service_.md) › [TocEntryService](_entities_toc_entry_service_.tocentryservice.md)

# Class: TocEntryService

## Hierarchy

* **TocEntryService**

## Implements

* [TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md)

## Index

### Constructors

* [constructor](_entities_toc_entry_service_.tocentryservice.md#constructor)

### Properties

* [#daoMap](_entities_toc_entry_service_.tocentryservice.md#private-#daomap)
* [#tocEntryMap](_entities_toc_entry_service_.tocentryservice.md#private-#tocentrymap)
* [domAdaptor](_entities_toc_entry_service_.tocentryservice.md#private-readonly-domadaptor)
* [tocListItemAdaptor](_entities_toc_entry_service_.tocentryservice.md#private-readonly-toclistitemadaptor)

### Methods

* [convertToDaoFrom](_entities_toc_entry_service_.tocentryservice.md#converttodaofrom)
* [getInstance](_entities_toc_entry_service_.tocentryservice.md#getinstance)

## Constructors

###  constructor

\+ **new TocEntryService**(`domAdaptor`: [TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md), `tocListItemAdaptor`: [TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md)): *[TocEntryService](_entities_toc_entry_service_.tocentryservice.md)*

*Defined in [src/entities/toc-entry-service.ts:18](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry-service.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`domAdaptor` | [TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md) |
`tocListItemAdaptor` | [TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md) |

**Returns:** *[TocEntryService](_entities_toc_entry_service_.tocentryservice.md)*

## Properties

### `Private` #daoMap

• **#daoMap**: *WeakMap‹[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md), [TraitTocEntryDao](../interfaces/_entities_toc_entry_dao_.traittocentrydao.md)›* = new WeakMap<TraitTocEntry, TraitTocEntryDao>()

*Defined in [src/entities/toc-entry-service.ts:18](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry-service.ts#L18)*

___

### `Private` #tocEntryMap

• **#tocEntryMap**: *Map‹string, [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)›* = new Map<string, TraitTocEntry>()

*Defined in [src/entities/toc-entry-service.ts:17](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry-service.ts#L17)*

___

### `Private` `Readonly` domAdaptor

• **domAdaptor**: *[TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md)*

*Defined in [src/entities/toc-entry-service.ts:21](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry-service.ts#L21)*

___

### `Private` `Readonly` tocListItemAdaptor

• **tocListItemAdaptor**: *[TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md)*

*Defined in [src/entities/toc-entry-service.ts:22](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry-service.ts#L22)*

## Methods

###  convertToDaoFrom

▸ **convertToDaoFrom**(`tocEntry`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)): *[TraitTocEntryDao](../interfaces/_entities_toc_entry_dao_.traittocentrydao.md)*

*Defined in [src/entities/toc-entry-service.ts:45](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry-service.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`tocEntry` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md) |

**Returns:** *[TraitTocEntryDao](../interfaces/_entities_toc_entry_dao_.traittocentrydao.md)*

___

###  getInstance

▸ **getInstance**(`optionId`: Option‹string›): *Option‹[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)›*

*Defined in [src/entities/toc-entry-service.ts:25](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry-service.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`optionId` | Option‹string› |

**Returns:** *Option‹[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)›*
