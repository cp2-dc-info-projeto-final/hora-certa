# Hora Certa – Sistema de Agendamento de Serviços e Notificações

**Projeto Final 2025 do Curso Técnico Integrado de Desenvolvimento de Sistemas - Colégio Pedro II - Campus Duque de Caxias**

## Integrantes
- Erick Mikael Alhadas Santos (@mikaodayaka)

## Tecnologias
Este projeto é desenvolvido utilizando Node.js com Express para o backend, SvelteKit como framework frontend e Tailwind como framework CSS.

- **Backend (API)**: gerencia cadastro de usuários, login, agendamentos e envio de notificações.
- **Frontend (Aplicação SvelteKit)**: fornece interface intuitiva para clientes e prestadores interagirem com o sistema.
- **Comunicação**: todas as requisições entre frontend e backend são realizadas via HTTP utilizando o formato JSON.

Para detalhes técnicos de como executar o projeto consulte:
- [README da API](src/api/README.md)  
- [README da Aplicação Frontend](src/frontend-app/README.md)

## Descrição do Projeto
O **Hora Certa** é um sistema voltado para gerenciamento de agendamentos entre clientes e prestadores de serviços. Permite que clientes busquem prestadores disponíveis, agendem horários, recebam confirmações e notificações. Prestadores podem confirmar, recusar ou sugerir novos horários, além de gerenciar seus compromissos. O sistema garante uma interface simples e intuitiva, com autenticação segura e suporte a múltiplos acessos simultâneos.

Principais funcionalidades:
- Cadastro de clientes e prestadores (RF01)
- Login de clientes e prestadores (RF02)
- Busca de prestadores ou serviços disponíveis (RF03)
- Agendamento de horários (RF04)
- Confirmação, recusa ou sugestão de novos horários por prestadores (RF05)
- Cancelamento de agendamentos (RF06)
- Notificações sobre agendamentos, confirmações e cancelamentos (RF07)

## Documentação
- [Manual do Usuário](manual.md)  
- [Requisitos](requisitos.md)  
- [Casos de Uso](casos-de-uso.md)  
- [Apresentação](apresentacao.pdf)  

## Modelagem do Banco de Dados
![Diagrama de Banco de Dados](diagramas/diagrama-exemplo.png)
