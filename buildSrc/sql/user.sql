create table TreeHole.user
(
    id           varchar(40)                        not null      comment '用户ID'
        primary key,
    sex          int                                null          comment '用户性别',
    username     varchar(25)                        not null      comment '用户名',
    usertype     int      default 0                 not null      comment '用户类型',
    mobile       varchar(24)                        not null      comment '手机号',
    password     varchar(25)                        not null      comment '密码',
    avatar       text                               null          comment '头像',
    email        varchar(24)                        null          comment '邮箱',
    note         text                               null          comment '简介',
    create_time  datetime default CURRENT_TIMESTAMP not null      comment '创建时间',
    modify_time  datetime default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP,
    anonymous_id varchar(40)                        not null
);