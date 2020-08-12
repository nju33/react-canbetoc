[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["entities/toc-entry"](../modules/_entities_toc_entry_.md) › [TraitTocEntry](_entities_toc_entry_.traittocentry.md)

# Interface: TraitTocEntry

## Hierarchy

* **TraitTocEntry**

## Implemented by

* [MockActiveTocEntry](../classes/_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md)
* [TocEntry](../classes/_entities_toc_entry_.tocentry.md)

## Index

### Properties

* [activate](_entities_toc_entry_.traittocentry.md#activate)
* [addItems](_entities_toc_entry_.traittocentry.md#additems)
* [getElement](_entities_toc_entry_.traittocentry.md#getelement)
* [getElementDataActiveBranch](_entities_toc_entry_.traittocentry.md#getelementdataactivebranch)
* [getElementDataActiveItem](_entities_toc_entry_.traittocentry.md#getelementdataactiveitem)
* [getElementDataAnchorHeight](_entities_toc_entry_.traittocentry.md#getelementdataanchorheight)
* [getElementDataHierarcyLevel](_entities_toc_entry_.traittocentry.md#getelementdatahierarcylevel)
* [getElementDataId](_entities_toc_entry_.traittocentry.md#getelementdataid)
* [getElementDataLatestIntersected](_entities_toc_entry_.traittocentry.md#getelementdatalatestintersected)
* [getElementHeight](_entities_toc_entry_.traittocentry.md#getelementheight)
* [getItems](_entities_toc_entry_.traittocentry.md#getitems)
* [getParentItems](_entities_toc_entry_.traittocentry.md#getparentitems)
* [getSiblingItems](_entities_toc_entry_.traittocentry.md#getsiblingitems)
* [getTarget](_entities_toc_entry_.traittocentry.md#gettarget)
* [inactivate](_entities_toc_entry_.traittocentry.md#inactivate)
* [removeItems](_entities_toc_entry_.traittocentry.md#removeitems)
* [setParentItems](_entities_toc_entry_.traittocentry.md#setparentitems)
* [setSiblingItems](_entities_toc_entry_.traittocentry.md#setsiblingitems)

## Properties

###  activate

• **activate**: *function*

*Defined in [src/entities/toc-entry.ts:12](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L12)*

親含めて活性化する

#### Type declaration:

▸ (`isCurrent?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isCurrent?` | undefined &#124; false &#124; true |

___

###  addItems

• **addItems**: *function*

*Defined in [src/entities/toc-entry.ts:16](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L16)*

直下 entry を追加

#### Type declaration:

▸ (`items`: [TraitTocEntry](_entities_toc_entry_.traittocentry.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [TraitTocEntry](_entities_toc_entry_.traittocentry.md)[] |

___

###  getElement

• **getElement**: *function*

*Defined in [src/entities/toc-entry.ts:20](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L20)*

目次要素の取得

#### Type declaration:

▸ (): *Option‹HTMLElement›*

___

###  getElementDataActiveBranch

• **getElementDataActiveBranch**: *function*

*Defined in [src/entities/toc-entry.ts:24](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L24)*

活性化した entry 自身かその親かどうか

#### Type declaration:

▸ (): *boolean*

___

###  getElementDataActiveItem

• **getElementDataActiveItem**: *function*

*Defined in [src/entities/toc-entry.ts:28](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L28)*

活性化した entry 自身かどうか

#### Type declaration:

▸ (): *boolean*

___

###  getElementDataAnchorHeight

• **getElementDataAnchorHeight**: *function*

*Defined in [src/entities/toc-entry.ts:32](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L32)*

目次要素の高さを取得

#### Type declaration:

▸ (): *Option‹number›*

___

###  getElementDataHierarcyLevel

• **getElementDataHierarcyLevel**: *function*

*Defined in [src/entities/toc-entry.ts:36](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L36)*

階層のレベル

#### Type declaration:

▸ (): *Option‹number›*

___

###  getElementDataId

• **getElementDataId**: *function*

*Defined in [src/entities/toc-entry.ts:40](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L40)*

目次要素の id

#### Type declaration:

▸ (): *Option‹string›*

___

###  getElementDataLatestIntersected

• **getElementDataLatestIntersected**: *function*

*Defined in [src/entities/toc-entry.ts:44](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L44)*

前回交差した entry かどうか

#### Type declaration:

▸ (): *boolean*

___

###  getElementHeight

• **getElementHeight**: *function*

*Defined in [src/entities/toc-entry.ts:48](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L48)*

目次要素の子要素も含めた高さを取得

#### Type declaration:

▸ (`options`: object): *Option‹number›*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`anchor?` | undefined &#124; false &#124; true |

___

###  getItems

• **getItems**: *function*

*Defined in [src/entities/toc-entry.ts:52](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L52)*

直下階層の entry を取得

#### Type declaration:

▸ (): *[TraitTocEntry](_entities_toc_entry_.traittocentry.md)[]*

___

###  getParentItems

• **getParentItems**: *function*

*Defined in [src/entities/toc-entry.ts:56](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L56)*

親階層の entry を取得

#### Type declaration:

▸ (): *[TraitTocEntry](_entities_toc_entry_.traittocentry.md)[]*

___

###  getSiblingItems

• **getSiblingItems**: *function*

*Defined in [src/entities/toc-entry.ts:60](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L60)*

同階層の entry を取得

#### Type declaration:

▸ (): *[TraitTocEntry](_entities_toc_entry_.traittocentry.md)[]*

___

###  getTarget

• **getTarget**: *function*

*Defined in [src/entities/toc-entry.ts:64](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L64)*

目次要素の元となる要素を取得

#### Type declaration:

▸ (): *Option‹Element›*

___

###  inactivate

• **inactivate**: *function*

*Defined in [src/entities/toc-entry.ts:68](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L68)*

親含めて非活性化する

#### Type declaration:

▸ (`isCurrent?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isCurrent?` | undefined &#124; false &#124; true |

___

###  removeItems

• **removeItems**: *function*

*Defined in [src/entities/toc-entry.ts:72](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L72)*

持っている entry を空にする

#### Type declaration:

▸ (): *void*

___

###  setParentItems

• **setParentItems**: *function*

*Defined in [src/entities/toc-entry.ts:76](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L76)*

親階層の entry を格納

#### Type declaration:

▸ (`items`: [TraitTocEntry](_entities_toc_entry_.traittocentry.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [TraitTocEntry](_entities_toc_entry_.traittocentry.md)[] |

___

###  setSiblingItems

• **setSiblingItems**: *function*

*Defined in [src/entities/toc-entry.ts:80](https://github.com/nju33/react-canbetoc/blob/615bc3d/src/entities/toc-entry.ts#L80)*

同階層の entry を格納

#### Type declaration:

▸ (`items`: [TraitTocEntry](_entities_toc_entry_.traittocentry.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [TraitTocEntry](_entities_toc_entry_.traittocentry.md)[] |
