create table treehole.article
(
    id          bigint auto_increment
        primary key,
    title       text                               not null,
    content     text                               not null,
    author_id   varchar(40)                        not null,
    is_private  int                                not null,
    username    varchar(25)                        not null,
    create_time datetime default CURRENT_TIMESTAMP not null,
    modify_time datetime default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP
)