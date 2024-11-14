# Instalando o TypeScript

- Primeiramente, instale o NodeJS, ele é o ambiente que vai rodar JavaScript fora do navegador.
- inicie o node package manager: `npm init -y`
- instale o typescript: `npm i -D typescript`

# Transpilando seu código TS para JS

- execute o comando `npx tsc` para transpilar cada arquivo TS no diretório atual
- para mudar a fonte ou o destino da transpilação, procure sobre o `rootDir` e o `outDir`
- para mais informações, use o comando `npx tsc --help` ou consulte a documentação do TypeScript

# Transpilando em tempo real

- execute o comando `npx tsc --watch`
- Lembre de configurar o `rootDir` e o `outDir` no tsconfig.json para que isso funcione
- Adicione no HTML o script do JavaScript gerado no `outDir`.
- Assim, toda mudança salva no arquivo TS será refletida no arquivo JS, que vai rodar no navegador.

## Sugestões

Sugiro darem uma olhada na parte da definição do diretório dos arquivos fonte e do diretório do output, é algo bem útil para a organização do código.

Se ocorrer algum erro sobre nome de variável igual (vai ocorrer se o TS e o JS estiverem no mesmo diretório),
procure separar esses arquivos em diretórios diferentes, e isso vai ser resolvido.

# [Link do formulário de IMC](https://brenopinna.github.io/treinamento-ts/)
