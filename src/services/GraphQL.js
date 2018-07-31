import ApolloClient from 'apollo-boost'

const uri = 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex'

const GraphQL = new ApolloClient({
  uri,
  fetchOptions: {
    credentials: 'include',
  },
})

export default GraphQL
