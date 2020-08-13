[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["entities/toc-builder"](../modules/_entities_toc_builder_.md) › [TraitTocBuilder](_entities_toc_builder_.traittocbuilder.md)

# Interface: TraitTocBuilder

## Hierarchy

* **TraitTocBuilder**

## Implemented by

* [TocBuilder](../classes/_entities_toc_builder_.tocbuilder.md)

## Index

### Properties

* [addElements](_entities_toc_builder_.traittocbuilder.md#addelements)
* [build](_entities_toc_builder_.traittocbuilder.md#build)
* [get](_entities_toc_builder_.traittocbuilder.md#get)
* [getList](_entities_toc_builder_.traittocbuilder.md#getlist)
* [setHierarchy](_entities_toc_builder_.traittocbuilder.md#sethierarchy)

## Properties

###  addElements

• **addElements**: *function*

*Defined in [src/entities/toc-builder.ts:15](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-builder.ts#L15)*

現在の階層の子要素として`elements`を配置

#### Type declaration:

▸ (`elements`: Element[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`elements` | Element[] |

___

###  build

• **build**: *function*

*Defined in [src/entities/toc-builder.ts:16](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-builder.ts#L16)*

#### Type declaration:

▸ (`commands`: [TraitTocBuilderCommand](_entities_toc_builder_command_.traittocbuildercommand.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`commands` | [TraitTocBuilderCommand](_entities_toc_builder_command_.traittocbuildercommand.md)[] |

___

###  get

• **get**: *function*

*Defined in [src/entities/toc-builder.ts:17](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-builder.ts#L17)*

#### Type declaration:

▸ (): *[TraitTocEntry](_entities_toc_entry_.traittocentry.md)*

___

###  getList

• **getList**: *function*

*Defined in [src/entities/toc-builder.ts:18](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-builder.ts#L18)*

#### Type declaration:

▸ (): *[TraitTocEntry](_entities_toc_entry_.traittocentry.md)[]*

___

###  setHierarchy

• **setHierarchy**: *function*

*Defined in [src/entities/toc-builder.ts:24](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-builder.ts#L24)*

階層移動

**`param`** 階層のインデックス値

#### Type declaration:

▸ (`number`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`number` | number |
