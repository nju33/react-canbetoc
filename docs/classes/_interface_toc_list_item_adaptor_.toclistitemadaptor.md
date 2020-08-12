[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["interface/toc-list-item-adaptor"](../modules/_interface_toc_list_item_adaptor_.md) › [TocListItemAdaptor](_interface_toc_list_item_adaptor_.toclistitemadaptor.md)

# Class: TocListItemAdaptor

## Hierarchy

* **TocListItemAdaptor**

## Implements

* [TraitTocListItemAdaptor](../interfaces/_entities_toc_list_item_adaptor_.traittoclistitemadaptor.md)

## Index

### Properties

* [calcHeight](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#private-readonly-calcheight)
* [mapStringToNullableNumber](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#mapstringtonullablenumber)

### Methods

* [getActiveBranch](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#getactivebranch)
* [getActiveItem](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#getactiveitem)
* [getAnchorHeight](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#getanchorheight)
* [getData](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#getdata)
* [getDataInBoolean](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#getdatainboolean)
* [getDataInNumber](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#getdatainnumber)
* [getHeight](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#getheight)
* [getHeightFull](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#getheightfull)
* [getHierarchyLevel](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#gethierarchylevel)
* [getId](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#getid)
* [getLatestIntersected](_interface_toc_list_item_adaptor_.toclistitemadaptor.md#getlatestintersected)

## Properties

### `Private` `Readonly` calcHeight

• **calcHeight**: *function* = reduce(0, (acc, element: Element) => {
    acc += element.clientHeight

    return acc
  })

*Defined in [src/interface/toc-list-item-adaptor.ts:96](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L96)*

#### Type declaration:

▸ (`fa`: ReadonlyArray‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`fa` | ReadonlyArray‹A› |

___

###  mapStringToNullableNumber

• **mapStringToNullableNumber**: *function* = mapNullable((value) => {
    const number = Number(value)
    if (isNaN(number)) {
      return null
    }

    return number
  })

*Defined in [src/interface/toc-list-item-adaptor.ts:23](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L23)*

#### Type declaration:

▸ (`optionString`: Option‹string›): *Option‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`optionString` | Option‹string› |

## Methods

###  getActiveBranch

▸ **getActiveBranch**(`element`: Option‹HTMLElement›): *boolean*

*Defined in [src/interface/toc-list-item-adaptor.ts:84](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Option‹HTMLElement› |

**Returns:** *boolean*

___

###  getActiveItem

▸ **getActiveItem**(`element`: Option‹HTMLElement›): *boolean*

*Defined in [src/interface/toc-list-item-adaptor.ts:88](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Option‹HTMLElement› |

**Returns:** *boolean*

___

###  getAnchorHeight

▸ **getAnchorHeight**(`element`: Option‹HTMLElement›): *Option‹number›*

*Defined in [src/interface/toc-list-item-adaptor.ts:92](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Option‹HTMLElement› |

**Returns:** *Option‹number›*

___

###  getData

▸ **getData**(`optionElement`: Option‹HTMLElement›, `attrName`: string): *Option‹string›*

*Defined in [src/interface/toc-list-item-adaptor.ts:72](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`optionElement` | Option‹HTMLElement› |
`attrName` | string |

**Returns:** *Option‹string›*

___

###  getDataInBoolean

▸ **getDataInBoolean**(`optionElement`: Option‹HTMLElement›, `attrName`: string): *boolean*

*Defined in [src/interface/toc-list-item-adaptor.ts:34](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`optionElement` | Option‹HTMLElement› |
`attrName` | string |

**Returns:** *boolean*

___

###  getDataInNumber

▸ **getDataInNumber**(`optionElement`: Option‹HTMLElement›, `attrName`: string): *Option‹number›*

*Defined in [src/interface/toc-list-item-adaptor.ts:57](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`optionElement` | Option‹HTMLElement› |
`attrName` | string |

**Returns:** *Option‹number›*

___

###  getHeight

▸ **getHeight**(`optionElement`: Option‹HTMLElement›, `__namedParameters`: object): *Option‹number›*

*Defined in [src/interface/toc-list-item-adaptor.ts:102](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L102)*

**Parameters:**

▪ **optionElement**: *Option‹HTMLElement›*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`anchor` | boolean |

**Returns:** *Option‹number›*

___

###  getHeightFull

▸ **getHeightFull**(`optionElement`: Option‹HTMLElement›): *Option‹number›*

*Defined in [src/interface/toc-list-item-adaptor.ts:150](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`optionElement` | Option‹HTMLElement› |

**Returns:** *Option‹number›*

___

###  getHierarchyLevel

▸ **getHierarchyLevel**(`element`: Option‹HTMLElement›): *Option‹number›*

*Defined in [src/interface/toc-list-item-adaptor.ts:182](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L182)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Option‹HTMLElement› |

**Returns:** *Option‹number›*

___

###  getId

▸ **getId**(`optionElement`: Option‹HTMLElement›): *Option‹string›*

*Defined in [src/interface/toc-list-item-adaptor.ts:186](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L186)*

**Parameters:**

Name | Type |
------ | ------ |
`optionElement` | Option‹HTMLElement› |

**Returns:** *Option‹string›*

___

###  getLatestIntersected

▸ **getLatestIntersected**(`element`: Option‹HTMLElement›): *boolean*

*Defined in [src/interface/toc-list-item-adaptor.ts:196](https://github.com/nju33/react-canbetoc/blob/a20943a/src/interface/toc-list-item-adaptor.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Option‹HTMLElement› |

**Returns:** *boolean*
