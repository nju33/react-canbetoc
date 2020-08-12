[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["strategies/collapse/collapse-strategy.test"](../modules/_strategies_collapse_collapse_strategy_test_.md) › [MockActiveTocEntry](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md)

# Class: MockActiveTocEntry

## Hierarchy

* **MockActiveTocEntry**

## Implements

* [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)

## Index

### Constructors

* [constructor](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#constructor)

### Properties

* [data](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#readonly-data)

### Methods

* [activate](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#activate)
* [addItems](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#additems)
* [getElement](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#getelement)
* [getElementDataActiveBranch](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#getelementdataactivebranch)
* [getElementDataActiveItem](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#getelementdataactiveitem)
* [getElementDataAnchorHeight](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#getelementdataanchorheight)
* [getElementDataHierarcyLevel](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#getelementdatahierarcylevel)
* [getElementDataId](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#getelementdataid)
* [getElementDataLatestIntersected](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#getelementdatalatestintersected)
* [getElementHeight](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#getelementheight)
* [getItems](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#getitems)
* [getParentItems](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#getparentitems)
* [getSiblingItems](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#getsiblingitems)
* [getTarget](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#gettarget)
* [inactivate](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#inactivate)
* [removeItems](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#removeitems)
* [setParentItems](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#setparentitems)
* [setSiblingItems](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md#setsiblingitems)

## Constructors

###  constructor

\+ **new MockActiveTocEntry**(`data`: object): *[MockActiveTocEntry](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md)*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:11](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L11)*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`activeBranch` | boolean |
`activeItem` | boolean |
`anchorHeight` | number |
`element` | HTMLElement |
`elementHeight?` | undefined &#124; number |
`hierarchyLevel` | number |
`items` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |
`latestIntersected` | boolean |

**Returns:** *[MockActiveTocEntry](_strategies_collapse_collapse_strategy_test_.mockactivetocentry.md)*

## Properties

### `Readonly` data

• **data**: *object*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:13](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L13)*

#### Type declaration:

* **activeBranch**: *boolean*

* **activeItem**: *boolean*

* **anchorHeight**: *number*

* **element**: *HTMLElement*

* **elementHeight**? : *undefined | number*

* **hierarchyLevel**: *number*

* **items**: *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

* **latestIntersected**: *boolean*

## Methods

###  activate

▸ **activate**(`isCurrent?`: undefined | false | true): *void*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:25](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`isCurrent?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  addItems

▸ **addItems**(`items`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *void*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:29](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |

**Returns:** *void*

___

###  getElement

▸ **getElement**(): *Option‹HTMLElement›*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:33](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L33)*

**Returns:** *Option‹HTMLElement›*

___

###  getElementDataActiveBranch

▸ **getElementDataActiveBranch**(): *boolean*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:37](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L37)*

**Returns:** *boolean*

___

###  getElementDataActiveItem

▸ **getElementDataActiveItem**(): *boolean*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:41](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L41)*

**Returns:** *boolean*

___

###  getElementDataAnchorHeight

▸ **getElementDataAnchorHeight**(): *Option‹number›*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:45](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L45)*

**Returns:** *Option‹number›*

___

###  getElementDataHierarcyLevel

▸ **getElementDataHierarcyLevel**(): *Option‹number›*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:49](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L49)*

**Returns:** *Option‹number›*

___

###  getElementDataId

▸ **getElementDataId**(): *Option‹string›*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:53](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L53)*

**Returns:** *Option‹string›*

___

###  getElementDataLatestIntersected

▸ **getElementDataLatestIntersected**(): *boolean*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:57](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L57)*

**Returns:** *boolean*

___

###  getElementHeight

▸ **getElementHeight**(`options`: object): *Option‹number›*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:61](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L61)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`anchor?` | undefined &#124; false &#124; true |

**Returns:** *Option‹number›*

___

###  getItems

▸ **getItems**(): *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:81](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L81)*

**Returns:** *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

___

###  getParentItems

▸ **getParentItems**(): *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:85](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L85)*

**Returns:** *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

___

###  getSiblingItems

▸ **getSiblingItems**(): *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:89](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L89)*

**Returns:** *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]*

___

###  getTarget

▸ **getTarget**(): *Option‹Element›*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:93](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L93)*

**Returns:** *Option‹Element›*

___

###  inactivate

▸ **inactivate**(`isCurrent?`: undefined | false | true): *void*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:97](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`isCurrent?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  removeItems

▸ **removeItems**(): *void*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:101](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L101)*

**Returns:** *void*

___

###  setParentItems

▸ **setParentItems**(`items`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *void*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:105](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |

**Returns:** *void*

___

###  setSiblingItems

▸ **setSiblingItems**(`items`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *void*

*Defined in [src/strategies/collapse/collapse-strategy.test.ts:109](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.test.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |

**Returns:** *void*
