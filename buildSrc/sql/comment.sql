create table TreeHole.comment
(
    id          bigint auto_increment
        primary key,
    content     text                               not null,
    author_id   varchar(40)                        not null,
    create_time datetime default CURRENT_TIMESTAMP not null,
    father_id   bigint                             not null,
    com_type    int                                not null,
    username    varchar(25)                        null
);