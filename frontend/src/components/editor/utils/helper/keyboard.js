const KEY_CODE = {
    ESC: 27,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    B: 66,
    I: 73,
    H: 72,
    U: 85,
    D: 68,
    M: 77,
    Q: 81,
    O: 79,
    L: 76,
    S: 83,
    Z: 90,
    Y: 89,
    C: 67,
    T: 84,
    R: 82,
    DELETE: 8,
    TAB: 9,
    ENTER: 13,
    ONE: 97,
    TWO: 98,
    THREE: 99,
    FOUR: 100,
    FIVE: 101,
    SIX: 102,
    _ONE: 49,
    _TWO: 50,
    _THREE: 51,
    _FOUR: 52,
    _FIVE: 53,
    _SIX: 54
  }
  
  export default (e, func) => {
      if (!(e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
        switch (e.keyCode) {
          case KEY_CODE.TAB: {
            e.preventDefault()
            func('tab')
            break
          }
          case KEY_CODE.ESC: {
            e.preventDefault()
            func('esc')
            break
          }
          default: {
            return
          }
        }
      } else if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
        // ctrl +
        switch (e.keyCode) {
          case KEY_CODE.Z: {
            // Z
            e.preventDefault()
            func('undo')
            break
          }
          case KEY_CODE.Y: {
            // Y
            e.preventDefault()
            func('redo')
            break
          }
          case KEY_CODE.B: {
            // Z
            e.preventDefault()
            func('bold')
            break
          }
          case KEY_CODE.I: {
            // Y
            e.preventDefault()
            func('italic')
            break
          }
          // case KEY_CODE.U: {
          //   // Y
          //   e.preventDefault()
          //   func('underline')
          //   break
          // }
          default: {
            return
          }
        }
      }
  }
  