# Processo Seletivo - Desenvolvedor(a) Frontend (React + TypeScript)

## Descrição do Projeto

O projeto consiste em criar um sistema que permitirá o cadastro de pacientes e o agendamento de consultas médicas. Abaixo estão as principais especificações do sistema:

### Cadastro de Pacientes

- O sistema deve permitir o cadastro de pacientes com os seguintes dados obrigatórios:
    - CPF
    - Nome
    - Data de Nascimento
    - Sexo

### Agendamento de Consultas

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

## Requisitos para o Candidato

O candidato ideal para esta posição deve possuir:

- Experiência sólida com desenvolvimento frontend utilizando React e TypeScript.
- Conhecimento prático de Formik, Yup.
- Habilidade para resolver problemas e propor soluções eficazes.
- Comprometimento com a qualidade do código, boas práticas de desenvolvimento e cumprimento de prazos.

## Como Participar do Processo Seletivo

Para participar do processo seletivo, siga os passos abaixo:

1. Faça um fork do repositório do projeto no GitHub: [link para o repositório](https://github.com/adasisoftware/processo-seletivo-react-estagio).
2. Desenvolva o sistema seguindo as especificações fornecidas.
3. Ao concluir, envie um pull request com suas alterações para o repositório original.
4. Certifique-se de incluir informações relevantes sobre seu projeto no pull request, como instruções de instalação, uso e quaisquer outras considerações importantes.

Após recebermos seu pull request, analisaremos seu código e entraremos em contato para agendar uma entrevista onde discutiremos mais detalhes sobre o projeto e suas habilidades técnicas.

Agradecemos pelo seu interesse em fazer parte de nossa equipe!

Atenciosamente,

Adasi Software
