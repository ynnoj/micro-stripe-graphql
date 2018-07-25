# micro-stripe-graphql

> 💳 Create Stripe charges with GraphQL

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/ynnoj/micro-stripe-graphql&env=STRIPE_KEY)

Simple GraphQL endpoint for creating [Stripe](https://stripe.com/) charges.

```gql
mutation {
  charge(amount: 100, currency: "GBP", source: "tok_visa") {
    id
  }
}
```
