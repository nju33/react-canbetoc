[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["strategies/collapse/collapse-strategy"](../modules/_strategies_collapse_collapse_strategy_.md) › [CollapseStrategy](_strategies_collapse_collapse_strategy_.collapsestrategy.md)

# Class: CollapseStrategy

## Hierarchy

* **CollapseStrategy**

## Implements

* [TraitStrategy](../interfaces/_strategies_strategy_.traitstrategy.md)

## Index

### Properties

* [delay50](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-readonly-delay50)
* [groupByHierarchyLevel](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-readonly-groupbyhierarchylevel)
* [handle](_strategies_collapse_collapse_strategy_.collapsestrategy.md#readonly-handle)

### Methods

* [construct](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-readonly-construct)
* [getGroupedListByDesc](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-readonly-getgroupedlistbydesc)
* [getRealHeightAsData](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-getrealheightasdata)
* [hardenWithAElementHeight](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-hardenwithaelementheight)
* [isAuto](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-isauto)
* [isDirectlyBelowTheActiveItem](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-isdirectlybelowtheactiveitem)
* [modifyStyle](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-modifystyle)
* [removeDataRealHeightFrom](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-removedatarealheightfrom)
* [setElementHeightToAuto](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-setelementheighttoauto)
* [setElementHeightToCurrentHeight](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-setelementheighttocurrentheight)
* [setElementHeightToTheAnchorHeight](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-setelementheighttotheanchorheight)
* [setRealHeightAsData](_strategies_collapse_collapse_strategy_.collapsestrategy.md#private-setrealheightasdata)

## Properties

### `Private` `Readonly` delay50

• **delay50**: *function* = delay(50)

*Defined in [src/strategies/collapse/collapse-strategy.ts:26](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L26)*

#### Type declaration:

▸ ‹**A**›(`ma`: Task‹A›): *Task‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`ma` | Task‹A› |

___

### `Private` `Readonly` groupByHierarchyLevel

• **groupByHierarchyLevel**: *function* = groupBy((tocEntry: TraitTocEntry) =>
    String((tocEntry.getElementDataHierarcyLevel() as Some<number>).value)
  )

*Defined in [src/strategies/collapse/collapse-strategy.ts:22](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L22)*

#### Type declaration:

▸ ‹**A**›(`as`: Array‹A›): *Record‹string, NonEmptyArray‹A››*

**Type parameters:**

▪ **A**: *B*

**Parameters:**

Name | Type |
------ | ------ |
`as` | Array‹A› |

___

### `Readonly` handle

• **handle**: *throttle‹(Anonymous function)›* = debounce(
    200,
    async (tocEntries: TraitTocEntry[]): Promise<void> => {
      flow(
        this.modifyStyle(tocEntries),
        this.hardenWithAElementHeight(tocEntries)
      )()

      await this.delay50(this.construct(tocEntries))()
    }
  )

*Implementation of [TraitStrategy](../interfaces/_strategies_strategy_.traitstrategy.md).[handle](../interfaces/_strategies_strategy_.traitstrategy.md#handle)*

*Defined in [src/strategies/collapse/collapse-strategy.ts:188](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L188)*

## Methods

### `Private` `Readonly` construct

▸ **construct**(`tocEntries`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *Task‹void›*

*Defined in [src/strategies/collapse/collapse-strategy.ts:158](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`tocEntries` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |

**Returns:** *Task‹void›*

___

### `Private` `Readonly` getGroupedListByDesc

▸ **getGroupedListByDesc**(`tocEntries`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *keyof TraitTocEntry[][]*

*Defined in [src/strategies/collapse/collapse-strategy.ts:28](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`tocEntries` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |

**Returns:** *keyof TraitTocEntry[][]*

___

### `Private` getRealHeightAsData

▸ **getRealHeightAsData**(`element`: Element): *Option‹number›*

*Defined in [src/strategies/collapse/collapse-strategy.ts:90](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

**Returns:** *Option‹number›*

___

### `Private` hardenWithAElementHeight

▸ **hardenWithAElementHeight**(`tocEntries`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *IO‹void›*

*Defined in [src/strategies/collapse/collapse-strategy.ts:122](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`tocEntries` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |

**Returns:** *IO‹void›*

___

### `Private` isAuto

▸ **isAuto**(`value`: string): *boolean*

*Defined in [src/strategies/collapse/collapse-strategy.ts:34](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

### `Private` isDirectlyBelowTheActiveItem

▸ **isDirectlyBelowTheActiveItem**(`entry`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md), `activeItemHierarchyLevel`: number): *boolean*

*Defined in [src/strategies/collapse/collapse-strategy.ts:38](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md) |
`activeItemHierarchyLevel` | number |

**Returns:** *boolean*

___

### `Private` modifyStyle

▸ **modifyStyle**(`tocEntries`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[]): *IO‹void›*

*Defined in [src/strategies/collapse/collapse-strategy.ts:109](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`tocEntries` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)[] |

**Returns:** *IO‹void›*

___

### `Private` removeDataRealHeightFrom

▸ **removeDataRealHeightFrom**(`element`: Element): *void*

*Defined in [src/strategies/collapse/collapse-strategy.ts:105](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

**Returns:** *void*

___

### `Private` setElementHeightToAuto

▸ **setElementHeightToAuto**(`entry`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)): *void*

*Defined in [src/strategies/collapse/collapse-strategy.ts:65](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md) |

**Returns:** *void*

___

### `Private` setElementHeightToCurrentHeight

▸ **setElementHeightToCurrentHeight**(`entry`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)): *void*

*Defined in [src/strategies/collapse/collapse-strategy.ts:74](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md) |

**Returns:** *void*

___

### `Private` setElementHeightToTheAnchorHeight

▸ **setElementHeightToTheAnchorHeight**(`entry`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)): *void*

*Defined in [src/strategies/collapse/collapse-strategy.ts:56](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md) |

**Returns:** *void*

___

### `Private` setRealHeightAsData

▸ **setRealHeightAsData**(`element`: Element, `height`: number): *void*

*Defined in [src/strategies/collapse/collapse-strategy.ts:86](https://github.com/nju33/react-canbetoc/blob/77286e5/src/strategies/collapse/collapse-strategy.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |
`height` | number |

**Returns:** *void*
