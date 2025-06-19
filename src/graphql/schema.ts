import { gql } from 'apollo-angular';

export const typeDefs = gql`
    type DataResponse {
        products: [Product!]!
        total: Int!
        skip: Int!
        limit: Int!
    }

    type Product {
        id: ID!
        title: String!
        description: String!
        category: String!
        price: Float!
        discountPercentage: Float!
        rating: Float!
        stock: Int!
        tags: [String!]!
        brand: String
        sku: String!
        weight: Float!
        dimensions: Dimensions!
        warrantyInformation: String!
        shippingInformation: String!
        availabilityStatus: String!
        reviews: [Review!]!
        returnPolicy: String!
        minimumOrderQuantity: Int!
        meta: Meta!
        images: [String!]!
        thumbnail: String!
    }

    type Dimensions {
        width: Float!
        height: Float!
        depth: Float!
    }

    type Meta {
        createdAt: String!
        updatedAt: String!
        barcode: String!
        qrCode: String!
    }

    type Review {
        rating: Float!
        comment: String!
        date: String!
        reviewerName: String!
        reviewerEmail: String!
    }

    type Query {
        dataResponse: DataResponse!
    }
`;