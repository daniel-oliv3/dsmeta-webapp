## Spring React.
### 1 - Front-end estático.
- Criar projeto, repositório no Github, Layout, componentes React, DatePicker, React Hook, useState.

## Ferramentas.
## NodeJS.
- NodeJS - https://nodejs.org/en/

**Ou**

## Yarn.
**Yarn, globalmente.**
``` 
npm install --global yarn
```

## Visual Studio Code.
- Site - https://code.visualstudio.com/

**Extenções** 
- VSCode
  - `IntelliCode`
  - `ESLint`
  - `JSX HTML <tags/>`

## Spring Tools (STS).
- Site - https://spring.io/tools


## Passo: Criar o projeto ReactJS.

![DevSuperior no Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/sds/pastas-dsmeta.png)


**Vite.JS**
- ViteJS - https://vitejs.dev/guide/
```
 yarn create vite frontend --template react-ts
```

## Dependências do projeto.
**Instalando o node_modules**

```
yarn
```

**Roda o projeto.**
```
npm run dev
```

**Ou**
```
yarn dev
```

## Passo: Criar o projeto Spring Boot.
**Criar projeto Spring Boot no Spring Initializr com as seguintes depenências.**
- Spring Initializr
  - `Web`
  - `JPA`
  - `H2`
  - `Security`

## Spring Initializr.
- Site - https://start.spring.io/


**Ajuste no arquivo pom.xml**
```xml
 <plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-resources-plugin</artifactId>
	<version>3.1.0</version><!--$NO-MVN-MAN-VER$ -->
 </plugin>
```

**- Botão direito no projeto -> Maven -> Update project (force update)**


## Passo: Salvar primeira versão no Github.
**Gitbub.**
```bash
git init
git add .
git commit -m "my_project"
git branch -M main
git remote add origen git@github.com: https://github.com/dsmeta-webapp
git push -u origin main
```

## Passo: "limpar" o projeto ReactJS.
**Vamos pegar o CSS que fizemos nas aulas de preparação:**

```
https://github.com/daniel-oliv3/dsmeta-website/blob/main/css/style.css
```

## Passo: React DataPicker.
**Github React DataPicker**
- Documentação: https://github.com/Hacker0x01/react-datepicker

```
yarn add react-datepicker@4.8.0 @types/react-datepicker@4.4.2
```

```
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
```

```
<DatePicker
    selected={new Date()}
    onChange={(date: Date) => {}}
    className="dsmeta-form-control"
    dateFormat="dd/MM/yyyy"
/>
```

## Passo: React Hook useState para manter estado das datas.
**Macete para criar uma data de X dias atrás:**

```
const date = new Date(new Date().setDate(new Date().getDate() - 365));
```


### 2 - Back-end.
- Entidades, banco de dados, database seed, listagem de dados, API REST, integração com SMS.

- Back-end
  - `Implementar o back end`
  - `Acesso a banco de dados`
  - `Criar endpoints da API REST`
  - `Integração com SMS`
  - `Implantação na nuvem`

## Ferramentas.
- Downloads
  - `Postman` - https://www.postman.com/ 
  - `Heroku Cli` - https://devcenter.heroku.com/articles/heroku-cli

**Verificando a instalação do heroku no prompt de comando**
```
heroku -v
```

## Passo: configuração de segurança.

```java
import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
		http.headers().frameOptions().disable();
		http.cors().and().csrf().disable();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.authorizeHttpRequests((auth) -> auth.anyRequest().permitAll());

		return http.build();
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
		configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}
}
```

## Passo: banco de dados.
- Criar entidade Sale
- Fazer mapeamento objeto-relacional (JPA)
- Configurar dados de conexão do banco de dados H2
- Fazer seed do banco de dados


### 3 - Integração e implementação.
- Integração front-end e back-end, requisições com Axios, React Hook, useEffect, parâmetros de consulta, implementação na nuvem.


##

![Parabéns!](https://raw.githubusercontent.com/devsuperior/bds-assets/main/img/trophy.png)

##

- By:  **Daniel Oliveira**

  - `Instagram` - https://www.instagram.com/danieloliv3/
  - `Facebook` - https://web.facebook.com/danielsapup3/
  - `Twitter` - https://twitter.com/danielsapup3/
  - `Linkedin` - https://www.linkedin.com/in/danielsapup3/
