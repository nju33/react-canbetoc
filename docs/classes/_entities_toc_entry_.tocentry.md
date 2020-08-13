[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["entities/toc-entry"](../modules/_entities_toc_entry_.md) › [TocEntry](_entities_toc_entry_.tocentry.md)

# Class: TocEntry

## Hierarchy

* **TocEntry**

## Implements

* [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)

## Index

### Constructors

* [constructor](_entities_toc_entry_.tocentry.md#constructor)

### Properties

* [#items](_entities_toc_entry_.tocentry.md#private-#items)
* [#parentItems](_entities_toc_entry_.tocentry.md#private-#parentitems)
* [#siblingItems](_entities_toc_entry_.tocentry.md#private-#siblingitems)
* [domAdaptor](_entities_toc_entry_.tocentry.md#private-readonly-domadaptor)
* [id](_entities_toc_entry_.tocentry.md#private-readonly-id)
* [tocListItemAdaptor](_entities_toc_entry_.tocentry.md#private-readonly-toclistitemadaptor)

### Methods

* [activate](_entities_toc_entry_.tocentry.md#activate)
* [addItems](_entities_toc_entry_.tocentry.md#additems)
* [getElement](_entities_toc_entry_.tocentry.md#getelement)
* [getElementDataActiveBranch](_entities_toc_entry_.tocentry.md#getelementdataactivebranch)
* [getElementDataActiveItem](_entities_toc_entry_.tocentry.md#getelementdataactiveitem)
* [getElementDataAnchorHeight](_entities_toc_entry_.tocentry.md#getelementdataanchorheight)
* [getElementDataHierarcyLevel](_entities_toc_entry_.tocentry.md#getelementdatahierarcylevel)
* [getElementDataId](_entities_toc_entry_.tocentry.md#getelementdataid)
* [getElementDataLatestIntersected](_entities_toc_entry_.tocentry.md#getelementdatalatestintersected)
* [getElementHeight](_entities_toc_entry_.tocentry.md#getelementheight)
* [getItems](_entities_toc_entry_.tocentry.md#getitems)
* [getParentItems](_entities_toc_entry_.tocentry.md#getparentitems)
* [getSiblingItems](_entities_toc_entry_.tocentry.md#getsiblingitems)
* [getTarget](_entities_toc_entry_.tocentry.md#gettarget)
* [inactivate](_entities_toc_entry_.tocentry.md#inactivate)
* [removeItems](_entities_toc_entry_.tocentry.md#removeitems)
* [setParentItems](_entities_toc_entry_.tocentry.md#setparentitems)
* [setSiblingItems](_entities_toc_entry_.tocentry.md#setsiblingitems)

## Constructors

###  constructor

\+ **new TocEntry**(`domAdaptor`: [TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md), `tocListItemAdaptor`: [TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md), `id`: Option‹string›): *[TocEntry](_entities_toc_entry_.tocentry.md)*

*Defined in [src/entities/toc-entry.ts:86](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`domAdaptor` | [TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md) |
`tocListItemAdaptor` | [TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md) |
`id` | Option‹string› |

**Returns:** *[TocEntry](_entities_toc_entry_.tocentry.md)*

## Properties

### `Private` #items

• **#items**: *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[][]* = []

*Defined in [src/entities/toc-entry.ts:86](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L86)*

___

### `Private` #parentItems

• **#parentItems**: *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]* = []

*Defined in [src/entities/toc-entry.ts:84](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L84)*

___

### `Private` #siblingItems

• **#siblingItems**: *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]* = []

*Defined in [src/entities/toc-entry.ts:85](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L85)*

___

### `Private` `Readonly` domAdaptor

• **domAdaptor**: *[TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md)*

*Defined in [src/entities/toc-entry.ts:89](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L89)*

___

### `Private` `Readonly` id

• **id**: *Option‹string›*

*Defined in [src/entities/toc-entry.ts:91](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L91)*

___

### `Private` `Readonly` tocListItemAdaptor

• **tocListItemAdaptor**: *[TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md)*

*Defined in [src/entities/toc-entry.ts:90](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L90)*

## Methods

###  activate

▸ **activate**(`isCurrent`: boolean): *void*

*Defined in [src/entities/toc-entry.ts:168](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L168)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isCurrent` | boolean | true |

**Returns:** *void*

___

###  addItems

▸ **addItems**(`items`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *void*

*Defined in [src/entities/toc-entry.ts:110](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |

**Returns:** *void*

___

###  getElement

▸ **getElement**(): *Option‹HTMLElement›*

*Defined in [src/entities/toc-entry.ts:118](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L118)*

**Returns:** *Option‹HTMLElement›*

___

###  getElementDataActiveBranch

▸ **getElementDataActiveBranch**(): *boolean*

*Defined in [src/entities/toc-entry.ts:143](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L143)*

**Returns:** *boolean*

___

###  getElementDataActiveItem

▸ **getElementDataActiveItem**(): *boolean*

*Defined in [src/entities/toc-entry.ts:147](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L147)*

**Returns:** *boolean*

___

###  getElementDataAnchorHeight

▸ **getElementDataAnchorHeight**(): *Option‹number›*

*Defined in [src/entities/toc-entry.ts:139](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L139)*

**Returns:** *Option‹number›*

___

###  getElementDataHierarcyLevel

▸ **getElementDataHierarcyLevel**(): *Option‹number›*

*Defined in [src/entities/toc-entry.ts:135](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L135)*

**Returns:** *Option‹number›*

___

###  getElementDataId

▸ **getElementDataId**(): *Option‹string›*

*Defined in [src/entities/toc-entry.ts:131](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L131)*

**Returns:** *Option‹string›*

___

###  getElementDataLatestIntersected

▸ **getElementDataLatestIntersected**(): *boolean*

*Defined in [src/entities/toc-entry.ts:151](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L151)*

**Returns:** *boolean*

___

###  getElementHeight

▸ **getElementHeight**(`__namedParameters`: object): *Option‹number›*

*Defined in [src/entities/toc-entry.ts:127](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L127)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`anchor` | boolean | false |

**Returns:** *Option‹number›*

___

###  getItems

▸ **getItems**(): *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

*Defined in [src/entities/toc-entry.ts:155](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L155)*

**Returns:** *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

___

###  getParentItems

▸ **getParentItems**(): *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

*Defined in [src/entities/toc-entry.ts:98](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L98)*

**Returns:** *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

___

###  getSiblingItems

▸ **getSiblingItems**(): *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

*Defined in [src/entities/toc-entry.ts:106](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L106)*

**Returns:** *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

___

###  getTarget

▸ **getTarget**(): *Option‹HTMLElement›*

*Defined in [src/entities/toc-entry.ts:159](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L159)*

**Returns:** *Option‹HTMLElement›*

___

###  inactivate

▸ **inactivate**(`isCurrent`: boolean): *void*

*Defined in [src/entities/toc-entry.ts:190](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L190)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isCurrent` | boolean | true |

**Returns:** *void*

___

###  removeItems

▸ **removeItems**(): *void*

*Defined in [src/entities/toc-entry.ts:114](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L114)*

**Returns:** *void*

___

###  setParentItems

▸ **setParentItems**(`items`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *void*

*Defined in [src/entities/toc-entry.ts:94](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |

**Returns:** *void*

___

###  setSiblingItems

▸ **setSiblingItems**(`items`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *void*

*Defined in [src/entities/toc-entry.ts:102](https://github.com/nju33/react-canbetoc/blob/118b6f6/src/entities/toc-entry.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |

**Returns:** *void*
