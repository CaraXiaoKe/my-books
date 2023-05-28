---
layout: ../../layouts/PostLayout.astro
title: 'ubuntu20.04 mongodb 6.0 安装'
---

1.下载mongodb公钥

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
# 若提示gnupg未安装，执行
sudo apt-get install gnupg
# 安装完成后，再执行第一步骤
```

2.更新apt-get的source-list源文件

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

3.重新加载本地apt-get包

```bash
sudo apt-get update
```

4.安装mongodb

```bash
sudo apt-get install -y mongodb-org
```
