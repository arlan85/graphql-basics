const express = require("express")
const { graphqlHTTP: expressGraphQL } = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');
const { rootSchema: schema } = require('./query')
const { authors, books } = require("./data");


const port = 3030
const app = express()

// const schema = new GraphQLSchema ({
//     query: new GraphQLObjectType({
//         name: 'HelloWorld',
//         fields: () =>({
//             message: {
//                 type: GraphQLString,
//                 resolve: () => 'Hello GraphQL'
//             }
//         })
//     })
// })
app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(port, () => { console.log(`Server is running at port ${port}`) })