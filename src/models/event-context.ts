import { CanbetocEmitter } from './canbetoc-emitter'

export interface StructCanbetoocEventContext {
  readonly emitters: CanbetocEmitter[]
  readonly firstVisiblingEmitters: CanbetocEmitter
  readonly tocAnchorElements: Element[]
  readonly visiblingEmitters: CanbetocEmitter[]
}
