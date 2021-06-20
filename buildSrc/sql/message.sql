create table treehole.message
(
    id              bigint auto_increment
        primary key,
    target_user_id  varchar(40)                        not null,
    create_time     datetime default CURRENT_TIMESTAMP not null,
    msg_status      int      default 1                 not null,
    content         text                               not null,
    msg_type        int                                not null
    father_id       bigint                             not null,
);