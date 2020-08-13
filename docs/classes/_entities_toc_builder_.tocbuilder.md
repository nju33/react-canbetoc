[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["entities/toc-builder"](../modules/_entities_toc_builder_.md) › [TocBuilder](_entities_toc_builder_.tocbuilder.md)

# Class: TocBuilder

## Hierarchy

* **TocBuilder**

## Implements

* [TraitTocBuilder](../interfaces/_entities_toc_builder_.traittocbuilder.md)

## Index

### Constructors

* [constructor](_entities_toc_builder_.tocbuilder.md#constructor)

### Properties

* [#hierarchyIndex](_entities_toc_builder_.tocbuilder.md#private-#hierarchyindex)
* [#list](_entities_toc_builder_.tocbuilder.md#private-#list)
* [#root](_entities_toc_builder_.tocbuilder.md#private-#root)
* [#stack](_entities_toc_builder_.tocbuilder.md#private-#stack)
* [domAdaptor](_entities_toc_builder_.tocbuilder.md#readonly-domadaptor)
* [service](_entities_toc_builder_.tocbuilder.md#private-readonly-service)
* [tocListItemAdaptor](_entities_toc_builder_.tocbuilder.md#readonly-toclistitemadaptor)

### Methods

* [addElements](_entities_toc_builder_.tocbuilder.md#addelements)
* [build](_entities_toc_builder_.tocbuilder.md#build)
* [get](_entities_toc_builder_.tocbuilder.md#get)
* [getList](_entities_toc_builder_.tocbuilder.md#getlist)
* [setHierarchy](_entities_toc_builder_.tocbuilder.md#sethierarchy)

## Constructors

###  constructor

\+ **new TocBuilder**(`domAdaptor`: [TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md), `tocListItemAdaptor`: [TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md), `service`: [TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md)): *[TocBuilder](_entities_toc_builder_.tocbuilder.md)*

*Defined in [src/entities/toc-builder.ts:31](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`domAdaptor` | [TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md) |
`tocListItemAdaptor` | [TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md) |
`service` | [TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md) |

**Returns:** *[TocBuilder](_entities_toc_builder_.tocbuilder.md)*

## Properties

### `Private` #hierarchyIndex

• **#hierarchyIndex**: *number* = 0

*Defined in [src/entities/toc-builder.ts:31](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L31)*

___

### `Private` #list

• **#list**: *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

*Defined in [src/entities/toc-builder.ts:30](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L30)*

___

### `Private` #root

• **#root**: *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)*

*Defined in [src/entities/toc-builder.ts:28](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L28)*

___

### `Private` #stack

• **#stack**: *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

*Defined in [src/entities/toc-builder.ts:29](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L29)*

___

### `Readonly` domAdaptor

• **domAdaptor**: *[TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md)*

*Defined in [src/entities/toc-builder.ts:34](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L34)*

___

### `Private` `Readonly` service

• **service**: *[TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md)*

*Defined in [src/entities/toc-builder.ts:36](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L36)*

___

### `Readonly` tocListItemAdaptor

• **tocListItemAdaptor**: *[TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md)*

*Defined in [src/entities/toc-builder.ts:35](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L35)*

## Methods

###  addElements

▸ **addElements**(`elements`: Element[]): *void*

*Defined in [src/entities/toc-builder.ts:43](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`elements` | Element[] |

**Returns:** *void*

___

###  build

▸ **build**(`commands`: [TraitTocBuilderCommand](../interfaces/_entities_toc_builder_command_.traittocbuildercommand.md)[]): *void*

*Defined in [src/entities/toc-builder.ts:108](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`commands` | [TraitTocBuilderCommand](../interfaces/_entities_toc_builder_command_.traittocbuildercommand.md)[] |

**Returns:** *void*

___

###  get

▸ **get**(): *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)*

*Defined in [src/entities/toc-builder.ts:116](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L116)*

**Returns:** *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)*

___

###  getList

▸ **getList**(): *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

*Defined in [src/entities/toc-builder.ts:120](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L120)*

**Returns:** *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

___

###  setHierarchy

▸ **setHierarchy**(`number`: number): *void*

*Defined in [src/entities/toc-builder.ts:104](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-builder.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`number` | number |

**Returns:** *void*
