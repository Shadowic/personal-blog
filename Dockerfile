# Используем официальный образ Node.js на Alpine (меньше размер)
FROM node:20-alpine

# Устанавливаем системные зависимости (если нужны)
RUN apk add --no-cache python3 make g++

# Создаем и переходим в рабочую директорию
WORKDIR /app

# Копируем только файлы зависимостей для кэширования
COPY package.json package-lock.json ./

# Устанавливаем зависимости (чистая установка)
RUN npm ci --legacy-peer-deps

# Копируем остальные файлы проекта
COPY . .

# Собираем приложение
RUN npm run build-only

# Указываем порт
EXPOSE 3000

# Запускаем preview сервер
CMD ["npm", "run", "preview"]
