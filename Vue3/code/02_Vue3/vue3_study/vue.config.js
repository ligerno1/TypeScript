// 防止 /sockjs-node/info 请求报错，导致热更新失败
devServer: {
    proxy: 'http://localhost:8080';
    public: '192.168.1.212:8080';
    port: 8080
}