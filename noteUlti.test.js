import getNoteFromKey from "./noteLine";
import {test , expect} from 'vitest';

test("si le paso la nota a me pas C4", () =>{
    let note=getNoteFromKey('a')
    expect(note).toBe('C4')
})


test("si le paso la nota A me pas B4", () =>{
    let note=getNoteFromKey('A')
    expect(note).toBe('C4')
})

test("si le paso la nota null me pas  B4", () =>{
    let note=getNoteFromKey(undefined)
    expect(note).toBe()
})

