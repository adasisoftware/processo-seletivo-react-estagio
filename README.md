# Sistema de cadastro de pacientes e agendamento de consultas

## Instruções para rodar o projeto localmente:

1. Instale o NodeJS em sua máquina;
2. Faça o clone do repositório;
3. Digite o comando `cd ./processo-seletivo-react-estagio` no terminal;
4. Abra dois terminais nesta pasta, um para entrar na pasta 'server' e outro na 'client';
5. Em um, digite `cd ./server` e em outro, `cd ./client`;
6. Na raiz da pasta 'server', adicione o arquivo '.env' necessário;
7. No terminal do servidor, digite os seguintes comandos:

```bash
npm install

npm start
```

8. No terminal do cliente, digite os seguintes comandos:

```bash
npm install

npm run build

npm run preview
```

9. Entre na url http://localhost:4173/

## Descrição do Projeto

O projeto consiste em um sistema que permitirá o cadastro de pacientes e o agendamento de consultas médicas. Abaixo estão as principais especificações do sistema:

### 1. Cadastro de Pacientes:

- O sistema deve permitir o cadastro de pacientes com os seguintes dados obrigatórios:
    - CPF
    - Nome
    - Data de Nascimento
    - Sexo

### 2. Agendamento de Consultas:

- O sistema deve apresentar uma tela de agendamento que mostrará os agendamentos do mês atual, com a capacidade de navegar entre os meses.
- O agendamento será feito por meio de um modal que solicitará informações como data, hora, paciente e tipo de consulta (Consulta em Cardiologia ou Consulta em Clínica Médica).
- As regras de disponibilidade para agendamento são as seguintes:
    - Consulta em Cardiologia: Segundas-feiras (dia todo), Quartas-feiras (das 8h às 12h) e Sextas-feiras (das 14h às 18h).
    - Consulta em Clínica Médica: Terças-feiras (dia todo) e Quintas-feiras (das 9h às 13h).
- Não é permitido agendar duas consultas no mesmo horário.
- Não é permitido agendamento duplicado para o mesmo paciente no mesmo dia e para o mesmo tipo de consulta.
- O intervalo entre cada agendamento deve ser de 30 minutos.

## Tecnologias Utilizadas

O sistema será desenvolvido utilizando as seguintes tecnologias:

- **Frontend**: React com TypeScript.
- **Formulários**: Formik para gerenciamento de formulários.
- **Validação de Dados**: Yup para validação de dados.
- **Componentes de Tabela**: React Data Table Components para exibição de dados tabulares.

## Observações:

Projeto desenvolvido exclusivamente para a candidatura à vaga de estagiário da Adasi Software.