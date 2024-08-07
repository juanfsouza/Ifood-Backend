<div align="center">
    
# IFOOD PLATAFORM

![Screenshot_4](https://github.com/user-attachments/assets/d9c7aa41-e9e7-41ca-a7f1-b8ebcf578d9e)

</div>

## Decisões Tomadas
- **NestJS:** Utilizado por sua arquitetura modular e suporte a TypeScript.
- **Prisma:** Utilizado para ORM devido à sua facilidade de uso e integração com PostgreSQL.

### Pré-requisitos
- Node.js
- PostgreSQL

## Class validator & Class transformer
Validação: Usar class-validator é ideal para validação de dados de entrada, como em DTOs (Data Transfer Objects), para garantir que os dados recebidos atendem aos critérios desejados.
Transformação: Usar class-transformer é útil para converter dados entre formatos e instâncias de classes, especialmente quando você está lidando com entradas de usuários ou dados de APIs externas.

## No que ajuda?
Instalar essas bibliotecas é uma boa prática em projetos onde a validação e a transformação de dados são necessárias. Elas são muito usadas em aplicações que seguem boas práticas de desenvolvimento e ajudam a manter o código limpo e gerenciável.
Essas ferramentas são especialmente úteis em projetos que utilizam NestJS para lidar com validações e transformações de dados de forma eficiente e organizada.

## Configuração e Execução do Projeto
### Configuração
1. Clone o repositório:
    ```sh
    git clone https://github.com/juanfsouza/Ifood-Backend.git
    cd Ifood-Backend
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Opcional Configure as variáveis de ambiente:
- Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
    ```
    DATABASE_URL="sua_string_de_conexao_do_postgresql"
    ```

4. Execute as migrações do banco de dados:
    ```sh
    npx prisma migrate dev
    ```

5. Inicie o servidor:
    ```sh
    npm run start:dev
    ```

## Utilização da API

### Cadastro de Producers
- **Endpoint:** `POST /producers`
- **Exemplo de Requisição:**
    ```json
    {
      "name": "Joice Pizza",
      "email": "joicepizza@example.com",
      "password": "password"
    }
    ```
- **Endpoint:** `PUT /producers/{id}`
- **Exemplo de Requisição:**
    ```json
    {
      "name": "Joice Updated",
      "email": "joiceupdated@example.com",
      "password": "password"
    }
    ```
- **Endpoint:** `DELETE /producers/{id}`

### Cadastro de Customers
- **Endpoint:** `POST /customers`
- **Exemplo de Requisição:**
    ```json
    {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "password": "anothersecurepassword"
    }
    ```
- **Endpoint:** `PUT /customers/{id}`
- **Exemplo de Requisição:**
    ```json
    {
      "name": "Jane Smith Updated",
      "email": "jane.smith.updated@example.com",
      "password": "newsecurepassword"
    }
    ```
- **Endpoint:** `DELETE /customers/{id}`

### Cadastro de Products
- **Endpoint:** `POST /products`
- **Exemplo de Requisição:**
    ```json
    {
      "name": "Product Name",
      "description": "Product Description",
      "price": 150,
      "producerId": 2
    }
    ```
- **Endpoint:** `PUT /products/{id}`
- **Exemplo de Requisição:**
    ```json
    {
      "name": "Updated Product Name",
      "description": "Updated Product Description",
      "price": 150
    }
    ```
- **Endpoint:** `DELETE /products/{id}`

### Cadastro de Producers
- **Endpoint:** `POST /products`
- **Exemplo de Requisição:**
    ```json
    {
      "name": "Product Name",
      "description": "Product Description",
      "price": 150,
      "producerId": 2
    }
    ```
- **Endpoint:** `PUT /products/{id}`
- **Exemplo de Requisição:**
    ```json
    {
      "name": "Updated Product Name",
      "description": "Updated Product Description",
      "price": 150
    }
    ```
- **Endpoint:** `DELETE /products/{id}`

### Cadastro de Orders
- **Endpoint:** `POST /orders`
- **Exemplo de Requisição:**
    ```json
    {
      "customerId": 2,
      "productIds": [2, 3]
    }
    ```
- **Endpoint:** `PUT /orders/{id}`
- **Exemplo de Requisição:**
    ```json
    {
      "customerId": 2,
      "productIds": [2, 4]
    }
    ```
- **Endpoint:** `DELETE /orders/{id}`

### Cadastro de Coupons
- **Endpoint:** `POST /coupons`
- **Exemplo de Requisição:**
    ```json
    {
      "code": "Coupon get 10.00 off",
      "discount": 10.00,
      "expiresAt": "2024-08-21T00:00:00Z",
      "productId": 3
    }
    ```
- **Endpoint:** `PUT /coupons/{id}`
- **Exemplo de Requisição:**
    ```json
    {
      "discount": 15.00
    }
    ```
- **Endpoint:** `DELETE /coupons/{id}`

### Cadastro de Establishments
- **Endpoint:** `POST /establishments`
- **Exemplo de Requisição:**
    ```json
    {
      "name": "Nome do Estabelecimento",
      "street": "Rua Exemplo, 123",
      "city": "Cidade Exemplo",
      "state": "Estado Exemplo",
      "producerId": 2
    }
    ```
- **Endpoint:** `PUT /establishments/{id}`
- **Exemplo de Requisição:**
    ```json
    {
      "name": "Novo Nome do Estabelecimento",
      "street": "Nova Rua Exemplo, 456",
      "city": "Nova Cidade Exemplo",
      "state": "Novo Estado Exemplo",
      "producerId": 1
    }
    ```
- **Endpoint:** `DELETE /establishments/{id}`

## Teste com Jest foram implementados em todas rotas.

![Screenshot_4](https://github.com/user-attachments/assets/ba4fa252-46a4-4763-9229-dfb257e42302)

## Considerações Finais
- **Qualidade do Código:** Segui boas práticas de programação, incluindo Clean Code e Clean Architecture.
- **Documentação:** Esta documentação cobre todas as funcionalidades e explica como configurar e utilizar a API.
- **Api:** Essa api foi desenvolvida com intesão de criar algo parecido com sistema do ifood

## INSOMNIA - json com todos endpoints prontos
- ** Link: https://drive.google.com/file/d/1LVyjG_YIAy-C4z3b_XhH239YlaXCxQHC/view?usp=sharing

## SWAGGER
- ** Link: http://localhost:3000/api#/
