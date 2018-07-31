import { gql } from 'apollo-boost'

export const allUsers = gql`
  query {
    allUsers {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`
