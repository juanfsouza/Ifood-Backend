<div align="center">
    
# Ifood Plataform


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
- **Endpoint:** `DELETE /users/{id}`


![Screenshot_4](https://github.com/user-attachments/assets/ba4fa252-46a4-4763-9229-dfb257e42302)
