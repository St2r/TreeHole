# TreeHole

## 目录结构

* server 文件夹为服务端部分，使用了 Spring Boot 框架
* web 文件夹为前端部分，主要使用了 React 框架
* buildSrc 文件夹数据库部分，使用了 Docker

## 服务端设计

服务端应用了 JavaEE 的实践，采用了 controller、entity、mapper、service 四部分，controller 负责直接处理前端的请求，mapper 使用 MyBatis 访存数据库，service 为中间逻辑，调用 mapper 并被 controller 调用，entity 即是项目中使用到的实体。