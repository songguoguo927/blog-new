1,博客功能分析
2，技术选型，（核心模块第三方模块及中间件）
3，项目初始化及各种依赖包的安装
4，项目目录结构-项目创建
5, 模板引擎的配置和使用
6, 静态文件托管
用户发送http请求 -》URL -》解析路由 -》找到匹配的规则 -》执行指定的绑定函数，返回对应内容至客户端（用户）
/public -》静态 -》直接读取指定目录下的文件，返回给用户
/ （or）其他-》动态 -》处理业务逻辑，加载模块，解析模板 -》返回数据给用户

7，划分模块

res.send()
res.render()

被这两个搞半天，以为报错【想shi】，原来是我瞎，唉！不能这样，下次看仔细OK

8，数据库的连接安装
首先本地安装MongoDB，并启动服务
再进行连接
