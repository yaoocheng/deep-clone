import { type } from "./type.js";

export function clone(target) {
    if (type(target) === 'array') {
        const arr = [];
        target.forEach(ele => {
            arr.push(clone(ele));
        });
        return arr;
    } else if(type(target) === 'object') {
        const obj = {};
        for (const key in target) {
            obj[key] = clone(target[key]); 
        }
    }
    return target;
}
