// 枚举 （enum）

export {}

// 没有枚举类型时，使用对象模拟枚举
// const PostStatus = {
//     Draft: 1,
//     Unpublished: 2,
//     Published: 3
// }

// 枚举，指定值
// enum PostStatus {
//     Draft = 1,
//     Unpublished = 2,
//     Published = 3
// }

// 枚举，自增值，默认从0开始或者从已知的固定数字开始
// enum PostStatus {
//     Draft = 4,
//     Unpublished,
//     Published
// }

// 枚举采用引用方式调用
// enum PostStatus {
//     Draft,
//     Unpublished,
//     Published
// }

// 枚举用const 声明，可以改成常量方式调用
const enum PostStatus {
    Draft,
    Unpublished,
    Published
}

const post = {
    title: 'Hello TypeScript',
    content: 'TypeScript is a typed superset of JavaScript.',
    status: PostStatus.Draft // 1 || 2 || 3
}