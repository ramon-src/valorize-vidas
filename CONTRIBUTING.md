# Contribuição

Sugestões e pull request são sempre bem vindos!

## Fluxo de trabalho

Faça um fork do projeto original para que você possa trabalhar em um repositório próprio.

Feito isto, vamos clonar o projeto:

```sh
git clone https://github.com/seu-usuario/valorize-vidas.git
cd valorize-vidas
npm install
```

## Fluxo de versionamento

Utilizamos o padrão de versionamento sugerido pelo Git Flow. Você pode obter mais informações
sobre o Git Flow [neste artigo](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04) do Medium.

**Obs: Para facilitar sua gestão de branchs, recomenda-se o uso de um plugin git fornecido pela [Nvie](https://github.com/nvie/gitflow/wiki/Installation)**

## Trabalhe sua feature baseado na branch 'develop' conforme sugere o fluxo de Git Flow.

### Caso **esteja** utilizando o plugin da Nvie

```
git flow feature start nome-da-feature
```

Após finalizado sua feature, finalize sua feature.

```
git flow feature finish
```

Feito isto, basta enviar suas alteração para o seu fork e fazer o pull request para o projeto oficial.

### Caso **não** esteja utilizando o plugin da Nvie

```
git fetch origin develop && git checkout develop
git checkout -b feature/minha-feature

```

Após finalizado sua feature, mescle as informações na branch develop :

```
git checkout develop && git merge feature/mminha-feature
```

Feito isto, faça o push das alterações e envie seu fork para o projeto oficial.

## Como adicionar minhas informações de contribuição no README.md ?

Para adicionar suas informações de contribuição no README.md, basta utilizar o comando:

```
yarn contributors:add
```

Feito isto, será feita algumas perguntas respectivas as suas contribuições, marque a que
achar mais coerente.

Após isto, faça o envio da contribuição para o seu fork e enviei o pull request para o projeto oficial.
