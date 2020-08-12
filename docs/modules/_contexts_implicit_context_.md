[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["contexts/implicit-context"](_contexts_implicit_context_.md)

# Module: "contexts/implicit-context"

## Index

### Interfaces

* [ImplicitContext](../interfaces/_contexts_implicit_context_.implicitcontext.md)

### Variables

* [implicitContext](_contexts_implicit_context_.md#const-implicitcontext)
* [mutationObserverAdaptor](_contexts_implicit_context_.md#const-mutationobserveradaptor)
* [portableDomAdaptor](_contexts_implicit_context_.md#const-portabledomadaptor)
* [tocEntryDomAdaptor](_contexts_implicit_context_.md#const-tocentrydomadaptor)
* [tocEntryService](_contexts_implicit_context_.md#const-tocentryservice)
* [tocListItemAdaptor](_contexts_implicit_context_.md#const-toclistitemadaptor)

## Variables

### `Const` implicitContext

• **implicitContext**: *Context‹[ImplicitContext](../interfaces/_contexts_implicit_context_.implicitcontext.md)›* = createContext<ImplicitContext>({
  buildToc: new BuildToc(
    tocEntryDomAdaptor,
    tocListItemAdaptor,
    tocEntryService
  ),
  getPortable: new GetPortable(portableDomAdaptor),
  observe: new Observe(),
  observeAttribute: new ObserveAttribute(
    mutationObserverAdaptor,
    tocEntryService
  ),
  tocEntryService
})

*Defined in [src/contexts/implicit-context.ts:35](https://github.com/nju33/react-canbetoc/blob/0f1d85b/src/contexts/implicit-context.ts#L35)*

___

### `Const` mutationObserverAdaptor

• **mutationObserverAdaptor**: *[MutationObserverAdaptor](../classes/_interface_mutation_observer_adaptor_.mutationobserveradaptor.md)‹›* = new MutationObserverAdaptor()

*Defined in [src/contexts/implicit-context.ts:33](https://github.com/nju33/react-canbetoc/blob/0f1d85b/src/contexts/implicit-context.ts#L33)*

___

### `Const` portableDomAdaptor

• **portableDomAdaptor**: *[PortableDomAdaptor](../classes/_interface_portable_dom_adaptor_.portabledomadaptor.md)‹›* = new PortableDomAdaptor()

*Defined in [src/contexts/implicit-context.ts:32](https://github.com/nju33/react-canbetoc/blob/0f1d85b/src/contexts/implicit-context.ts#L32)*

___

### `Const` tocEntryDomAdaptor

• **tocEntryDomAdaptor**: *[TocEntryDomAdaptor](../classes/_interface_toc_entry_dom_adaptor_.tocentrydomadaptor.md)‹›* = new TocEntryDomAdaptor()

*Defined in [src/contexts/implicit-context.ts:26](https://github.com/nju33/react-canbetoc/blob/0f1d85b/src/contexts/implicit-context.ts#L26)*

___

### `Const` tocEntryService

• **tocEntryService**: *[TocEntryService](../classes/_entities_toc_entry_service_.tocentryservice.md)‹›* = new TocEntryService(
  tocEntryDomAdaptor,
  tocListItemAdaptor
)

*Defined in [src/contexts/implicit-context.ts:28](https://github.com/nju33/react-canbetoc/blob/0f1d85b/src/contexts/implicit-context.ts#L28)*

___

### `Const` tocListItemAdaptor

• **tocListItemAdaptor**: *[TocListItemAdaptor](../classes/_interface_toc_list_item_adaptor_.toclistitemadaptor.md)‹›* = new TocListItemAdaptor()

*Defined in [src/contexts/implicit-context.ts:27](https://github.com/nju33/react-canbetoc/blob/0f1d85b/src/contexts/implicit-context.ts#L27)*
