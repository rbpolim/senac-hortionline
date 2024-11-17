![MacBook Air - 2](https://github.com/user-attachments/assets/8c1cba4f-7897-4f19-bcf7-341cab5170e1)

## Projeto Integrador Hortionline

Somos uma plataforma que conecta pessoas interessadas em legumes e vegetais frescos e orgânicos com produtores locais. Nosso site permite que produtores criem perfis e compartilhem seus produtos, promovendo uma alimentação saudável e sustentável e facilitando o acesso a alimentos de qualidade e procedência confiável.

## Estrutura do Projeto

- [Modelo de Dados](https://github.com/rbpolim/senac-hortionline/tree/main/docs/der)
- [Telas de navegação Protótipo](https://github.com/rbpolim/senac-hortionline/tree/main/docs/prototype)
- [Demo - Hortionline](https://senac-hortionline.vercel.app)

## Caso de uso

- O usuário pode se cadastrar no aplicativo e adicionar seus produtos orgânicos
- O usuário pode buscar e localizar produtores orgânicos.
- O usuário pode pesquisar e encontrar produtos orgânicos disponíveis.
- O usuário pode entrar em contato com os produtores orgânicos diretamente pelo WhatsApp.
- O usuário pode visualizar informações detalhadas sobre os produtores orgânicos
- O usuário pode alternar entre os temas claro (light) e escuro (dark).

## Arquitetura de Desenvolvimento

- **Frontend**: Construído com **React** e **Next.js**, escolhidos por sua eficiência e pela funcionalidade de *API Routes*.  
- **Linguagem**: Utilização de **TypeScript** para tipagem estática e maior segurança no código.  
- **Estilização**: Implementado com **TailwindCSS**, garantindo agilidade e customização nas interfaces.  
- **Componentes**: Utilizamos o **ShadCN** para acelerar o desenvolvimento com componentes pré-projetados.  
- **Dados no MVP**: Dados estáticos foram mockados utilizando **json-server**, que funciona a partir de um arquivo `.json`, ideal para validação de funcionalidades rápidas nesta etapa inicial.  

## Colaboradores

- [Rodrigo Polim](https://github.com/rbpolim)
- [Samuel](https://github.com/radagoon)
- [Vanessa](https://github.com/Van02tavares)
- [Vitor](https://github.com/victort89)
- [Yuki](https://github.com/yukitnak)

## Iniciando o Servidor Mock (Backend)

Este projeto utiliza o `json-server` para simular uma API de backend. Para iniciar o servidor mock, você deve rodar o seguinte script:

```bash
npm run server
```

## Features

O projeto usa os seguintes recursos:

- Tema light e dark para melhorar a experiência do usuário.
- Responsividade para dispositivos móveis e desktop.
- Padronização de commits (feat/fix/chore/style/docs).
- Json-server para simular uma API REST.
- TailwindCSS para estilização dos componentes.
- Shadcn/ui para componentes de interface.
- NextJS para renderização do lado do servidor.

## Techs Stacks

- TypeScript
- NextJS
- TailwindCSS
- Shadcn/ui
