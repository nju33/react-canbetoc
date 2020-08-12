[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["entities/mutation-observer-adaptor"](../modules/_entities_mutation_observer_adaptor_.md) › [TraitMutationObserverAdaptor](_entities_mutation_observer_adaptor_.traitmutationobserveradaptor.md)

# Interface: TraitMutationObserverAdaptor

## Hierarchy

* **TraitMutationObserverAdaptor**

## Implemented by

* [MutationObserverAdaptor](../classes/_interface_mutation_observer_adaptor_.mutationobserveradaptor.md)

## Index

### Properties

* [disconnect](_entities_mutation_observer_adaptor_.traitmutationobserveradaptor.md#disconnect)
* [init](_entities_mutation_observer_adaptor_.traitmutationobserveradaptor.md#init)
* [observe](_entities_mutation_observer_adaptor_.traitmutationobserveradaptor.md#observe)

## Properties

###  disconnect

• **disconnect**: *function*

*Defined in [src/entities/mutation-observer-adaptor.ts:2](https://github.com/nju33/react-canbetoc/blob/1769b57/src/entities/mutation-observer-adaptor.ts#L2)*

#### Type declaration:

▸ (`id`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

___

###  init

• **init**: *function*

*Defined in [src/entities/mutation-observer-adaptor.ts:6](https://github.com/nju33/react-canbetoc/blob/1769b57/src/entities/mutation-observer-adaptor.ts#L6)*

Create and initialize a instance of the MutationObserver

#### Type declaration:

▸ (`id`: string, `callback`: MutationCallback): *void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`callback` | MutationCallback |

___

###  observe

• **observe**: *function*

*Defined in [src/entities/mutation-observer-adaptor.ts:7](https://github.com/nju33/react-canbetoc/blob/1769b57/src/entities/mutation-observer-adaptor.ts#L7)*

#### Type declaration:

▸ (`id`: string, `element`: Element): *void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`element` | Element |
