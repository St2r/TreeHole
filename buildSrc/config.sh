#!/bin/bash
docker run -d --name treehole_mysql -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes mysql:latest
docker cp ./sql treehole_mysql:/mysql

mysql -uroot -e "create database TreeHole"
mysql -uroot -e "source /mysql/article.sql" 
mysql -uroot -e "source /mysql/user.sql" 
mysql -uroot -e "source /mysql/comment.sql" 
mysql -uroot -e "source /mysql/message.sql" 