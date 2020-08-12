[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["interface/toc-entry-dom-adaptor"](../modules/_interface_toc_entry_dom_adaptor_.md) › [TocEntryDomAdaptor](_interface_toc_entry_dom_adaptor_.tocentrydomadaptor.md)

# Class: TocEntryDomAdaptor

## Hierarchy

* **TocEntryDomAdaptor**

## Implements

* [TraitTocEntryDomAdaptor](../interfaces/_entities_toc_entry_dom_adaptor_.traittocentrydomadaptor.md)

## Index

### Methods

* [findElementById](_interface_toc_entry_dom_adaptor_.tocentrydomadaptor.md#findelementbyid)
* [findTargetById](_interface_toc_entry_dom_adaptor_.tocentrydomadaptor.md#findtargetbyid)
* [getDataCanbetocTocActiveBranchFrom](_interface_toc_entry_dom_adaptor_.tocentrydomadaptor.md#getdatacanbetoctocactivebranchfrom)
* [getDataCanbetocTocActiveItemFrom](_interface_toc_entry_dom_adaptor_.tocentrydomadaptor.md#getdatacanbetoctocactiveitemfrom)
* [getHierarchyLevelFrom](_interface_toc_entry_dom_adaptor_.tocentrydomadaptor.md#gethierarchylevelfrom)
* [getIdFrom](_interface_toc_entry_dom_adaptor_.tocentrydomadaptor.md#getidfrom)
* [update](_interface_toc_entry_dom_adaptor_.tocentrydomadaptor.md#update)

## Methods

###  findElementById

▸ **findElementById**(`id`: string): *Option‹HTMLElement›*

*Defined in [src/interface/toc-entry-dom-adaptor.ts:6](https://github.com/nju33/react-canbetoc/blob/1769b57/src/interface/toc-entry-dom-adaptor.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Option‹HTMLElement›*

___

###  findTargetById

▸ **findTargetById**(`id`: string): *Option‹HTMLElement›*

*Defined in [src/interface/toc-entry-dom-adaptor.ts:65](https://github.com/nju33/react-canbetoc/blob/1769b57/src/interface/toc-entry-dom-adaptor.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Option‹HTMLElement›*

___

###  getDataCanbetocTocActiveBranchFrom

▸ **getDataCanbetocTocActiveBranchFrom**(`element`: Element): *boolean*

*Defined in [src/interface/toc-entry-dom-adaptor.ts:12](https://github.com/nju33/react-canbetoc/blob/1769b57/src/interface/toc-entry-dom-adaptor.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

**Returns:** *boolean*

___

###  getDataCanbetocTocActiveItemFrom

▸ **getDataCanbetocTocActiveItemFrom**(`element`: Element): *boolean*

*Defined in [src/interface/toc-entry-dom-adaptor.ts:24](https://github.com/nju33/react-canbetoc/blob/1769b57/src/interface/toc-entry-dom-adaptor.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

**Returns:** *boolean*

___

###  getHierarchyLevelFrom

▸ **getHierarchyLevelFrom**(`element`: Element): *Option‹number›*

*Defined in [src/interface/toc-entry-dom-adaptor.ts:36](https://github.com/nju33/react-canbetoc/blob/1769b57/src/interface/toc-entry-dom-adaptor.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

**Returns:** *Option‹number›*

___

###  getIdFrom

▸ **getIdFrom**(`element`: Element): *Option‹string›*

*Defined in [src/interface/toc-entry-dom-adaptor.ts:55](https://github.com/nju33/react-canbetoc/blob/1769b57/src/interface/toc-entry-dom-adaptor.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

**Returns:** *Option‹string›*

___

###  update

▸ **update**(`element`: Element, `data`: object): *void*

*Defined in [src/interface/toc-entry-dom-adaptor.ts:69](https://github.com/nju33/react-canbetoc/blob/1769b57/src/interface/toc-entry-dom-adaptor.ts#L69)*

**Parameters:**

▪ **element**: *Element*

▪ **data**: *object*

Name | Type |
------ | ------ |
`activeBranch?` | undefined &#124; false &#124; true |
`activeItem?` | undefined &#124; false &#124; true |

**Returns:** *void*
