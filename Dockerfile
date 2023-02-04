FROM node:18


# Criando diretório de trabalho
RUN mkdir /app
WORKDIR /app

# Copiando arquivos do aplicativo para o container
COPY package.json package-lock.json ./

# Instalando dependências
RUN npm install

# Instalando Angular CLI
RUN npm install -g @angular/cli

# Copiando o resto do código do aplicativo
COPY . .

# Executando o build e teste do aplicativo
RUN ng build 
# Expondo a porta
EXPOSE 4200

# Iniciando o aplicativo
CMD ["npm", "start"]
