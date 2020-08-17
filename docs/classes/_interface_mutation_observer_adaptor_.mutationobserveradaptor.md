[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["interface/mutation-observer-adaptor"](../modules/_interface_mutation_observer_adaptor_.md) › [MutationObserverAdaptor](_interface_mutation_observer_adaptor_.mutationobserveradaptor.md)

# Class: MutationObserverAdaptor

## Hierarchy

* **MutationObserverAdaptor**

## Implements

* [TraitMutationObserverAdaptor](../interfaces/_entities_mutation_observer_adaptor_.traitmutationobserveradaptor.md)

## Index

### Properties

* [#map](_interface_mutation_observer_adaptor_.mutationobserveradaptor.md#private-#map)

### Methods

* [disconnect](_interface_mutation_observer_adaptor_.mutationobserveradaptor.md#disconnect)
* [init](_interface_mutation_observer_adaptor_.mutationobserveradaptor.md#init)
* [observe](_interface_mutation_observer_adaptor_.mutationobserveradaptor.md#observe)

### Object literals

* [mutationObserverInit](_interface_mutation_observer_adaptor_.mutationobserveradaptor.md#static-mutationobserverinit)

## Properties

### `Private` #map

• **#map**: *Map‹string, MutationObserver›* = new Map()

*Defined in [src/interface/mutation-observer-adaptor.ts:7](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/interface/mutation-observer-adaptor.ts#L7)*

## Methods

###  disconnect

▸ **disconnect**(`id`: string): *void*

*Defined in [src/interface/mutation-observer-adaptor.ts:34](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/interface/mutation-observer-adaptor.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *void*

___

###  init

▸ **init**(`id`: string, `callback`: MutationCallback): *void*

*Defined in [src/interface/mutation-observer-adaptor.ts:20](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/interface/mutation-observer-adaptor.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`callback` | MutationCallback |

**Returns:** *void*

___

###  observe

▸ **observe**(`id`: string, `baseElement`: Element): *void*

*Defined in [src/interface/mutation-observer-adaptor.ts:45](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/interface/mutation-observer-adaptor.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`baseElement` | Element |

**Returns:** *void*

## Object literals

### `Static` mutationObserverInit

### ▪ **mutationObserverInit**: *object*

*Defined in [src/interface/mutation-observer-adaptor.ts:9](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/interface/mutation-observer-adaptor.ts#L9)*

###  attributeFilter

• **attributeFilter**: *string[]* = [
      'data-canbetoc-toc-instance-id',
      'data-canbetoc-toc-active-branch',
      'data-canbetoc-toc-active-item'
    ]

*Defined in [src/interface/mutation-observer-adaptor.ts:13](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/interface/mutation-observer-adaptor.ts#L13)*

###  attributes

• **attributes**: *true* = true

*Defined in [src/interface/mutation-observer-adaptor.ts:12](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/interface/mutation-observer-adaptor.ts#L12)*

###  childList

• **childList**: *true* = true

*Defined in [src/interface/mutation-observer-adaptor.ts:11](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/interface/mutation-observer-adaptor.ts#L11)*

###  subtree

• **subtree**: *true* = true

*Defined in [src/interface/mutation-observer-adaptor.ts:10](https://github.com/nju33/react-canbetoc/blob/ee204cb/src/interface/mutation-observer-adaptor.ts#L10)*
