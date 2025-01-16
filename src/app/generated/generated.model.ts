import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  UUID: { input: any; output: any; }
};

/** Defines when a policy shall be executed. */
export enum ApplyPolicy {
  /** After the resolver was executed. */
  AfterResolver = 'AFTER_RESOLVER',
  /** Before the resolver was executed. */
  BeforeResolver = 'BEFORE_RESOLVER',
  /** The policy is applied in the validation step before the execution. */
  Validation = 'VALIDATION'
}

export type Book = {
  __typename?: 'Book';
  id: Scalars['UUID']['output'];
};

export type Query = {
  __typename?: 'Query';
  book: Book;
};

export type Subscription = {
  __typename?: 'Subscription';
  onBookRecieved: Book;
};

export type BookQueryVariables = Exact<{ [key: string]: never; }>;


export type BookQuery = { __typename?: 'Query', book: { __typename?: 'Book', id: any } };

export type OnBookRecievedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnBookRecievedSubscription = { __typename?: 'Subscription', onBookRecieved: { __typename?: 'Book', id: any } };

export const BookDocument = gql`
    query Book {
  book {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BookGQL extends Apollo.Query<BookQuery, BookQueryVariables> {
    document = BookDocument;
    override client = 'book';
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OnBookRecievedDocument = gql`
    subscription OnBookRecieved {
  onBookRecieved {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OnBookRecievedGQL extends Apollo.Subscription<OnBookRecievedSubscription, OnBookRecievedSubscriptionVariables> {
    document = OnBookRecievedDocument;
    override client = 'book';
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }