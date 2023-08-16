# 使用一个基础镜像，这里以 Node.js 为例
FROM node:14-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件并安装依赖
COPY package*.json ./
RUN npm install

# 复制应用代码到工作目录
COPY . .

# 构建 React 应用
RUN npm run build

# 暴露容器的端口
EXPOSE 80

# 启动应用
CMD ["npm", "start"]
