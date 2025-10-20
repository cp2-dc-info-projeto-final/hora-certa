# Documento de Casos de Uso

## Lista dos Casos de Uso

- [CDU 01](#cdu-01-cadastrar-se-no-sistema): Cadastrar-se no sistema
- [CDU 02](#cdu-02-fazer-login-no-sistema): Fazer login no sistema
- [CDU 03](#cdu-03-buscar-prestador-servico): Buscar prestador/serviço
- [CDU 04](#cdu-04-agendar-horario): Agendar horário
- [CDU 05](#cdu-05-confirmar-recusar-agendamento): Confirmar/Recusar agendamento
- [CDU 06](#cdu-06-cancelar-agendamento): Cancelar agendamento

## Lista dos Atores

- Cliente  
- Prestador de serviço  
- Administrador  

## Diagrama de Casos de Uso

![Diagrama de Casos de Uso](diagramas/image.png)

## Descrição dos Casos de Uso

### CDU 01 – Cadastrar-se no sistema

**Descrição:** O usuário (cliente ou prestador) realiza seu cadastro no sistema.

#### Atores

1. Cliente  
2. Prestador  

#### ○ Fluxos Principais dos Casos de Uso
1. Usuário acessa a tela de cadastro.  
2. Usuário informa dados obrigatórios: nome, e-mail, senha e tipo de perfil.  
3. Sistema valida as informações inseridas.  
4. Sistema confirma o cadastro e disponibiliza acesso ao sistema.

#### ○ Fluxos Alternativos de Casos de Uso
A1. Dados inválidos → Sistema informa erro e solicita correção.  

---

### CDU 02 – Fazer login no sistema

**Descrição:** O usuário acessa sua conta no sistema.

#### Atores

1. Cliente  
2. Prestador  

#### ○ Fluxos Principais dos Casos de Uso
1. Usuário acessa a tela de login.  
2. Usuário informa e-mail e senha.  
3. Sistema valida as credenciais.  
4. Sistema libera acesso ao painel correspondente (cliente ou prestador).

#### ○ Fluxos Alternativos de Casos de Uso
A1. Senha incorreta → Sistema informa erro e permite nova tentativa.  
A2. Usuário não cadastrado → Sistema informa que é necessário realizar cadastro.  

---

### CDU 03 – Buscar prestador/serviço

**Descrição:** O cliente busca prestadores de serviços disponíveis.

#### Atores

1. Cliente  

#### ○ Fluxos Principais dos Casos de Uso
1. Cliente acessa a tela de busca.  
2. Cliente informa serviço ou nome do prestador.  
3. Sistema apresenta lista de prestadores compatíveis.  
4. Cliente visualiza disponibilidade dos prestadores listados.

#### ○ Fluxos Alternativos de Casos de Uso
A1. Nenhum prestador encontrado → Sistema exibe mensagem "nenhum resultado encontrado".  

---

### CDU 04 – Agendar horário

**Descrição:** O cliente agenda um serviço com um prestador.

#### Atores

1. Cliente  
2. Prestador  

#### ○ Fluxos Principais dos Casos de Uso
1. Cliente seleciona prestador e serviço desejado.  
2. Sistema apresenta horários disponíveis do prestador.  
3. Cliente escolhe horário e confirma agendamento.  
4. Sistema registra o agendamento como "Pendente".  
5. Sistema envia notificação ao prestador sobre o novo agendamento.

#### ○ Fluxos Alternativos de Casos de Uso
A1. Horário indisponível → Sistema sugere novos horários disponíveis.  

---

### CDU 05 – Confirmar/Recusar agendamento

**Descrição:** O prestador confirma ou recusa o agendamento solicitado.

#### Atores

1. Prestador  

#### ○ Fluxos Principais dos Casos de Uso
1. Prestador acessa a lista de agendamentos pendentes.  
2. Prestador seleciona o agendamento desejado.  
3. Prestador confirma ou recusa o agendamento.  
4. Sistema atualiza o status do agendamento e notifica o cliente.

#### ○ Fluxos Alternativos de Casos de Uso
A1. Prestador sugere novo horário → Cliente pode aceitar ou recusar a sugestão.  

---

### CDU 06 – Cancelar agendamento

**Descrição:** Cliente ou prestador pode cancelar agendamento confirmado.

#### Atores

1. Cliente  
2. Prestador  

#### ○ Fluxos Principais dos Casos de Uso
1. Usuário (cliente ou prestador) acessa o agendamento.  
2. Usuário solicita cancelamento.  
3. Sistema remove reserva e libera o horário para outros clientes.  
4. Sistema notifica o outro usuário sobre o cancelamento.

#### ○ Fluxos Alternativos de Casos de Uso
A1. Cancelamento fora do prazo permitido → Sistema informa regras (ex.: multa).  
