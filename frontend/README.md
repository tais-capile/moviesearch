React + Vite

Este template fornece uma configuração mínima para usar React com Vite, incluindo HMR (Hot Module Replacement) e algumas regras de ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

@vitejs/plugin-react
 utiliza Oxc
@vitejs/plugin-react-swc
 utiliza SWC
React Compiler

O React Compiler não está habilitado neste template porque pode impactar o desempenho durante o desenvolvimento e na build do projeto.

Para adicioná-lo, consulte a documentação oficial:
https://react.dev/learn/react-compiler/installation

Expandindo a configuração do ESLint

Se você estiver desenvolvendo uma aplicação para produção, recomendamos usar TypeScript com regras de lint que verificam os tipos.

Confira o template com TypeScript para ver como integrar o TypeScript e o typescript-eslint no seu projeto:
https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts