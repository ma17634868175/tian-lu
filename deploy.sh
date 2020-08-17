###
 # @Author: marx
 # @Date: 2020-06-27 21:47:36
 # @LastEditTime: 2020-08-17 19:24:16
 # @Description: 组件描述
 # @FilePath: /robo-advisor/Users/marx/Downloads/GitHub/tian-lu/deploy.sh
### 

#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init


git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:mingzheMa/mingzheMa.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mingzheMa/tian-lu.git master


cd -