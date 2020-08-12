[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["entities/toc-entry-service"](../modules/_entities_toc_entry_service_.md) › [TraitTocEntryService](_entities_toc_entry_service_.traittocentryservice.md)

# Interface: TraitTocEntryService

## Hierarchy

* **TraitTocEntryService**

## Implemented by

* [TocEntryService](../classes/_entities_toc_entry_service_.tocentryservice.md)

## Index

### Properties

* [convertToDaoFrom](_entities_toc_entry_service_.traittocentryservice.md#converttodaofrom)
* [getInstance](_entities_toc_entry_service_.traittocentryservice.md#getinstance)

## Properties

###  convertToDaoFrom

• **convertToDaoFrom**: *function*

*Defined in [src/entities/toc-entry-service.ts:9](https://github.com/nju33/react-canbetoc/blob/d80673d/src/entities/toc-entry-service.ts#L9)*

#### Type declaration:

▸ (`tocEntry`: [TraitTocEntry](_entities_toc_entry_.traittocentry.md)): *[TraitTocEntryDao](_entities_toc_entry_dao_.traittocentrydao.md)*

**Parameters:**

Name | Type |
------ | ------ |
`tocEntry` | [TraitTocEntry](_entities_toc_entry_.traittocentry.md) |

___

###  getInstance

• **getInstance**: *function*

*Defined in [src/entities/toc-entry-service.ts:13](https://github.com/nju33/react-canbetoc/blob/d80673d/src/entities/toc-entry-service.ts#L13)*

TocEntry を作成か、既存の物を取得

#### Type declaration:

▸ (`id`: Option‹string›): *Option‹[TraitTocEntry](_entities_toc_entry_.traittocentry.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Option‹string› |
