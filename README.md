app/:
    应用程序包
static/:
    静态文件如图片、JS文件、样式文件
templates/:
    模版文件

-在html中，动态内容在{{...}}中，{{%...%}}中为控制语句，用jinja2模板引擎解析。
-数据存放在views.py中，不是模板中。

-数据库迁移： 把应用程序数据库的任何改变看作一次迁移。