## Spring React.
### 1 - Front-end estático.
- Criar projeto, repositório no Github, Layout, componentes React, DatePicker, React Hook, useState.

## Ferramentas.
## NodeJS.
- NodeJS - https://nodejs.org/en/

#### Ou

## Yarn.
#### Yarn, globalmente.
``` 
npm install --global yarn
```

## Visual Studio Code.
- Site - https://code.visualstudio.com/

#### Extenções 
- VSCode
  - `IntelliCode`
  - `ESLint`
  - `JSX HTML <tags/>`

## Spring Tools (STS).
- Site - https://spring.io/tools


## Passo: Criar o projeto ReactJS.
#### ViteJS.
- ViteJS - https://vitejs.dev/guide/
```
 yarn create vite frontend --template react-ts
```

#### Dependências do projeto.
- Instalando o node_modules

```
yarn
```

#### Roda o projeto.
```
npm run dev
```

**Ou**
```
yarn dev
```

## Passo: Criar o projeto Spring Boot.
#### Criar projeto Spring Boot no Spring Initializr com as seguintes depenências.
- Web
- JPA
- H2
- Security

## Spring Initializr
- Site - https://start.spring.io/


#### Ajuste no arquivo pom.xml
```xml
 <plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-resources-plugin</artifactId>
	<version>3.1.0</version><!--$NO-MVN-MAN-VER$ -->
 </plugin>
```

- Botão direito no projeto -> Maven -> Update project (force update)


## Passo: Salvar primeira versão no Github.
#### Gitbub.
```bash
- git init
- git add .
- git commit -m "my_project"
- git branch -M main
- git remote add origen git@github.com: https://github.com/dsmeta-webapp
- git push -u origin main
```

## Passo: "limpar" o projeto ReactJS
#### Vamos pegar o CSS que fizemos nas aulas de preparação:

```
https://github.com/daniel-oliv3/dsmeta-css
```


```
```

### 2 - Back-end.
- Entidades, banco de dados, database seed, listagem de dados, API REST, integração com SMS.

### 3 - Integração e implementação.
- Integração front-end e back-end, requisições com Axios, React Hook, useEffect, parâmetros de consulta, implementação na nuvem.


- By:  **Daniel Oliveira**