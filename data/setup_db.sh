#!/bin/bash

mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DATABASE < creation.sql
mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DATABASE < data.sql