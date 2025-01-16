import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, split } from '@apollo/client/core';
import { provideNamedApollo  } from 'apollo-angular';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';
import { Kind, OperationTypeNode } from 'graphql';
import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';

const token = 'Place your token here';

const authLink = setContext((operation, context) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
}));

const splitLink = (path: string) => split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === Kind.OPERATION_DEFINITION &&
      definition.operation === OperationTypeNode.SUBSCRIPTION
    );
  },
  new GraphQLWsLink(
    createClient({
      url: `ws://${path}`,
      connectionParams: () => ({
        Authorization: `Bearer ${token}`,
      }),
    }),
  ),
  authLink.concat(inject(HttpLink).create({
    uri: `http://${path}`,
  })),
);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideNamedApollo(() => ({
      book: {
        link: splitLink('localhost:5179/graphql'),
        cache: new InMemoryCache(),
      }
    }))
  ]
};
