# Micro service graphql endpoint

## Execution

Make sure to start the two sub-graph applications first, then the gatway. Otherwise the gateway won't be able to fetch schemas from the sub-graphs.

```sh
cd patients-application && npm run start
```

```sh
cd users-application && npm run start
```

```sh
cd auth-application && npm run start
```

```sh
cd gateway && npm run start
```

## Access the graph
You can reach the gateway under `http://localhost:3000/`

## Next Steps in project
- [ ] Resolve field user in auth-app
- [ ] add Helmet
- [ ] check email and password regex
- [ ] santize functions
