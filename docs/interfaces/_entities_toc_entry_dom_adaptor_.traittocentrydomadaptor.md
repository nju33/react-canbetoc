[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["entities/toc-entry-dom-adaptor"](../modules/_entities_toc_entry_dom_adaptor_.md) › [TraitTocEntryDomAdaptor](_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md)

# Interface: TraitTocEntryDomAdaptor

## Hierarchy

* **TraitTocEntryDomAdaptor**

## Implemented by

* [TocEntryDomAdaptor](../classes/_interface_toc_entry_dom_adaptor_.tocentrydomadaptor.md)

## Index

### Properties

* [findElementById](_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md#findelementbyid)
* [findTargetById](_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md#findtargetbyid)
* [getDataCanbetocTocActiveBranchFrom](_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md#getdatacanbetoctocactivebranchfrom)
* [getDataCanbetocTocActiveItemFrom](_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md#getdatacanbetoctocactiveitemfrom)
* [getHierarchyLevelFrom](_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md#gethierarchylevelfrom)
* [getIdFrom](_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md#getidfrom)
* [update](_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md#update)

## Properties

###  findElementById

• **findElementById**: *function*

*Defined in [src/entities/toc-entry-dom-adaptor.ts:10](https://github.com/nju33/react-canbetoc/blob/a20943a/src/entities/toc-entry-dom-adaptor.ts#L10)*

#### Type declaration:

▸ (`id`: string): *Option‹HTMLElement›*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

___

###  findTargetById

• **findTargetById**: *function*

*Defined in [src/entities/toc-entry-dom-adaptor.ts:12](https://github.com/nju33/react-canbetoc/blob/a20943a/src/entities/toc-entry-dom-adaptor.ts#L12)*

#### Type declaration:

▸ (`id`: string): *Option‹HTMLElement›*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

___

###  getDataCanbetocTocActiveBranchFrom

• **getDataCanbetocTocActiveBranchFrom**: *function*

*Defined in [src/entities/toc-entry-dom-adaptor.ts:14](https://github.com/nju33/react-canbetoc/blob/a20943a/src/entities/toc-entry-dom-adaptor.ts#L14)*

#### Type declaration:

▸ (`element`: Element): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

___

###  getDataCanbetocTocActiveItemFrom

• **getDataCanbetocTocActiveItemFrom**: *function*

*Defined in [src/entities/toc-entry-dom-adaptor.ts:16](https://github.com/nju33/react-canbetoc/blob/a20943a/src/entities/toc-entry-dom-adaptor.ts#L16)*

#### Type declaration:

▸ (`element`: Element): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

___

###  getHierarchyLevelFrom

• **getHierarchyLevelFrom**: *function*

*Defined in [src/entities/toc-entry-dom-adaptor.ts:18](https://github.com/nju33/react-canbetoc/blob/a20943a/src/entities/toc-entry-dom-adaptor.ts#L18)*

#### Type declaration:

▸ (`element`: Element): *Option‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

___

###  getIdFrom

• **getIdFrom**: *function*

*Defined in [src/entities/toc-entry-dom-adaptor.ts:20](https://github.com/nju33/react-canbetoc/blob/a20943a/src/entities/toc-entry-dom-adaptor.ts#L20)*

#### Type declaration:

▸ (`element`: Element): *Option‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

___

###  update

• **update**: *function*

*Defined in [src/entities/toc-entry-dom-adaptor.ts:22](https://github.com/nju33/react-canbetoc/blob/a20943a/src/entities/toc-entry-dom-adaptor.ts#L22)*

#### Type declaration:

▸ (`element`: Element, `data`: Partial‹[TocEntryAttributeTypes](_entities_toc_entry_dom_adaptor_.tocentryattributetypes.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |
`data` | Partial‹[TocEntryAttributeTypes](_entities_toc_entry_dom_adaptor_.tocentryattributetypes.md)› |
