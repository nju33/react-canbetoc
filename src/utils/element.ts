export function isElement(element: Element | null): element is Element {
  return element instanceof Element
}
