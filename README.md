# Desafio React com TypeScript e Styled Components usando Vite

## 📝 Descrição do Desafio

Neste desafio, você deve criar um e-commerce funcional utilizando React com TypeScript e Styled Components. O objetivo é estilizar uma tela principal e consumir uma API gratuita para listar os produtos.

### Funcionalidades Esperadas:

1. Listar produtos de uma API gratuita.
2. Exibir os detalhes básicos de cada produto (nome, preço, imagem, etc.).
3. Criar uma interface estilizada usando `styled-components`.
4. Criar um carrinho simples para adicionar ou remover produtos utilizando o local storage.

## Sinta-se a vontade para manipular os arquivos da forma que melhor for conveniente!

## 🛠 Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Styled Components
- Fetch (para consumo da API)
- Yarn (gerenciador de pacotes)

---

## 🚀 Passo a Passo

### 1️⃣ Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com/getting-started/install)

Para verificar se tudo está configurado corretamente:

```bash
node -v  # Versão do Node.js
yarn -v  # Versão do Yarn
```

---

### 2️⃣ Configuração Inicial

1. Clone este repositório:

   ```bash
   git clone https://github.com/papelzinho/react-challenge.git
   cd react-challenge
   ```

2. Instale as dependências:

   ```bash
   yarn
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   yarn run dev
   ```

4. Acesse no navegador:
   ```
   http://localhost:5173
   ```

---

## 📜 Estrutura do Projeto

Organizamos o projeto da seguinte forma:

```
desafio-ecommerce/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   └── Cart.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── CartPage.tsx
│   ├── services/
│   │   └── api.ts
│   ├── styles/
│   │   └── globalStyles.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── Main.tsx
├── package.json
├── yarn.lock
├── README.md
└── ...
```

---

## 📝 Checklist de Funcionalidades

- [x] Consumir a API [Fake Store API](https://fakestoreapi.com/).
- [x] Listar produtos na página inicial.
- [x] Estilizar a interface usando `styled-components`.
- [x] Adicionar funcionalidade de carrinho básico utilizando o local storage.

---

## 🛠 Dependências Instaladas

As seguintes dependências já estão configuradas no arquivo `package.json`:

- React
- Vite
- TypeScript
- Styled Components
- Fetch

Você só precisa rodar `yarn` para instalar tudo!

---

## 📜 Notas

- Documentação do React: [https://react.dev/](https://react.dev/)
- Documentação do Styled Components: [https://styled-components.com/](https://styled-components.com/)
- Documentação da API: [https://fakestoreapi.com/](https://fakestoreapi.com/)

---

## 🤝 Como Contribuir

1. Faça um fork do repositório:

   ```bash
   git clone https://github.com/seu-usuario/react-challenge.git
   ```

2. Crie uma branch para a sua funcionalidade ou correção:

   ```bash
   git checkout -b minha-feature
   ```

3. Faça as alterações desejadas e adicione os arquivos modificados:

   ```bash
   git add .
   ```

4. Faça um commit com uma mensagem clara sobre a alteração:

   ```bash
   git commit -m "Adiciona funcionalidade de exibição de detalhes do produto"
   ```

5. Envie as alterações para o seu repositório forkado:

   ```bash
   git push origin minha-feature
   ```

6. Abra um Pull Request (PR) no repositório principal. Na descrição do PR, ponha o seu nome e explique detalhadamente as mudanças realizadas.

   Ex: [Tadeu Filho] - Utilizei a API para construir um e-commerce onde o valor...

---

### 💡 Dicas para um Pull Request bem-sucedido:

- Verifique se suas alterações estão consistentes com o padrão do projeto.
- Teste seu código localmente para evitar erros.
- Adicione comentários no PR se houver trechos de código complexos.
- Mantenha suas alterações limitadas à funcionalidade proposta na sua branch.

Com essas dicas, seu Pull Request será mais claro e fácil de revisar!
