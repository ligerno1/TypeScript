// 可选成员、只读成员、动态成员

export {}

// ----------------------------

interface Post {
    title: string
    content: string
    subtitle?: string  // 可选成员
    readonly summary: string  // 只读成员
}

const hello: Post = {
    title: 'Hello TypeScript',
    content: 'A javascript superset',
    summary: 'A javascript'
}

// ------------------------------

// 动态成员

interface Cache {
    [prop: string]: string
}

const cache: Cache = {}

cache.foo = 'value1'
cache.bar = 'value2'