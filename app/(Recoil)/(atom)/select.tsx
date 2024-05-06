import {atom,selector} from "recoil"

interface selectinterface {
    [key:string]:boolean
}

export const selectAtom = atom({
    key:"selectAtom",
    default:{} as selectinterface
})