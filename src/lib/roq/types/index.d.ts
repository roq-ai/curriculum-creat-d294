/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model content
 *
 */
export type content = $Result.DefaultSelection<Prisma.$contentPayload>;
/**
 * Model curriculum
 *
 */
export type curriculum = $Result.DefaultSelection<Prisma.$curriculumPayload>;
/**
 * Model institution
 *
 */
export type institution = $Result.DefaultSelection<Prisma.$institutionPayload>;
/**
 * Model proposal
 *
 */
export type proposal = $Result.DefaultSelection<Prisma.$proposalPayload>;
/**
 * Model review
 *
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contents
 * const contents = await prisma.content.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contents
   * const contents = await prisma.content.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **content** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Contents
   * const contents = await prisma.content.findMany()
   * ```
   */
  get content(): Prisma.contentDelegate<ExtArgs>;

  /**
   * `prisma.curriculum`: Exposes CRUD operations for the **curriculum** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Curricula
   * const curricula = await prisma.curriculum.findMany()
   * ```
   */
  get curriculum(): Prisma.curriculumDelegate<ExtArgs>;

  /**
   * `prisma.institution`: Exposes CRUD operations for the **institution** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Institutions
   * const institutions = await prisma.institution.findMany()
   * ```
   */
  get institution(): Prisma.institutionDelegate<ExtArgs>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **proposal** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Proposals
   * const proposals = await prisma.proposal.findMany()
   * ```
   */
  get proposal(): Prisma.proposalDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   */
  get review(): Prisma.reviewDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    content: 'content';
    curriculum: 'curriculum';
    institution: 'institution';
    proposal: 'proposal';
    review: 'review';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'content' | 'curriculum' | 'institution' | 'proposal' | 'review' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      content: {
        payload: Prisma.$contentPayload<ExtArgs>;
        fields: Prisma.contentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.contentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.contentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          findFirst: {
            args: Prisma.contentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.contentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          findMany: {
            args: Prisma.contentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>[];
          };
          create: {
            args: Prisma.contentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          createMany: {
            args: Prisma.contentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.contentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          update: {
            args: Prisma.contentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          deleteMany: {
            args: Prisma.contentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.contentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.contentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateContent>;
          };
          groupBy: {
            args: Prisma.contentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ContentGroupByOutputType>[];
          };
          count: {
            args: Prisma.contentCountArgs<ExtArgs>;
            result: $Utils.Optional<ContentCountAggregateOutputType> | number;
          };
        };
      };
      curriculum: {
        payload: Prisma.$curriculumPayload<ExtArgs>;
        fields: Prisma.curriculumFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.curriculumFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$curriculumPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.curriculumFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$curriculumPayload>;
          };
          findFirst: {
            args: Prisma.curriculumFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$curriculumPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.curriculumFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$curriculumPayload>;
          };
          findMany: {
            args: Prisma.curriculumFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$curriculumPayload>[];
          };
          create: {
            args: Prisma.curriculumCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$curriculumPayload>;
          };
          createMany: {
            args: Prisma.curriculumCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.curriculumDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$curriculumPayload>;
          };
          update: {
            args: Prisma.curriculumUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$curriculumPayload>;
          };
          deleteMany: {
            args: Prisma.curriculumDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.curriculumUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.curriculumUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$curriculumPayload>;
          };
          aggregate: {
            args: Prisma.CurriculumAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCurriculum>;
          };
          groupBy: {
            args: Prisma.curriculumGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CurriculumGroupByOutputType>[];
          };
          count: {
            args: Prisma.curriculumCountArgs<ExtArgs>;
            result: $Utils.Optional<CurriculumCountAggregateOutputType> | number;
          };
        };
      };
      institution: {
        payload: Prisma.$institutionPayload<ExtArgs>;
        fields: Prisma.institutionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.institutionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.institutionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>;
          };
          findFirst: {
            args: Prisma.institutionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.institutionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>;
          };
          findMany: {
            args: Prisma.institutionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>[];
          };
          create: {
            args: Prisma.institutionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>;
          };
          createMany: {
            args: Prisma.institutionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.institutionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>;
          };
          update: {
            args: Prisma.institutionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>;
          };
          deleteMany: {
            args: Prisma.institutionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.institutionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.institutionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>;
          };
          aggregate: {
            args: Prisma.InstitutionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInstitution>;
          };
          groupBy: {
            args: Prisma.institutionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InstitutionGroupByOutputType>[];
          };
          count: {
            args: Prisma.institutionCountArgs<ExtArgs>;
            result: $Utils.Optional<InstitutionCountAggregateOutputType> | number;
          };
        };
      };
      proposal: {
        payload: Prisma.$proposalPayload<ExtArgs>;
        fields: Prisma.proposalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.proposalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.proposalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>;
          };
          findFirst: {
            args: Prisma.proposalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.proposalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>;
          };
          findMany: {
            args: Prisma.proposalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>[];
          };
          create: {
            args: Prisma.proposalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>;
          };
          createMany: {
            args: Prisma.proposalCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.proposalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>;
          };
          update: {
            args: Prisma.proposalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>;
          };
          deleteMany: {
            args: Prisma.proposalDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.proposalUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.proposalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>;
          };
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProposal>;
          };
          groupBy: {
            args: Prisma.proposalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProposalGroupByOutputType>[];
          };
          count: {
            args: Prisma.proposalCountArgs<ExtArgs>;
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number;
          };
        };
      };
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>;
        fields: Prisma.reviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[];
          };
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReview>;
          };
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    proposal: number;
    review: number;
  };

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposal?: boolean | ContentCountOutputTypeCountProposalArgs;
    review?: boolean | ContentCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountProposalArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: proposalWhereInput;
  };

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountReviewArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: reviewWhereInput;
  };

  /**
   * Count Type InstitutionCountOutputType
   */

  export type InstitutionCountOutputType = {
    user: number;
  };

  export type InstitutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InstitutionCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InstitutionCountOutputType
     */
    select?: InstitutionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountUserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: userWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    content: number;
    curriculum: number;
    proposal: number;
    review: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | UserCountOutputTypeCountContentArgs;
    curriculum?: boolean | UserCountOutputTypeCountCurriculumArgs;
    proposal?: boolean | UserCountOutputTypeCountProposalArgs;
    review?: boolean | UserCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: contentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCurriculumArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: curriculumWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: proposalWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null;
    _avg: ContentAvgAggregateOutputType | null;
    _sum: ContentSumAggregateOutputType | null;
    _min: ContentMinAggregateOutputType | null;
    _max: ContentMaxAggregateOutputType | null;
  };

  export type ContentAvgAggregateOutputType = {
    grade_level: number | null;
  };

  export type ContentSumAggregateOutputType = {
    grade_level: number | null;
  };

  export type ContentMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    subject: string | null;
    grade_level: number | null;
    content_type: string | null;
    creator_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ContentMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    subject: string | null;
    grade_level: number | null;
    content_type: string | null;
    creator_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ContentCountAggregateOutputType = {
    id: number;
    title: number;
    subject: number;
    grade_level: number;
    content_type: number;
    creator_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ContentAvgAggregateInputType = {
    grade_level?: true;
  };

  export type ContentSumAggregateInputType = {
    grade_level?: true;
  };

  export type ContentMinAggregateInputType = {
    id?: true;
    title?: true;
    subject?: true;
    grade_level?: true;
    content_type?: true;
    creator_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ContentMaxAggregateInputType = {
    id?: true;
    title?: true;
    subject?: true;
    grade_level?: true;
    content_type?: true;
    creator_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ContentCountAggregateInputType = {
    id?: true;
    title?: true;
    subject?: true;
    grade_level?: true;
    content_type?: true;
    creator_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which content to aggregate.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned contents
     **/
    _count?: true | ContentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ContentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ContentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ContentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ContentMaxAggregateInputType;
  };

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
    [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>;
  };

  export type contentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contentWhereInput;
    orderBy?: contentOrderByWithAggregationInput | contentOrderByWithAggregationInput[];
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum;
    having?: contentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentCountAggregateInputType | true;
    _avg?: ContentAvgAggregateInputType;
    _sum?: ContentSumAggregateInputType;
    _min?: ContentMinAggregateInputType;
    _max?: ContentMaxAggregateInputType;
  };

  export type ContentGroupByOutputType = {
    id: string;
    title: string;
    subject: string;
    grade_level: number | null;
    content_type: string | null;
    creator_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ContentCountAggregateOutputType | null;
    _avg: ContentAvgAggregateOutputType | null;
    _sum: ContentSumAggregateOutputType | null;
    _min: ContentMinAggregateOutputType | null;
    _max: ContentMaxAggregateOutputType | null;
  };

  type GetContentGroupByPayload<T extends contentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ContentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
          : GetScalarType<T[P], ContentGroupByOutputType[P]>;
      }
    >
  >;

  export type contentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      subject?: boolean;
      grade_level?: boolean;
      content_type?: boolean;
      creator_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      proposal?: boolean | content$proposalArgs<ExtArgs>;
      review?: boolean | content$reviewArgs<ExtArgs>;
      _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['content']
  >;

  export type contentSelectScalar = {
    id?: boolean;
    title?: boolean;
    subject?: boolean;
    grade_level?: boolean;
    content_type?: boolean;
    creator_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type contentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    proposal?: boolean | content$proposalArgs<ExtArgs>;
    review?: boolean | content$reviewArgs<ExtArgs>;
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $contentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'content';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      proposal: Prisma.$proposalPayload<ExtArgs>[];
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        subject: string;
        grade_level: number | null;
        content_type: string | null;
        creator_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['content']
    >;
    composites: {};
  };

  type contentGetPayload<S extends boolean | null | undefined | contentDefaultArgs> = $Result.GetResult<
    Prisma.$contentPayload,
    S
  >;

  type contentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    contentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ContentCountAggregateInputType | true;
  };

  export interface contentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['content']; meta: { name: 'content' } };
    /**
     * Find zero or one Content that matches the filter.
     * @param {contentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends contentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, contentFindUniqueArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Content that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {contentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends contentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__contentClient<
      $Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends contentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindFirstArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends contentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     *
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends contentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Content.
     * @param {contentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     *
     **/
    create<T extends contentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, contentCreateArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Contents.
     *     @param {contentCreateManyArgs} args - Arguments to create many Contents.
     *     @example
     *     // Create many Contents
     *     const content = await prisma.content.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends contentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Content.
     * @param {contentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     *
     **/
    delete<T extends contentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, contentDeleteArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Content.
     * @param {contentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends contentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, contentUpdateArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Contents.
     * @param {contentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends contentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends contentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, contentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Content.
     * @param {contentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     **/
    upsert<T extends contentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, contentUpsertArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
     **/
    count<T extends contentCountArgs>(
      args?: Subset<T, contentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ContentAggregateArgs>(
      args: Subset<T, ContentAggregateArgs>,
    ): Prisma.PrismaPromise<GetContentAggregateType<T>>;

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends contentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contentGroupByArgs['orderBy'] }
        : { orderBy?: contentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, contentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the content model
     */
    readonly fields: contentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    proposal<T extends content$proposalArgs<ExtArgs> = {}>(
      args?: Subset<T, content$proposalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends content$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, content$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the content model
   */
  interface contentFieldRefs {
    readonly id: FieldRef<'content', 'String'>;
    readonly title: FieldRef<'content', 'String'>;
    readonly subject: FieldRef<'content', 'String'>;
    readonly grade_level: FieldRef<'content', 'Int'>;
    readonly content_type: FieldRef<'content', 'String'>;
    readonly creator_id: FieldRef<'content', 'String'>;
    readonly created_at: FieldRef<'content', 'DateTime'>;
    readonly updated_at: FieldRef<'content', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * content findUnique
   */
  export type contentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content findUniqueOrThrow
   */
  export type contentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content findFirst
   */
  export type contentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contents.
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * content findFirstOrThrow
   */
  export type contentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contents.
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * content findMany
   */
  export type contentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which contents to fetch.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing contents.
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * content create
   */
  export type contentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * The data needed to create a content.
     */
    data: XOR<contentCreateInput, contentUncheckedCreateInput>;
  };

  /**
   * content createMany
   */
  export type contentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contents.
     */
    data: contentCreateManyInput | contentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * content update
   */
  export type contentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * The data needed to update a content.
     */
    data: XOR<contentUpdateInput, contentUncheckedUpdateInput>;
    /**
     * Choose, which content to update.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content updateMany
   */
  export type contentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contents.
     */
    data: XOR<contentUpdateManyMutationInput, contentUncheckedUpdateManyInput>;
    /**
     * Filter which contents to update
     */
    where?: contentWhereInput;
  };

  /**
   * content upsert
   */
  export type contentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * The filter to search for the content to update in case it exists.
     */
    where: contentWhereUniqueInput;
    /**
     * In case the content found by the `where` argument doesn't exist, create a new content with this data.
     */
    create: XOR<contentCreateInput, contentUncheckedCreateInput>;
    /**
     * In case the content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contentUpdateInput, contentUncheckedUpdateInput>;
  };

  /**
   * content delete
   */
  export type contentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter which content to delete.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content deleteMany
   */
  export type contentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contents to delete
     */
    where?: contentWhereInput;
  };

  /**
   * content.proposal
   */
  export type content$proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    where?: proposalWhereInput;
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[];
    cursor?: proposalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[];
  };

  /**
   * content.review
   */
  export type content$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * content without action
   */
  export type contentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
  };

  /**
   * Model curriculum
   */

  export type AggregateCurriculum = {
    _count: CurriculumCountAggregateOutputType | null;
    _min: CurriculumMinAggregateOutputType | null;
    _max: CurriculumMaxAggregateOutputType | null;
  };

  export type CurriculumMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    admin_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CurriculumMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    admin_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CurriculumCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    admin_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CurriculumMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    admin_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CurriculumMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    admin_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CurriculumCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    admin_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CurriculumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curriculum to aggregate.
     */
    where?: curriculumWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of curricula to fetch.
     */
    orderBy?: curriculumOrderByWithRelationInput | curriculumOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: curriculumWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` curricula from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` curricula.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned curricula
     **/
    _count?: true | CurriculumCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CurriculumMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CurriculumMaxAggregateInputType;
  };

  export type GetCurriculumAggregateType<T extends CurriculumAggregateArgs> = {
    [P in keyof T & keyof AggregateCurriculum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurriculum[P]>
      : GetScalarType<T[P], AggregateCurriculum[P]>;
  };

  export type curriculumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: curriculumWhereInput;
    orderBy?: curriculumOrderByWithAggregationInput | curriculumOrderByWithAggregationInput[];
    by: CurriculumScalarFieldEnum[] | CurriculumScalarFieldEnum;
    having?: curriculumScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CurriculumCountAggregateInputType | true;
    _min?: CurriculumMinAggregateInputType;
    _max?: CurriculumMaxAggregateInputType;
  };

  export type CurriculumGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    admin_id: string;
    created_at: Date;
    updated_at: Date;
    _count: CurriculumCountAggregateOutputType | null;
    _min: CurriculumMinAggregateOutputType | null;
    _max: CurriculumMaxAggregateOutputType | null;
  };

  type GetCurriculumGroupByPayload<T extends curriculumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurriculumGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CurriculumGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CurriculumGroupByOutputType[P]>
          : GetScalarType<T[P], CurriculumGroupByOutputType[P]>;
      }
    >
  >;

  export type curriculumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        admin_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['curriculum']
    >;

  export type curriculumSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    admin_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type curriculumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $curriculumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'curriculum';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        admin_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['curriculum']
    >;
    composites: {};
  };

  type curriculumGetPayload<S extends boolean | null | undefined | curriculumDefaultArgs> = $Result.GetResult<
    Prisma.$curriculumPayload,
    S
  >;

  type curriculumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    curriculumFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CurriculumCountAggregateInputType | true;
  };

  export interface curriculumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['curriculum']; meta: { name: 'curriculum' } };
    /**
     * Find zero or one Curriculum that matches the filter.
     * @param {curriculumFindUniqueArgs} args - Arguments to find a Curriculum
     * @example
     * // Get one Curriculum
     * const curriculum = await prisma.curriculum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends curriculumFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, curriculumFindUniqueArgs<ExtArgs>>,
    ): Prisma__curriculumClient<
      $Result.GetResult<Prisma.$curriculumPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Curriculum that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {curriculumFindUniqueOrThrowArgs} args - Arguments to find a Curriculum
     * @example
     * // Get one Curriculum
     * const curriculum = await prisma.curriculum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends curriculumFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, curriculumFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__curriculumClient<
      $Result.GetResult<Prisma.$curriculumPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Curriculum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curriculumFindFirstArgs} args - Arguments to find a Curriculum
     * @example
     * // Get one Curriculum
     * const curriculum = await prisma.curriculum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends curriculumFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, curriculumFindFirstArgs<ExtArgs>>,
    ): Prisma__curriculumClient<
      $Result.GetResult<Prisma.$curriculumPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Curriculum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curriculumFindFirstOrThrowArgs} args - Arguments to find a Curriculum
     * @example
     * // Get one Curriculum
     * const curriculum = await prisma.curriculum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends curriculumFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, curriculumFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__curriculumClient<
      $Result.GetResult<Prisma.$curriculumPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Curricula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curriculumFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Curricula
     * const curricula = await prisma.curriculum.findMany()
     *
     * // Get first 10 Curricula
     * const curricula = await prisma.curriculum.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const curriculumWithIdOnly = await prisma.curriculum.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends curriculumFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, curriculumFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curriculumPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Curriculum.
     * @param {curriculumCreateArgs} args - Arguments to create a Curriculum.
     * @example
     * // Create one Curriculum
     * const Curriculum = await prisma.curriculum.create({
     *   data: {
     *     // ... data to create a Curriculum
     *   }
     * })
     *
     **/
    create<T extends curriculumCreateArgs<ExtArgs>>(
      args: SelectSubset<T, curriculumCreateArgs<ExtArgs>>,
    ): Prisma__curriculumClient<$Result.GetResult<Prisma.$curriculumPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Curricula.
     *     @param {curriculumCreateManyArgs} args - Arguments to create many Curricula.
     *     @example
     *     // Create many Curricula
     *     const curriculum = await prisma.curriculum.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends curriculumCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, curriculumCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Curriculum.
     * @param {curriculumDeleteArgs} args - Arguments to delete one Curriculum.
     * @example
     * // Delete one Curriculum
     * const Curriculum = await prisma.curriculum.delete({
     *   where: {
     *     // ... filter to delete one Curriculum
     *   }
     * })
     *
     **/
    delete<T extends curriculumDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, curriculumDeleteArgs<ExtArgs>>,
    ): Prisma__curriculumClient<$Result.GetResult<Prisma.$curriculumPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Curriculum.
     * @param {curriculumUpdateArgs} args - Arguments to update one Curriculum.
     * @example
     * // Update one Curriculum
     * const curriculum = await prisma.curriculum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends curriculumUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, curriculumUpdateArgs<ExtArgs>>,
    ): Prisma__curriculumClient<$Result.GetResult<Prisma.$curriculumPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Curricula.
     * @param {curriculumDeleteManyArgs} args - Arguments to filter Curricula to delete.
     * @example
     * // Delete a few Curricula
     * const { count } = await prisma.curriculum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends curriculumDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, curriculumDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Curricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curriculumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Curricula
     * const curriculum = await prisma.curriculum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends curriculumUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, curriculumUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Curriculum.
     * @param {curriculumUpsertArgs} args - Arguments to update or create a Curriculum.
     * @example
     * // Update or create a Curriculum
     * const curriculum = await prisma.curriculum.upsert({
     *   create: {
     *     // ... data to create a Curriculum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curriculum we want to update
     *   }
     * })
     **/
    upsert<T extends curriculumUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, curriculumUpsertArgs<ExtArgs>>,
    ): Prisma__curriculumClient<$Result.GetResult<Prisma.$curriculumPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Curricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curriculumCountArgs} args - Arguments to filter Curricula to count.
     * @example
     * // Count the number of Curricula
     * const count = await prisma.curriculum.count({
     *   where: {
     *     // ... the filter for the Curricula we want to count
     *   }
     * })
     **/
    count<T extends curriculumCountArgs>(
      args?: Subset<T, curriculumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurriculumCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Curriculum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CurriculumAggregateArgs>(
      args: Subset<T, CurriculumAggregateArgs>,
    ): Prisma.PrismaPromise<GetCurriculumAggregateType<T>>;

    /**
     * Group by Curriculum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curriculumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends curriculumGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: curriculumGroupByArgs['orderBy'] }
        : { orderBy?: curriculumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, curriculumGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCurriculumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the curriculum model
     */
    readonly fields: curriculumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for curriculum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__curriculumClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the curriculum model
   */
  interface curriculumFieldRefs {
    readonly id: FieldRef<'curriculum', 'String'>;
    readonly title: FieldRef<'curriculum', 'String'>;
    readonly description: FieldRef<'curriculum', 'String'>;
    readonly admin_id: FieldRef<'curriculum', 'String'>;
    readonly created_at: FieldRef<'curriculum', 'DateTime'>;
    readonly updated_at: FieldRef<'curriculum', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * curriculum findUnique
   */
  export type curriculumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curriculum
     */
    select?: curriculumSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: curriculumInclude<ExtArgs> | null;
    /**
     * Filter, which curriculum to fetch.
     */
    where: curriculumWhereUniqueInput;
  };

  /**
   * curriculum findUniqueOrThrow
   */
  export type curriculumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curriculum
     */
    select?: curriculumSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: curriculumInclude<ExtArgs> | null;
    /**
     * Filter, which curriculum to fetch.
     */
    where: curriculumWhereUniqueInput;
  };

  /**
   * curriculum findFirst
   */
  export type curriculumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curriculum
     */
    select?: curriculumSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: curriculumInclude<ExtArgs> | null;
    /**
     * Filter, which curriculum to fetch.
     */
    where?: curriculumWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of curricula to fetch.
     */
    orderBy?: curriculumOrderByWithRelationInput | curriculumOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for curricula.
     */
    cursor?: curriculumWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` curricula from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` curricula.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of curricula.
     */
    distinct?: CurriculumScalarFieldEnum | CurriculumScalarFieldEnum[];
  };

  /**
   * curriculum findFirstOrThrow
   */
  export type curriculumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curriculum
     */
    select?: curriculumSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: curriculumInclude<ExtArgs> | null;
    /**
     * Filter, which curriculum to fetch.
     */
    where?: curriculumWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of curricula to fetch.
     */
    orderBy?: curriculumOrderByWithRelationInput | curriculumOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for curricula.
     */
    cursor?: curriculumWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` curricula from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` curricula.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of curricula.
     */
    distinct?: CurriculumScalarFieldEnum | CurriculumScalarFieldEnum[];
  };

  /**
   * curriculum findMany
   */
  export type curriculumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curriculum
     */
    select?: curriculumSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: curriculumInclude<ExtArgs> | null;
    /**
     * Filter, which curricula to fetch.
     */
    where?: curriculumWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of curricula to fetch.
     */
    orderBy?: curriculumOrderByWithRelationInput | curriculumOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing curricula.
     */
    cursor?: curriculumWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` curricula from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` curricula.
     */
    skip?: number;
    distinct?: CurriculumScalarFieldEnum | CurriculumScalarFieldEnum[];
  };

  /**
   * curriculum create
   */
  export type curriculumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curriculum
     */
    select?: curriculumSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: curriculumInclude<ExtArgs> | null;
    /**
     * The data needed to create a curriculum.
     */
    data: XOR<curriculumCreateInput, curriculumUncheckedCreateInput>;
  };

  /**
   * curriculum createMany
   */
  export type curriculumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many curricula.
     */
    data: curriculumCreateManyInput | curriculumCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * curriculum update
   */
  export type curriculumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curriculum
     */
    select?: curriculumSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: curriculumInclude<ExtArgs> | null;
    /**
     * The data needed to update a curriculum.
     */
    data: XOR<curriculumUpdateInput, curriculumUncheckedUpdateInput>;
    /**
     * Choose, which curriculum to update.
     */
    where: curriculumWhereUniqueInput;
  };

  /**
   * curriculum updateMany
   */
  export type curriculumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update curricula.
     */
    data: XOR<curriculumUpdateManyMutationInput, curriculumUncheckedUpdateManyInput>;
    /**
     * Filter which curricula to update
     */
    where?: curriculumWhereInput;
  };

  /**
   * curriculum upsert
   */
  export type curriculumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curriculum
     */
    select?: curriculumSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: curriculumInclude<ExtArgs> | null;
    /**
     * The filter to search for the curriculum to update in case it exists.
     */
    where: curriculumWhereUniqueInput;
    /**
     * In case the curriculum found by the `where` argument doesn't exist, create a new curriculum with this data.
     */
    create: XOR<curriculumCreateInput, curriculumUncheckedCreateInput>;
    /**
     * In case the curriculum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<curriculumUpdateInput, curriculumUncheckedUpdateInput>;
  };

  /**
   * curriculum delete
   */
  export type curriculumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curriculum
     */
    select?: curriculumSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: curriculumInclude<ExtArgs> | null;
    /**
     * Filter which curriculum to delete.
     */
    where: curriculumWhereUniqueInput;
  };

  /**
   * curriculum deleteMany
   */
  export type curriculumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curricula to delete
     */
    where?: curriculumWhereInput;
  };

  /**
   * curriculum without action
   */
  export type curriculumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curriculum
     */
    select?: curriculumSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: curriculumInclude<ExtArgs> | null;
  };

  /**
   * Model institution
   */

  export type AggregateInstitution = {
    _count: InstitutionCountAggregateOutputType | null;
    _avg: InstitutionAvgAggregateOutputType | null;
    _sum: InstitutionSumAggregateOutputType | null;
    _min: InstitutionMinAggregateOutputType | null;
    _max: InstitutionMaxAggregateOutputType | null;
  };

  export type InstitutionAvgAggregateOutputType = {
    established_year: number | null;
  };

  export type InstitutionSumAggregateOutputType = {
    established_year: number | null;
  };

  export type InstitutionMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    contact_number: string | null;
    website_url: string | null;
    established_year: number | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InstitutionMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    contact_number: string | null;
    website_url: string | null;
    established_year: number | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InstitutionCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    contact_number: number;
    website_url: number;
    established_year: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type InstitutionAvgAggregateInputType = {
    established_year?: true;
  };

  export type InstitutionSumAggregateInputType = {
    established_year?: true;
  };

  export type InstitutionMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    contact_number?: true;
    website_url?: true;
    established_year?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InstitutionMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    contact_number?: true;
    website_url?: true;
    established_year?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InstitutionCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    contact_number?: true;
    website_url?: true;
    established_year?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type InstitutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which institution to aggregate.
     */
    where?: institutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of institutions to fetch.
     */
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: institutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` institutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` institutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned institutions
     **/
    _count?: true | InstitutionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InstitutionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InstitutionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InstitutionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InstitutionMaxAggregateInputType;
  };

  export type GetInstitutionAggregateType<T extends InstitutionAggregateArgs> = {
    [P in keyof T & keyof AggregateInstitution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitution[P]>
      : GetScalarType<T[P], AggregateInstitution[P]>;
  };

  export type institutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: institutionWhereInput;
    orderBy?: institutionOrderByWithAggregationInput | institutionOrderByWithAggregationInput[];
    by: InstitutionScalarFieldEnum[] | InstitutionScalarFieldEnum;
    having?: institutionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InstitutionCountAggregateInputType | true;
    _avg?: InstitutionAvgAggregateInputType;
    _sum?: InstitutionSumAggregateInputType;
    _min?: InstitutionMinAggregateInputType;
    _max?: InstitutionMaxAggregateInputType;
  };

  export type InstitutionGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    contact_number: string | null;
    website_url: string | null;
    established_year: number | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: InstitutionCountAggregateOutputType | null;
    _avg: InstitutionAvgAggregateOutputType | null;
    _sum: InstitutionSumAggregateOutputType | null;
    _min: InstitutionMinAggregateOutputType | null;
    _max: InstitutionMaxAggregateOutputType | null;
  };

  type GetInstitutionGroupByPayload<T extends institutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InstitutionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
          : GetScalarType<T[P], InstitutionGroupByOutputType[P]>;
      }
    >
  >;

  export type institutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        location?: boolean;
        contact_number?: boolean;
        website_url?: boolean;
        established_year?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | institution$userArgs<ExtArgs>;
        _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['institution']
    >;

  export type institutionSelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    contact_number?: boolean;
    website_url?: boolean;
    established_year?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type institutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | institution$userArgs<ExtArgs>;
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $institutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'institution';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        contact_number: string | null;
        website_url: string | null;
        established_year: number | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['institution']
    >;
    composites: {};
  };

  type institutionGetPayload<S extends boolean | null | undefined | institutionDefaultArgs> = $Result.GetResult<
    Prisma.$institutionPayload,
    S
  >;

  type institutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    institutionFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: InstitutionCountAggregateInputType | true;
  };

  export interface institutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['institution']; meta: { name: 'institution' } };
    /**
     * Find zero or one Institution that matches the filter.
     * @param {institutionFindUniqueArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends institutionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, institutionFindUniqueArgs<ExtArgs>>,
    ): Prisma__institutionClient<
      $Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Institution that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {institutionFindUniqueOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends institutionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, institutionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__institutionClient<
      $Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Institution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionFindFirstArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends institutionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, institutionFindFirstArgs<ExtArgs>>,
    ): Prisma__institutionClient<
      $Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Institution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionFindFirstOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends institutionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, institutionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__institutionClient<
      $Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Institutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Institutions
     * const institutions = await prisma.institution.findMany()
     *
     * // Get first 10 Institutions
     * const institutions = await prisma.institution.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const institutionWithIdOnly = await prisma.institution.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends institutionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, institutionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Institution.
     * @param {institutionCreateArgs} args - Arguments to create a Institution.
     * @example
     * // Create one Institution
     * const Institution = await prisma.institution.create({
     *   data: {
     *     // ... data to create a Institution
     *   }
     * })
     *
     **/
    create<T extends institutionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, institutionCreateArgs<ExtArgs>>,
    ): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Institutions.
     *     @param {institutionCreateManyArgs} args - Arguments to create many Institutions.
     *     @example
     *     // Create many Institutions
     *     const institution = await prisma.institution.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends institutionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, institutionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Institution.
     * @param {institutionDeleteArgs} args - Arguments to delete one Institution.
     * @example
     * // Delete one Institution
     * const Institution = await prisma.institution.delete({
     *   where: {
     *     // ... filter to delete one Institution
     *   }
     * })
     *
     **/
    delete<T extends institutionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, institutionDeleteArgs<ExtArgs>>,
    ): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Institution.
     * @param {institutionUpdateArgs} args - Arguments to update one Institution.
     * @example
     * // Update one Institution
     * const institution = await prisma.institution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends institutionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, institutionUpdateArgs<ExtArgs>>,
    ): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Institutions.
     * @param {institutionDeleteManyArgs} args - Arguments to filter Institutions to delete.
     * @example
     * // Delete a few Institutions
     * const { count } = await prisma.institution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends institutionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, institutionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends institutionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, institutionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Institution.
     * @param {institutionUpsertArgs} args - Arguments to update or create a Institution.
     * @example
     * // Update or create a Institution
     * const institution = await prisma.institution.upsert({
     *   create: {
     *     // ... data to create a Institution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Institution we want to update
     *   }
     * })
     **/
    upsert<T extends institutionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, institutionUpsertArgs<ExtArgs>>,
    ): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionCountArgs} args - Arguments to filter Institutions to count.
     * @example
     * // Count the number of Institutions
     * const count = await prisma.institution.count({
     *   where: {
     *     // ... the filter for the Institutions we want to count
     *   }
     * })
     **/
    count<T extends institutionCountArgs>(
      args?: Subset<T, institutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InstitutionAggregateArgs>(
      args: Subset<T, InstitutionAggregateArgs>,
    ): Prisma.PrismaPromise<GetInstitutionAggregateType<T>>;

    /**
     * Group by Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends institutionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: institutionGroupByArgs['orderBy'] }
        : { orderBy?: institutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, institutionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the institution model
     */
    readonly fields: institutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for institution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__institutionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends institution$userArgs<ExtArgs> = {}>(
      args?: Subset<T, institution$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the institution model
   */
  interface institutionFieldRefs {
    readonly id: FieldRef<'institution', 'String'>;
    readonly description: FieldRef<'institution', 'String'>;
    readonly location: FieldRef<'institution', 'String'>;
    readonly contact_number: FieldRef<'institution', 'String'>;
    readonly website_url: FieldRef<'institution', 'String'>;
    readonly established_year: FieldRef<'institution', 'Int'>;
    readonly name: FieldRef<'institution', 'String'>;
    readonly created_at: FieldRef<'institution', 'DateTime'>;
    readonly updated_at: FieldRef<'institution', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * institution findUnique
   */
  export type institutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * Filter, which institution to fetch.
     */
    where: institutionWhereUniqueInput;
  };

  /**
   * institution findUniqueOrThrow
   */
  export type institutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * Filter, which institution to fetch.
     */
    where: institutionWhereUniqueInput;
  };

  /**
   * institution findFirst
   */
  export type institutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * Filter, which institution to fetch.
     */
    where?: institutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of institutions to fetch.
     */
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for institutions.
     */
    cursor?: institutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` institutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` institutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[];
  };

  /**
   * institution findFirstOrThrow
   */
  export type institutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * Filter, which institution to fetch.
     */
    where?: institutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of institutions to fetch.
     */
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for institutions.
     */
    cursor?: institutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` institutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` institutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[];
  };

  /**
   * institution findMany
   */
  export type institutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * Filter, which institutions to fetch.
     */
    where?: institutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of institutions to fetch.
     */
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing institutions.
     */
    cursor?: institutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` institutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` institutions.
     */
    skip?: number;
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[];
  };

  /**
   * institution create
   */
  export type institutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * The data needed to create a institution.
     */
    data: XOR<institutionCreateInput, institutionUncheckedCreateInput>;
  };

  /**
   * institution createMany
   */
  export type institutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many institutions.
     */
    data: institutionCreateManyInput | institutionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * institution update
   */
  export type institutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * The data needed to update a institution.
     */
    data: XOR<institutionUpdateInput, institutionUncheckedUpdateInput>;
    /**
     * Choose, which institution to update.
     */
    where: institutionWhereUniqueInput;
  };

  /**
   * institution updateMany
   */
  export type institutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update institutions.
     */
    data: XOR<institutionUpdateManyMutationInput, institutionUncheckedUpdateManyInput>;
    /**
     * Filter which institutions to update
     */
    where?: institutionWhereInput;
  };

  /**
   * institution upsert
   */
  export type institutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * The filter to search for the institution to update in case it exists.
     */
    where: institutionWhereUniqueInput;
    /**
     * In case the institution found by the `where` argument doesn't exist, create a new institution with this data.
     */
    create: XOR<institutionCreateInput, institutionUncheckedCreateInput>;
    /**
     * In case the institution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<institutionUpdateInput, institutionUncheckedUpdateInput>;
  };

  /**
   * institution delete
   */
  export type institutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * Filter which institution to delete.
     */
    where: institutionWhereUniqueInput;
  };

  /**
   * institution deleteMany
   */
  export type institutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which institutions to delete
     */
    where?: institutionWhereInput;
  };

  /**
   * institution.user
   */
  export type institution$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * institution without action
   */
  export type institutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
  };

  /**
   * Model proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null;
    _min: ProposalMinAggregateOutputType | null;
    _max: ProposalMaxAggregateOutputType | null;
  };

  export type ProposalMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    submitted_at: Date | null;
    status: string | null;
    educator_id: string | null;
    content_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProposalMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    submitted_at: Date | null;
    status: string | null;
    educator_id: string | null;
    content_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProposalCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    submitted_at: number;
    status: number;
    educator_id: number;
    content_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProposalMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    submitted_at?: true;
    status?: true;
    educator_id?: true;
    content_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProposalMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    submitted_at?: true;
    status?: true;
    educator_id?: true;
    content_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProposalCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    submitted_at?: true;
    status?: true;
    educator_id?: true;
    content_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proposal to aggregate.
     */
    where?: proposalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: proposalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned proposals
     **/
    _count?: true | ProposalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProposalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProposalMaxAggregateInputType;
  };

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
    [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>;
  };

  export type proposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proposalWhereInput;
    orderBy?: proposalOrderByWithAggregationInput | proposalOrderByWithAggregationInput[];
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum;
    having?: proposalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProposalCountAggregateInputType | true;
    _min?: ProposalMinAggregateInputType;
    _max?: ProposalMaxAggregateInputType;
  };

  export type ProposalGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    submitted_at: Date | null;
    status: string | null;
    educator_id: string;
    content_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ProposalCountAggregateOutputType | null;
    _min: ProposalMinAggregateOutputType | null;
    _max: ProposalMaxAggregateOutputType | null;
  };

  type GetProposalGroupByPayload<T extends proposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProposalGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
          : GetScalarType<T[P], ProposalGroupByOutputType[P]>;
      }
    >
  >;

  export type proposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        submitted_at?: boolean;
        status?: boolean;
        educator_id?: boolean;
        content_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        content?: boolean | contentDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['proposal']
    >;

  export type proposalSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    submitted_at?: boolean;
    status?: boolean;
    educator_id?: boolean;
    content_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type proposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | contentDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $proposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'proposal';
    objects: {
      content: Prisma.$contentPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        submitted_at: Date | null;
        status: string | null;
        educator_id: string;
        content_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['proposal']
    >;
    composites: {};
  };

  type proposalGetPayload<S extends boolean | null | undefined | proposalDefaultArgs> = $Result.GetResult<
    Prisma.$proposalPayload,
    S
  >;

  type proposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    proposalFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ProposalCountAggregateInputType | true;
  };

  export interface proposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['proposal']; meta: { name: 'proposal' } };
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {proposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends proposalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, proposalFindUniqueArgs<ExtArgs>>,
    ): Prisma__proposalClient<
      $Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Proposal that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {proposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends proposalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, proposalFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__proposalClient<
      $Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends proposalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, proposalFindFirstArgs<ExtArgs>>,
    ): Prisma__proposalClient<
      $Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends proposalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, proposalFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__proposalClient<
      $Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     *
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const proposalWithIdOnly = await prisma.proposal.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends proposalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, proposalFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Proposal.
     * @param {proposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     *
     **/
    create<T extends proposalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, proposalCreateArgs<ExtArgs>>,
    ): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Proposals.
     *     @param {proposalCreateManyArgs} args - Arguments to create many Proposals.
     *     @example
     *     // Create many Proposals
     *     const proposal = await prisma.proposal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends proposalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, proposalCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Proposal.
     * @param {proposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     *
     **/
    delete<T extends proposalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, proposalDeleteArgs<ExtArgs>>,
    ): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Proposal.
     * @param {proposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends proposalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, proposalUpdateArgs<ExtArgs>>,
    ): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Proposals.
     * @param {proposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends proposalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, proposalDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends proposalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, proposalUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Proposal.
     * @param {proposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     **/
    upsert<T extends proposalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, proposalUpsertArgs<ExtArgs>>,
    ): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
     **/
    count<T extends proposalCountArgs>(
      args?: Subset<T, proposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProposalAggregateArgs>(
      args: Subset<T, ProposalAggregateArgs>,
    ): Prisma.PrismaPromise<GetProposalAggregateType<T>>;

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends proposalGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proposalGroupByArgs['orderBy'] }
        : { orderBy?: proposalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, proposalGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the proposal model
     */
    readonly fields: proposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proposalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    content<T extends contentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, contentDefaultArgs<ExtArgs>>,
    ): Prisma__contentClient<
      $Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the proposal model
   */
  interface proposalFieldRefs {
    readonly id: FieldRef<'proposal', 'String'>;
    readonly title: FieldRef<'proposal', 'String'>;
    readonly description: FieldRef<'proposal', 'String'>;
    readonly submitted_at: FieldRef<'proposal', 'DateTime'>;
    readonly status: FieldRef<'proposal', 'String'>;
    readonly educator_id: FieldRef<'proposal', 'String'>;
    readonly content_id: FieldRef<'proposal', 'String'>;
    readonly created_at: FieldRef<'proposal', 'DateTime'>;
    readonly updated_at: FieldRef<'proposal', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * proposal findUnique
   */
  export type proposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * Filter, which proposal to fetch.
     */
    where: proposalWhereUniqueInput;
  };

  /**
   * proposal findUniqueOrThrow
   */
  export type proposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * Filter, which proposal to fetch.
     */
    where: proposalWhereUniqueInput;
  };

  /**
   * proposal findFirst
   */
  export type proposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * Filter, which proposal to fetch.
     */
    where?: proposalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for proposals.
     */
    cursor?: proposalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[];
  };

  /**
   * proposal findFirstOrThrow
   */
  export type proposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * Filter, which proposal to fetch.
     */
    where?: proposalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for proposals.
     */
    cursor?: proposalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[];
  };

  /**
   * proposal findMany
   */
  export type proposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * Filter, which proposals to fetch.
     */
    where?: proposalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing proposals.
     */
    cursor?: proposalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proposals.
     */
    skip?: number;
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[];
  };

  /**
   * proposal create
   */
  export type proposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * The data needed to create a proposal.
     */
    data: XOR<proposalCreateInput, proposalUncheckedCreateInput>;
  };

  /**
   * proposal createMany
   */
  export type proposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many proposals.
     */
    data: proposalCreateManyInput | proposalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * proposal update
   */
  export type proposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * The data needed to update a proposal.
     */
    data: XOR<proposalUpdateInput, proposalUncheckedUpdateInput>;
    /**
     * Choose, which proposal to update.
     */
    where: proposalWhereUniqueInput;
  };

  /**
   * proposal updateMany
   */
  export type proposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update proposals.
     */
    data: XOR<proposalUpdateManyMutationInput, proposalUncheckedUpdateManyInput>;
    /**
     * Filter which proposals to update
     */
    where?: proposalWhereInput;
  };

  /**
   * proposal upsert
   */
  export type proposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * The filter to search for the proposal to update in case it exists.
     */
    where: proposalWhereUniqueInput;
    /**
     * In case the proposal found by the `where` argument doesn't exist, create a new proposal with this data.
     */
    create: XOR<proposalCreateInput, proposalUncheckedCreateInput>;
    /**
     * In case the proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proposalUpdateInput, proposalUncheckedUpdateInput>;
  };

  /**
   * proposal delete
   */
  export type proposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * Filter which proposal to delete.
     */
    where: proposalWhereUniqueInput;
  };

  /**
   * proposal deleteMany
   */
  export type proposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proposals to delete
     */
    where?: proposalWhereInput;
  };

  /**
   * proposal without action
   */
  export type proposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
  };

  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  export type ReviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewMinAggregateOutputType = {
    id: string | null;
    comment: string | null;
    rating: number | null;
    reviewed_at: Date | null;
    reviewer_id: string | null;
    content_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewMaxAggregateOutputType = {
    id: string | null;
    comment: string | null;
    rating: number | null;
    reviewed_at: Date | null;
    reviewer_id: string | null;
    content_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewCountAggregateOutputType = {
    id: number;
    comment: number;
    rating: number;
    reviewed_at: number;
    reviewer_id: number;
    content_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ReviewAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewMinAggregateInputType = {
    id?: true;
    comment?: true;
    rating?: true;
    reviewed_at?: true;
    reviewer_id?: true;
    content_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewMaxAggregateInputType = {
    id?: true;
    comment?: true;
    rating?: true;
    reviewed_at?: true;
    reviewer_id?: true;
    content_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewCountAggregateInputType = {
    id?: true;
    comment?: true;
    rating?: true;
    reviewed_at?: true;
    reviewer_id?: true;
    content_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reviews
     **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewMaxAggregateInputType;
  };

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>;
  };

  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[];
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum;
    having?: reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
  };

  export type ReviewGroupByOutputType = {
    id: string;
    comment: string | null;
    rating: number | null;
    reviewed_at: Date | null;
    reviewer_id: string;
    content_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ReviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
          : GetScalarType<T[P], ReviewGroupByOutputType[P]>;
      }
    >
  >;

  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      comment?: boolean;
      rating?: boolean;
      reviewed_at?: boolean;
      reviewer_id?: boolean;
      content_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      content?: boolean | contentDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type reviewSelectScalar = {
    id?: boolean;
    comment?: boolean;
    rating?: boolean;
    reviewed_at?: boolean;
    reviewer_id?: boolean;
    content_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | contentDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'review';
    objects: {
      content: Prisma.$contentPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        comment: string | null;
        rating: number | null;
        reviewed_at: Date | null;
        reviewer_id: string;
        content_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['review']
    >;
    composites: {};
  };

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<
    Prisma.$reviewPayload,
    S
  >;

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    reviewFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ReviewCountAggregateInputType | true;
  };

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review']; meta: { name: 'review' } };
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     **/
    create<T extends reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewCreateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Reviews.
     *     @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     **/
    delete<T extends reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     **/
    upsert<T extends reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReviewAggregateArgs>(
      args: Subset<T, ReviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetReviewAggregateType<T>>;

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the review model
     */
    readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    content<T extends contentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, contentDefaultArgs<ExtArgs>>,
    ): Prisma__contentClient<
      $Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<'review', 'String'>;
    readonly comment: FieldRef<'review', 'String'>;
    readonly rating: FieldRef<'review', 'Int'>;
    readonly reviewed_at: FieldRef<'review', 'DateTime'>;
    readonly reviewer_id: FieldRef<'review', 'String'>;
    readonly content_id: FieldRef<'review', 'String'>;
    readonly created_at: FieldRef<'review', 'DateTime'>;
    readonly updated_at: FieldRef<'review', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
  };

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>;
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput;
  };

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput;
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
  };

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput;
  };

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    institution_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    institution_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    institution_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    institution_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    institution_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    institution_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    institution_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      institution_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      content?: boolean | user$contentArgs<ExtArgs>;
      curriculum?: boolean | user$curriculumArgs<ExtArgs>;
      proposal?: boolean | user$proposalArgs<ExtArgs>;
      review?: boolean | user$reviewArgs<ExtArgs>;
      institution?: boolean | user$institutionArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    institution_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | user$contentArgs<ExtArgs>;
    curriculum?: boolean | user$curriculumArgs<ExtArgs>;
    proposal?: boolean | user$proposalArgs<ExtArgs>;
    review?: boolean | user$reviewArgs<ExtArgs>;
    institution?: boolean | user$institutionArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      content: Prisma.$contentPayload<ExtArgs>[];
      curriculum: Prisma.$curriculumPayload<ExtArgs>[];
      proposal: Prisma.$proposalPayload<ExtArgs>[];
      review: Prisma.$reviewPayload<ExtArgs>[];
      institution: Prisma.$institutionPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        institution_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    content<T extends user$contentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$contentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findMany'> | Null>;

    curriculum<T extends user$curriculumArgs<ExtArgs> = {}>(
      args?: Subset<T, user$curriculumArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curriculumPayload<ExtArgs>, T, 'findMany'> | Null>;

    proposal<T extends user$proposalArgs<ExtArgs> = {}>(
      args?: Subset<T, user$proposalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends user$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, user$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    institution<T extends user$institutionArgs<ExtArgs> = {}>(
      args?: Subset<T, user$institutionArgs<ExtArgs>>,
    ): Prisma__institutionClient<
      $Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly institution_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.content
   */
  export type user$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    where?: contentWhereInput;
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    cursor?: contentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * user.curriculum
   */
  export type user$curriculumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curriculum
     */
    select?: curriculumSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: curriculumInclude<ExtArgs> | null;
    where?: curriculumWhereInput;
    orderBy?: curriculumOrderByWithRelationInput | curriculumOrderByWithRelationInput[];
    cursor?: curriculumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CurriculumScalarFieldEnum | CurriculumScalarFieldEnum[];
  };

  /**
   * user.proposal
   */
  export type user$proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    where?: proposalWhereInput;
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[];
    cursor?: proposalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[];
  };

  /**
   * user.review
   */
  export type user$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * user.institution
   */
  export type user$institutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    where?: institutionWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ContentScalarFieldEnum: {
    id: 'id';
    title: 'title';
    subject: 'subject';
    grade_level: 'grade_level';
    content_type: 'content_type';
    creator_id: 'creator_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum];

  export const CurriculumScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    admin_id: 'admin_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CurriculumScalarFieldEnum = (typeof CurriculumScalarFieldEnum)[keyof typeof CurriculumScalarFieldEnum];

  export const InstitutionScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    contact_number: 'contact_number';
    website_url: 'website_url';
    established_year: 'established_year';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type InstitutionScalarFieldEnum = (typeof InstitutionScalarFieldEnum)[keyof typeof InstitutionScalarFieldEnum];

  export const ProposalScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    submitted_at: 'submitted_at';
    status: 'status';
    educator_id: 'educator_id';
    content_id: 'content_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum];

  export const ReviewScalarFieldEnum: {
    id: 'id';
    comment: 'comment';
    rating: 'rating';
    reviewed_at: 'reviewed_at';
    reviewer_id: 'reviewer_id';
    content_id: 'content_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    institution_id: 'institution_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type contentWhereInput = {
    AND?: contentWhereInput | contentWhereInput[];
    OR?: contentWhereInput[];
    NOT?: contentWhereInput | contentWhereInput[];
    id?: UuidFilter<'content'> | string;
    title?: StringFilter<'content'> | string;
    subject?: StringFilter<'content'> | string;
    grade_level?: IntNullableFilter<'content'> | number | null;
    content_type?: StringNullableFilter<'content'> | string | null;
    creator_id?: UuidFilter<'content'> | string;
    created_at?: DateTimeFilter<'content'> | Date | string;
    updated_at?: DateTimeFilter<'content'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    proposal?: ProposalListRelationFilter;
    review?: ReviewListRelationFilter;
  };

  export type contentOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrderInput | SortOrder;
    content_type?: SortOrderInput | SortOrder;
    creator_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    proposal?: proposalOrderByRelationAggregateInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type contentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: contentWhereInput | contentWhereInput[];
      OR?: contentWhereInput[];
      NOT?: contentWhereInput | contentWhereInput[];
      title?: StringFilter<'content'> | string;
      subject?: StringFilter<'content'> | string;
      grade_level?: IntNullableFilter<'content'> | number | null;
      content_type?: StringNullableFilter<'content'> | string | null;
      creator_id?: UuidFilter<'content'> | string;
      created_at?: DateTimeFilter<'content'> | Date | string;
      updated_at?: DateTimeFilter<'content'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      proposal?: ProposalListRelationFilter;
      review?: ReviewListRelationFilter;
    },
    'id'
  >;

  export type contentOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrderInput | SortOrder;
    content_type?: SortOrderInput | SortOrder;
    creator_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: contentCountOrderByAggregateInput;
    _avg?: contentAvgOrderByAggregateInput;
    _max?: contentMaxOrderByAggregateInput;
    _min?: contentMinOrderByAggregateInput;
    _sum?: contentSumOrderByAggregateInput;
  };

  export type contentScalarWhereWithAggregatesInput = {
    AND?: contentScalarWhereWithAggregatesInput | contentScalarWhereWithAggregatesInput[];
    OR?: contentScalarWhereWithAggregatesInput[];
    NOT?: contentScalarWhereWithAggregatesInput | contentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'content'> | string;
    title?: StringWithAggregatesFilter<'content'> | string;
    subject?: StringWithAggregatesFilter<'content'> | string;
    grade_level?: IntNullableWithAggregatesFilter<'content'> | number | null;
    content_type?: StringNullableWithAggregatesFilter<'content'> | string | null;
    creator_id?: UuidWithAggregatesFilter<'content'> | string;
    created_at?: DateTimeWithAggregatesFilter<'content'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'content'> | Date | string;
  };

  export type curriculumWhereInput = {
    AND?: curriculumWhereInput | curriculumWhereInput[];
    OR?: curriculumWhereInput[];
    NOT?: curriculumWhereInput | curriculumWhereInput[];
    id?: UuidFilter<'curriculum'> | string;
    title?: StringFilter<'curriculum'> | string;
    description?: StringNullableFilter<'curriculum'> | string | null;
    admin_id?: UuidFilter<'curriculum'> | string;
    created_at?: DateTimeFilter<'curriculum'> | Date | string;
    updated_at?: DateTimeFilter<'curriculum'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type curriculumOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    admin_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type curriculumWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: curriculumWhereInput | curriculumWhereInput[];
      OR?: curriculumWhereInput[];
      NOT?: curriculumWhereInput | curriculumWhereInput[];
      title?: StringFilter<'curriculum'> | string;
      description?: StringNullableFilter<'curriculum'> | string | null;
      admin_id?: UuidFilter<'curriculum'> | string;
      created_at?: DateTimeFilter<'curriculum'> | Date | string;
      updated_at?: DateTimeFilter<'curriculum'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type curriculumOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    admin_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: curriculumCountOrderByAggregateInput;
    _max?: curriculumMaxOrderByAggregateInput;
    _min?: curriculumMinOrderByAggregateInput;
  };

  export type curriculumScalarWhereWithAggregatesInput = {
    AND?: curriculumScalarWhereWithAggregatesInput | curriculumScalarWhereWithAggregatesInput[];
    OR?: curriculumScalarWhereWithAggregatesInput[];
    NOT?: curriculumScalarWhereWithAggregatesInput | curriculumScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'curriculum'> | string;
    title?: StringWithAggregatesFilter<'curriculum'> | string;
    description?: StringNullableWithAggregatesFilter<'curriculum'> | string | null;
    admin_id?: UuidWithAggregatesFilter<'curriculum'> | string;
    created_at?: DateTimeWithAggregatesFilter<'curriculum'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'curriculum'> | Date | string;
  };

  export type institutionWhereInput = {
    AND?: institutionWhereInput | institutionWhereInput[];
    OR?: institutionWhereInput[];
    NOT?: institutionWhereInput | institutionWhereInput[];
    id?: UuidFilter<'institution'> | string;
    description?: StringNullableFilter<'institution'> | string | null;
    location?: StringNullableFilter<'institution'> | string | null;
    contact_number?: StringNullableFilter<'institution'> | string | null;
    website_url?: StringNullableFilter<'institution'> | string | null;
    established_year?: IntNullableFilter<'institution'> | number | null;
    name?: StringFilter<'institution'> | string;
    created_at?: DateTimeFilter<'institution'> | Date | string;
    updated_at?: DateTimeFilter<'institution'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type institutionOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    website_url?: SortOrderInput | SortOrder;
    established_year?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type institutionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: institutionWhereInput | institutionWhereInput[];
      OR?: institutionWhereInput[];
      NOT?: institutionWhereInput | institutionWhereInput[];
      description?: StringNullableFilter<'institution'> | string | null;
      location?: StringNullableFilter<'institution'> | string | null;
      contact_number?: StringNullableFilter<'institution'> | string | null;
      website_url?: StringNullableFilter<'institution'> | string | null;
      established_year?: IntNullableFilter<'institution'> | number | null;
      name?: StringFilter<'institution'> | string;
      created_at?: DateTimeFilter<'institution'> | Date | string;
      updated_at?: DateTimeFilter<'institution'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type institutionOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    website_url?: SortOrderInput | SortOrder;
    established_year?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: institutionCountOrderByAggregateInput;
    _avg?: institutionAvgOrderByAggregateInput;
    _max?: institutionMaxOrderByAggregateInput;
    _min?: institutionMinOrderByAggregateInput;
    _sum?: institutionSumOrderByAggregateInput;
  };

  export type institutionScalarWhereWithAggregatesInput = {
    AND?: institutionScalarWhereWithAggregatesInput | institutionScalarWhereWithAggregatesInput[];
    OR?: institutionScalarWhereWithAggregatesInput[];
    NOT?: institutionScalarWhereWithAggregatesInput | institutionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'institution'> | string;
    description?: StringNullableWithAggregatesFilter<'institution'> | string | null;
    location?: StringNullableWithAggregatesFilter<'institution'> | string | null;
    contact_number?: StringNullableWithAggregatesFilter<'institution'> | string | null;
    website_url?: StringNullableWithAggregatesFilter<'institution'> | string | null;
    established_year?: IntNullableWithAggregatesFilter<'institution'> | number | null;
    name?: StringWithAggregatesFilter<'institution'> | string;
    created_at?: DateTimeWithAggregatesFilter<'institution'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'institution'> | Date | string;
  };

  export type proposalWhereInput = {
    AND?: proposalWhereInput | proposalWhereInput[];
    OR?: proposalWhereInput[];
    NOT?: proposalWhereInput | proposalWhereInput[];
    id?: UuidFilter<'proposal'> | string;
    title?: StringFilter<'proposal'> | string;
    description?: StringNullableFilter<'proposal'> | string | null;
    submitted_at?: DateTimeNullableFilter<'proposal'> | Date | string | null;
    status?: StringNullableFilter<'proposal'> | string | null;
    educator_id?: UuidFilter<'proposal'> | string;
    content_id?: UuidFilter<'proposal'> | string;
    created_at?: DateTimeFilter<'proposal'> | Date | string;
    updated_at?: DateTimeFilter<'proposal'> | Date | string;
    content?: XOR<ContentRelationFilter, contentWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type proposalOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    submitted_at?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    educator_id?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    content?: contentOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type proposalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: proposalWhereInput | proposalWhereInput[];
      OR?: proposalWhereInput[];
      NOT?: proposalWhereInput | proposalWhereInput[];
      title?: StringFilter<'proposal'> | string;
      description?: StringNullableFilter<'proposal'> | string | null;
      submitted_at?: DateTimeNullableFilter<'proposal'> | Date | string | null;
      status?: StringNullableFilter<'proposal'> | string | null;
      educator_id?: UuidFilter<'proposal'> | string;
      content_id?: UuidFilter<'proposal'> | string;
      created_at?: DateTimeFilter<'proposal'> | Date | string;
      updated_at?: DateTimeFilter<'proposal'> | Date | string;
      content?: XOR<ContentRelationFilter, contentWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type proposalOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    submitted_at?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    educator_id?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: proposalCountOrderByAggregateInput;
    _max?: proposalMaxOrderByAggregateInput;
    _min?: proposalMinOrderByAggregateInput;
  };

  export type proposalScalarWhereWithAggregatesInput = {
    AND?: proposalScalarWhereWithAggregatesInput | proposalScalarWhereWithAggregatesInput[];
    OR?: proposalScalarWhereWithAggregatesInput[];
    NOT?: proposalScalarWhereWithAggregatesInput | proposalScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'proposal'> | string;
    title?: StringWithAggregatesFilter<'proposal'> | string;
    description?: StringNullableWithAggregatesFilter<'proposal'> | string | null;
    submitted_at?: DateTimeNullableWithAggregatesFilter<'proposal'> | Date | string | null;
    status?: StringNullableWithAggregatesFilter<'proposal'> | string | null;
    educator_id?: UuidWithAggregatesFilter<'proposal'> | string;
    content_id?: UuidWithAggregatesFilter<'proposal'> | string;
    created_at?: DateTimeWithAggregatesFilter<'proposal'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'proposal'> | Date | string;
  };

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[];
    OR?: reviewWhereInput[];
    NOT?: reviewWhereInput | reviewWhereInput[];
    id?: UuidFilter<'review'> | string;
    comment?: StringNullableFilter<'review'> | string | null;
    rating?: IntNullableFilter<'review'> | number | null;
    reviewed_at?: DateTimeNullableFilter<'review'> | Date | string | null;
    reviewer_id?: UuidFilter<'review'> | string;
    content_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
    content?: XOR<ContentRelationFilter, contentWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder;
    comment?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    reviewed_at?: SortOrderInput | SortOrder;
    reviewer_id?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    content?: contentOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type reviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: reviewWhereInput | reviewWhereInput[];
      OR?: reviewWhereInput[];
      NOT?: reviewWhereInput | reviewWhereInput[];
      comment?: StringNullableFilter<'review'> | string | null;
      rating?: IntNullableFilter<'review'> | number | null;
      reviewed_at?: DateTimeNullableFilter<'review'> | Date | string | null;
      reviewer_id?: UuidFilter<'review'> | string;
      content_id?: UuidFilter<'review'> | string;
      created_at?: DateTimeFilter<'review'> | Date | string;
      updated_at?: DateTimeFilter<'review'> | Date | string;
      content?: XOR<ContentRelationFilter, contentWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder;
    comment?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    reviewed_at?: SortOrderInput | SortOrder;
    reviewer_id?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: reviewCountOrderByAggregateInput;
    _avg?: reviewAvgOrderByAggregateInput;
    _max?: reviewMaxOrderByAggregateInput;
    _min?: reviewMinOrderByAggregateInput;
    _sum?: reviewSumOrderByAggregateInput;
  };

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    OR?: reviewScalarWhereWithAggregatesInput[];
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'review'> | string;
    comment?: StringNullableWithAggregatesFilter<'review'> | string | null;
    rating?: IntNullableWithAggregatesFilter<'review'> | number | null;
    reviewed_at?: DateTimeNullableWithAggregatesFilter<'review'> | Date | string | null;
    reviewer_id?: UuidWithAggregatesFilter<'review'> | string;
    content_id?: UuidWithAggregatesFilter<'review'> | string;
    created_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    institution_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    content?: ContentListRelationFilter;
    curriculum?: CurriculumListRelationFilter;
    proposal?: ProposalListRelationFilter;
    review?: ReviewListRelationFilter;
    institution?: XOR<InstitutionNullableRelationFilter, institutionWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    institution_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    content?: contentOrderByRelationAggregateInput;
    curriculum?: curriculumOrderByRelationAggregateInput;
    proposal?: proposalOrderByRelationAggregateInput;
    review?: reviewOrderByRelationAggregateInput;
    institution?: institutionOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      institution_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      content?: ContentListRelationFilter;
      curriculum?: CurriculumListRelationFilter;
      proposal?: ProposalListRelationFilter;
      review?: ReviewListRelationFilter;
      institution?: XOR<InstitutionNullableRelationFilter, institutionWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    institution_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    institution_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type contentCreateInput = {
    id?: string;
    title: string;
    subject: string;
    grade_level?: number | null;
    content_type?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutContentInput;
    proposal?: proposalCreateNestedManyWithoutContentInput;
    review?: reviewCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateInput = {
    id?: string;
    title: string;
    subject: string;
    grade_level?: number | null;
    content_type?: string | null;
    creator_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    proposal?: proposalUncheckedCreateNestedManyWithoutContentInput;
    review?: reviewUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutContentNestedInput;
    proposal?: proposalUpdateManyWithoutContentNestedInput;
    review?: reviewUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: NullableStringFieldUpdateOperationsInput | string | null;
    creator_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    proposal?: proposalUncheckedUpdateManyWithoutContentNestedInput;
    review?: reviewUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type contentCreateManyInput = {
    id?: string;
    title: string;
    subject: string;
    grade_level?: number | null;
    content_type?: string | null;
    creator_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: NullableStringFieldUpdateOperationsInput | string | null;
    creator_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type curriculumCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCurriculumInput;
  };

  export type curriculumUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    admin_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type curriculumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCurriculumNestedInput;
  };

  export type curriculumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    admin_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type curriculumCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    admin_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type curriculumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type curriculumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    admin_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type institutionCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    website_url?: string | null;
    established_year?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutInstitutionInput;
  };

  export type institutionUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    website_url?: string | null;
    established_year?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutInstitutionInput;
  };

  export type institutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutInstitutionNestedInput;
  };

  export type institutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutInstitutionNestedInput;
  };

  export type institutionCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    website_url?: string | null;
    established_year?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type institutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type institutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    submitted_at?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutProposalInput;
    user: userCreateNestedOneWithoutProposalInput;
  };

  export type proposalUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    submitted_at?: Date | string | null;
    status?: string | null;
    educator_id: string;
    content_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type proposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutProposalNestedInput;
    user?: userUpdateOneRequiredWithoutProposalNestedInput;
  };

  export type proposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    educator_id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    submitted_at?: Date | string | null;
    status?: string | null;
    educator_id: string;
    content_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type proposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    educator_id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateInput = {
    id?: string;
    comment?: string | null;
    rating?: number | null;
    reviewed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutReviewInput;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateInput = {
    id?: string;
    comment?: string | null;
    rating?: number | null;
    reviewed_at?: Date | string | null;
    reviewer_id: string;
    content_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutReviewNestedInput;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateManyInput = {
    id?: string;
    comment?: string | null;
    rating?: number | null;
    reviewed_at?: Date | string | null;
    reviewer_id: string;
    content_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentCreateNestedManyWithoutUserInput;
    curriculum?: curriculumCreateNestedManyWithoutUserInput;
    proposal?: proposalCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
    institution?: institutionCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    institution_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    curriculum?: curriculumUncheckedCreateNestedManyWithoutUserInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateManyWithoutUserNestedInput;
    curriculum?: curriculumUpdateManyWithoutUserNestedInput;
    proposal?: proposalUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
    institution?: institutionUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    institution_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    curriculum?: curriculumUncheckedUpdateManyWithoutUserNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    institution_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    institution_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type ProposalListRelationFilter = {
    every?: proposalWhereInput;
    some?: proposalWhereInput;
    none?: proposalWhereInput;
  };

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput;
    some?: reviewWhereInput;
    none?: reviewWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type proposalOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type contentCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    content_type?: SortOrder;
    creator_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type contentAvgOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type contentMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    content_type?: SortOrder;
    creator_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type contentMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    content_type?: SortOrder;
    creator_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type contentSumOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type curriculumCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    admin_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type curriculumMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    admin_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type curriculumMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    admin_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type institutionCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    contact_number?: SortOrder;
    website_url?: SortOrder;
    established_year?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type institutionAvgOrderByAggregateInput = {
    established_year?: SortOrder;
  };

  export type institutionMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    contact_number?: SortOrder;
    website_url?: SortOrder;
    established_year?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type institutionMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    contact_number?: SortOrder;
    website_url?: SortOrder;
    established_year?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type institutionSumOrderByAggregateInput = {
    established_year?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type ContentRelationFilter = {
    is?: contentWhereInput;
    isNot?: contentWhereInput;
  };

  export type proposalCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    submitted_at?: SortOrder;
    status?: SortOrder;
    educator_id?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type proposalMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    submitted_at?: SortOrder;
    status?: SortOrder;
    educator_id?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type proposalMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    submitted_at?: SortOrder;
    status?: SortOrder;
    educator_id?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder;
    comment?: SortOrder;
    rating?: SortOrder;
    reviewed_at?: SortOrder;
    reviewer_id?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    comment?: SortOrder;
    rating?: SortOrder;
    reviewed_at?: SortOrder;
    reviewer_id?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder;
    comment?: SortOrder;
    rating?: SortOrder;
    reviewed_at?: SortOrder;
    reviewer_id?: SortOrder;
    content_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type ContentListRelationFilter = {
    every?: contentWhereInput;
    some?: contentWhereInput;
    none?: contentWhereInput;
  };

  export type CurriculumListRelationFilter = {
    every?: curriculumWhereInput;
    some?: curriculumWhereInput;
    none?: curriculumWhereInput;
  };

  export type InstitutionNullableRelationFilter = {
    is?: institutionWhereInput | null;
    isNot?: institutionWhereInput | null;
  };

  export type contentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type curriculumOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    institution_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    institution_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    institution_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateNestedOneWithoutContentInput = {
    create?: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
    connectOrCreate?: userCreateOrConnectWithoutContentInput;
    connect?: userWhereUniqueInput;
  };

  export type proposalCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<proposalCreateWithoutContentInput, proposalUncheckedCreateWithoutContentInput>
      | proposalCreateWithoutContentInput[]
      | proposalUncheckedCreateWithoutContentInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutContentInput | proposalCreateOrConnectWithoutContentInput[];
    createMany?: proposalCreateManyContentInputEnvelope;
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
  };

  export type reviewCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<reviewCreateWithoutContentInput, reviewUncheckedCreateWithoutContentInput>
      | reviewCreateWithoutContentInput[]
      | reviewUncheckedCreateWithoutContentInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutContentInput | reviewCreateOrConnectWithoutContentInput[];
    createMany?: reviewCreateManyContentInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type proposalUncheckedCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<proposalCreateWithoutContentInput, proposalUncheckedCreateWithoutContentInput>
      | proposalCreateWithoutContentInput[]
      | proposalUncheckedCreateWithoutContentInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutContentInput | proposalCreateOrConnectWithoutContentInput[];
    createMany?: proposalCreateManyContentInputEnvelope;
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<reviewCreateWithoutContentInput, reviewUncheckedCreateWithoutContentInput>
      | reviewCreateWithoutContentInput[]
      | reviewUncheckedCreateWithoutContentInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutContentInput | reviewCreateOrConnectWithoutContentInput[];
    createMany?: reviewCreateManyContentInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutContentNestedInput = {
    create?: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
    connectOrCreate?: userCreateOrConnectWithoutContentInput;
    upsert?: userUpsertWithoutContentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutContentInput, userUpdateWithoutContentInput>,
      userUncheckedUpdateWithoutContentInput
    >;
  };

  export type proposalUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<proposalCreateWithoutContentInput, proposalUncheckedCreateWithoutContentInput>
      | proposalCreateWithoutContentInput[]
      | proposalUncheckedCreateWithoutContentInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutContentInput | proposalCreateOrConnectWithoutContentInput[];
    upsert?: proposalUpsertWithWhereUniqueWithoutContentInput | proposalUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: proposalCreateManyContentInputEnvelope;
    set?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    disconnect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    delete?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    update?: proposalUpdateWithWhereUniqueWithoutContentInput | proposalUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: proposalUpdateManyWithWhereWithoutContentInput | proposalUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: proposalScalarWhereInput | proposalScalarWhereInput[];
  };

  export type reviewUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<reviewCreateWithoutContentInput, reviewUncheckedCreateWithoutContentInput>
      | reviewCreateWithoutContentInput[]
      | reviewUncheckedCreateWithoutContentInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutContentInput | reviewCreateOrConnectWithoutContentInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutContentInput | reviewUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: reviewCreateManyContentInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutContentInput | reviewUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutContentInput | reviewUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type proposalUncheckedUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<proposalCreateWithoutContentInput, proposalUncheckedCreateWithoutContentInput>
      | proposalCreateWithoutContentInput[]
      | proposalUncheckedCreateWithoutContentInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutContentInput | proposalCreateOrConnectWithoutContentInput[];
    upsert?: proposalUpsertWithWhereUniqueWithoutContentInput | proposalUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: proposalCreateManyContentInputEnvelope;
    set?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    disconnect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    delete?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    update?: proposalUpdateWithWhereUniqueWithoutContentInput | proposalUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: proposalUpdateManyWithWhereWithoutContentInput | proposalUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: proposalScalarWhereInput | proposalScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<reviewCreateWithoutContentInput, reviewUncheckedCreateWithoutContentInput>
      | reviewCreateWithoutContentInput[]
      | reviewUncheckedCreateWithoutContentInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutContentInput | reviewCreateOrConnectWithoutContentInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutContentInput | reviewUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: reviewCreateManyContentInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutContentInput | reviewUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutContentInput | reviewUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutCurriculumInput = {
    create?: XOR<userCreateWithoutCurriculumInput, userUncheckedCreateWithoutCurriculumInput>;
    connectOrCreate?: userCreateOrConnectWithoutCurriculumInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutCurriculumNestedInput = {
    create?: XOR<userCreateWithoutCurriculumInput, userUncheckedCreateWithoutCurriculumInput>;
    connectOrCreate?: userCreateOrConnectWithoutCurriculumInput;
    upsert?: userUpsertWithoutCurriculumInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCurriculumInput, userUpdateWithoutCurriculumInput>,
      userUncheckedUpdateWithoutCurriculumInput
    >;
  };

  export type userCreateNestedManyWithoutInstitutionInput = {
    create?:
      | XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>
      | userCreateWithoutInstitutionInput[]
      | userUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: userCreateOrConnectWithoutInstitutionInput | userCreateOrConnectWithoutInstitutionInput[];
    createMany?: userCreateManyInstitutionInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?:
      | XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>
      | userCreateWithoutInstitutionInput[]
      | userUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: userCreateOrConnectWithoutInstitutionInput | userCreateOrConnectWithoutInstitutionInput[];
    createMany?: userCreateManyInstitutionInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUpdateManyWithoutInstitutionNestedInput = {
    create?:
      | XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>
      | userCreateWithoutInstitutionInput[]
      | userUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: userCreateOrConnectWithoutInstitutionInput | userCreateOrConnectWithoutInstitutionInput[];
    upsert?: userUpsertWithWhereUniqueWithoutInstitutionInput | userUpsertWithWhereUniqueWithoutInstitutionInput[];
    createMany?: userCreateManyInstitutionInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutInstitutionInput | userUpdateWithWhereUniqueWithoutInstitutionInput[];
    updateMany?: userUpdateManyWithWhereWithoutInstitutionInput | userUpdateManyWithWhereWithoutInstitutionInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?:
      | XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>
      | userCreateWithoutInstitutionInput[]
      | userUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: userCreateOrConnectWithoutInstitutionInput | userCreateOrConnectWithoutInstitutionInput[];
    upsert?: userUpsertWithWhereUniqueWithoutInstitutionInput | userUpsertWithWhereUniqueWithoutInstitutionInput[];
    createMany?: userCreateManyInstitutionInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutInstitutionInput | userUpdateWithWhereUniqueWithoutInstitutionInput[];
    updateMany?: userUpdateManyWithWhereWithoutInstitutionInput | userUpdateManyWithWhereWithoutInstitutionInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type contentCreateNestedOneWithoutProposalInput = {
    create?: XOR<contentCreateWithoutProposalInput, contentUncheckedCreateWithoutProposalInput>;
    connectOrCreate?: contentCreateOrConnectWithoutProposalInput;
    connect?: contentWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutProposalInput = {
    create?: XOR<userCreateWithoutProposalInput, userUncheckedCreateWithoutProposalInput>;
    connectOrCreate?: userCreateOrConnectWithoutProposalInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type contentUpdateOneRequiredWithoutProposalNestedInput = {
    create?: XOR<contentCreateWithoutProposalInput, contentUncheckedCreateWithoutProposalInput>;
    connectOrCreate?: contentCreateOrConnectWithoutProposalInput;
    upsert?: contentUpsertWithoutProposalInput;
    connect?: contentWhereUniqueInput;
    update?: XOR<
      XOR<contentUpdateToOneWithWhereWithoutProposalInput, contentUpdateWithoutProposalInput>,
      contentUncheckedUpdateWithoutProposalInput
    >;
  };

  export type userUpdateOneRequiredWithoutProposalNestedInput = {
    create?: XOR<userCreateWithoutProposalInput, userUncheckedCreateWithoutProposalInput>;
    connectOrCreate?: userCreateOrConnectWithoutProposalInput;
    upsert?: userUpsertWithoutProposalInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutProposalInput, userUpdateWithoutProposalInput>,
      userUncheckedUpdateWithoutProposalInput
    >;
  };

  export type contentCreateNestedOneWithoutReviewInput = {
    create?: XOR<contentCreateWithoutReviewInput, contentUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: contentCreateOrConnectWithoutReviewInput;
    connect?: contentWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutReviewInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    connect?: userWhereUniqueInput;
  };

  export type contentUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<contentCreateWithoutReviewInput, contentUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: contentCreateOrConnectWithoutReviewInput;
    upsert?: contentUpsertWithoutReviewInput;
    connect?: contentWhereUniqueInput;
    update?: XOR<
      XOR<contentUpdateToOneWithWhereWithoutReviewInput, contentUpdateWithoutReviewInput>,
      contentUncheckedUpdateWithoutReviewInput
    >;
  };

  export type userUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    upsert?: userUpsertWithoutReviewInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutReviewInput, userUpdateWithoutReviewInput>,
      userUncheckedUpdateWithoutReviewInput
    >;
  };

  export type contentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
  };

  export type curriculumCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<curriculumCreateWithoutUserInput, curriculumUncheckedCreateWithoutUserInput>
      | curriculumCreateWithoutUserInput[]
      | curriculumUncheckedCreateWithoutUserInput[];
    connectOrCreate?: curriculumCreateOrConnectWithoutUserInput | curriculumCreateOrConnectWithoutUserInput[];
    createMany?: curriculumCreateManyUserInputEnvelope;
    connect?: curriculumWhereUniqueInput | curriculumWhereUniqueInput[];
  };

  export type proposalCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<proposalCreateWithoutUserInput, proposalUncheckedCreateWithoutUserInput>
      | proposalCreateWithoutUserInput[]
      | proposalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutUserInput | proposalCreateOrConnectWithoutUserInput[];
    createMany?: proposalCreateManyUserInputEnvelope;
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
  };

  export type reviewCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type institutionCreateNestedOneWithoutUserInput = {
    create?: XOR<institutionCreateWithoutUserInput, institutionUncheckedCreateWithoutUserInput>;
    connectOrCreate?: institutionCreateOrConnectWithoutUserInput;
    connect?: institutionWhereUniqueInput;
  };

  export type contentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
  };

  export type curriculumUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<curriculumCreateWithoutUserInput, curriculumUncheckedCreateWithoutUserInput>
      | curriculumCreateWithoutUserInput[]
      | curriculumUncheckedCreateWithoutUserInput[];
    connectOrCreate?: curriculumCreateOrConnectWithoutUserInput | curriculumCreateOrConnectWithoutUserInput[];
    createMany?: curriculumCreateManyUserInputEnvelope;
    connect?: curriculumWhereUniqueInput | curriculumWhereUniqueInput[];
  };

  export type proposalUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<proposalCreateWithoutUserInput, proposalUncheckedCreateWithoutUserInput>
      | proposalCreateWithoutUserInput[]
      | proposalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutUserInput | proposalCreateOrConnectWithoutUserInput[];
    createMany?: proposalCreateManyUserInputEnvelope;
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type contentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    upsert?: contentUpsertWithWhereUniqueWithoutUserInput | contentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    set?: contentWhereUniqueInput | contentWhereUniqueInput[];
    disconnect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    delete?: contentWhereUniqueInput | contentWhereUniqueInput[];
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    update?: contentUpdateWithWhereUniqueWithoutUserInput | contentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: contentUpdateManyWithWhereWithoutUserInput | contentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: contentScalarWhereInput | contentScalarWhereInput[];
  };

  export type curriculumUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<curriculumCreateWithoutUserInput, curriculumUncheckedCreateWithoutUserInput>
      | curriculumCreateWithoutUserInput[]
      | curriculumUncheckedCreateWithoutUserInput[];
    connectOrCreate?: curriculumCreateOrConnectWithoutUserInput | curriculumCreateOrConnectWithoutUserInput[];
    upsert?: curriculumUpsertWithWhereUniqueWithoutUserInput | curriculumUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: curriculumCreateManyUserInputEnvelope;
    set?: curriculumWhereUniqueInput | curriculumWhereUniqueInput[];
    disconnect?: curriculumWhereUniqueInput | curriculumWhereUniqueInput[];
    delete?: curriculumWhereUniqueInput | curriculumWhereUniqueInput[];
    connect?: curriculumWhereUniqueInput | curriculumWhereUniqueInput[];
    update?: curriculumUpdateWithWhereUniqueWithoutUserInput | curriculumUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: curriculumUpdateManyWithWhereWithoutUserInput | curriculumUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: curriculumScalarWhereInput | curriculumScalarWhereInput[];
  };

  export type proposalUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<proposalCreateWithoutUserInput, proposalUncheckedCreateWithoutUserInput>
      | proposalCreateWithoutUserInput[]
      | proposalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutUserInput | proposalCreateOrConnectWithoutUserInput[];
    upsert?: proposalUpsertWithWhereUniqueWithoutUserInput | proposalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: proposalCreateManyUserInputEnvelope;
    set?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    disconnect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    delete?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    update?: proposalUpdateWithWhereUniqueWithoutUserInput | proposalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: proposalUpdateManyWithWhereWithoutUserInput | proposalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: proposalScalarWhereInput | proposalScalarWhereInput[];
  };

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type institutionUpdateOneWithoutUserNestedInput = {
    create?: XOR<institutionCreateWithoutUserInput, institutionUncheckedCreateWithoutUserInput>;
    connectOrCreate?: institutionCreateOrConnectWithoutUserInput;
    upsert?: institutionUpsertWithoutUserInput;
    disconnect?: institutionWhereInput | boolean;
    delete?: institutionWhereInput | boolean;
    connect?: institutionWhereUniqueInput;
    update?: XOR<
      XOR<institutionUpdateToOneWithWhereWithoutUserInput, institutionUpdateWithoutUserInput>,
      institutionUncheckedUpdateWithoutUserInput
    >;
  };

  export type contentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    upsert?: contentUpsertWithWhereUniqueWithoutUserInput | contentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    set?: contentWhereUniqueInput | contentWhereUniqueInput[];
    disconnect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    delete?: contentWhereUniqueInput | contentWhereUniqueInput[];
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    update?: contentUpdateWithWhereUniqueWithoutUserInput | contentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: contentUpdateManyWithWhereWithoutUserInput | contentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: contentScalarWhereInput | contentScalarWhereInput[];
  };

  export type curriculumUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<curriculumCreateWithoutUserInput, curriculumUncheckedCreateWithoutUserInput>
      | curriculumCreateWithoutUserInput[]
      | curriculumUncheckedCreateWithoutUserInput[];
    connectOrCreate?: curriculumCreateOrConnectWithoutUserInput | curriculumCreateOrConnectWithoutUserInput[];
    upsert?: curriculumUpsertWithWhereUniqueWithoutUserInput | curriculumUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: curriculumCreateManyUserInputEnvelope;
    set?: curriculumWhereUniqueInput | curriculumWhereUniqueInput[];
    disconnect?: curriculumWhereUniqueInput | curriculumWhereUniqueInput[];
    delete?: curriculumWhereUniqueInput | curriculumWhereUniqueInput[];
    connect?: curriculumWhereUniqueInput | curriculumWhereUniqueInput[];
    update?: curriculumUpdateWithWhereUniqueWithoutUserInput | curriculumUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: curriculumUpdateManyWithWhereWithoutUserInput | curriculumUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: curriculumScalarWhereInput | curriculumScalarWhereInput[];
  };

  export type proposalUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<proposalCreateWithoutUserInput, proposalUncheckedCreateWithoutUserInput>
      | proposalCreateWithoutUserInput[]
      | proposalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutUserInput | proposalCreateOrConnectWithoutUserInput[];
    upsert?: proposalUpsertWithWhereUniqueWithoutUserInput | proposalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: proposalCreateManyUserInputEnvelope;
    set?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    disconnect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    delete?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    update?: proposalUpdateWithWhereUniqueWithoutUserInput | proposalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: proposalUpdateManyWithWhereWithoutUserInput | proposalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: proposalScalarWhereInput | proposalScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutContentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    curriculum?: curriculumCreateNestedManyWithoutUserInput;
    proposal?: proposalCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
    institution?: institutionCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutContentInput = {
    id?: string;
    email: string;
    institution_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    curriculum?: curriculumUncheckedCreateNestedManyWithoutUserInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutContentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
  };

  export type proposalCreateWithoutContentInput = {
    id?: string;
    title: string;
    description?: string | null;
    submitted_at?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutProposalInput;
  };

  export type proposalUncheckedCreateWithoutContentInput = {
    id?: string;
    title: string;
    description?: string | null;
    submitted_at?: Date | string | null;
    status?: string | null;
    educator_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type proposalCreateOrConnectWithoutContentInput = {
    where: proposalWhereUniqueInput;
    create: XOR<proposalCreateWithoutContentInput, proposalUncheckedCreateWithoutContentInput>;
  };

  export type proposalCreateManyContentInputEnvelope = {
    data: proposalCreateManyContentInput | proposalCreateManyContentInput[];
    skipDuplicates?: boolean;
  };

  export type reviewCreateWithoutContentInput = {
    id?: string;
    comment?: string | null;
    rating?: number | null;
    reviewed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutContentInput = {
    id?: string;
    comment?: string | null;
    rating?: number | null;
    reviewed_at?: Date | string | null;
    reviewer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutContentInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutContentInput, reviewUncheckedCreateWithoutContentInput>;
  };

  export type reviewCreateManyContentInputEnvelope = {
    data: reviewCreateManyContentInput | reviewCreateManyContentInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutContentInput = {
    update: XOR<userUpdateWithoutContentInput, userUncheckedUpdateWithoutContentInput>;
    create: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutContentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutContentInput, userUncheckedUpdateWithoutContentInput>;
  };

  export type userUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    curriculum?: curriculumUpdateManyWithoutUserNestedInput;
    proposal?: proposalUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
    institution?: institutionUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    institution_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    curriculum?: curriculumUncheckedUpdateManyWithoutUserNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type proposalUpsertWithWhereUniqueWithoutContentInput = {
    where: proposalWhereUniqueInput;
    update: XOR<proposalUpdateWithoutContentInput, proposalUncheckedUpdateWithoutContentInput>;
    create: XOR<proposalCreateWithoutContentInput, proposalUncheckedCreateWithoutContentInput>;
  };

  export type proposalUpdateWithWhereUniqueWithoutContentInput = {
    where: proposalWhereUniqueInput;
    data: XOR<proposalUpdateWithoutContentInput, proposalUncheckedUpdateWithoutContentInput>;
  };

  export type proposalUpdateManyWithWhereWithoutContentInput = {
    where: proposalScalarWhereInput;
    data: XOR<proposalUpdateManyMutationInput, proposalUncheckedUpdateManyWithoutContentInput>;
  };

  export type proposalScalarWhereInput = {
    AND?: proposalScalarWhereInput | proposalScalarWhereInput[];
    OR?: proposalScalarWhereInput[];
    NOT?: proposalScalarWhereInput | proposalScalarWhereInput[];
    id?: UuidFilter<'proposal'> | string;
    title?: StringFilter<'proposal'> | string;
    description?: StringNullableFilter<'proposal'> | string | null;
    submitted_at?: DateTimeNullableFilter<'proposal'> | Date | string | null;
    status?: StringNullableFilter<'proposal'> | string | null;
    educator_id?: UuidFilter<'proposal'> | string;
    content_id?: UuidFilter<'proposal'> | string;
    created_at?: DateTimeFilter<'proposal'> | Date | string;
    updated_at?: DateTimeFilter<'proposal'> | Date | string;
  };

  export type reviewUpsertWithWhereUniqueWithoutContentInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutContentInput, reviewUncheckedUpdateWithoutContentInput>;
    create: XOR<reviewCreateWithoutContentInput, reviewUncheckedCreateWithoutContentInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutContentInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutContentInput, reviewUncheckedUpdateWithoutContentInput>;
  };

  export type reviewUpdateManyWithWhereWithoutContentInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutContentInput>;
  };

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[];
    OR?: reviewScalarWhereInput[];
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[];
    id?: UuidFilter<'review'> | string;
    comment?: StringNullableFilter<'review'> | string | null;
    rating?: IntNullableFilter<'review'> | number | null;
    reviewed_at?: DateTimeNullableFilter<'review'> | Date | string | null;
    reviewer_id?: UuidFilter<'review'> | string;
    content_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
  };

  export type userCreateWithoutCurriculumInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentCreateNestedManyWithoutUserInput;
    proposal?: proposalCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
    institution?: institutionCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCurriculumInput = {
    id?: string;
    email: string;
    institution_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCurriculumInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCurriculumInput, userUncheckedCreateWithoutCurriculumInput>;
  };

  export type userUpsertWithoutCurriculumInput = {
    update: XOR<userUpdateWithoutCurriculumInput, userUncheckedUpdateWithoutCurriculumInput>;
    create: XOR<userCreateWithoutCurriculumInput, userUncheckedCreateWithoutCurriculumInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCurriculumInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCurriculumInput, userUncheckedUpdateWithoutCurriculumInput>;
  };

  export type userUpdateWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateManyWithoutUserNestedInput;
    proposal?: proposalUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
    institution?: institutionUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    institution_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutInstitutionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentCreateNestedManyWithoutUserInput;
    curriculum?: curriculumCreateNestedManyWithoutUserInput;
    proposal?: proposalCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutInstitutionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    curriculum?: curriculumUncheckedCreateNestedManyWithoutUserInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutInstitutionInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>;
  };

  export type userCreateManyInstitutionInputEnvelope = {
    data: userCreateManyInstitutionInput | userCreateManyInstitutionInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutInstitutionInput, userUncheckedUpdateWithoutInstitutionInput>;
    create: XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>;
  };

  export type userUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutInstitutionInput, userUncheckedUpdateWithoutInstitutionInput>;
  };

  export type userUpdateManyWithWhereWithoutInstitutionInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutInstitutionInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    institution_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type contentCreateWithoutProposalInput = {
    id?: string;
    title: string;
    subject: string;
    grade_level?: number | null;
    content_type?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutContentInput;
    review?: reviewCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateWithoutProposalInput = {
    id?: string;
    title: string;
    subject: string;
    grade_level?: number | null;
    content_type?: string | null;
    creator_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentCreateOrConnectWithoutProposalInput = {
    where: contentWhereUniqueInput;
    create: XOR<contentCreateWithoutProposalInput, contentUncheckedCreateWithoutProposalInput>;
  };

  export type userCreateWithoutProposalInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentCreateNestedManyWithoutUserInput;
    curriculum?: curriculumCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
    institution?: institutionCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutProposalInput = {
    id?: string;
    email: string;
    institution_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    curriculum?: curriculumUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutProposalInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutProposalInput, userUncheckedCreateWithoutProposalInput>;
  };

  export type contentUpsertWithoutProposalInput = {
    update: XOR<contentUpdateWithoutProposalInput, contentUncheckedUpdateWithoutProposalInput>;
    create: XOR<contentCreateWithoutProposalInput, contentUncheckedCreateWithoutProposalInput>;
    where?: contentWhereInput;
  };

  export type contentUpdateToOneWithWhereWithoutProposalInput = {
    where?: contentWhereInput;
    data: XOR<contentUpdateWithoutProposalInput, contentUncheckedUpdateWithoutProposalInput>;
  };

  export type contentUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutContentNestedInput;
    review?: reviewUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: NullableStringFieldUpdateOperationsInput | string | null;
    creator_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type userUpsertWithoutProposalInput = {
    update: XOR<userUpdateWithoutProposalInput, userUncheckedUpdateWithoutProposalInput>;
    create: XOR<userCreateWithoutProposalInput, userUncheckedCreateWithoutProposalInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutProposalInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutProposalInput, userUncheckedUpdateWithoutProposalInput>;
  };

  export type userUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateManyWithoutUserNestedInput;
    curriculum?: curriculumUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
    institution?: institutionUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    institution_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    curriculum?: curriculumUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type contentCreateWithoutReviewInput = {
    id?: string;
    title: string;
    subject: string;
    grade_level?: number | null;
    content_type?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutContentInput;
    proposal?: proposalCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateWithoutReviewInput = {
    id?: string;
    title: string;
    subject: string;
    grade_level?: number | null;
    content_type?: string | null;
    creator_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    proposal?: proposalUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentCreateOrConnectWithoutReviewInput = {
    where: contentWhereUniqueInput;
    create: XOR<contentCreateWithoutReviewInput, contentUncheckedCreateWithoutReviewInput>;
  };

  export type userCreateWithoutReviewInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentCreateNestedManyWithoutUserInput;
    curriculum?: curriculumCreateNestedManyWithoutUserInput;
    proposal?: proposalCreateNestedManyWithoutUserInput;
    institution?: institutionCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutReviewInput = {
    id?: string;
    email: string;
    institution_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    curriculum?: curriculumUncheckedCreateNestedManyWithoutUserInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutReviewInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
  };

  export type contentUpsertWithoutReviewInput = {
    update: XOR<contentUpdateWithoutReviewInput, contentUncheckedUpdateWithoutReviewInput>;
    create: XOR<contentCreateWithoutReviewInput, contentUncheckedCreateWithoutReviewInput>;
    where?: contentWhereInput;
  };

  export type contentUpdateToOneWithWhereWithoutReviewInput = {
    where?: contentWhereInput;
    data: XOR<contentUpdateWithoutReviewInput, contentUncheckedUpdateWithoutReviewInput>;
  };

  export type contentUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutContentNestedInput;
    proposal?: proposalUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: NullableStringFieldUpdateOperationsInput | string | null;
    creator_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    proposal?: proposalUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type userUpsertWithoutReviewInput = {
    update: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutReviewInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
  };

  export type userUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateManyWithoutUserNestedInput;
    curriculum?: curriculumUpdateManyWithoutUserNestedInput;
    proposal?: proposalUpdateManyWithoutUserNestedInput;
    institution?: institutionUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    institution_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    curriculum?: curriculumUncheckedUpdateManyWithoutUserNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type contentCreateWithoutUserInput = {
    id?: string;
    title: string;
    subject: string;
    grade_level?: number | null;
    content_type?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    proposal?: proposalCreateNestedManyWithoutContentInput;
    review?: reviewCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    subject: string;
    grade_level?: number | null;
    content_type?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    proposal?: proposalUncheckedCreateNestedManyWithoutContentInput;
    review?: reviewUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentCreateOrConnectWithoutUserInput = {
    where: contentWhereUniqueInput;
    create: XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>;
  };

  export type contentCreateManyUserInputEnvelope = {
    data: contentCreateManyUserInput | contentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type curriculumCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type curriculumUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type curriculumCreateOrConnectWithoutUserInput = {
    where: curriculumWhereUniqueInput;
    create: XOR<curriculumCreateWithoutUserInput, curriculumUncheckedCreateWithoutUserInput>;
  };

  export type curriculumCreateManyUserInputEnvelope = {
    data: curriculumCreateManyUserInput | curriculumCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type proposalCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    submitted_at?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutProposalInput;
  };

  export type proposalUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    submitted_at?: Date | string | null;
    status?: string | null;
    content_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type proposalCreateOrConnectWithoutUserInput = {
    where: proposalWhereUniqueInput;
    create: XOR<proposalCreateWithoutUserInput, proposalUncheckedCreateWithoutUserInput>;
  };

  export type proposalCreateManyUserInputEnvelope = {
    data: proposalCreateManyUserInput | proposalCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type reviewCreateWithoutUserInput = {
    id?: string;
    comment?: string | null;
    rating?: number | null;
    reviewed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutUserInput = {
    id?: string;
    comment?: string | null;
    rating?: number | null;
    reviewed_at?: Date | string | null;
    content_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type institutionCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    website_url?: string | null;
    established_year?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type institutionUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    website_url?: string | null;
    established_year?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type institutionCreateOrConnectWithoutUserInput = {
    where: institutionWhereUniqueInput;
    create: XOR<institutionCreateWithoutUserInput, institutionUncheckedCreateWithoutUserInput>;
  };

  export type contentUpsertWithWhereUniqueWithoutUserInput = {
    where: contentWhereUniqueInput;
    update: XOR<contentUpdateWithoutUserInput, contentUncheckedUpdateWithoutUserInput>;
    create: XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>;
  };

  export type contentUpdateWithWhereUniqueWithoutUserInput = {
    where: contentWhereUniqueInput;
    data: XOR<contentUpdateWithoutUserInput, contentUncheckedUpdateWithoutUserInput>;
  };

  export type contentUpdateManyWithWhereWithoutUserInput = {
    where: contentScalarWhereInput;
    data: XOR<contentUpdateManyMutationInput, contentUncheckedUpdateManyWithoutUserInput>;
  };

  export type contentScalarWhereInput = {
    AND?: contentScalarWhereInput | contentScalarWhereInput[];
    OR?: contentScalarWhereInput[];
    NOT?: contentScalarWhereInput | contentScalarWhereInput[];
    id?: UuidFilter<'content'> | string;
    title?: StringFilter<'content'> | string;
    subject?: StringFilter<'content'> | string;
    grade_level?: IntNullableFilter<'content'> | number | null;
    content_type?: StringNullableFilter<'content'> | string | null;
    creator_id?: UuidFilter<'content'> | string;
    created_at?: DateTimeFilter<'content'> | Date | string;
    updated_at?: DateTimeFilter<'content'> | Date | string;
  };

  export type curriculumUpsertWithWhereUniqueWithoutUserInput = {
    where: curriculumWhereUniqueInput;
    update: XOR<curriculumUpdateWithoutUserInput, curriculumUncheckedUpdateWithoutUserInput>;
    create: XOR<curriculumCreateWithoutUserInput, curriculumUncheckedCreateWithoutUserInput>;
  };

  export type curriculumUpdateWithWhereUniqueWithoutUserInput = {
    where: curriculumWhereUniqueInput;
    data: XOR<curriculumUpdateWithoutUserInput, curriculumUncheckedUpdateWithoutUserInput>;
  };

  export type curriculumUpdateManyWithWhereWithoutUserInput = {
    where: curriculumScalarWhereInput;
    data: XOR<curriculumUpdateManyMutationInput, curriculumUncheckedUpdateManyWithoutUserInput>;
  };

  export type curriculumScalarWhereInput = {
    AND?: curriculumScalarWhereInput | curriculumScalarWhereInput[];
    OR?: curriculumScalarWhereInput[];
    NOT?: curriculumScalarWhereInput | curriculumScalarWhereInput[];
    id?: UuidFilter<'curriculum'> | string;
    title?: StringFilter<'curriculum'> | string;
    description?: StringNullableFilter<'curriculum'> | string | null;
    admin_id?: UuidFilter<'curriculum'> | string;
    created_at?: DateTimeFilter<'curriculum'> | Date | string;
    updated_at?: DateTimeFilter<'curriculum'> | Date | string;
  };

  export type proposalUpsertWithWhereUniqueWithoutUserInput = {
    where: proposalWhereUniqueInput;
    update: XOR<proposalUpdateWithoutUserInput, proposalUncheckedUpdateWithoutUserInput>;
    create: XOR<proposalCreateWithoutUserInput, proposalUncheckedCreateWithoutUserInput>;
  };

  export type proposalUpdateWithWhereUniqueWithoutUserInput = {
    where: proposalWhereUniqueInput;
    data: XOR<proposalUpdateWithoutUserInput, proposalUncheckedUpdateWithoutUserInput>;
  };

  export type proposalUpdateManyWithWhereWithoutUserInput = {
    where: proposalScalarWhereInput;
    data: XOR<proposalUpdateManyMutationInput, proposalUncheckedUpdateManyWithoutUserInput>;
  };

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
  };

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>;
  };

  export type institutionUpsertWithoutUserInput = {
    update: XOR<institutionUpdateWithoutUserInput, institutionUncheckedUpdateWithoutUserInput>;
    create: XOR<institutionCreateWithoutUserInput, institutionUncheckedCreateWithoutUserInput>;
    where?: institutionWhereInput;
  };

  export type institutionUpdateToOneWithWhereWithoutUserInput = {
    where?: institutionWhereInput;
    data: XOR<institutionUpdateWithoutUserInput, institutionUncheckedUpdateWithoutUserInput>;
  };

  export type institutionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type institutionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalCreateManyContentInput = {
    id?: string;
    title: string;
    description?: string | null;
    submitted_at?: Date | string | null;
    status?: string | null;
    educator_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateManyContentInput = {
    id?: string;
    comment?: string | null;
    rating?: number | null;
    reviewed_at?: Date | string | null;
    reviewer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type proposalUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutProposalNestedInput;
  };

  export type proposalUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    educator_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    educator_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyInstitutionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateManyWithoutUserNestedInput;
    curriculum?: curriculumUpdateManyWithoutUserNestedInput;
    proposal?: proposalUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    curriculum?: curriculumUncheckedUpdateManyWithoutUserNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contentCreateManyUserInput = {
    id?: string;
    title: string;
    subject: string;
    grade_level?: number | null;
    content_type?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type curriculumCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type proposalCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    submitted_at?: Date | string | null;
    status?: string | null;
    content_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateManyUserInput = {
    id?: string;
    comment?: string | null;
    rating?: number | null;
    reviewed_at?: Date | string | null;
    content_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    proposal?: proposalUpdateManyWithoutContentNestedInput;
    review?: reviewUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    proposal?: proposalUncheckedUpdateManyWithoutContentNestedInput;
    review?: reviewUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type curriculumUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type curriculumUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type curriculumUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutProposalNestedInput;
  };

  export type proposalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use ContentCountOutputTypeDefaultArgs instead
   */
  export type ContentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ContentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use InstitutionCountOutputTypeDefaultArgs instead
   */
  export type InstitutionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    InstitutionCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use contentDefaultArgs instead
   */
  export type contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    contentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use curriculumDefaultArgs instead
   */
  export type curriculumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    curriculumDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use institutionDefaultArgs instead
   */
  export type institutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    institutionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use proposalDefaultArgs instead
   */
  export type proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    proposalDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use reviewDefaultArgs instead
   */
  export type reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    reviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
