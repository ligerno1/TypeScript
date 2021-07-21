// 类型断言

export {}

// 假定这个 nums 来自一个明确的接口
const nums = [110, 120, 119, 112]

const res = nums.find(i => i > 0)

// const square = res * res

// 断言方式1 as
const num1 = res as number

// 断言方式2 <> JSX 下不能使用
const num2 = <number>res 