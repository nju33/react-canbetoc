import { CanbetocEmitter } from './canbetoc-emitter'

export interface StructCanbetoocEventContext {
  /**
   * All emitters
   */
  readonly emitters: CanbetocEmitter[]
  readonly firstVisiblingEmitter: CanbetocEmitter
  /**
   * All anchor elements on the table of contents
   */
  readonly tocAnchorElements: Element[]
  /**
   * Some emitters that is visible
   */
  readonly visiblingEmitters: CanbetocEmitter[]
}
