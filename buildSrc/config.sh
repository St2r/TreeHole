#!/bin/bash
mysql -uroot -e "create database treehole; quit"
mysql -uroot -e "source /mysql/article.sql" 
mysql -uroot -e "source /mysql/user.sql" 
mysql -uroot -e "source /mysql/comment.sql" 
mysql -uroot -e "source /mysql/message.sql" 