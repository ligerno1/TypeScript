// 元组 (Tuple)

export {}

const tuple: [number, string] = [18, '十八']

// 方法一
// const age = tuple[0]
// const name = tuple[1]

// 方法二

const [age, name] = tuple

// ----------------------

Object.entries({
    foo: 123,
    bar: 456
})