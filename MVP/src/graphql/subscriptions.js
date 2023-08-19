/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlogModel = /* GraphQL */ `
  subscription OnCreateBlogModel(
    $filter: ModelSubscriptionBlogModelFilterInput
  ) {
    onCreateBlogModel(filter: $filter) {
      id
      title
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateBlogModel = /* GraphQL */ `
  subscription OnUpdateBlogModel(
    $filter: ModelSubscriptionBlogModelFilterInput
  ) {
    onUpdateBlogModel(filter: $filter) {
      id
      title
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteBlogModel = /* GraphQL */ `
  subscription OnDeleteBlogModel(
    $filter: ModelSubscriptionBlogModelFilterInput
  ) {
    onDeleteBlogModel(filter: $filter) {
      id
      title
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      name
      description
      styles
      Products {
        nextToken
        startedAt
        __typename
      }
      images
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      name
      description
      styles
      Products {
        nextToken
        startedAt
        __typename
      }
      images
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      name
      description
      styles
      Products {
        nextToken
        startedAt
        __typename
      }
      images
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      name
      description
      price
      style
      categoryID
      current_stock
      image
      rating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      name
      description
      price
      style
      categoryID
      current_stock
      image
      rating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      name
      description
      price
      style
      categoryID
      current_stock
      image
      rating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUserModel = /* GraphQL */ `
  subscription OnCreateUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onCreateUserModel(filter: $filter) {
      id
      name
      phone
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUserModel = /* GraphQL */ `
  subscription OnUpdateUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onUpdateUserModel(filter: $filter) {
      id
      name
      phone
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUserModel = /* GraphQL */ `
  subscription OnDeleteUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onDeleteUserModel(filter: $filter) {
      id
      name
      phone
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
