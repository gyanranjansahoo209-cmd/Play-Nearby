
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Sport
 * 
 */
export type Sport = $Result.DefaultSelection<Prisma.$SportPayload>
/**
 * Model UserSport
 * 
 */
export type UserSport = $Result.DefaultSelection<Prisma.$UserSportPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model MatchParticipant
 * 
 */
export type MatchParticipant = $Result.DefaultSelection<Prisma.$MatchParticipantPayload>
/**
 * Model PlayRequest
 * 
 */
export type PlayRequest = $Result.DefaultSelection<Prisma.$PlayRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sport`: Exposes CRUD operations for the **Sport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sports
    * const sports = await prisma.sport.findMany()
    * ```
    */
  get sport(): Prisma.SportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSport`: Exposes CRUD operations for the **UserSport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSports
    * const userSports = await prisma.userSport.findMany()
    * ```
    */
  get userSport(): Prisma.UserSportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchParticipant`: Exposes CRUD operations for the **MatchParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchParticipants
    * const matchParticipants = await prisma.matchParticipant.findMany()
    * ```
    */
  get matchParticipant(): Prisma.MatchParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playRequest`: Exposes CRUD operations for the **PlayRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayRequests
    * const playRequests = await prisma.playRequest.findMany()
    * ```
    */
  get playRequest(): Prisma.PlayRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Sport: 'Sport',
    UserSport: 'UserSport',
    Match: 'Match',
    MatchParticipant: 'MatchParticipant',
    PlayRequest: 'PlayRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "sport" | "userSport" | "match" | "matchParticipant" | "playRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Sport: {
        payload: Prisma.$SportPayload<ExtArgs>
        fields: Prisma.SportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          findFirst: {
            args: Prisma.SportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          findMany: {
            args: Prisma.SportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          create: {
            args: Prisma.SportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          createMany: {
            args: Prisma.SportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          delete: {
            args: Prisma.SportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          update: {
            args: Prisma.SportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          deleteMany: {
            args: Prisma.SportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          upsert: {
            args: Prisma.SportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          aggregate: {
            args: Prisma.SportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSport>
          }
          groupBy: {
            args: Prisma.SportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportCountArgs<ExtArgs>
            result: $Utils.Optional<SportCountAggregateOutputType> | number
          }
        }
      }
      UserSport: {
        payload: Prisma.$UserSportPayload<ExtArgs>
        fields: Prisma.UserSportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          findFirst: {
            args: Prisma.UserSportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          findMany: {
            args: Prisma.UserSportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>[]
          }
          create: {
            args: Prisma.UserSportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          createMany: {
            args: Prisma.UserSportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>[]
          }
          delete: {
            args: Prisma.UserSportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          update: {
            args: Prisma.UserSportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          deleteMany: {
            args: Prisma.UserSportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>[]
          }
          upsert: {
            args: Prisma.UserSportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          aggregate: {
            args: Prisma.UserSportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSport>
          }
          groupBy: {
            args: Prisma.UserSportGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSportGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSportCountArgs<ExtArgs>
            result: $Utils.Optional<UserSportCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      MatchParticipant: {
        payload: Prisma.$MatchParticipantPayload<ExtArgs>
        fields: Prisma.MatchParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchParticipantPayload>
          }
          findFirst: {
            args: Prisma.MatchParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchParticipantPayload>
          }
          findMany: {
            args: Prisma.MatchParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchParticipantPayload>[]
          }
          create: {
            args: Prisma.MatchParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchParticipantPayload>
          }
          createMany: {
            args: Prisma.MatchParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchParticipantPayload>[]
          }
          delete: {
            args: Prisma.MatchParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchParticipantPayload>
          }
          update: {
            args: Prisma.MatchParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchParticipantPayload>
          }
          deleteMany: {
            args: Prisma.MatchParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchParticipantPayload>[]
          }
          upsert: {
            args: Prisma.MatchParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchParticipantPayload>
          }
          aggregate: {
            args: Prisma.MatchParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchParticipant>
          }
          groupBy: {
            args: Prisma.MatchParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<MatchParticipantCountAggregateOutputType> | number
          }
        }
      }
      PlayRequest: {
        payload: Prisma.$PlayRequestPayload<ExtArgs>
        fields: Prisma.PlayRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayRequestPayload>
          }
          findFirst: {
            args: Prisma.PlayRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayRequestPayload>
          }
          findMany: {
            args: Prisma.PlayRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayRequestPayload>[]
          }
          create: {
            args: Prisma.PlayRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayRequestPayload>
          }
          createMany: {
            args: Prisma.PlayRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayRequestPayload>[]
          }
          delete: {
            args: Prisma.PlayRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayRequestPayload>
          }
          update: {
            args: Prisma.PlayRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayRequestPayload>
          }
          deleteMany: {
            args: Prisma.PlayRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayRequestPayload>[]
          }
          upsert: {
            args: Prisma.PlayRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayRequestPayload>
          }
          aggregate: {
            args: Prisma.PlayRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayRequest>
          }
          groupBy: {
            args: Prisma.PlayRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PlayRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    sport?: SportOmit
    userSport?: UserSportOmit
    match?: MatchOmit
    matchParticipant?: MatchParticipantOmit
    playRequest?: PlayRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdMatches: number
    participations: number
    sports: number
    sentRequests: number
    receivedRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdMatches?: boolean | UserCountOutputTypeCountCreatedMatchesArgs
    participations?: boolean | UserCountOutputTypeCountParticipationsArgs
    sports?: boolean | UserCountOutputTypeCountSportsArgs
    sentRequests?: boolean | UserCountOutputTypeCountSentRequestsArgs
    receivedRequests?: boolean | UserCountOutputTypeCountReceivedRequestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayRequestWhereInput
  }


  /**
   * Count Type SportCountOutputType
   */

  export type SportCountOutputType = {
    matches: number
    users: number
  }

  export type SportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | SportCountOutputTypeCountMatchesArgs
    users?: boolean | SportCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportCountOutputType
     */
    select?: SportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    participants: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | MatchCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    privacyRadius: number | null
  }

  export type UserSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    privacyRadius: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    bio: string | null
    profileImageUrl: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    isAvailableNow: boolean | null
    availability: string | null
    playingLocations: string | null
    privacyRadius: number | null
    darkMode: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    bio: string | null
    profileImageUrl: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    isAvailableNow: boolean | null
    availability: string | null
    playingLocations: string | null
    privacyRadius: number | null
    darkMode: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    bio: number
    profileImageUrl: number
    latitude: number
    longitude: number
    address: number
    isAvailableNow: number
    availability: number
    playingLocations: number
    privacyRadius: number
    darkMode: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    privacyRadius?: true
  }

  export type UserSumAggregateInputType = {
    latitude?: true
    longitude?: true
    privacyRadius?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    bio?: true
    profileImageUrl?: true
    latitude?: true
    longitude?: true
    address?: true
    isAvailableNow?: true
    availability?: true
    playingLocations?: true
    privacyRadius?: true
    darkMode?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    bio?: true
    profileImageUrl?: true
    latitude?: true
    longitude?: true
    address?: true
    isAvailableNow?: true
    availability?: true
    playingLocations?: true
    privacyRadius?: true
    darkMode?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    bio?: true
    profileImageUrl?: true
    latitude?: true
    longitude?: true
    address?: true
    isAvailableNow?: true
    availability?: true
    playingLocations?: true
    privacyRadius?: true
    darkMode?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    bio: string | null
    profileImageUrl: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    isAvailableNow: boolean
    availability: string | null
    playingLocations: string | null
    privacyRadius: number
    darkMode: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    profileImageUrl?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    isAvailableNow?: boolean
    availability?: boolean
    playingLocations?: boolean
    privacyRadius?: boolean
    darkMode?: boolean
    createdAt?: boolean
    createdMatches?: boolean | User$createdMatchesArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    sports?: boolean | User$sportsArgs<ExtArgs>
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    profileImageUrl?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    isAvailableNow?: boolean
    availability?: boolean
    playingLocations?: boolean
    privacyRadius?: boolean
    darkMode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    profileImageUrl?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    isAvailableNow?: boolean
    availability?: boolean
    playingLocations?: boolean
    privacyRadius?: boolean
    darkMode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    profileImageUrl?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    isAvailableNow?: boolean
    availability?: boolean
    playingLocations?: boolean
    privacyRadius?: boolean
    darkMode?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "bio" | "profileImageUrl" | "latitude" | "longitude" | "address" | "isAvailableNow" | "availability" | "playingLocations" | "privacyRadius" | "darkMode" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdMatches?: boolean | User$createdMatchesArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    sports?: boolean | User$sportsArgs<ExtArgs>
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdMatches: Prisma.$MatchPayload<ExtArgs>[]
      participations: Prisma.$MatchParticipantPayload<ExtArgs>[]
      sports: Prisma.$UserSportPayload<ExtArgs>[]
      sentRequests: Prisma.$PlayRequestPayload<ExtArgs>[]
      receivedRequests: Prisma.$PlayRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      bio: string | null
      profileImageUrl: string | null
      latitude: number | null
      longitude: number | null
      address: string | null
      isAvailableNow: boolean
      availability: string | null
      playingLocations: string | null
      privacyRadius: number
      darkMode: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdMatches<T extends User$createdMatchesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    participations<T extends User$participationsArgs<ExtArgs> = {}>(args?: Subset<T, User$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    sports<T extends User$sportsArgs<ExtArgs> = {}>(args?: Subset<T, User$sportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    sentRequests<T extends User$sentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    receivedRequests<T extends User$receivedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly profileImageUrl: FieldRef<"User", 'String'>
    readonly latitude: FieldRef<"User", 'Float'>
    readonly longitude: FieldRef<"User", 'Float'>
    readonly address: FieldRef<"User", 'String'>
    readonly isAvailableNow: FieldRef<"User", 'Boolean'>
    readonly availability: FieldRef<"User", 'String'>
    readonly playingLocations: FieldRef<"User", 'String'>
    readonly privacyRadius: FieldRef<"User", 'Int'>
    readonly darkMode: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.createdMatches
   */
  export type User$createdMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.participations
   */
  export type User$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantInclude<ExtArgs> | null
    where?: MatchParticipantWhereInput
    orderBy?: MatchParticipantOrderByWithRelationInput | MatchParticipantOrderByWithRelationInput[]
    cursor?: MatchParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchParticipantScalarFieldEnum | MatchParticipantScalarFieldEnum[]
  }

  /**
   * User.sports
   */
  export type User$sportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    where?: UserSportWhereInput
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    cursor?: UserSportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * User.sentRequests
   */
  export type User$sentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestInclude<ExtArgs> | null
    where?: PlayRequestWhereInput
    orderBy?: PlayRequestOrderByWithRelationInput | PlayRequestOrderByWithRelationInput[]
    cursor?: PlayRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayRequestScalarFieldEnum | PlayRequestScalarFieldEnum[]
  }

  /**
   * User.receivedRequests
   */
  export type User$receivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestInclude<ExtArgs> | null
    where?: PlayRequestWhereInput
    orderBy?: PlayRequestOrderByWithRelationInput | PlayRequestOrderByWithRelationInput[]
    cursor?: PlayRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayRequestScalarFieldEnum | PlayRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Sport
   */

  export type AggregateSport = {
    _count: SportCountAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  export type SportMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    iconUrl: string | null
  }

  export type SportMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    iconUrl: string | null
  }

  export type SportCountAggregateOutputType = {
    id: number
    name: number
    category: number
    iconUrl: number
    _all: number
  }


  export type SportMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    iconUrl?: true
  }

  export type SportMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    iconUrl?: true
  }

  export type SportCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    iconUrl?: true
    _all?: true
  }

  export type SportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sport to aggregate.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sports
    **/
    _count?: true | SportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportMaxAggregateInputType
  }

  export type GetSportAggregateType<T extends SportAggregateArgs> = {
        [P in keyof T & keyof AggregateSport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSport[P]>
      : GetScalarType<T[P], AggregateSport[P]>
  }




  export type SportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportWhereInput
    orderBy?: SportOrderByWithAggregationInput | SportOrderByWithAggregationInput[]
    by: SportScalarFieldEnum[] | SportScalarFieldEnum
    having?: SportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportCountAggregateInputType | true
    _min?: SportMinAggregateInputType
    _max?: SportMaxAggregateInputType
  }

  export type SportGroupByOutputType = {
    id: string
    name: string
    category: string
    iconUrl: string | null
    _count: SportCountAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  type GetSportGroupByPayload<T extends SportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportGroupByOutputType[P]>
            : GetScalarType<T[P], SportGroupByOutputType[P]>
        }
      >
    >


  export type SportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    iconUrl?: boolean
    matches?: boolean | Sport$matchesArgs<ExtArgs>
    users?: boolean | Sport$usersArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sport"]>

  export type SportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    iconUrl?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    iconUrl?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    iconUrl?: boolean
  }

  export type SportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "iconUrl", ExtArgs["result"]["sport"]>
  export type SportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | Sport$matchesArgs<ExtArgs>
    users?: boolean | Sport$usersArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sport"
    objects: {
      matches: Prisma.$MatchPayload<ExtArgs>[]
      users: Prisma.$UserSportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      iconUrl: string | null
    }, ExtArgs["result"]["sport"]>
    composites: {}
  }

  type SportGetPayload<S extends boolean | null | undefined | SportDefaultArgs> = $Result.GetResult<Prisma.$SportPayload, S>

  type SportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportCountAggregateInputType | true
    }

  export interface SportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sport'], meta: { name: 'Sport' } }
    /**
     * Find zero or one Sport that matches the filter.
     * @param {SportFindUniqueArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportFindUniqueArgs>(args: SelectSubset<T, SportFindUniqueArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Sport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SportFindUniqueOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportFindUniqueOrThrowArgs>(args: SelectSubset<T, SportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Sport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportFindFirstArgs>(args?: SelectSubset<T, SportFindFirstArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Sport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportFindFirstOrThrowArgs>(args?: SelectSubset<T, SportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sports
     * const sports = await prisma.sport.findMany()
     * 
     * // Get first 10 Sports
     * const sports = await prisma.sport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportWithIdOnly = await prisma.sport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SportFindManyArgs>(args?: SelectSubset<T, SportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Sport.
     * @param {SportCreateArgs} args - Arguments to create a Sport.
     * @example
     * // Create one Sport
     * const Sport = await prisma.sport.create({
     *   data: {
     *     // ... data to create a Sport
     *   }
     * })
     * 
     */
    create<T extends SportCreateArgs>(args: SelectSubset<T, SportCreateArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Sports.
     * @param {SportCreateManyArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportCreateManyArgs>(args?: SelectSubset<T, SportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sports and returns the data saved in the database.
     * @param {SportCreateManyAndReturnArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sports and only return the `id`
     * const sportWithIdOnly = await prisma.sport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportCreateManyAndReturnArgs>(args?: SelectSubset<T, SportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Sport.
     * @param {SportDeleteArgs} args - Arguments to delete one Sport.
     * @example
     * // Delete one Sport
     * const Sport = await prisma.sport.delete({
     *   where: {
     *     // ... filter to delete one Sport
     *   }
     * })
     * 
     */
    delete<T extends SportDeleteArgs>(args: SelectSubset<T, SportDeleteArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Sport.
     * @param {SportUpdateArgs} args - Arguments to update one Sport.
     * @example
     * // Update one Sport
     * const sport = await prisma.sport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportUpdateArgs>(args: SelectSubset<T, SportUpdateArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Sports.
     * @param {SportDeleteManyArgs} args - Arguments to filter Sports to delete.
     * @example
     * // Delete a few Sports
     * const { count } = await prisma.sport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportDeleteManyArgs>(args?: SelectSubset<T, SportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportUpdateManyArgs>(args: SelectSubset<T, SportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports and returns the data updated in the database.
     * @param {SportUpdateManyAndReturnArgs} args - Arguments to update many Sports.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sports and only return the `id`
     * const sportWithIdOnly = await prisma.sport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SportUpdateManyAndReturnArgs>(args: SelectSubset<T, SportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Sport.
     * @param {SportUpsertArgs} args - Arguments to update or create a Sport.
     * @example
     * // Update or create a Sport
     * const sport = await prisma.sport.upsert({
     *   create: {
     *     // ... data to create a Sport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sport we want to update
     *   }
     * })
     */
    upsert<T extends SportUpsertArgs>(args: SelectSubset<T, SportUpsertArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportCountArgs} args - Arguments to filter Sports to count.
     * @example
     * // Count the number of Sports
     * const count = await prisma.sport.count({
     *   where: {
     *     // ... the filter for the Sports we want to count
     *   }
     * })
    **/
    count<T extends SportCountArgs>(
      args?: Subset<T, SportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SportAggregateArgs>(args: Subset<T, SportAggregateArgs>): Prisma.PrismaPromise<GetSportAggregateType<T>>

    /**
     * Group by Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportGroupByArgs} args - Group by arguments.
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
      T extends SportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportGroupByArgs['orderBy'] }
        : { orderBy?: SportGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sport model
   */
  readonly fields: SportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matches<T extends Sport$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Sport$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    users<T extends Sport$usersArgs<ExtArgs> = {}>(args?: Subset<T, Sport$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sport model
   */ 
  interface SportFieldRefs {
    readonly id: FieldRef<"Sport", 'String'>
    readonly name: FieldRef<"Sport", 'String'>
    readonly category: FieldRef<"Sport", 'String'>
    readonly iconUrl: FieldRef<"Sport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sport findUnique
   */
  export type SportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport findUniqueOrThrow
   */
  export type SportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport findFirst
   */
  export type SportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport findFirstOrThrow
   */
  export type SportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport findMany
   */
  export type SportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sports to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport create
   */
  export type SportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The data needed to create a Sport.
     */
    data: XOR<SportCreateInput, SportUncheckedCreateInput>
  }

  /**
   * Sport createMany
   */
  export type SportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sports.
     */
    data: SportCreateManyInput | SportCreateManyInput[]
  }

  /**
   * Sport createManyAndReturn
   */
  export type SportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * The data used to create many Sports.
     */
    data: SportCreateManyInput | SportCreateManyInput[]
  }

  /**
   * Sport update
   */
  export type SportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The data needed to update a Sport.
     */
    data: XOR<SportUpdateInput, SportUncheckedUpdateInput>
    /**
     * Choose, which Sport to update.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport updateMany
   */
  export type SportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sports.
     */
    data: XOR<SportUpdateManyMutationInput, SportUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportWhereInput
  }

  /**
   * Sport updateManyAndReturn
   */
  export type SportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * The data used to update Sports.
     */
    data: XOR<SportUpdateManyMutationInput, SportUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportWhereInput
  }

  /**
   * Sport upsert
   */
  export type SportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The filter to search for the Sport to update in case it exists.
     */
    where: SportWhereUniqueInput
    /**
     * In case the Sport found by the `where` argument doesn't exist, create a new Sport with this data.
     */
    create: XOR<SportCreateInput, SportUncheckedCreateInput>
    /**
     * In case the Sport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportUpdateInput, SportUncheckedUpdateInput>
  }

  /**
   * Sport delete
   */
  export type SportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter which Sport to delete.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport deleteMany
   */
  export type SportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sports to delete
     */
    where?: SportWhereInput
  }

  /**
   * Sport.matches
   */
  export type Sport$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Sport.users
   */
  export type Sport$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    where?: UserSportWhereInput
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    cursor?: UserSportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * Sport without action
   */
  export type SportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
  }


  /**
   * Model UserSport
   */

  export type AggregateUserSport = {
    _count: UserSportCountAggregateOutputType | null
    _avg: UserSportAvgAggregateOutputType | null
    _sum: UserSportSumAggregateOutputType | null
    _min: UserSportMinAggregateOutputType | null
    _max: UserSportMaxAggregateOutputType | null
  }

  export type UserSportAvgAggregateOutputType = {
    experience: number | null
  }

  export type UserSportSumAggregateOutputType = {
    experience: number | null
  }

  export type UserSportMinAggregateOutputType = {
    userId: string | null
    sportId: string | null
    skillLevel: string | null
    experience: number | null
  }

  export type UserSportMaxAggregateOutputType = {
    userId: string | null
    sportId: string | null
    skillLevel: string | null
    experience: number | null
  }

  export type UserSportCountAggregateOutputType = {
    userId: number
    sportId: number
    skillLevel: number
    experience: number
    _all: number
  }


  export type UserSportAvgAggregateInputType = {
    experience?: true
  }

  export type UserSportSumAggregateInputType = {
    experience?: true
  }

  export type UserSportMinAggregateInputType = {
    userId?: true
    sportId?: true
    skillLevel?: true
    experience?: true
  }

  export type UserSportMaxAggregateInputType = {
    userId?: true
    sportId?: true
    skillLevel?: true
    experience?: true
  }

  export type UserSportCountAggregateInputType = {
    userId?: true
    sportId?: true
    skillLevel?: true
    experience?: true
    _all?: true
  }

  export type UserSportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSport to aggregate.
     */
    where?: UserSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSports
    **/
    _count?: true | UserSportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSportMaxAggregateInputType
  }

  export type GetUserSportAggregateType<T extends UserSportAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSport[P]>
      : GetScalarType<T[P], AggregateUserSport[P]>
  }




  export type UserSportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportWhereInput
    orderBy?: UserSportOrderByWithAggregationInput | UserSportOrderByWithAggregationInput[]
    by: UserSportScalarFieldEnum[] | UserSportScalarFieldEnum
    having?: UserSportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSportCountAggregateInputType | true
    _avg?: UserSportAvgAggregateInputType
    _sum?: UserSportSumAggregateInputType
    _min?: UserSportMinAggregateInputType
    _max?: UserSportMaxAggregateInputType
  }

  export type UserSportGroupByOutputType = {
    userId: string
    sportId: string
    skillLevel: string
    experience: number | null
    _count: UserSportCountAggregateOutputType | null
    _avg: UserSportAvgAggregateOutputType | null
    _sum: UserSportSumAggregateOutputType | null
    _min: UserSportMinAggregateOutputType | null
    _max: UserSportMaxAggregateOutputType | null
  }

  type GetUserSportGroupByPayload<T extends UserSportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSportGroupByOutputType[P]>
            : GetScalarType<T[P], UserSportGroupByOutputType[P]>
        }
      >
    >


  export type UserSportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    sportId?: boolean
    skillLevel?: boolean
    experience?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSport"]>

  export type UserSportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    sportId?: boolean
    skillLevel?: boolean
    experience?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSport"]>

  export type UserSportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    sportId?: boolean
    skillLevel?: boolean
    experience?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSport"]>

  export type UserSportSelectScalar = {
    userId?: boolean
    sportId?: boolean
    skillLevel?: boolean
    experience?: boolean
  }

  export type UserSportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "sportId" | "skillLevel" | "experience", ExtArgs["result"]["userSport"]>
  export type UserSportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type UserSportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type UserSportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }

  export type $UserSportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sport: Prisma.$SportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      sportId: string
      skillLevel: string
      experience: number | null
    }, ExtArgs["result"]["userSport"]>
    composites: {}
  }

  type UserSportGetPayload<S extends boolean | null | undefined | UserSportDefaultArgs> = $Result.GetResult<Prisma.$UserSportPayload, S>

  type UserSportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSportCountAggregateInputType | true
    }

  export interface UserSportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSport'], meta: { name: 'UserSport' } }
    /**
     * Find zero or one UserSport that matches the filter.
     * @param {UserSportFindUniqueArgs} args - Arguments to find a UserSport
     * @example
     * // Get one UserSport
     * const userSport = await prisma.userSport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSportFindUniqueArgs>(args: SelectSubset<T, UserSportFindUniqueArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserSport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSportFindUniqueOrThrowArgs} args - Arguments to find a UserSport
     * @example
     * // Get one UserSport
     * const userSport = await prisma.userSport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSportFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserSport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportFindFirstArgs} args - Arguments to find a UserSport
     * @example
     * // Get one UserSport
     * const userSport = await prisma.userSport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSportFindFirstArgs>(args?: SelectSubset<T, UserSportFindFirstArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserSport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportFindFirstOrThrowArgs} args - Arguments to find a UserSport
     * @example
     * // Get one UserSport
     * const userSport = await prisma.userSport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSportFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSportFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserSports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSports
     * const userSports = await prisma.userSport.findMany()
     * 
     * // Get first 10 UserSports
     * const userSports = await prisma.userSport.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userSportWithUserIdOnly = await prisma.userSport.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserSportFindManyArgs>(args?: SelectSubset<T, UserSportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserSport.
     * @param {UserSportCreateArgs} args - Arguments to create a UserSport.
     * @example
     * // Create one UserSport
     * const UserSport = await prisma.userSport.create({
     *   data: {
     *     // ... data to create a UserSport
     *   }
     * })
     * 
     */
    create<T extends UserSportCreateArgs>(args: SelectSubset<T, UserSportCreateArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserSports.
     * @param {UserSportCreateManyArgs} args - Arguments to create many UserSports.
     * @example
     * // Create many UserSports
     * const userSport = await prisma.userSport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSportCreateManyArgs>(args?: SelectSubset<T, UserSportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSports and returns the data saved in the database.
     * @param {UserSportCreateManyAndReturnArgs} args - Arguments to create many UserSports.
     * @example
     * // Create many UserSports
     * const userSport = await prisma.userSport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSports and only return the `userId`
     * const userSportWithUserIdOnly = await prisma.userSport.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSportCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a UserSport.
     * @param {UserSportDeleteArgs} args - Arguments to delete one UserSport.
     * @example
     * // Delete one UserSport
     * const UserSport = await prisma.userSport.delete({
     *   where: {
     *     // ... filter to delete one UserSport
     *   }
     * })
     * 
     */
    delete<T extends UserSportDeleteArgs>(args: SelectSubset<T, UserSportDeleteArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserSport.
     * @param {UserSportUpdateArgs} args - Arguments to update one UserSport.
     * @example
     * // Update one UserSport
     * const userSport = await prisma.userSport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSportUpdateArgs>(args: SelectSubset<T, UserSportUpdateArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserSports.
     * @param {UserSportDeleteManyArgs} args - Arguments to filter UserSports to delete.
     * @example
     * // Delete a few UserSports
     * const { count } = await prisma.userSport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSportDeleteManyArgs>(args?: SelectSubset<T, UserSportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSports
     * const userSport = await prisma.userSport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSportUpdateManyArgs>(args: SelectSubset<T, UserSportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSports and returns the data updated in the database.
     * @param {UserSportUpdateManyAndReturnArgs} args - Arguments to update many UserSports.
     * @example
     * // Update many UserSports
     * const userSport = await prisma.userSport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSports and only return the `userId`
     * const userSportWithUserIdOnly = await prisma.userSport.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSportUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one UserSport.
     * @param {UserSportUpsertArgs} args - Arguments to update or create a UserSport.
     * @example
     * // Update or create a UserSport
     * const userSport = await prisma.userSport.upsert({
     *   create: {
     *     // ... data to create a UserSport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSport we want to update
     *   }
     * })
     */
    upsert<T extends UserSportUpsertArgs>(args: SelectSubset<T, UserSportUpsertArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UserSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportCountArgs} args - Arguments to filter UserSports to count.
     * @example
     * // Count the number of UserSports
     * const count = await prisma.userSport.count({
     *   where: {
     *     // ... the filter for the UserSports we want to count
     *   }
     * })
    **/
    count<T extends UserSportCountArgs>(
      args?: Subset<T, UserSportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSportAggregateArgs>(args: Subset<T, UserSportAggregateArgs>): Prisma.PrismaPromise<GetUserSportAggregateType<T>>

    /**
     * Group by UserSport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportGroupByArgs} args - Group by arguments.
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
      T extends UserSportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSportGroupByArgs['orderBy'] }
        : { orderBy?: UserSportGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSport model
   */
  readonly fields: UserSportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSport model
   */ 
  interface UserSportFieldRefs {
    readonly userId: FieldRef<"UserSport", 'String'>
    readonly sportId: FieldRef<"UserSport", 'String'>
    readonly skillLevel: FieldRef<"UserSport", 'String'>
    readonly experience: FieldRef<"UserSport", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserSport findUnique
   */
  export type UserSportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSport to fetch.
     */
    where: UserSportWhereUniqueInput
  }

  /**
   * UserSport findUniqueOrThrow
   */
  export type UserSportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSport to fetch.
     */
    where: UserSportWhereUniqueInput
  }

  /**
   * UserSport findFirst
   */
  export type UserSportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSport to fetch.
     */
    where?: UserSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSports.
     */
    cursor?: UserSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSports.
     */
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * UserSport findFirstOrThrow
   */
  export type UserSportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSport to fetch.
     */
    where?: UserSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSports.
     */
    cursor?: UserSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSports.
     */
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * UserSport findMany
   */
  export type UserSportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSports to fetch.
     */
    where?: UserSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSports.
     */
    cursor?: UserSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * UserSport create
   */
  export type UserSportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSport.
     */
    data: XOR<UserSportCreateInput, UserSportUncheckedCreateInput>
  }

  /**
   * UserSport createMany
   */
  export type UserSportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSports.
     */
    data: UserSportCreateManyInput | UserSportCreateManyInput[]
  }

  /**
   * UserSport createManyAndReturn
   */
  export type UserSportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * The data used to create many UserSports.
     */
    data: UserSportCreateManyInput | UserSportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSport update
   */
  export type UserSportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSport.
     */
    data: XOR<UserSportUpdateInput, UserSportUncheckedUpdateInput>
    /**
     * Choose, which UserSport to update.
     */
    where: UserSportWhereUniqueInput
  }

  /**
   * UserSport updateMany
   */
  export type UserSportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSports.
     */
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyInput>
    /**
     * Filter which UserSports to update
     */
    where?: UserSportWhereInput
  }

  /**
   * UserSport updateManyAndReturn
   */
  export type UserSportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * The data used to update UserSports.
     */
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyInput>
    /**
     * Filter which UserSports to update
     */
    where?: UserSportWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSport upsert
   */
  export type UserSportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSport to update in case it exists.
     */
    where: UserSportWhereUniqueInput
    /**
     * In case the UserSport found by the `where` argument doesn't exist, create a new UserSport with this data.
     */
    create: XOR<UserSportCreateInput, UserSportUncheckedCreateInput>
    /**
     * In case the UserSport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSportUpdateInput, UserSportUncheckedUpdateInput>
  }

  /**
   * UserSport delete
   */
  export type UserSportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter which UserSport to delete.
     */
    where: UserSportWhereUniqueInput
  }

  /**
   * UserSport deleteMany
   */
  export type UserSportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSports to delete
     */
    where?: UserSportWhereInput
  }

  /**
   * UserSport without action
   */
  export type UserSportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    maxPlayers: number | null
  }

  export type MatchSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    maxPlayers: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    sportId: string | null
    title: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    venueName: string | null
    venueType: string | null
    scheduledTime: Date | null
    maxPlayers: number | null
    status: string | null
    createdAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    sportId: string | null
    title: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    venueName: string | null
    venueType: string | null
    scheduledTime: Date | null
    maxPlayers: number | null
    status: string | null
    createdAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    creatorId: number
    sportId: number
    title: number
    latitude: number
    longitude: number
    address: number
    venueName: number
    venueType: number
    scheduledTime: number
    maxPlayers: number
    status: number
    createdAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    maxPlayers?: true
  }

  export type MatchSumAggregateInputType = {
    latitude?: true
    longitude?: true
    maxPlayers?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    creatorId?: true
    sportId?: true
    title?: true
    latitude?: true
    longitude?: true
    address?: true
    venueName?: true
    venueType?: true
    scheduledTime?: true
    maxPlayers?: true
    status?: true
    createdAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    creatorId?: true
    sportId?: true
    title?: true
    latitude?: true
    longitude?: true
    address?: true
    venueName?: true
    venueType?: true
    scheduledTime?: true
    maxPlayers?: true
    status?: true
    createdAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    creatorId?: true
    sportId?: true
    title?: true
    latitude?: true
    longitude?: true
    address?: true
    venueName?: true
    venueType?: true
    scheduledTime?: true
    maxPlayers?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    creatorId: string
    sportId: string
    title: string
    latitude: number
    longitude: number
    address: string | null
    venueName: string | null
    venueType: string
    scheduledTime: Date
    maxPlayers: number
    status: string
    createdAt: Date
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    sportId?: boolean
    title?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    venueName?: boolean
    venueType?: boolean
    scheduledTime?: boolean
    maxPlayers?: boolean
    status?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
    participants?: boolean | Match$participantsArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    sportId?: boolean
    title?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    venueName?: boolean
    venueType?: boolean
    scheduledTime?: boolean
    maxPlayers?: boolean
    status?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    sportId?: boolean
    title?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    venueName?: boolean
    venueType?: boolean
    scheduledTime?: boolean
    maxPlayers?: boolean
    status?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    creatorId?: boolean
    sportId?: boolean
    title?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    venueName?: boolean
    venueType?: boolean
    scheduledTime?: boolean
    maxPlayers?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "sportId" | "title" | "latitude" | "longitude" | "address" | "venueName" | "venueType" | "scheduledTime" | "maxPlayers" | "status" | "createdAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
    participants?: boolean | Match$participantsArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      sport: Prisma.$SportPayload<ExtArgs>
      participants: Prisma.$MatchParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creatorId: string
      sportId: string
      title: string
      latitude: number
      longitude: number
      address: string | null
      venueName: string | null
      venueType: string
      scheduledTime: Date
      maxPlayers: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    participants<T extends Match$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Match$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */ 
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly creatorId: FieldRef<"Match", 'String'>
    readonly sportId: FieldRef<"Match", 'String'>
    readonly title: FieldRef<"Match", 'String'>
    readonly latitude: FieldRef<"Match", 'Float'>
    readonly longitude: FieldRef<"Match", 'Float'>
    readonly address: FieldRef<"Match", 'String'>
    readonly venueName: FieldRef<"Match", 'String'>
    readonly venueType: FieldRef<"Match", 'String'>
    readonly scheduledTime: FieldRef<"Match", 'DateTime'>
    readonly maxPlayers: FieldRef<"Match", 'Int'>
    readonly status: FieldRef<"Match", 'String'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
  }

  /**
   * Match.participants
   */
  export type Match$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantInclude<ExtArgs> | null
    where?: MatchParticipantWhereInput
    orderBy?: MatchParticipantOrderByWithRelationInput | MatchParticipantOrderByWithRelationInput[]
    cursor?: MatchParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchParticipantScalarFieldEnum | MatchParticipantScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model MatchParticipant
   */

  export type AggregateMatchParticipant = {
    _count: MatchParticipantCountAggregateOutputType | null
    _min: MatchParticipantMinAggregateOutputType | null
    _max: MatchParticipantMaxAggregateOutputType | null
  }

  export type MatchParticipantMinAggregateOutputType = {
    matchId: string | null
    userId: string | null
    status: string | null
  }

  export type MatchParticipantMaxAggregateOutputType = {
    matchId: string | null
    userId: string | null
    status: string | null
  }

  export type MatchParticipantCountAggregateOutputType = {
    matchId: number
    userId: number
    status: number
    _all: number
  }


  export type MatchParticipantMinAggregateInputType = {
    matchId?: true
    userId?: true
    status?: true
  }

  export type MatchParticipantMaxAggregateInputType = {
    matchId?: true
    userId?: true
    status?: true
  }

  export type MatchParticipantCountAggregateInputType = {
    matchId?: true
    userId?: true
    status?: true
    _all?: true
  }

  export type MatchParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchParticipant to aggregate.
     */
    where?: MatchParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchParticipants to fetch.
     */
    orderBy?: MatchParticipantOrderByWithRelationInput | MatchParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchParticipants
    **/
    _count?: true | MatchParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchParticipantMaxAggregateInputType
  }

  export type GetMatchParticipantAggregateType<T extends MatchParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchParticipant[P]>
      : GetScalarType<T[P], AggregateMatchParticipant[P]>
  }




  export type MatchParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchParticipantWhereInput
    orderBy?: MatchParticipantOrderByWithAggregationInput | MatchParticipantOrderByWithAggregationInput[]
    by: MatchParticipantScalarFieldEnum[] | MatchParticipantScalarFieldEnum
    having?: MatchParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchParticipantCountAggregateInputType | true
    _min?: MatchParticipantMinAggregateInputType
    _max?: MatchParticipantMaxAggregateInputType
  }

  export type MatchParticipantGroupByOutputType = {
    matchId: string
    userId: string
    status: string
    _count: MatchParticipantCountAggregateOutputType | null
    _min: MatchParticipantMinAggregateOutputType | null
    _max: MatchParticipantMaxAggregateOutputType | null
  }

  type GetMatchParticipantGroupByPayload<T extends MatchParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], MatchParticipantGroupByOutputType[P]>
        }
      >
    >


  export type MatchParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matchId?: boolean
    userId?: boolean
    status?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchParticipant"]>

  export type MatchParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matchId?: boolean
    userId?: boolean
    status?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchParticipant"]>

  export type MatchParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matchId?: boolean
    userId?: boolean
    status?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchParticipant"]>

  export type MatchParticipantSelectScalar = {
    matchId?: boolean
    userId?: boolean
    status?: boolean
  }

  export type MatchParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"matchId" | "userId" | "status", ExtArgs["result"]["matchParticipant"]>
  export type MatchParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchParticipant"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      matchId: string
      userId: string
      status: string
    }, ExtArgs["result"]["matchParticipant"]>
    composites: {}
  }

  type MatchParticipantGetPayload<S extends boolean | null | undefined | MatchParticipantDefaultArgs> = $Result.GetResult<Prisma.$MatchParticipantPayload, S>

  type MatchParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchParticipantCountAggregateInputType | true
    }

  export interface MatchParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchParticipant'], meta: { name: 'MatchParticipant' } }
    /**
     * Find zero or one MatchParticipant that matches the filter.
     * @param {MatchParticipantFindUniqueArgs} args - Arguments to find a MatchParticipant
     * @example
     * // Get one MatchParticipant
     * const matchParticipant = await prisma.matchParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchParticipantFindUniqueArgs>(args: SelectSubset<T, MatchParticipantFindUniqueArgs<ExtArgs>>): Prisma__MatchParticipantClient<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MatchParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchParticipantFindUniqueOrThrowArgs} args - Arguments to find a MatchParticipant
     * @example
     * // Get one MatchParticipant
     * const matchParticipant = await prisma.matchParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchParticipantClient<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MatchParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchParticipantFindFirstArgs} args - Arguments to find a MatchParticipant
     * @example
     * // Get one MatchParticipant
     * const matchParticipant = await prisma.matchParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchParticipantFindFirstArgs>(args?: SelectSubset<T, MatchParticipantFindFirstArgs<ExtArgs>>): Prisma__MatchParticipantClient<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MatchParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchParticipantFindFirstOrThrowArgs} args - Arguments to find a MatchParticipant
     * @example
     * // Get one MatchParticipant
     * const matchParticipant = await prisma.matchParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchParticipantClient<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MatchParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchParticipants
     * const matchParticipants = await prisma.matchParticipant.findMany()
     * 
     * // Get first 10 MatchParticipants
     * const matchParticipants = await prisma.matchParticipant.findMany({ take: 10 })
     * 
     * // Only select the `matchId`
     * const matchParticipantWithMatchIdOnly = await prisma.matchParticipant.findMany({ select: { matchId: true } })
     * 
     */
    findMany<T extends MatchParticipantFindManyArgs>(args?: SelectSubset<T, MatchParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MatchParticipant.
     * @param {MatchParticipantCreateArgs} args - Arguments to create a MatchParticipant.
     * @example
     * // Create one MatchParticipant
     * const MatchParticipant = await prisma.matchParticipant.create({
     *   data: {
     *     // ... data to create a MatchParticipant
     *   }
     * })
     * 
     */
    create<T extends MatchParticipantCreateArgs>(args: SelectSubset<T, MatchParticipantCreateArgs<ExtArgs>>): Prisma__MatchParticipantClient<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MatchParticipants.
     * @param {MatchParticipantCreateManyArgs} args - Arguments to create many MatchParticipants.
     * @example
     * // Create many MatchParticipants
     * const matchParticipant = await prisma.matchParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchParticipantCreateManyArgs>(args?: SelectSubset<T, MatchParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchParticipants and returns the data saved in the database.
     * @param {MatchParticipantCreateManyAndReturnArgs} args - Arguments to create many MatchParticipants.
     * @example
     * // Create many MatchParticipants
     * const matchParticipant = await prisma.matchParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchParticipants and only return the `matchId`
     * const matchParticipantWithMatchIdOnly = await prisma.matchParticipant.createManyAndReturn({
     *   select: { matchId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MatchParticipant.
     * @param {MatchParticipantDeleteArgs} args - Arguments to delete one MatchParticipant.
     * @example
     * // Delete one MatchParticipant
     * const MatchParticipant = await prisma.matchParticipant.delete({
     *   where: {
     *     // ... filter to delete one MatchParticipant
     *   }
     * })
     * 
     */
    delete<T extends MatchParticipantDeleteArgs>(args: SelectSubset<T, MatchParticipantDeleteArgs<ExtArgs>>): Prisma__MatchParticipantClient<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MatchParticipant.
     * @param {MatchParticipantUpdateArgs} args - Arguments to update one MatchParticipant.
     * @example
     * // Update one MatchParticipant
     * const matchParticipant = await prisma.matchParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchParticipantUpdateArgs>(args: SelectSubset<T, MatchParticipantUpdateArgs<ExtArgs>>): Prisma__MatchParticipantClient<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MatchParticipants.
     * @param {MatchParticipantDeleteManyArgs} args - Arguments to filter MatchParticipants to delete.
     * @example
     * // Delete a few MatchParticipants
     * const { count } = await prisma.matchParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchParticipantDeleteManyArgs>(args?: SelectSubset<T, MatchParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchParticipants
     * const matchParticipant = await prisma.matchParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchParticipantUpdateManyArgs>(args: SelectSubset<T, MatchParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchParticipants and returns the data updated in the database.
     * @param {MatchParticipantUpdateManyAndReturnArgs} args - Arguments to update many MatchParticipants.
     * @example
     * // Update many MatchParticipants
     * const matchParticipant = await prisma.matchParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchParticipants and only return the `matchId`
     * const matchParticipantWithMatchIdOnly = await prisma.matchParticipant.updateManyAndReturn({
     *   select: { matchId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MatchParticipant.
     * @param {MatchParticipantUpsertArgs} args - Arguments to update or create a MatchParticipant.
     * @example
     * // Update or create a MatchParticipant
     * const matchParticipant = await prisma.matchParticipant.upsert({
     *   create: {
     *     // ... data to create a MatchParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchParticipant we want to update
     *   }
     * })
     */
    upsert<T extends MatchParticipantUpsertArgs>(args: SelectSubset<T, MatchParticipantUpsertArgs<ExtArgs>>): Prisma__MatchParticipantClient<$Result.GetResult<Prisma.$MatchParticipantPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MatchParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchParticipantCountArgs} args - Arguments to filter MatchParticipants to count.
     * @example
     * // Count the number of MatchParticipants
     * const count = await prisma.matchParticipant.count({
     *   where: {
     *     // ... the filter for the MatchParticipants we want to count
     *   }
     * })
    **/
    count<T extends MatchParticipantCountArgs>(
      args?: Subset<T, MatchParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchParticipantAggregateArgs>(args: Subset<T, MatchParticipantAggregateArgs>): Prisma.PrismaPromise<GetMatchParticipantAggregateType<T>>

    /**
     * Group by MatchParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchParticipantGroupByArgs} args - Group by arguments.
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
      T extends MatchParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchParticipantGroupByArgs['orderBy'] }
        : { orderBy?: MatchParticipantGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchParticipant model
   */
  readonly fields: MatchParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchParticipant model
   */ 
  interface MatchParticipantFieldRefs {
    readonly matchId: FieldRef<"MatchParticipant", 'String'>
    readonly userId: FieldRef<"MatchParticipant", 'String'>
    readonly status: FieldRef<"MatchParticipant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MatchParticipant findUnique
   */
  export type MatchParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MatchParticipant to fetch.
     */
    where: MatchParticipantWhereUniqueInput
  }

  /**
   * MatchParticipant findUniqueOrThrow
   */
  export type MatchParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MatchParticipant to fetch.
     */
    where: MatchParticipantWhereUniqueInput
  }

  /**
   * MatchParticipant findFirst
   */
  export type MatchParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MatchParticipant to fetch.
     */
    where?: MatchParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchParticipants to fetch.
     */
    orderBy?: MatchParticipantOrderByWithRelationInput | MatchParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchParticipants.
     */
    cursor?: MatchParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchParticipants.
     */
    distinct?: MatchParticipantScalarFieldEnum | MatchParticipantScalarFieldEnum[]
  }

  /**
   * MatchParticipant findFirstOrThrow
   */
  export type MatchParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MatchParticipant to fetch.
     */
    where?: MatchParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchParticipants to fetch.
     */
    orderBy?: MatchParticipantOrderByWithRelationInput | MatchParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchParticipants.
     */
    cursor?: MatchParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchParticipants.
     */
    distinct?: MatchParticipantScalarFieldEnum | MatchParticipantScalarFieldEnum[]
  }

  /**
   * MatchParticipant findMany
   */
  export type MatchParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MatchParticipants to fetch.
     */
    where?: MatchParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchParticipants to fetch.
     */
    orderBy?: MatchParticipantOrderByWithRelationInput | MatchParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchParticipants.
     */
    cursor?: MatchParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchParticipants.
     */
    skip?: number
    distinct?: MatchParticipantScalarFieldEnum | MatchParticipantScalarFieldEnum[]
  }

  /**
   * MatchParticipant create
   */
  export type MatchParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchParticipant.
     */
    data: XOR<MatchParticipantCreateInput, MatchParticipantUncheckedCreateInput>
  }

  /**
   * MatchParticipant createMany
   */
  export type MatchParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchParticipants.
     */
    data: MatchParticipantCreateManyInput | MatchParticipantCreateManyInput[]
  }

  /**
   * MatchParticipant createManyAndReturn
   */
  export type MatchParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many MatchParticipants.
     */
    data: MatchParticipantCreateManyInput | MatchParticipantCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchParticipant update
   */
  export type MatchParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchParticipant.
     */
    data: XOR<MatchParticipantUpdateInput, MatchParticipantUncheckedUpdateInput>
    /**
     * Choose, which MatchParticipant to update.
     */
    where: MatchParticipantWhereUniqueInput
  }

  /**
   * MatchParticipant updateMany
   */
  export type MatchParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchParticipants.
     */
    data: XOR<MatchParticipantUpdateManyMutationInput, MatchParticipantUncheckedUpdateManyInput>
    /**
     * Filter which MatchParticipants to update
     */
    where?: MatchParticipantWhereInput
  }

  /**
   * MatchParticipant updateManyAndReturn
   */
  export type MatchParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * The data used to update MatchParticipants.
     */
    data: XOR<MatchParticipantUpdateManyMutationInput, MatchParticipantUncheckedUpdateManyInput>
    /**
     * Filter which MatchParticipants to update
     */
    where?: MatchParticipantWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchParticipant upsert
   */
  export type MatchParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchParticipant to update in case it exists.
     */
    where: MatchParticipantWhereUniqueInput
    /**
     * In case the MatchParticipant found by the `where` argument doesn't exist, create a new MatchParticipant with this data.
     */
    create: XOR<MatchParticipantCreateInput, MatchParticipantUncheckedCreateInput>
    /**
     * In case the MatchParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchParticipantUpdateInput, MatchParticipantUncheckedUpdateInput>
  }

  /**
   * MatchParticipant delete
   */
  export type MatchParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantInclude<ExtArgs> | null
    /**
     * Filter which MatchParticipant to delete.
     */
    where: MatchParticipantWhereUniqueInput
  }

  /**
   * MatchParticipant deleteMany
   */
  export type MatchParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchParticipants to delete
     */
    where?: MatchParticipantWhereInput
  }

  /**
   * MatchParticipant without action
   */
  export type MatchParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchParticipant
     */
    select?: MatchParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchParticipant
     */
    omit?: MatchParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchParticipantInclude<ExtArgs> | null
  }


  /**
   * Model PlayRequest
   */

  export type AggregatePlayRequest = {
    _count: PlayRequestCountAggregateOutputType | null
    _min: PlayRequestMinAggregateOutputType | null
    _max: PlayRequestMaxAggregateOutputType | null
  }

  export type PlayRequestMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PlayRequestMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PlayRequestCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    status: number
    createdAt: number
    _all: number
  }


  export type PlayRequestMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
  }

  export type PlayRequestMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
  }

  export type PlayRequestCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PlayRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayRequest to aggregate.
     */
    where?: PlayRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayRequests to fetch.
     */
    orderBy?: PlayRequestOrderByWithRelationInput | PlayRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayRequests
    **/
    _count?: true | PlayRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayRequestMaxAggregateInputType
  }

  export type GetPlayRequestAggregateType<T extends PlayRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayRequest[P]>
      : GetScalarType<T[P], AggregatePlayRequest[P]>
  }




  export type PlayRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayRequestWhereInput
    orderBy?: PlayRequestOrderByWithAggregationInput | PlayRequestOrderByWithAggregationInput[]
    by: PlayRequestScalarFieldEnum[] | PlayRequestScalarFieldEnum
    having?: PlayRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayRequestCountAggregateInputType | true
    _min?: PlayRequestMinAggregateInputType
    _max?: PlayRequestMaxAggregateInputType
  }

  export type PlayRequestGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    status: string
    createdAt: Date
    _count: PlayRequestCountAggregateOutputType | null
    _min: PlayRequestMinAggregateOutputType | null
    _max: PlayRequestMaxAggregateOutputType | null
  }

  type GetPlayRequestGroupByPayload<T extends PlayRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PlayRequestGroupByOutputType[P]>
        }
      >
    >


  export type PlayRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playRequest"]>

  export type PlayRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playRequest"]>

  export type PlayRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playRequest"]>

  export type PlayRequestSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PlayRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "status" | "createdAt", ExtArgs["result"]["playRequest"]>
  export type PlayRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlayRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayRequest"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["playRequest"]>
    composites: {}
  }

  type PlayRequestGetPayload<S extends boolean | null | undefined | PlayRequestDefaultArgs> = $Result.GetResult<Prisma.$PlayRequestPayload, S>

  type PlayRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayRequestCountAggregateInputType | true
    }

  export interface PlayRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayRequest'], meta: { name: 'PlayRequest' } }
    /**
     * Find zero or one PlayRequest that matches the filter.
     * @param {PlayRequestFindUniqueArgs} args - Arguments to find a PlayRequest
     * @example
     * // Get one PlayRequest
     * const playRequest = await prisma.playRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayRequestFindUniqueArgs>(args: SelectSubset<T, PlayRequestFindUniqueArgs<ExtArgs>>): Prisma__PlayRequestClient<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PlayRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayRequestFindUniqueOrThrowArgs} args - Arguments to find a PlayRequest
     * @example
     * // Get one PlayRequest
     * const playRequest = await prisma.playRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayRequestClient<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PlayRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayRequestFindFirstArgs} args - Arguments to find a PlayRequest
     * @example
     * // Get one PlayRequest
     * const playRequest = await prisma.playRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayRequestFindFirstArgs>(args?: SelectSubset<T, PlayRequestFindFirstArgs<ExtArgs>>): Prisma__PlayRequestClient<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PlayRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayRequestFindFirstOrThrowArgs} args - Arguments to find a PlayRequest
     * @example
     * // Get one PlayRequest
     * const playRequest = await prisma.playRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayRequestClient<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PlayRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayRequests
     * const playRequests = await prisma.playRequest.findMany()
     * 
     * // Get first 10 PlayRequests
     * const playRequests = await prisma.playRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playRequestWithIdOnly = await prisma.playRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayRequestFindManyArgs>(args?: SelectSubset<T, PlayRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PlayRequest.
     * @param {PlayRequestCreateArgs} args - Arguments to create a PlayRequest.
     * @example
     * // Create one PlayRequest
     * const PlayRequest = await prisma.playRequest.create({
     *   data: {
     *     // ... data to create a PlayRequest
     *   }
     * })
     * 
     */
    create<T extends PlayRequestCreateArgs>(args: SelectSubset<T, PlayRequestCreateArgs<ExtArgs>>): Prisma__PlayRequestClient<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PlayRequests.
     * @param {PlayRequestCreateManyArgs} args - Arguments to create many PlayRequests.
     * @example
     * // Create many PlayRequests
     * const playRequest = await prisma.playRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayRequestCreateManyArgs>(args?: SelectSubset<T, PlayRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayRequests and returns the data saved in the database.
     * @param {PlayRequestCreateManyAndReturnArgs} args - Arguments to create many PlayRequests.
     * @example
     * // Create many PlayRequests
     * const playRequest = await prisma.playRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayRequests and only return the `id`
     * const playRequestWithIdOnly = await prisma.playRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PlayRequest.
     * @param {PlayRequestDeleteArgs} args - Arguments to delete one PlayRequest.
     * @example
     * // Delete one PlayRequest
     * const PlayRequest = await prisma.playRequest.delete({
     *   where: {
     *     // ... filter to delete one PlayRequest
     *   }
     * })
     * 
     */
    delete<T extends PlayRequestDeleteArgs>(args: SelectSubset<T, PlayRequestDeleteArgs<ExtArgs>>): Prisma__PlayRequestClient<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PlayRequest.
     * @param {PlayRequestUpdateArgs} args - Arguments to update one PlayRequest.
     * @example
     * // Update one PlayRequest
     * const playRequest = await prisma.playRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayRequestUpdateArgs>(args: SelectSubset<T, PlayRequestUpdateArgs<ExtArgs>>): Prisma__PlayRequestClient<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PlayRequests.
     * @param {PlayRequestDeleteManyArgs} args - Arguments to filter PlayRequests to delete.
     * @example
     * // Delete a few PlayRequests
     * const { count } = await prisma.playRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayRequestDeleteManyArgs>(args?: SelectSubset<T, PlayRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayRequests
     * const playRequest = await prisma.playRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayRequestUpdateManyArgs>(args: SelectSubset<T, PlayRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayRequests and returns the data updated in the database.
     * @param {PlayRequestUpdateManyAndReturnArgs} args - Arguments to update many PlayRequests.
     * @example
     * // Update many PlayRequests
     * const playRequest = await prisma.playRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayRequests and only return the `id`
     * const playRequestWithIdOnly = await prisma.playRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PlayRequest.
     * @param {PlayRequestUpsertArgs} args - Arguments to update or create a PlayRequest.
     * @example
     * // Update or create a PlayRequest
     * const playRequest = await prisma.playRequest.upsert({
     *   create: {
     *     // ... data to create a PlayRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayRequest we want to update
     *   }
     * })
     */
    upsert<T extends PlayRequestUpsertArgs>(args: SelectSubset<T, PlayRequestUpsertArgs<ExtArgs>>): Prisma__PlayRequestClient<$Result.GetResult<Prisma.$PlayRequestPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PlayRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayRequestCountArgs} args - Arguments to filter PlayRequests to count.
     * @example
     * // Count the number of PlayRequests
     * const count = await prisma.playRequest.count({
     *   where: {
     *     // ... the filter for the PlayRequests we want to count
     *   }
     * })
    **/
    count<T extends PlayRequestCountArgs>(
      args?: Subset<T, PlayRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayRequestAggregateArgs>(args: Subset<T, PlayRequestAggregateArgs>): Prisma.PrismaPromise<GetPlayRequestAggregateType<T>>

    /**
     * Group by PlayRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayRequestGroupByArgs} args - Group by arguments.
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
      T extends PlayRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayRequestGroupByArgs['orderBy'] }
        : { orderBy?: PlayRequestGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayRequest model
   */
  readonly fields: PlayRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayRequest model
   */ 
  interface PlayRequestFieldRefs {
    readonly id: FieldRef<"PlayRequest", 'String'>
    readonly senderId: FieldRef<"PlayRequest", 'String'>
    readonly receiverId: FieldRef<"PlayRequest", 'String'>
    readonly status: FieldRef<"PlayRequest", 'String'>
    readonly createdAt: FieldRef<"PlayRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayRequest findUnique
   */
  export type PlayRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestInclude<ExtArgs> | null
    /**
     * Filter, which PlayRequest to fetch.
     */
    where: PlayRequestWhereUniqueInput
  }

  /**
   * PlayRequest findUniqueOrThrow
   */
  export type PlayRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestInclude<ExtArgs> | null
    /**
     * Filter, which PlayRequest to fetch.
     */
    where: PlayRequestWhereUniqueInput
  }

  /**
   * PlayRequest findFirst
   */
  export type PlayRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestInclude<ExtArgs> | null
    /**
     * Filter, which PlayRequest to fetch.
     */
    where?: PlayRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayRequests to fetch.
     */
    orderBy?: PlayRequestOrderByWithRelationInput | PlayRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayRequests.
     */
    cursor?: PlayRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayRequests.
     */
    distinct?: PlayRequestScalarFieldEnum | PlayRequestScalarFieldEnum[]
  }

  /**
   * PlayRequest findFirstOrThrow
   */
  export type PlayRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestInclude<ExtArgs> | null
    /**
     * Filter, which PlayRequest to fetch.
     */
    where?: PlayRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayRequests to fetch.
     */
    orderBy?: PlayRequestOrderByWithRelationInput | PlayRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayRequests.
     */
    cursor?: PlayRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayRequests.
     */
    distinct?: PlayRequestScalarFieldEnum | PlayRequestScalarFieldEnum[]
  }

  /**
   * PlayRequest findMany
   */
  export type PlayRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestInclude<ExtArgs> | null
    /**
     * Filter, which PlayRequests to fetch.
     */
    where?: PlayRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayRequests to fetch.
     */
    orderBy?: PlayRequestOrderByWithRelationInput | PlayRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayRequests.
     */
    cursor?: PlayRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayRequests.
     */
    skip?: number
    distinct?: PlayRequestScalarFieldEnum | PlayRequestScalarFieldEnum[]
  }

  /**
   * PlayRequest create
   */
  export type PlayRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayRequest.
     */
    data: XOR<PlayRequestCreateInput, PlayRequestUncheckedCreateInput>
  }

  /**
   * PlayRequest createMany
   */
  export type PlayRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayRequests.
     */
    data: PlayRequestCreateManyInput | PlayRequestCreateManyInput[]
  }

  /**
   * PlayRequest createManyAndReturn
   */
  export type PlayRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PlayRequests.
     */
    data: PlayRequestCreateManyInput | PlayRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayRequest update
   */
  export type PlayRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayRequest.
     */
    data: XOR<PlayRequestUpdateInput, PlayRequestUncheckedUpdateInput>
    /**
     * Choose, which PlayRequest to update.
     */
    where: PlayRequestWhereUniqueInput
  }

  /**
   * PlayRequest updateMany
   */
  export type PlayRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayRequests.
     */
    data: XOR<PlayRequestUpdateManyMutationInput, PlayRequestUncheckedUpdateManyInput>
    /**
     * Filter which PlayRequests to update
     */
    where?: PlayRequestWhereInput
  }

  /**
   * PlayRequest updateManyAndReturn
   */
  export type PlayRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * The data used to update PlayRequests.
     */
    data: XOR<PlayRequestUpdateManyMutationInput, PlayRequestUncheckedUpdateManyInput>
    /**
     * Filter which PlayRequests to update
     */
    where?: PlayRequestWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayRequest upsert
   */
  export type PlayRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayRequest to update in case it exists.
     */
    where: PlayRequestWhereUniqueInput
    /**
     * In case the PlayRequest found by the `where` argument doesn't exist, create a new PlayRequest with this data.
     */
    create: XOR<PlayRequestCreateInput, PlayRequestUncheckedCreateInput>
    /**
     * In case the PlayRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayRequestUpdateInput, PlayRequestUncheckedUpdateInput>
  }

  /**
   * PlayRequest delete
   */
  export type PlayRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestInclude<ExtArgs> | null
    /**
     * Filter which PlayRequest to delete.
     */
    where: PlayRequestWhereUniqueInput
  }

  /**
   * PlayRequest deleteMany
   */
  export type PlayRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayRequests to delete
     */
    where?: PlayRequestWhereInput
  }

  /**
   * PlayRequest without action
   */
  export type PlayRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayRequest
     */
    select?: PlayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayRequest
     */
    omit?: PlayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    bio: 'bio',
    profileImageUrl: 'profileImageUrl',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    isAvailableNow: 'isAvailableNow',
    availability: 'availability',
    playingLocations: 'playingLocations',
    privacyRadius: 'privacyRadius',
    darkMode: 'darkMode',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SportScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    iconUrl: 'iconUrl'
  };

  export type SportScalarFieldEnum = (typeof SportScalarFieldEnum)[keyof typeof SportScalarFieldEnum]


  export const UserSportScalarFieldEnum: {
    userId: 'userId',
    sportId: 'sportId',
    skillLevel: 'skillLevel',
    experience: 'experience'
  };

  export type UserSportScalarFieldEnum = (typeof UserSportScalarFieldEnum)[keyof typeof UserSportScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    sportId: 'sportId',
    title: 'title',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    venueName: 'venueName',
    venueType: 'venueType',
    scheduledTime: 'scheduledTime',
    maxPlayers: 'maxPlayers',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const MatchParticipantScalarFieldEnum: {
    matchId: 'matchId',
    userId: 'userId',
    status: 'status'
  };

  export type MatchParticipantScalarFieldEnum = (typeof MatchParticipantScalarFieldEnum)[keyof typeof MatchParticipantScalarFieldEnum]


  export const PlayRequestScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PlayRequestScalarFieldEnum = (typeof PlayRequestScalarFieldEnum)[keyof typeof PlayRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    address?: StringNullableFilter<"User"> | string | null
    isAvailableNow?: BoolFilter<"User"> | boolean
    availability?: StringNullableFilter<"User"> | string | null
    playingLocations?: StringNullableFilter<"User"> | string | null
    privacyRadius?: IntFilter<"User"> | number
    darkMode?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdMatches?: MatchListRelationFilter
    participations?: MatchParticipantListRelationFilter
    sports?: UserSportListRelationFilter
    sentRequests?: PlayRequestListRelationFilter
    receivedRequests?: PlayRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isAvailableNow?: SortOrder
    availability?: SortOrderInput | SortOrder
    playingLocations?: SortOrderInput | SortOrder
    privacyRadius?: SortOrder
    darkMode?: SortOrder
    createdAt?: SortOrder
    createdMatches?: MatchOrderByRelationAggregateInput
    participations?: MatchParticipantOrderByRelationAggregateInput
    sports?: UserSportOrderByRelationAggregateInput
    sentRequests?: PlayRequestOrderByRelationAggregateInput
    receivedRequests?: PlayRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    address?: StringNullableFilter<"User"> | string | null
    isAvailableNow?: BoolFilter<"User"> | boolean
    availability?: StringNullableFilter<"User"> | string | null
    playingLocations?: StringNullableFilter<"User"> | string | null
    privacyRadius?: IntFilter<"User"> | number
    darkMode?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdMatches?: MatchListRelationFilter
    participations?: MatchParticipantListRelationFilter
    sports?: UserSportListRelationFilter
    sentRequests?: PlayRequestListRelationFilter
    receivedRequests?: PlayRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isAvailableNow?: SortOrder
    availability?: SortOrderInput | SortOrder
    playingLocations?: SortOrderInput | SortOrder
    privacyRadius?: SortOrder
    darkMode?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAvailableNow?: BoolWithAggregatesFilter<"User"> | boolean
    availability?: StringNullableWithAggregatesFilter<"User"> | string | null
    playingLocations?: StringNullableWithAggregatesFilter<"User"> | string | null
    privacyRadius?: IntWithAggregatesFilter<"User"> | number
    darkMode?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SportWhereInput = {
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    id?: StringFilter<"Sport"> | string
    name?: StringFilter<"Sport"> | string
    category?: StringFilter<"Sport"> | string
    iconUrl?: StringNullableFilter<"Sport"> | string | null
    matches?: MatchListRelationFilter
    users?: UserSportListRelationFilter
  }

  export type SportOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    matches?: MatchOrderByRelationAggregateInput
    users?: UserSportOrderByRelationAggregateInput
  }

  export type SportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    name?: StringFilter<"Sport"> | string
    category?: StringFilter<"Sport"> | string
    iconUrl?: StringNullableFilter<"Sport"> | string | null
    matches?: MatchListRelationFilter
    users?: UserSportListRelationFilter
  }, "id">

  export type SportOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    _count?: SportCountOrderByAggregateInput
    _max?: SportMaxOrderByAggregateInput
    _min?: SportMinOrderByAggregateInput
  }

  export type SportScalarWhereWithAggregatesInput = {
    AND?: SportScalarWhereWithAggregatesInput | SportScalarWhereWithAggregatesInput[]
    OR?: SportScalarWhereWithAggregatesInput[]
    NOT?: SportScalarWhereWithAggregatesInput | SportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sport"> | string
    name?: StringWithAggregatesFilter<"Sport"> | string
    category?: StringWithAggregatesFilter<"Sport"> | string
    iconUrl?: StringNullableWithAggregatesFilter<"Sport"> | string | null
  }

  export type UserSportWhereInput = {
    AND?: UserSportWhereInput | UserSportWhereInput[]
    OR?: UserSportWhereInput[]
    NOT?: UserSportWhereInput | UserSportWhereInput[]
    userId?: StringFilter<"UserSport"> | string
    sportId?: StringFilter<"UserSport"> | string
    skillLevel?: StringFilter<"UserSport"> | string
    experience?: IntNullableFilter<"UserSport"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
  }

  export type UserSportOrderByWithRelationInput = {
    userId?: SortOrder
    sportId?: SortOrder
    skillLevel?: SortOrder
    experience?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    sport?: SportOrderByWithRelationInput
  }

  export type UserSportWhereUniqueInput = Prisma.AtLeast<{
    userId_sportId?: UserSportUserIdSportIdCompoundUniqueInput
    AND?: UserSportWhereInput | UserSportWhereInput[]
    OR?: UserSportWhereInput[]
    NOT?: UserSportWhereInput | UserSportWhereInput[]
    userId?: StringFilter<"UserSport"> | string
    sportId?: StringFilter<"UserSport"> | string
    skillLevel?: StringFilter<"UserSport"> | string
    experience?: IntNullableFilter<"UserSport"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
  }, "userId_sportId">

  export type UserSportOrderByWithAggregationInput = {
    userId?: SortOrder
    sportId?: SortOrder
    skillLevel?: SortOrder
    experience?: SortOrderInput | SortOrder
    _count?: UserSportCountOrderByAggregateInput
    _avg?: UserSportAvgOrderByAggregateInput
    _max?: UserSportMaxOrderByAggregateInput
    _min?: UserSportMinOrderByAggregateInput
    _sum?: UserSportSumOrderByAggregateInput
  }

  export type UserSportScalarWhereWithAggregatesInput = {
    AND?: UserSportScalarWhereWithAggregatesInput | UserSportScalarWhereWithAggregatesInput[]
    OR?: UserSportScalarWhereWithAggregatesInput[]
    NOT?: UserSportScalarWhereWithAggregatesInput | UserSportScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserSport"> | string
    sportId?: StringWithAggregatesFilter<"UserSport"> | string
    skillLevel?: StringWithAggregatesFilter<"UserSport"> | string
    experience?: IntNullableWithAggregatesFilter<"UserSport"> | number | null
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    creatorId?: StringFilter<"Match"> | string
    sportId?: StringFilter<"Match"> | string
    title?: StringFilter<"Match"> | string
    latitude?: FloatFilter<"Match"> | number
    longitude?: FloatFilter<"Match"> | number
    address?: StringNullableFilter<"Match"> | string | null
    venueName?: StringNullableFilter<"Match"> | string | null
    venueType?: StringFilter<"Match"> | string
    scheduledTime?: DateTimeFilter<"Match"> | Date | string
    maxPlayers?: IntFilter<"Match"> | number
    status?: StringFilter<"Match"> | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
    participants?: MatchParticipantListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    sportId?: SortOrder
    title?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrderInput | SortOrder
    venueName?: SortOrderInput | SortOrder
    venueType?: SortOrder
    scheduledTime?: SortOrder
    maxPlayers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    sport?: SportOrderByWithRelationInput
    participants?: MatchParticipantOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    creatorId?: StringFilter<"Match"> | string
    sportId?: StringFilter<"Match"> | string
    title?: StringFilter<"Match"> | string
    latitude?: FloatFilter<"Match"> | number
    longitude?: FloatFilter<"Match"> | number
    address?: StringNullableFilter<"Match"> | string | null
    venueName?: StringNullableFilter<"Match"> | string | null
    venueType?: StringFilter<"Match"> | string
    scheduledTime?: DateTimeFilter<"Match"> | Date | string
    maxPlayers?: IntFilter<"Match"> | number
    status?: StringFilter<"Match"> | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
    participants?: MatchParticipantListRelationFilter
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    sportId?: SortOrder
    title?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrderInput | SortOrder
    venueName?: SortOrderInput | SortOrder
    venueType?: SortOrder
    scheduledTime?: SortOrder
    maxPlayers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    creatorId?: StringWithAggregatesFilter<"Match"> | string
    sportId?: StringWithAggregatesFilter<"Match"> | string
    title?: StringWithAggregatesFilter<"Match"> | string
    latitude?: FloatWithAggregatesFilter<"Match"> | number
    longitude?: FloatWithAggregatesFilter<"Match"> | number
    address?: StringNullableWithAggregatesFilter<"Match"> | string | null
    venueName?: StringNullableWithAggregatesFilter<"Match"> | string | null
    venueType?: StringWithAggregatesFilter<"Match"> | string
    scheduledTime?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    maxPlayers?: IntWithAggregatesFilter<"Match"> | number
    status?: StringWithAggregatesFilter<"Match"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type MatchParticipantWhereInput = {
    AND?: MatchParticipantWhereInput | MatchParticipantWhereInput[]
    OR?: MatchParticipantWhereInput[]
    NOT?: MatchParticipantWhereInput | MatchParticipantWhereInput[]
    matchId?: StringFilter<"MatchParticipant"> | string
    userId?: StringFilter<"MatchParticipant"> | string
    status?: StringFilter<"MatchParticipant"> | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchParticipantOrderByWithRelationInput = {
    matchId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    match?: MatchOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MatchParticipantWhereUniqueInput = Prisma.AtLeast<{
    matchId_userId?: MatchParticipantMatchIdUserIdCompoundUniqueInput
    AND?: MatchParticipantWhereInput | MatchParticipantWhereInput[]
    OR?: MatchParticipantWhereInput[]
    NOT?: MatchParticipantWhereInput | MatchParticipantWhereInput[]
    matchId?: StringFilter<"MatchParticipant"> | string
    userId?: StringFilter<"MatchParticipant"> | string
    status?: StringFilter<"MatchParticipant"> | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "matchId_userId">

  export type MatchParticipantOrderByWithAggregationInput = {
    matchId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    _count?: MatchParticipantCountOrderByAggregateInput
    _max?: MatchParticipantMaxOrderByAggregateInput
    _min?: MatchParticipantMinOrderByAggregateInput
  }

  export type MatchParticipantScalarWhereWithAggregatesInput = {
    AND?: MatchParticipantScalarWhereWithAggregatesInput | MatchParticipantScalarWhereWithAggregatesInput[]
    OR?: MatchParticipantScalarWhereWithAggregatesInput[]
    NOT?: MatchParticipantScalarWhereWithAggregatesInput | MatchParticipantScalarWhereWithAggregatesInput[]
    matchId?: StringWithAggregatesFilter<"MatchParticipant"> | string
    userId?: StringWithAggregatesFilter<"MatchParticipant"> | string
    status?: StringWithAggregatesFilter<"MatchParticipant"> | string
  }

  export type PlayRequestWhereInput = {
    AND?: PlayRequestWhereInput | PlayRequestWhereInput[]
    OR?: PlayRequestWhereInput[]
    NOT?: PlayRequestWhereInput | PlayRequestWhereInput[]
    id?: StringFilter<"PlayRequest"> | string
    senderId?: StringFilter<"PlayRequest"> | string
    receiverId?: StringFilter<"PlayRequest"> | string
    status?: StringFilter<"PlayRequest"> | string
    createdAt?: DateTimeFilter<"PlayRequest"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlayRequestOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type PlayRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayRequestWhereInput | PlayRequestWhereInput[]
    OR?: PlayRequestWhereInput[]
    NOT?: PlayRequestWhereInput | PlayRequestWhereInput[]
    senderId?: StringFilter<"PlayRequest"> | string
    receiverId?: StringFilter<"PlayRequest"> | string
    status?: StringFilter<"PlayRequest"> | string
    createdAt?: DateTimeFilter<"PlayRequest"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PlayRequestOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PlayRequestCountOrderByAggregateInput
    _max?: PlayRequestMaxOrderByAggregateInput
    _min?: PlayRequestMinOrderByAggregateInput
  }

  export type PlayRequestScalarWhereWithAggregatesInput = {
    AND?: PlayRequestScalarWhereWithAggregatesInput | PlayRequestScalarWhereWithAggregatesInput[]
    OR?: PlayRequestScalarWhereWithAggregatesInput[]
    NOT?: PlayRequestScalarWhereWithAggregatesInput | PlayRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayRequest"> | string
    senderId?: StringWithAggregatesFilter<"PlayRequest"> | string
    receiverId?: StringWithAggregatesFilter<"PlayRequest"> | string
    status?: StringWithAggregatesFilter<"PlayRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PlayRequest"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
    createdMatches?: MatchCreateNestedManyWithoutCreatorInput
    participations?: MatchParticipantCreateNestedManyWithoutUserInput
    sports?: UserSportCreateNestedManyWithoutUserInput
    sentRequests?: PlayRequestCreateNestedManyWithoutSenderInput
    receivedRequests?: PlayRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
    createdMatches?: MatchUncheckedCreateNestedManyWithoutCreatorInput
    participations?: MatchParticipantUncheckedCreateNestedManyWithoutUserInput
    sports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: PlayRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: PlayRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdMatches?: MatchUpdateManyWithoutCreatorNestedInput
    participations?: MatchParticipantUpdateManyWithoutUserNestedInput
    sports?: UserSportUpdateManyWithoutUserNestedInput
    sentRequests?: PlayRequestUpdateManyWithoutSenderNestedInput
    receivedRequests?: PlayRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdMatches?: MatchUncheckedUpdateManyWithoutCreatorNestedInput
    participations?: MatchParticipantUncheckedUpdateManyWithoutUserNestedInput
    sports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: PlayRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: PlayRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SportCreateInput = {
    id?: string
    name: string
    category: string
    iconUrl?: string | null
    matches?: MatchCreateNestedManyWithoutSportInput
    users?: UserSportCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    iconUrl?: string | null
    matches?: MatchUncheckedCreateNestedManyWithoutSportInput
    users?: UserSportUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    matches?: MatchUpdateManyWithoutSportNestedInput
    users?: UserSportUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    matches?: MatchUncheckedUpdateManyWithoutSportNestedInput
    users?: UserSportUncheckedUpdateManyWithoutSportNestedInput
  }

  export type SportCreateManyInput = {
    id?: string
    name: string
    category: string
    iconUrl?: string | null
  }

  export type SportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSportCreateInput = {
    skillLevel: string
    experience?: number | null
    user: UserCreateNestedOneWithoutSportsInput
    sport: SportCreateNestedOneWithoutUsersInput
  }

  export type UserSportUncheckedCreateInput = {
    userId: string
    sportId: string
    skillLevel: string
    experience?: number | null
  }

  export type UserSportUpdateInput = {
    skillLevel?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutSportsNestedInput
    sport?: SportUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSportUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    skillLevel?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserSportCreateManyInput = {
    userId: string
    sportId: string
    skillLevel: string
    experience?: number | null
  }

  export type UserSportUpdateManyMutationInput = {
    skillLevel?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserSportUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    skillLevel?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchCreateInput = {
    id?: string
    title: string
    latitude: number
    longitude: number
    address?: string | null
    venueName?: string | null
    venueType: string
    scheduledTime: Date | string
    maxPlayers: number
    status?: string
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedMatchesInput
    sport: SportCreateNestedOneWithoutMatchesInput
    participants?: MatchParticipantCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    creatorId: string
    sportId: string
    title: string
    latitude: number
    longitude: number
    address?: string | null
    venueName?: string | null
    venueType: string
    scheduledTime: Date | string
    maxPlayers: number
    status?: string
    createdAt?: Date | string
    participants?: MatchParticipantUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueType?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedMatchesNestedInput
    sport?: SportUpdateOneRequiredWithoutMatchesNestedInput
    participants?: MatchParticipantUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueType?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MatchParticipantUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    creatorId: string
    sportId: string
    title: string
    latitude: number
    longitude: number
    address?: string | null
    venueName?: string | null
    venueType: string
    scheduledTime: Date | string
    maxPlayers: number
    status?: string
    createdAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueType?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueType?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchParticipantCreateInput = {
    status?: string
    match: MatchCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutParticipationsInput
  }

  export type MatchParticipantUncheckedCreateInput = {
    matchId: string
    userId: string
    status?: string
  }

  export type MatchParticipantUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    match?: MatchUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type MatchParticipantUncheckedUpdateInput = {
    matchId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MatchParticipantCreateManyInput = {
    matchId: string
    userId: string
    status?: string
  }

  export type MatchParticipantUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MatchParticipantUncheckedUpdateManyInput = {
    matchId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PlayRequestCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentRequestsInput
    receiver: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type PlayRequestUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    status?: string
    createdAt?: Date | string
  }

  export type PlayRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type PlayRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayRequestCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    status?: string
    createdAt?: Date | string
  }

  export type PlayRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type MatchParticipantListRelationFilter = {
    every?: MatchParticipantWhereInput
    some?: MatchParticipantWhereInput
    none?: MatchParticipantWhereInput
  }

  export type UserSportListRelationFilter = {
    every?: UserSportWhereInput
    some?: UserSportWhereInput
    none?: UserSportWhereInput
  }

  export type PlayRequestListRelationFilter = {
    every?: PlayRequestWhereInput
    some?: PlayRequestWhereInput
    none?: PlayRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    profileImageUrl?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    isAvailableNow?: SortOrder
    availability?: SortOrder
    playingLocations?: SortOrder
    privacyRadius?: SortOrder
    darkMode?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    privacyRadius?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    profileImageUrl?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    isAvailableNow?: SortOrder
    availability?: SortOrder
    playingLocations?: SortOrder
    privacyRadius?: SortOrder
    darkMode?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    profileImageUrl?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    isAvailableNow?: SortOrder
    availability?: SortOrder
    playingLocations?: SortOrder
    privacyRadius?: SortOrder
    darkMode?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    privacyRadius?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SportCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    iconUrl?: SortOrder
  }

  export type SportMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    iconUrl?: SortOrder
  }

  export type SportMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    iconUrl?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SportScalarRelationFilter = {
    is?: SportWhereInput
    isNot?: SportWhereInput
  }

  export type UserSportUserIdSportIdCompoundUniqueInput = {
    userId: string
    sportId: string
  }

  export type UserSportCountOrderByAggregateInput = {
    userId?: SortOrder
    sportId?: SortOrder
    skillLevel?: SortOrder
    experience?: SortOrder
  }

  export type UserSportAvgOrderByAggregateInput = {
    experience?: SortOrder
  }

  export type UserSportMaxOrderByAggregateInput = {
    userId?: SortOrder
    sportId?: SortOrder
    skillLevel?: SortOrder
    experience?: SortOrder
  }

  export type UserSportMinOrderByAggregateInput = {
    userId?: SortOrder
    sportId?: SortOrder
    skillLevel?: SortOrder
    experience?: SortOrder
  }

  export type UserSportSumOrderByAggregateInput = {
    experience?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    sportId?: SortOrder
    title?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    venueName?: SortOrder
    venueType?: SortOrder
    scheduledTime?: SortOrder
    maxPlayers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    maxPlayers?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    sportId?: SortOrder
    title?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    venueName?: SortOrder
    venueType?: SortOrder
    scheduledTime?: SortOrder
    maxPlayers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    sportId?: SortOrder
    title?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    venueName?: SortOrder
    venueType?: SortOrder
    scheduledTime?: SortOrder
    maxPlayers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    maxPlayers?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MatchScalarRelationFilter = {
    is?: MatchWhereInput
    isNot?: MatchWhereInput
  }

  export type MatchParticipantMatchIdUserIdCompoundUniqueInput = {
    matchId: string
    userId: string
  }

  export type MatchParticipantCountOrderByAggregateInput = {
    matchId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type MatchParticipantMaxOrderByAggregateInput = {
    matchId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type MatchParticipantMinOrderByAggregateInput = {
    matchId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type PlayRequestCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayRequestMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MatchCreateWithoutCreatorInput, MatchUncheckedCreateWithoutCreatorInput> | MatchCreateWithoutCreatorInput[] | MatchUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutCreatorInput | MatchCreateOrConnectWithoutCreatorInput[]
    createMany?: MatchCreateManyCreatorInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchParticipantCreateWithoutUserInput, MatchParticipantUncheckedCreateWithoutUserInput> | MatchParticipantCreateWithoutUserInput[] | MatchParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchParticipantCreateOrConnectWithoutUserInput | MatchParticipantCreateOrConnectWithoutUserInput[]
    createMany?: MatchParticipantCreateManyUserInputEnvelope
    connect?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
  }

  export type UserSportCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput> | UserSportCreateWithoutUserInput[] | UserSportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutUserInput | UserSportCreateOrConnectWithoutUserInput[]
    createMany?: UserSportCreateManyUserInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type PlayRequestCreateNestedManyWithoutSenderInput = {
    create?: XOR<PlayRequestCreateWithoutSenderInput, PlayRequestUncheckedCreateWithoutSenderInput> | PlayRequestCreateWithoutSenderInput[] | PlayRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PlayRequestCreateOrConnectWithoutSenderInput | PlayRequestCreateOrConnectWithoutSenderInput[]
    createMany?: PlayRequestCreateManySenderInputEnvelope
    connect?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
  }

  export type PlayRequestCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PlayRequestCreateWithoutReceiverInput, PlayRequestUncheckedCreateWithoutReceiverInput> | PlayRequestCreateWithoutReceiverInput[] | PlayRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PlayRequestCreateOrConnectWithoutReceiverInput | PlayRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: PlayRequestCreateManyReceiverInputEnvelope
    connect?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MatchCreateWithoutCreatorInput, MatchUncheckedCreateWithoutCreatorInput> | MatchCreateWithoutCreatorInput[] | MatchUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutCreatorInput | MatchCreateOrConnectWithoutCreatorInput[]
    createMany?: MatchCreateManyCreatorInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchParticipantCreateWithoutUserInput, MatchParticipantUncheckedCreateWithoutUserInput> | MatchParticipantCreateWithoutUserInput[] | MatchParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchParticipantCreateOrConnectWithoutUserInput | MatchParticipantCreateOrConnectWithoutUserInput[]
    createMany?: MatchParticipantCreateManyUserInputEnvelope
    connect?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
  }

  export type UserSportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput> | UserSportCreateWithoutUserInput[] | UserSportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutUserInput | UserSportCreateOrConnectWithoutUserInput[]
    createMany?: UserSportCreateManyUserInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type PlayRequestUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<PlayRequestCreateWithoutSenderInput, PlayRequestUncheckedCreateWithoutSenderInput> | PlayRequestCreateWithoutSenderInput[] | PlayRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PlayRequestCreateOrConnectWithoutSenderInput | PlayRequestCreateOrConnectWithoutSenderInput[]
    createMany?: PlayRequestCreateManySenderInputEnvelope
    connect?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
  }

  export type PlayRequestUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PlayRequestCreateWithoutReceiverInput, PlayRequestUncheckedCreateWithoutReceiverInput> | PlayRequestCreateWithoutReceiverInput[] | PlayRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PlayRequestCreateOrConnectWithoutReceiverInput | PlayRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: PlayRequestCreateManyReceiverInputEnvelope
    connect?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MatchUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MatchCreateWithoutCreatorInput, MatchUncheckedCreateWithoutCreatorInput> | MatchCreateWithoutCreatorInput[] | MatchUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutCreatorInput | MatchCreateOrConnectWithoutCreatorInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutCreatorInput | MatchUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MatchCreateManyCreatorInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutCreatorInput | MatchUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutCreatorInput | MatchUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchParticipantCreateWithoutUserInput, MatchParticipantUncheckedCreateWithoutUserInput> | MatchParticipantCreateWithoutUserInput[] | MatchParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchParticipantCreateOrConnectWithoutUserInput | MatchParticipantCreateOrConnectWithoutUserInput[]
    upsert?: MatchParticipantUpsertWithWhereUniqueWithoutUserInput | MatchParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchParticipantCreateManyUserInputEnvelope
    set?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    disconnect?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    delete?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    connect?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    update?: MatchParticipantUpdateWithWhereUniqueWithoutUserInput | MatchParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchParticipantUpdateManyWithWhereWithoutUserInput | MatchParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchParticipantScalarWhereInput | MatchParticipantScalarWhereInput[]
  }

  export type UserSportUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput> | UserSportCreateWithoutUserInput[] | UserSportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutUserInput | UserSportCreateOrConnectWithoutUserInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutUserInput | UserSportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSportCreateManyUserInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutUserInput | UserSportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutUserInput | UserSportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type PlayRequestUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PlayRequestCreateWithoutSenderInput, PlayRequestUncheckedCreateWithoutSenderInput> | PlayRequestCreateWithoutSenderInput[] | PlayRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PlayRequestCreateOrConnectWithoutSenderInput | PlayRequestCreateOrConnectWithoutSenderInput[]
    upsert?: PlayRequestUpsertWithWhereUniqueWithoutSenderInput | PlayRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PlayRequestCreateManySenderInputEnvelope
    set?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    disconnect?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    delete?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    connect?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    update?: PlayRequestUpdateWithWhereUniqueWithoutSenderInput | PlayRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PlayRequestUpdateManyWithWhereWithoutSenderInput | PlayRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PlayRequestScalarWhereInput | PlayRequestScalarWhereInput[]
  }

  export type PlayRequestUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PlayRequestCreateWithoutReceiverInput, PlayRequestUncheckedCreateWithoutReceiverInput> | PlayRequestCreateWithoutReceiverInput[] | PlayRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PlayRequestCreateOrConnectWithoutReceiverInput | PlayRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: PlayRequestUpsertWithWhereUniqueWithoutReceiverInput | PlayRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PlayRequestCreateManyReceiverInputEnvelope
    set?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    disconnect?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    delete?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    connect?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    update?: PlayRequestUpdateWithWhereUniqueWithoutReceiverInput | PlayRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PlayRequestUpdateManyWithWhereWithoutReceiverInput | PlayRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PlayRequestScalarWhereInput | PlayRequestScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MatchCreateWithoutCreatorInput, MatchUncheckedCreateWithoutCreatorInput> | MatchCreateWithoutCreatorInput[] | MatchUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutCreatorInput | MatchCreateOrConnectWithoutCreatorInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutCreatorInput | MatchUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MatchCreateManyCreatorInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutCreatorInput | MatchUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutCreatorInput | MatchUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchParticipantCreateWithoutUserInput, MatchParticipantUncheckedCreateWithoutUserInput> | MatchParticipantCreateWithoutUserInput[] | MatchParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchParticipantCreateOrConnectWithoutUserInput | MatchParticipantCreateOrConnectWithoutUserInput[]
    upsert?: MatchParticipantUpsertWithWhereUniqueWithoutUserInput | MatchParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchParticipantCreateManyUserInputEnvelope
    set?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    disconnect?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    delete?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    connect?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    update?: MatchParticipantUpdateWithWhereUniqueWithoutUserInput | MatchParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchParticipantUpdateManyWithWhereWithoutUserInput | MatchParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchParticipantScalarWhereInput | MatchParticipantScalarWhereInput[]
  }

  export type UserSportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput> | UserSportCreateWithoutUserInput[] | UserSportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutUserInput | UserSportCreateOrConnectWithoutUserInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutUserInput | UserSportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSportCreateManyUserInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutUserInput | UserSportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutUserInput | UserSportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type PlayRequestUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PlayRequestCreateWithoutSenderInput, PlayRequestUncheckedCreateWithoutSenderInput> | PlayRequestCreateWithoutSenderInput[] | PlayRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PlayRequestCreateOrConnectWithoutSenderInput | PlayRequestCreateOrConnectWithoutSenderInput[]
    upsert?: PlayRequestUpsertWithWhereUniqueWithoutSenderInput | PlayRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PlayRequestCreateManySenderInputEnvelope
    set?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    disconnect?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    delete?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    connect?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    update?: PlayRequestUpdateWithWhereUniqueWithoutSenderInput | PlayRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PlayRequestUpdateManyWithWhereWithoutSenderInput | PlayRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PlayRequestScalarWhereInput | PlayRequestScalarWhereInput[]
  }

  export type PlayRequestUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PlayRequestCreateWithoutReceiverInput, PlayRequestUncheckedCreateWithoutReceiverInput> | PlayRequestCreateWithoutReceiverInput[] | PlayRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PlayRequestCreateOrConnectWithoutReceiverInput | PlayRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: PlayRequestUpsertWithWhereUniqueWithoutReceiverInput | PlayRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PlayRequestCreateManyReceiverInputEnvelope
    set?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    disconnect?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    delete?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    connect?: PlayRequestWhereUniqueInput | PlayRequestWhereUniqueInput[]
    update?: PlayRequestUpdateWithWhereUniqueWithoutReceiverInput | PlayRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PlayRequestUpdateManyWithWhereWithoutReceiverInput | PlayRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PlayRequestScalarWhereInput | PlayRequestScalarWhereInput[]
  }

  export type MatchCreateNestedManyWithoutSportInput = {
    create?: XOR<MatchCreateWithoutSportInput, MatchUncheckedCreateWithoutSportInput> | MatchCreateWithoutSportInput[] | MatchUncheckedCreateWithoutSportInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutSportInput | MatchCreateOrConnectWithoutSportInput[]
    createMany?: MatchCreateManySportInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type UserSportCreateNestedManyWithoutSportInput = {
    create?: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput> | UserSportCreateWithoutSportInput[] | UserSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportInput | UserSportCreateOrConnectWithoutSportInput[]
    createMany?: UserSportCreateManySportInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<MatchCreateWithoutSportInput, MatchUncheckedCreateWithoutSportInput> | MatchCreateWithoutSportInput[] | MatchUncheckedCreateWithoutSportInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutSportInput | MatchCreateOrConnectWithoutSportInput[]
    createMany?: MatchCreateManySportInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type UserSportUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput> | UserSportCreateWithoutSportInput[] | UserSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportInput | UserSportCreateOrConnectWithoutSportInput[]
    createMany?: UserSportCreateManySportInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type MatchUpdateManyWithoutSportNestedInput = {
    create?: XOR<MatchCreateWithoutSportInput, MatchUncheckedCreateWithoutSportInput> | MatchCreateWithoutSportInput[] | MatchUncheckedCreateWithoutSportInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutSportInput | MatchCreateOrConnectWithoutSportInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutSportInput | MatchUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: MatchCreateManySportInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutSportInput | MatchUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutSportInput | MatchUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type UserSportUpdateManyWithoutSportNestedInput = {
    create?: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput> | UserSportCreateWithoutSportInput[] | UserSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportInput | UserSportCreateOrConnectWithoutSportInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutSportInput | UserSportUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: UserSportCreateManySportInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutSportInput | UserSportUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutSportInput | UserSportUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<MatchCreateWithoutSportInput, MatchUncheckedCreateWithoutSportInput> | MatchCreateWithoutSportInput[] | MatchUncheckedCreateWithoutSportInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutSportInput | MatchCreateOrConnectWithoutSportInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutSportInput | MatchUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: MatchCreateManySportInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutSportInput | MatchUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutSportInput | MatchUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type UserSportUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput> | UserSportCreateWithoutSportInput[] | UserSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportInput | UserSportCreateOrConnectWithoutSportInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutSportInput | UserSportUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: UserSportCreateManySportInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutSportInput | UserSportUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutSportInput | UserSportUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSportsInput = {
    create?: XOR<UserCreateWithoutSportsInput, UserUncheckedCreateWithoutSportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSportsInput
    connect?: UserWhereUniqueInput
  }

  export type SportCreateNestedOneWithoutUsersInput = {
    create?: XOR<SportCreateWithoutUsersInput, SportUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SportCreateOrConnectWithoutUsersInput
    connect?: SportWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSportsNestedInput = {
    create?: XOR<UserCreateWithoutSportsInput, UserUncheckedCreateWithoutSportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSportsInput
    upsert?: UserUpsertWithoutSportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSportsInput, UserUpdateWithoutSportsInput>, UserUncheckedUpdateWithoutSportsInput>
  }

  export type SportUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SportCreateWithoutUsersInput, SportUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SportCreateOrConnectWithoutUsersInput
    upsert?: SportUpsertWithoutUsersInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutUsersInput, SportUpdateWithoutUsersInput>, SportUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutCreatedMatchesInput = {
    create?: XOR<UserCreateWithoutCreatedMatchesInput, UserUncheckedCreateWithoutCreatedMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMatchesInput
    connect?: UserWhereUniqueInput
  }

  export type SportCreateNestedOneWithoutMatchesInput = {
    create?: XOR<SportCreateWithoutMatchesInput, SportUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: SportCreateOrConnectWithoutMatchesInput
    connect?: SportWhereUniqueInput
  }

  export type MatchParticipantCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchParticipantCreateWithoutMatchInput, MatchParticipantUncheckedCreateWithoutMatchInput> | MatchParticipantCreateWithoutMatchInput[] | MatchParticipantUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchParticipantCreateOrConnectWithoutMatchInput | MatchParticipantCreateOrConnectWithoutMatchInput[]
    createMany?: MatchParticipantCreateManyMatchInputEnvelope
    connect?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
  }

  export type MatchParticipantUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchParticipantCreateWithoutMatchInput, MatchParticipantUncheckedCreateWithoutMatchInput> | MatchParticipantCreateWithoutMatchInput[] | MatchParticipantUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchParticipantCreateOrConnectWithoutMatchInput | MatchParticipantCreateOrConnectWithoutMatchInput[]
    createMany?: MatchParticipantCreateManyMatchInputEnvelope
    connect?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCreatedMatchesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedMatchesInput, UserUncheckedCreateWithoutCreatedMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMatchesInput
    upsert?: UserUpsertWithoutCreatedMatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedMatchesInput, UserUpdateWithoutCreatedMatchesInput>, UserUncheckedUpdateWithoutCreatedMatchesInput>
  }

  export type SportUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<SportCreateWithoutMatchesInput, SportUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: SportCreateOrConnectWithoutMatchesInput
    upsert?: SportUpsertWithoutMatchesInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutMatchesInput, SportUpdateWithoutMatchesInput>, SportUncheckedUpdateWithoutMatchesInput>
  }

  export type MatchParticipantUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchParticipantCreateWithoutMatchInput, MatchParticipantUncheckedCreateWithoutMatchInput> | MatchParticipantCreateWithoutMatchInput[] | MatchParticipantUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchParticipantCreateOrConnectWithoutMatchInput | MatchParticipantCreateOrConnectWithoutMatchInput[]
    upsert?: MatchParticipantUpsertWithWhereUniqueWithoutMatchInput | MatchParticipantUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchParticipantCreateManyMatchInputEnvelope
    set?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    disconnect?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    delete?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    connect?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    update?: MatchParticipantUpdateWithWhereUniqueWithoutMatchInput | MatchParticipantUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchParticipantUpdateManyWithWhereWithoutMatchInput | MatchParticipantUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchParticipantScalarWhereInput | MatchParticipantScalarWhereInput[]
  }

  export type MatchParticipantUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchParticipantCreateWithoutMatchInput, MatchParticipantUncheckedCreateWithoutMatchInput> | MatchParticipantCreateWithoutMatchInput[] | MatchParticipantUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchParticipantCreateOrConnectWithoutMatchInput | MatchParticipantCreateOrConnectWithoutMatchInput[]
    upsert?: MatchParticipantUpsertWithWhereUniqueWithoutMatchInput | MatchParticipantUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchParticipantCreateManyMatchInputEnvelope
    set?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    disconnect?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    delete?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    connect?: MatchParticipantWhereUniqueInput | MatchParticipantWhereUniqueInput[]
    update?: MatchParticipantUpdateWithWhereUniqueWithoutMatchInput | MatchParticipantUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchParticipantUpdateManyWithWhereWithoutMatchInput | MatchParticipantUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchParticipantScalarWhereInput | MatchParticipantScalarWhereInput[]
  }

  export type MatchCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<MatchCreateWithoutParticipantsInput, MatchUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutParticipantsInput
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    connect?: UserWhereUniqueInput
  }

  export type MatchUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<MatchCreateWithoutParticipantsInput, MatchUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutParticipantsInput
    upsert?: MatchUpsertWithoutParticipantsInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutParticipantsInput, MatchUpdateWithoutParticipantsInput>, MatchUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    upsert?: UserUpsertWithoutParticipationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipationsInput, UserUpdateWithoutParticipationsInput>, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type UserCreateNestedOneWithoutSentRequestsInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    upsert?: UserUpsertWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRequestsInput, UserUpdateWithoutSentRequestsInput>, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    upsert?: UserUpsertWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRequestsInput, UserUpdateWithoutReceivedRequestsInput>, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MatchCreateWithoutCreatorInput = {
    id?: string
    title: string
    latitude: number
    longitude: number
    address?: string | null
    venueName?: string | null
    venueType: string
    scheduledTime: Date | string
    maxPlayers: number
    status?: string
    createdAt?: Date | string
    sport: SportCreateNestedOneWithoutMatchesInput
    participants?: MatchParticipantCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutCreatorInput = {
    id?: string
    sportId: string
    title: string
    latitude: number
    longitude: number
    address?: string | null
    venueName?: string | null
    venueType: string
    scheduledTime: Date | string
    maxPlayers: number
    status?: string
    createdAt?: Date | string
    participants?: MatchParticipantUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutCreatorInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutCreatorInput, MatchUncheckedCreateWithoutCreatorInput>
  }

  export type MatchCreateManyCreatorInputEnvelope = {
    data: MatchCreateManyCreatorInput | MatchCreateManyCreatorInput[]
  }

  export type MatchParticipantCreateWithoutUserInput = {
    status?: string
    match: MatchCreateNestedOneWithoutParticipantsInput
  }

  export type MatchParticipantUncheckedCreateWithoutUserInput = {
    matchId: string
    status?: string
  }

  export type MatchParticipantCreateOrConnectWithoutUserInput = {
    where: MatchParticipantWhereUniqueInput
    create: XOR<MatchParticipantCreateWithoutUserInput, MatchParticipantUncheckedCreateWithoutUserInput>
  }

  export type MatchParticipantCreateManyUserInputEnvelope = {
    data: MatchParticipantCreateManyUserInput | MatchParticipantCreateManyUserInput[]
  }

  export type UserSportCreateWithoutUserInput = {
    skillLevel: string
    experience?: number | null
    sport: SportCreateNestedOneWithoutUsersInput
  }

  export type UserSportUncheckedCreateWithoutUserInput = {
    sportId: string
    skillLevel: string
    experience?: number | null
  }

  export type UserSportCreateOrConnectWithoutUserInput = {
    where: UserSportWhereUniqueInput
    create: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput>
  }

  export type UserSportCreateManyUserInputEnvelope = {
    data: UserSportCreateManyUserInput | UserSportCreateManyUserInput[]
  }

  export type PlayRequestCreateWithoutSenderInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type PlayRequestUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    status?: string
    createdAt?: Date | string
  }

  export type PlayRequestCreateOrConnectWithoutSenderInput = {
    where: PlayRequestWhereUniqueInput
    create: XOR<PlayRequestCreateWithoutSenderInput, PlayRequestUncheckedCreateWithoutSenderInput>
  }

  export type PlayRequestCreateManySenderInputEnvelope = {
    data: PlayRequestCreateManySenderInput | PlayRequestCreateManySenderInput[]
  }

  export type PlayRequestCreateWithoutReceiverInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentRequestsInput
  }

  export type PlayRequestUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    status?: string
    createdAt?: Date | string
  }

  export type PlayRequestCreateOrConnectWithoutReceiverInput = {
    where: PlayRequestWhereUniqueInput
    create: XOR<PlayRequestCreateWithoutReceiverInput, PlayRequestUncheckedCreateWithoutReceiverInput>
  }

  export type PlayRequestCreateManyReceiverInputEnvelope = {
    data: PlayRequestCreateManyReceiverInput | PlayRequestCreateManyReceiverInput[]
  }

  export type MatchUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutCreatorInput, MatchUncheckedUpdateWithoutCreatorInput>
    create: XOR<MatchCreateWithoutCreatorInput, MatchUncheckedCreateWithoutCreatorInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutCreatorInput, MatchUncheckedUpdateWithoutCreatorInput>
  }

  export type MatchUpdateManyWithWhereWithoutCreatorInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutCreatorInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    creatorId?: StringFilter<"Match"> | string
    sportId?: StringFilter<"Match"> | string
    title?: StringFilter<"Match"> | string
    latitude?: FloatFilter<"Match"> | number
    longitude?: FloatFilter<"Match"> | number
    address?: StringNullableFilter<"Match"> | string | null
    venueName?: StringNullableFilter<"Match"> | string | null
    venueType?: StringFilter<"Match"> | string
    scheduledTime?: DateTimeFilter<"Match"> | Date | string
    maxPlayers?: IntFilter<"Match"> | number
    status?: StringFilter<"Match"> | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type MatchParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchParticipantWhereUniqueInput
    update: XOR<MatchParticipantUpdateWithoutUserInput, MatchParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<MatchParticipantCreateWithoutUserInput, MatchParticipantUncheckedCreateWithoutUserInput>
  }

  export type MatchParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchParticipantWhereUniqueInput
    data: XOR<MatchParticipantUpdateWithoutUserInput, MatchParticipantUncheckedUpdateWithoutUserInput>
  }

  export type MatchParticipantUpdateManyWithWhereWithoutUserInput = {
    where: MatchParticipantScalarWhereInput
    data: XOR<MatchParticipantUpdateManyMutationInput, MatchParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchParticipantScalarWhereInput = {
    AND?: MatchParticipantScalarWhereInput | MatchParticipantScalarWhereInput[]
    OR?: MatchParticipantScalarWhereInput[]
    NOT?: MatchParticipantScalarWhereInput | MatchParticipantScalarWhereInput[]
    matchId?: StringFilter<"MatchParticipant"> | string
    userId?: StringFilter<"MatchParticipant"> | string
    status?: StringFilter<"MatchParticipant"> | string
  }

  export type UserSportUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSportWhereUniqueInput
    update: XOR<UserSportUpdateWithoutUserInput, UserSportUncheckedUpdateWithoutUserInput>
    create: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput>
  }

  export type UserSportUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSportWhereUniqueInput
    data: XOR<UserSportUpdateWithoutUserInput, UserSportUncheckedUpdateWithoutUserInput>
  }

  export type UserSportUpdateManyWithWhereWithoutUserInput = {
    where: UserSportScalarWhereInput
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSportScalarWhereInput = {
    AND?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
    OR?: UserSportScalarWhereInput[]
    NOT?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
    userId?: StringFilter<"UserSport"> | string
    sportId?: StringFilter<"UserSport"> | string
    skillLevel?: StringFilter<"UserSport"> | string
    experience?: IntNullableFilter<"UserSport"> | number | null
  }

  export type PlayRequestUpsertWithWhereUniqueWithoutSenderInput = {
    where: PlayRequestWhereUniqueInput
    update: XOR<PlayRequestUpdateWithoutSenderInput, PlayRequestUncheckedUpdateWithoutSenderInput>
    create: XOR<PlayRequestCreateWithoutSenderInput, PlayRequestUncheckedCreateWithoutSenderInput>
  }

  export type PlayRequestUpdateWithWhereUniqueWithoutSenderInput = {
    where: PlayRequestWhereUniqueInput
    data: XOR<PlayRequestUpdateWithoutSenderInput, PlayRequestUncheckedUpdateWithoutSenderInput>
  }

  export type PlayRequestUpdateManyWithWhereWithoutSenderInput = {
    where: PlayRequestScalarWhereInput
    data: XOR<PlayRequestUpdateManyMutationInput, PlayRequestUncheckedUpdateManyWithoutSenderInput>
  }

  export type PlayRequestScalarWhereInput = {
    AND?: PlayRequestScalarWhereInput | PlayRequestScalarWhereInput[]
    OR?: PlayRequestScalarWhereInput[]
    NOT?: PlayRequestScalarWhereInput | PlayRequestScalarWhereInput[]
    id?: StringFilter<"PlayRequest"> | string
    senderId?: StringFilter<"PlayRequest"> | string
    receiverId?: StringFilter<"PlayRequest"> | string
    status?: StringFilter<"PlayRequest"> | string
    createdAt?: DateTimeFilter<"PlayRequest"> | Date | string
  }

  export type PlayRequestUpsertWithWhereUniqueWithoutReceiverInput = {
    where: PlayRequestWhereUniqueInput
    update: XOR<PlayRequestUpdateWithoutReceiverInput, PlayRequestUncheckedUpdateWithoutReceiverInput>
    create: XOR<PlayRequestCreateWithoutReceiverInput, PlayRequestUncheckedCreateWithoutReceiverInput>
  }

  export type PlayRequestUpdateWithWhereUniqueWithoutReceiverInput = {
    where: PlayRequestWhereUniqueInput
    data: XOR<PlayRequestUpdateWithoutReceiverInput, PlayRequestUncheckedUpdateWithoutReceiverInput>
  }

  export type PlayRequestUpdateManyWithWhereWithoutReceiverInput = {
    where: PlayRequestScalarWhereInput
    data: XOR<PlayRequestUpdateManyMutationInput, PlayRequestUncheckedUpdateManyWithoutReceiverInput>
  }

  export type MatchCreateWithoutSportInput = {
    id?: string
    title: string
    latitude: number
    longitude: number
    address?: string | null
    venueName?: string | null
    venueType: string
    scheduledTime: Date | string
    maxPlayers: number
    status?: string
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedMatchesInput
    participants?: MatchParticipantCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutSportInput = {
    id?: string
    creatorId: string
    title: string
    latitude: number
    longitude: number
    address?: string | null
    venueName?: string | null
    venueType: string
    scheduledTime: Date | string
    maxPlayers: number
    status?: string
    createdAt?: Date | string
    participants?: MatchParticipantUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutSportInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutSportInput, MatchUncheckedCreateWithoutSportInput>
  }

  export type MatchCreateManySportInputEnvelope = {
    data: MatchCreateManySportInput | MatchCreateManySportInput[]
  }

  export type UserSportCreateWithoutSportInput = {
    skillLevel: string
    experience?: number | null
    user: UserCreateNestedOneWithoutSportsInput
  }

  export type UserSportUncheckedCreateWithoutSportInput = {
    userId: string
    skillLevel: string
    experience?: number | null
  }

  export type UserSportCreateOrConnectWithoutSportInput = {
    where: UserSportWhereUniqueInput
    create: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput>
  }

  export type UserSportCreateManySportInputEnvelope = {
    data: UserSportCreateManySportInput | UserSportCreateManySportInput[]
  }

  export type MatchUpsertWithWhereUniqueWithoutSportInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutSportInput, MatchUncheckedUpdateWithoutSportInput>
    create: XOR<MatchCreateWithoutSportInput, MatchUncheckedCreateWithoutSportInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutSportInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutSportInput, MatchUncheckedUpdateWithoutSportInput>
  }

  export type MatchUpdateManyWithWhereWithoutSportInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutSportInput>
  }

  export type UserSportUpsertWithWhereUniqueWithoutSportInput = {
    where: UserSportWhereUniqueInput
    update: XOR<UserSportUpdateWithoutSportInput, UserSportUncheckedUpdateWithoutSportInput>
    create: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput>
  }

  export type UserSportUpdateWithWhereUniqueWithoutSportInput = {
    where: UserSportWhereUniqueInput
    data: XOR<UserSportUpdateWithoutSportInput, UserSportUncheckedUpdateWithoutSportInput>
  }

  export type UserSportUpdateManyWithWhereWithoutSportInput = {
    where: UserSportScalarWhereInput
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyWithoutSportInput>
  }

  export type UserCreateWithoutSportsInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
    createdMatches?: MatchCreateNestedManyWithoutCreatorInput
    participations?: MatchParticipantCreateNestedManyWithoutUserInput
    sentRequests?: PlayRequestCreateNestedManyWithoutSenderInput
    receivedRequests?: PlayRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSportsInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
    createdMatches?: MatchUncheckedCreateNestedManyWithoutCreatorInput
    participations?: MatchParticipantUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: PlayRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: PlayRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSportsInput, UserUncheckedCreateWithoutSportsInput>
  }

  export type SportCreateWithoutUsersInput = {
    id?: string
    name: string
    category: string
    iconUrl?: string | null
    matches?: MatchCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    category: string
    iconUrl?: string | null
    matches?: MatchUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutUsersInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutUsersInput, SportUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutSportsInput = {
    update: XOR<UserUpdateWithoutSportsInput, UserUncheckedUpdateWithoutSportsInput>
    create: XOR<UserCreateWithoutSportsInput, UserUncheckedCreateWithoutSportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSportsInput, UserUncheckedUpdateWithoutSportsInput>
  }

  export type UserUpdateWithoutSportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdMatches?: MatchUpdateManyWithoutCreatorNestedInput
    participations?: MatchParticipantUpdateManyWithoutUserNestedInput
    sentRequests?: PlayRequestUpdateManyWithoutSenderNestedInput
    receivedRequests?: PlayRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdMatches?: MatchUncheckedUpdateManyWithoutCreatorNestedInput
    participations?: MatchParticipantUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: PlayRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: PlayRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type SportUpsertWithoutUsersInput = {
    update: XOR<SportUpdateWithoutUsersInput, SportUncheckedUpdateWithoutUsersInput>
    create: XOR<SportCreateWithoutUsersInput, SportUncheckedCreateWithoutUsersInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutUsersInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutUsersInput, SportUncheckedUpdateWithoutUsersInput>
  }

  export type SportUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    matches?: MatchUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    matches?: MatchUncheckedUpdateManyWithoutSportNestedInput
  }

  export type UserCreateWithoutCreatedMatchesInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
    participations?: MatchParticipantCreateNestedManyWithoutUserInput
    sports?: UserSportCreateNestedManyWithoutUserInput
    sentRequests?: PlayRequestCreateNestedManyWithoutSenderInput
    receivedRequests?: PlayRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutCreatedMatchesInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
    participations?: MatchParticipantUncheckedCreateNestedManyWithoutUserInput
    sports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: PlayRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: PlayRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutCreatedMatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedMatchesInput, UserUncheckedCreateWithoutCreatedMatchesInput>
  }

  export type SportCreateWithoutMatchesInput = {
    id?: string
    name: string
    category: string
    iconUrl?: string | null
    users?: UserSportCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutMatchesInput = {
    id?: string
    name: string
    category: string
    iconUrl?: string | null
    users?: UserSportUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutMatchesInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutMatchesInput, SportUncheckedCreateWithoutMatchesInput>
  }

  export type MatchParticipantCreateWithoutMatchInput = {
    status?: string
    user: UserCreateNestedOneWithoutParticipationsInput
  }

  export type MatchParticipantUncheckedCreateWithoutMatchInput = {
    userId: string
    status?: string
  }

  export type MatchParticipantCreateOrConnectWithoutMatchInput = {
    where: MatchParticipantWhereUniqueInput
    create: XOR<MatchParticipantCreateWithoutMatchInput, MatchParticipantUncheckedCreateWithoutMatchInput>
  }

  export type MatchParticipantCreateManyMatchInputEnvelope = {
    data: MatchParticipantCreateManyMatchInput | MatchParticipantCreateManyMatchInput[]
  }

  export type UserUpsertWithoutCreatedMatchesInput = {
    update: XOR<UserUpdateWithoutCreatedMatchesInput, UserUncheckedUpdateWithoutCreatedMatchesInput>
    create: XOR<UserCreateWithoutCreatedMatchesInput, UserUncheckedCreateWithoutCreatedMatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedMatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedMatchesInput, UserUncheckedUpdateWithoutCreatedMatchesInput>
  }

  export type UserUpdateWithoutCreatedMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: MatchParticipantUpdateManyWithoutUserNestedInput
    sports?: UserSportUpdateManyWithoutUserNestedInput
    sentRequests?: PlayRequestUpdateManyWithoutSenderNestedInput
    receivedRequests?: PlayRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: MatchParticipantUncheckedUpdateManyWithoutUserNestedInput
    sports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: PlayRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: PlayRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type SportUpsertWithoutMatchesInput = {
    update: XOR<SportUpdateWithoutMatchesInput, SportUncheckedUpdateWithoutMatchesInput>
    create: XOR<SportCreateWithoutMatchesInput, SportUncheckedCreateWithoutMatchesInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutMatchesInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutMatchesInput, SportUncheckedUpdateWithoutMatchesInput>
  }

  export type SportUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserSportUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserSportUncheckedUpdateManyWithoutSportNestedInput
  }

  export type MatchParticipantUpsertWithWhereUniqueWithoutMatchInput = {
    where: MatchParticipantWhereUniqueInput
    update: XOR<MatchParticipantUpdateWithoutMatchInput, MatchParticipantUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchParticipantCreateWithoutMatchInput, MatchParticipantUncheckedCreateWithoutMatchInput>
  }

  export type MatchParticipantUpdateWithWhereUniqueWithoutMatchInput = {
    where: MatchParticipantWhereUniqueInput
    data: XOR<MatchParticipantUpdateWithoutMatchInput, MatchParticipantUncheckedUpdateWithoutMatchInput>
  }

  export type MatchParticipantUpdateManyWithWhereWithoutMatchInput = {
    where: MatchParticipantScalarWhereInput
    data: XOR<MatchParticipantUpdateManyMutationInput, MatchParticipantUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchCreateWithoutParticipantsInput = {
    id?: string
    title: string
    latitude: number
    longitude: number
    address?: string | null
    venueName?: string | null
    venueType: string
    scheduledTime: Date | string
    maxPlayers: number
    status?: string
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedMatchesInput
    sport: SportCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutParticipantsInput = {
    id?: string
    creatorId: string
    sportId: string
    title: string
    latitude: number
    longitude: number
    address?: string | null
    venueName?: string | null
    venueType: string
    scheduledTime: Date | string
    maxPlayers: number
    status?: string
    createdAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutParticipantsInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutParticipantsInput, MatchUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutParticipationsInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
    createdMatches?: MatchCreateNestedManyWithoutCreatorInput
    sports?: UserSportCreateNestedManyWithoutUserInput
    sentRequests?: PlayRequestCreateNestedManyWithoutSenderInput
    receivedRequests?: PlayRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutParticipationsInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
    createdMatches?: MatchUncheckedCreateNestedManyWithoutCreatorInput
    sports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: PlayRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: PlayRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutParticipationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
  }

  export type MatchUpsertWithoutParticipantsInput = {
    update: XOR<MatchUpdateWithoutParticipantsInput, MatchUncheckedUpdateWithoutParticipantsInput>
    create: XOR<MatchCreateWithoutParticipantsInput, MatchUncheckedCreateWithoutParticipantsInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutParticipantsInput, MatchUncheckedUpdateWithoutParticipantsInput>
  }

  export type MatchUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueType?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedMatchesNestedInput
    sport?: SportUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueType?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutParticipationsInput = {
    update: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type UserUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdMatches?: MatchUpdateManyWithoutCreatorNestedInput
    sports?: UserSportUpdateManyWithoutUserNestedInput
    sentRequests?: PlayRequestUpdateManyWithoutSenderNestedInput
    receivedRequests?: PlayRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdMatches?: MatchUncheckedUpdateManyWithoutCreatorNestedInput
    sports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: PlayRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: PlayRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutSentRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
    createdMatches?: MatchCreateNestedManyWithoutCreatorInput
    participations?: MatchParticipantCreateNestedManyWithoutUserInput
    sports?: UserSportCreateNestedManyWithoutUserInput
    receivedRequests?: PlayRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
    createdMatches?: MatchUncheckedCreateNestedManyWithoutCreatorInput
    participations?: MatchParticipantUncheckedCreateNestedManyWithoutUserInput
    sports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    receivedRequests?: PlayRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
  }

  export type UserCreateWithoutReceivedRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
    createdMatches?: MatchCreateNestedManyWithoutCreatorInput
    participations?: MatchParticipantCreateNestedManyWithoutUserInput
    sports?: UserSportCreateNestedManyWithoutUserInput
    sentRequests?: PlayRequestCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    bio?: string | null
    profileImageUrl?: string | null
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    isAvailableNow?: boolean
    availability?: string | null
    playingLocations?: string | null
    privacyRadius?: number
    darkMode?: boolean
    createdAt?: Date | string
    createdMatches?: MatchUncheckedCreateNestedManyWithoutCreatorInput
    participations?: MatchParticipantUncheckedCreateNestedManyWithoutUserInput
    sports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: PlayRequestUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
  }

  export type UserUpsertWithoutSentRequestsInput = {
    update: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateWithoutSentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdMatches?: MatchUpdateManyWithoutCreatorNestedInput
    participations?: MatchParticipantUpdateManyWithoutUserNestedInput
    sports?: UserSportUpdateManyWithoutUserNestedInput
    receivedRequests?: PlayRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdMatches?: MatchUncheckedUpdateManyWithoutCreatorNestedInput
    participations?: MatchParticipantUncheckedUpdateManyWithoutUserNestedInput
    sports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    receivedRequests?: PlayRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdMatches?: MatchUpdateManyWithoutCreatorNestedInput
    participations?: MatchParticipantUpdateManyWithoutUserNestedInput
    sports?: UserSportUpdateManyWithoutUserNestedInput
    sentRequests?: PlayRequestUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    playingLocations?: NullableStringFieldUpdateOperationsInput | string | null
    privacyRadius?: IntFieldUpdateOperationsInput | number
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdMatches?: MatchUncheckedUpdateManyWithoutCreatorNestedInput
    participations?: MatchParticipantUncheckedUpdateManyWithoutUserNestedInput
    sports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: PlayRequestUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type MatchCreateManyCreatorInput = {
    id?: string
    sportId: string
    title: string
    latitude: number
    longitude: number
    address?: string | null
    venueName?: string | null
    venueType: string
    scheduledTime: Date | string
    maxPlayers: number
    status?: string
    createdAt?: Date | string
  }

  export type MatchParticipantCreateManyUserInput = {
    matchId: string
    status?: string
  }

  export type UserSportCreateManyUserInput = {
    sportId: string
    skillLevel: string
    experience?: number | null
  }

  export type PlayRequestCreateManySenderInput = {
    id?: string
    receiverId: string
    status?: string
    createdAt?: Date | string
  }

  export type PlayRequestCreateManyReceiverInput = {
    id?: string
    senderId: string
    status?: string
    createdAt?: Date | string
  }

  export type MatchUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueType?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sport?: SportUpdateOneRequiredWithoutMatchesNestedInput
    participants?: MatchParticipantUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueType?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MatchParticipantUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueType?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchParticipantUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    match?: MatchUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type MatchParticipantUncheckedUpdateWithoutUserInput = {
    matchId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MatchParticipantUncheckedUpdateManyWithoutUserInput = {
    matchId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserSportUpdateWithoutUserInput = {
    skillLevel?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    sport?: SportUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSportUncheckedUpdateWithoutUserInput = {
    sportId?: StringFieldUpdateOperationsInput | string
    skillLevel?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserSportUncheckedUpdateManyWithoutUserInput = {
    sportId?: StringFieldUpdateOperationsInput | string
    skillLevel?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlayRequestUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type PlayRequestUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayRequestUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayRequestUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
  }

  export type PlayRequestUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayRequestUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManySportInput = {
    id?: string
    creatorId: string
    title: string
    latitude: number
    longitude: number
    address?: string | null
    venueName?: string | null
    venueType: string
    scheduledTime: Date | string
    maxPlayers: number
    status?: string
    createdAt?: Date | string
  }

  export type UserSportCreateManySportInput = {
    userId: string
    skillLevel: string
    experience?: number | null
  }

  export type MatchUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueType?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedMatchesNestedInput
    participants?: MatchParticipantUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueType?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MatchParticipantUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueType?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSportUpdateWithoutSportInput = {
    skillLevel?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutSportsNestedInput
  }

  export type UserSportUncheckedUpdateWithoutSportInput = {
    userId?: StringFieldUpdateOperationsInput | string
    skillLevel?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserSportUncheckedUpdateManyWithoutSportInput = {
    userId?: StringFieldUpdateOperationsInput | string
    skillLevel?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchParticipantCreateManyMatchInput = {
    userId: string
    status?: string
  }

  export type MatchParticipantUpdateWithoutMatchInput = {
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type MatchParticipantUncheckedUpdateWithoutMatchInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MatchParticipantUncheckedUpdateManyWithoutMatchInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}