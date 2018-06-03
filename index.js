const graphqlHTTP = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')

const stripe = require('stripe')(process.env.STRIPE_KEY)

const resolvers = {
  Mutation: {
    charge: async (root, { amount, currency, source }, { stripe }) => {
      try {
        const charge = await stripe.charges.create({
          amount,
          currency,
          source
        })

        return charge
      } catch (e) {
        return e
      }
    }
  }
}

const typeDefs = `
  type Charge {
    id: ID!
  }

  type Mutation {
    charge(amount: Int!, currency: String!, source: String!): Charge
  }

  type Query {
    charge(id: ID!): Charge
  }

  schema {
    mutation: Mutation
    query: Query
  }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = graphqlHTTP({
  schema,
  context: {
    stripe
  },
  graphiql: true
})
