
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
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model drop
 * 
 */
export type drop = $Result.DefaultSelection<Prisma.$dropPayload>
/**
 * Model claim
 * 
 */
export type claim = $Result.DefaultSelection<Prisma.$claimPayload>
/**
 * Model waitlist
 * 
 */
export type waitlist = $Result.DefaultSelection<Prisma.$waitlistPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drop`: Exposes CRUD operations for the **drop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drops
    * const drops = await prisma.drop.findMany()
    * ```
    */
  get drop(): Prisma.dropDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.claim`: Exposes CRUD operations for the **claim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claims
    * const claims = await prisma.claim.findMany()
    * ```
    */
  get claim(): Prisma.claimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waitlist`: Exposes CRUD operations for the **waitlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waitlists
    * const waitlists = await prisma.waitlist.findMany()
    * ```
    */
  get waitlist(): Prisma.waitlistDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    admin: 'admin',
    users: 'users',
    drop: 'drop',
    claim: 'claim',
    waitlist: 'waitlist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "users" | "drop" | "claim" | "waitlist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      drop: {
        payload: Prisma.$dropPayload<ExtArgs>
        fields: Prisma.dropFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dropFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dropPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dropFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dropPayload>
          }
          findFirst: {
            args: Prisma.dropFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dropPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dropFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dropPayload>
          }
          findMany: {
            args: Prisma.dropFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dropPayload>[]
          }
          create: {
            args: Prisma.dropCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dropPayload>
          }
          createMany: {
            args: Prisma.dropCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dropCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dropPayload>[]
          }
          delete: {
            args: Prisma.dropDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dropPayload>
          }
          update: {
            args: Prisma.dropUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dropPayload>
          }
          deleteMany: {
            args: Prisma.dropDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dropUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dropUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dropPayload>[]
          }
          upsert: {
            args: Prisma.dropUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dropPayload>
          }
          aggregate: {
            args: Prisma.DropAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrop>
          }
          groupBy: {
            args: Prisma.dropGroupByArgs<ExtArgs>
            result: $Utils.Optional<DropGroupByOutputType>[]
          }
          count: {
            args: Prisma.dropCountArgs<ExtArgs>
            result: $Utils.Optional<DropCountAggregateOutputType> | number
          }
        }
      }
      claim: {
        payload: Prisma.$claimPayload<ExtArgs>
        fields: Prisma.claimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.claimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.claimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>
          }
          findFirst: {
            args: Prisma.claimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.claimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>
          }
          findMany: {
            args: Prisma.claimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>[]
          }
          create: {
            args: Prisma.claimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>
          }
          createMany: {
            args: Prisma.claimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.claimCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>[]
          }
          delete: {
            args: Prisma.claimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>
          }
          update: {
            args: Prisma.claimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>
          }
          deleteMany: {
            args: Prisma.claimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.claimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.claimUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>[]
          }
          upsert: {
            args: Prisma.claimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>
          }
          aggregate: {
            args: Prisma.ClaimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaim>
          }
          groupBy: {
            args: Prisma.claimGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.claimCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimCountAggregateOutputType> | number
          }
        }
      }
      waitlist: {
        payload: Prisma.$waitlistPayload<ExtArgs>
        fields: Prisma.waitlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.waitlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.waitlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
          }
          findFirst: {
            args: Prisma.waitlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.waitlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
          }
          findMany: {
            args: Prisma.waitlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>[]
          }
          create: {
            args: Prisma.waitlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
          }
          createMany: {
            args: Prisma.waitlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.waitlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>[]
          }
          delete: {
            args: Prisma.waitlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
          }
          update: {
            args: Prisma.waitlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
          }
          deleteMany: {
            args: Prisma.waitlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.waitlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.waitlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>[]
          }
          upsert: {
            args: Prisma.waitlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
          }
          aggregate: {
            args: Prisma.WaitlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaitlist>
          }
          groupBy: {
            args: Prisma.waitlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaitlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.waitlistCountArgs<ExtArgs>
            result: $Utils.Optional<WaitlistCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    admin?: adminOmit
    users?: usersOmit
    drop?: dropOmit
    claim?: claimOmit
    waitlist?: waitlistOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    claims: number
    waitlists: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | UsersCountOutputTypeCountClaimsArgs
    waitlists?: boolean | UsersCountOutputTypeCountWaitlistsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claimWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWaitlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: waitlistWhereInput
  }


  /**
   * Count Type DropCountOutputType
   */

  export type DropCountOutputType = {
    claims: number
    waitlists: number
  }

  export type DropCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | DropCountOutputTypeCountClaimsArgs
    waitlists?: boolean | DropCountOutputTypeCountWaitlistsArgs
  }

  // Custom InputTypes
  /**
   * DropCountOutputType without action
   */
  export type DropCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DropCountOutputType
     */
    select?: DropCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DropCountOutputType without action
   */
  export type DropCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claimWhereInput
  }

  /**
   * DropCountOutputType without action
   */
  export type DropCountOutputTypeCountWaitlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: waitlistWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    created_at: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    created_at?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    email: string
    password_hash: string
    created_at: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "created_at", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password_hash: string
      created_at: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminCreateManyAndReturnArgs>(args?: SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends adminUpdateManyAndReturnArgs>(args: SelectSubset<T, adminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly email: FieldRef<"admin", 'String'>
    readonly password_hash: FieldRef<"admin", 'String'>
    readonly created_at: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin createManyAndReturn
   */
  export type adminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin updateManyAndReturn
   */
  export type adminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password_hash: string
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    claims?: boolean | users$claimsArgs<ExtArgs>
    waitlists?: boolean | users$waitlistsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | users$claimsArgs<ExtArgs>
    waitlists?: boolean | users$waitlistsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      claims: Prisma.$claimPayload<ExtArgs>[]
      waitlists: Prisma.$waitlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password_hash: string
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claims<T extends users$claimsArgs<ExtArgs> = {}>(args?: Subset<T, users$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waitlists<T extends users$waitlistsArgs<ExtArgs> = {}>(args?: Subset<T, users$waitlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.claims
   */
  export type users$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    where?: claimWhereInput
    orderBy?: claimOrderByWithRelationInput | claimOrderByWithRelationInput[]
    cursor?: claimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * users.waitlists
   */
  export type users$waitlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistInclude<ExtArgs> | null
    where?: waitlistWhereInput
    orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
    cursor?: waitlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model drop
   */

  export type AggregateDrop = {
    _count: DropCountAggregateOutputType | null
    _avg: DropAvgAggregateOutputType | null
    _sum: DropSumAggregateOutputType | null
    _min: DropMinAggregateOutputType | null
    _max: DropMaxAggregateOutputType | null
  }

  export type DropAvgAggregateOutputType = {
    id: number | null
    claim_window: number | null
  }

  export type DropSumAggregateOutputType = {
    id: number | null
    claim_window: number | null
  }

  export type DropMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    drop_time: Date | null
    claim_window: number | null
    created_at: Date | null
  }

  export type DropMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    drop_time: Date | null
    claim_window: number | null
    created_at: Date | null
  }

  export type DropCountAggregateOutputType = {
    id: number
    title: number
    description: number
    drop_time: number
    claim_window: number
    created_at: number
    _all: number
  }


  export type DropAvgAggregateInputType = {
    id?: true
    claim_window?: true
  }

  export type DropSumAggregateInputType = {
    id?: true
    claim_window?: true
  }

  export type DropMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    drop_time?: true
    claim_window?: true
    created_at?: true
  }

  export type DropMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    drop_time?: true
    claim_window?: true
    created_at?: true
  }

  export type DropCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    drop_time?: true
    claim_window?: true
    created_at?: true
    _all?: true
  }

  export type DropAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drop to aggregate.
     */
    where?: dropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drops to fetch.
     */
    orderBy?: dropOrderByWithRelationInput | dropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned drops
    **/
    _count?: true | DropCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DropAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DropSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DropMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DropMaxAggregateInputType
  }

  export type GetDropAggregateType<T extends DropAggregateArgs> = {
        [P in keyof T & keyof AggregateDrop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrop[P]>
      : GetScalarType<T[P], AggregateDrop[P]>
  }




  export type dropGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dropWhereInput
    orderBy?: dropOrderByWithAggregationInput | dropOrderByWithAggregationInput[]
    by: DropScalarFieldEnum[] | DropScalarFieldEnum
    having?: dropScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DropCountAggregateInputType | true
    _avg?: DropAvgAggregateInputType
    _sum?: DropSumAggregateInputType
    _min?: DropMinAggregateInputType
    _max?: DropMaxAggregateInputType
  }

  export type DropGroupByOutputType = {
    id: number
    title: string
    description: string | null
    drop_time: Date
    claim_window: number | null
    created_at: Date
    _count: DropCountAggregateOutputType | null
    _avg: DropAvgAggregateOutputType | null
    _sum: DropSumAggregateOutputType | null
    _min: DropMinAggregateOutputType | null
    _max: DropMaxAggregateOutputType | null
  }

  type GetDropGroupByPayload<T extends dropGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DropGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DropGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DropGroupByOutputType[P]>
            : GetScalarType<T[P], DropGroupByOutputType[P]>
        }
      >
    >


  export type dropSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    drop_time?: boolean
    claim_window?: boolean
    created_at?: boolean
    claims?: boolean | drop$claimsArgs<ExtArgs>
    waitlists?: boolean | drop$waitlistsArgs<ExtArgs>
    _count?: boolean | DropCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drop"]>

  export type dropSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    drop_time?: boolean
    claim_window?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["drop"]>

  export type dropSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    drop_time?: boolean
    claim_window?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["drop"]>

  export type dropSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    drop_time?: boolean
    claim_window?: boolean
    created_at?: boolean
  }

  export type dropOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "drop_time" | "claim_window" | "created_at", ExtArgs["result"]["drop"]>
  export type dropInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | drop$claimsArgs<ExtArgs>
    waitlists?: boolean | drop$waitlistsArgs<ExtArgs>
    _count?: boolean | DropCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type dropIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type dropIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $dropPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "drop"
    objects: {
      claims: Prisma.$claimPayload<ExtArgs>[]
      waitlists: Prisma.$waitlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      drop_time: Date
      claim_window: number | null
      created_at: Date
    }, ExtArgs["result"]["drop"]>
    composites: {}
  }

  type dropGetPayload<S extends boolean | null | undefined | dropDefaultArgs> = $Result.GetResult<Prisma.$dropPayload, S>

  type dropCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dropFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DropCountAggregateInputType | true
    }

  export interface dropDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['drop'], meta: { name: 'drop' } }
    /**
     * Find zero or one Drop that matches the filter.
     * @param {dropFindUniqueArgs} args - Arguments to find a Drop
     * @example
     * // Get one Drop
     * const drop = await prisma.drop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dropFindUniqueArgs>(args: SelectSubset<T, dropFindUniqueArgs<ExtArgs>>): Prisma__dropClient<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dropFindUniqueOrThrowArgs} args - Arguments to find a Drop
     * @example
     * // Get one Drop
     * const drop = await prisma.drop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dropFindUniqueOrThrowArgs>(args: SelectSubset<T, dropFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dropClient<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dropFindFirstArgs} args - Arguments to find a Drop
     * @example
     * // Get one Drop
     * const drop = await prisma.drop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dropFindFirstArgs>(args?: SelectSubset<T, dropFindFirstArgs<ExtArgs>>): Prisma__dropClient<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dropFindFirstOrThrowArgs} args - Arguments to find a Drop
     * @example
     * // Get one Drop
     * const drop = await prisma.drop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dropFindFirstOrThrowArgs>(args?: SelectSubset<T, dropFindFirstOrThrowArgs<ExtArgs>>): Prisma__dropClient<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dropFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drops
     * const drops = await prisma.drop.findMany()
     * 
     * // Get first 10 Drops
     * const drops = await prisma.drop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dropWithIdOnly = await prisma.drop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dropFindManyArgs>(args?: SelectSubset<T, dropFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drop.
     * @param {dropCreateArgs} args - Arguments to create a Drop.
     * @example
     * // Create one Drop
     * const Drop = await prisma.drop.create({
     *   data: {
     *     // ... data to create a Drop
     *   }
     * })
     * 
     */
    create<T extends dropCreateArgs>(args: SelectSubset<T, dropCreateArgs<ExtArgs>>): Prisma__dropClient<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drops.
     * @param {dropCreateManyArgs} args - Arguments to create many Drops.
     * @example
     * // Create many Drops
     * const drop = await prisma.drop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dropCreateManyArgs>(args?: SelectSubset<T, dropCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drops and returns the data saved in the database.
     * @param {dropCreateManyAndReturnArgs} args - Arguments to create many Drops.
     * @example
     * // Create many Drops
     * const drop = await prisma.drop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drops and only return the `id`
     * const dropWithIdOnly = await prisma.drop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dropCreateManyAndReturnArgs>(args?: SelectSubset<T, dropCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drop.
     * @param {dropDeleteArgs} args - Arguments to delete one Drop.
     * @example
     * // Delete one Drop
     * const Drop = await prisma.drop.delete({
     *   where: {
     *     // ... filter to delete one Drop
     *   }
     * })
     * 
     */
    delete<T extends dropDeleteArgs>(args: SelectSubset<T, dropDeleteArgs<ExtArgs>>): Prisma__dropClient<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drop.
     * @param {dropUpdateArgs} args - Arguments to update one Drop.
     * @example
     * // Update one Drop
     * const drop = await prisma.drop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dropUpdateArgs>(args: SelectSubset<T, dropUpdateArgs<ExtArgs>>): Prisma__dropClient<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drops.
     * @param {dropDeleteManyArgs} args - Arguments to filter Drops to delete.
     * @example
     * // Delete a few Drops
     * const { count } = await prisma.drop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dropDeleteManyArgs>(args?: SelectSubset<T, dropDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drops
     * const drop = await prisma.drop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dropUpdateManyArgs>(args: SelectSubset<T, dropUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drops and returns the data updated in the database.
     * @param {dropUpdateManyAndReturnArgs} args - Arguments to update many Drops.
     * @example
     * // Update many Drops
     * const drop = await prisma.drop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drops and only return the `id`
     * const dropWithIdOnly = await prisma.drop.updateManyAndReturn({
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
    updateManyAndReturn<T extends dropUpdateManyAndReturnArgs>(args: SelectSubset<T, dropUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drop.
     * @param {dropUpsertArgs} args - Arguments to update or create a Drop.
     * @example
     * // Update or create a Drop
     * const drop = await prisma.drop.upsert({
     *   create: {
     *     // ... data to create a Drop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drop we want to update
     *   }
     * })
     */
    upsert<T extends dropUpsertArgs>(args: SelectSubset<T, dropUpsertArgs<ExtArgs>>): Prisma__dropClient<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dropCountArgs} args - Arguments to filter Drops to count.
     * @example
     * // Count the number of Drops
     * const count = await prisma.drop.count({
     *   where: {
     *     // ... the filter for the Drops we want to count
     *   }
     * })
    **/
    count<T extends dropCountArgs>(
      args?: Subset<T, dropCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DropCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DropAggregateArgs>(args: Subset<T, DropAggregateArgs>): Prisma.PrismaPromise<GetDropAggregateType<T>>

    /**
     * Group by Drop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dropGroupByArgs} args - Group by arguments.
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
      T extends dropGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dropGroupByArgs['orderBy'] }
        : { orderBy?: dropGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dropGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDropGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the drop model
   */
  readonly fields: dropFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for drop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dropClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claims<T extends drop$claimsArgs<ExtArgs> = {}>(args?: Subset<T, drop$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waitlists<T extends drop$waitlistsArgs<ExtArgs> = {}>(args?: Subset<T, drop$waitlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the drop model
   */
  interface dropFieldRefs {
    readonly id: FieldRef<"drop", 'Int'>
    readonly title: FieldRef<"drop", 'String'>
    readonly description: FieldRef<"drop", 'String'>
    readonly drop_time: FieldRef<"drop", 'DateTime'>
    readonly claim_window: FieldRef<"drop", 'Int'>
    readonly created_at: FieldRef<"drop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * drop findUnique
   */
  export type dropFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drop
     */
    select?: dropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drop
     */
    omit?: dropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dropInclude<ExtArgs> | null
    /**
     * Filter, which drop to fetch.
     */
    where: dropWhereUniqueInput
  }

  /**
   * drop findUniqueOrThrow
   */
  export type dropFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drop
     */
    select?: dropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drop
     */
    omit?: dropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dropInclude<ExtArgs> | null
    /**
     * Filter, which drop to fetch.
     */
    where: dropWhereUniqueInput
  }

  /**
   * drop findFirst
   */
  export type dropFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drop
     */
    select?: dropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drop
     */
    omit?: dropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dropInclude<ExtArgs> | null
    /**
     * Filter, which drop to fetch.
     */
    where?: dropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drops to fetch.
     */
    orderBy?: dropOrderByWithRelationInput | dropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drops.
     */
    cursor?: dropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drops.
     */
    distinct?: DropScalarFieldEnum | DropScalarFieldEnum[]
  }

  /**
   * drop findFirstOrThrow
   */
  export type dropFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drop
     */
    select?: dropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drop
     */
    omit?: dropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dropInclude<ExtArgs> | null
    /**
     * Filter, which drop to fetch.
     */
    where?: dropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drops to fetch.
     */
    orderBy?: dropOrderByWithRelationInput | dropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drops.
     */
    cursor?: dropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drops.
     */
    distinct?: DropScalarFieldEnum | DropScalarFieldEnum[]
  }

  /**
   * drop findMany
   */
  export type dropFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drop
     */
    select?: dropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drop
     */
    omit?: dropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dropInclude<ExtArgs> | null
    /**
     * Filter, which drops to fetch.
     */
    where?: dropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drops to fetch.
     */
    orderBy?: dropOrderByWithRelationInput | dropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing drops.
     */
    cursor?: dropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drops.
     */
    skip?: number
    distinct?: DropScalarFieldEnum | DropScalarFieldEnum[]
  }

  /**
   * drop create
   */
  export type dropCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drop
     */
    select?: dropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drop
     */
    omit?: dropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dropInclude<ExtArgs> | null
    /**
     * The data needed to create a drop.
     */
    data: XOR<dropCreateInput, dropUncheckedCreateInput>
  }

  /**
   * drop createMany
   */
  export type dropCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many drops.
     */
    data: dropCreateManyInput | dropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * drop createManyAndReturn
   */
  export type dropCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drop
     */
    select?: dropSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the drop
     */
    omit?: dropOmit<ExtArgs> | null
    /**
     * The data used to create many drops.
     */
    data: dropCreateManyInput | dropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * drop update
   */
  export type dropUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drop
     */
    select?: dropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drop
     */
    omit?: dropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dropInclude<ExtArgs> | null
    /**
     * The data needed to update a drop.
     */
    data: XOR<dropUpdateInput, dropUncheckedUpdateInput>
    /**
     * Choose, which drop to update.
     */
    where: dropWhereUniqueInput
  }

  /**
   * drop updateMany
   */
  export type dropUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update drops.
     */
    data: XOR<dropUpdateManyMutationInput, dropUncheckedUpdateManyInput>
    /**
     * Filter which drops to update
     */
    where?: dropWhereInput
    /**
     * Limit how many drops to update.
     */
    limit?: number
  }

  /**
   * drop updateManyAndReturn
   */
  export type dropUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drop
     */
    select?: dropSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the drop
     */
    omit?: dropOmit<ExtArgs> | null
    /**
     * The data used to update drops.
     */
    data: XOR<dropUpdateManyMutationInput, dropUncheckedUpdateManyInput>
    /**
     * Filter which drops to update
     */
    where?: dropWhereInput
    /**
     * Limit how many drops to update.
     */
    limit?: number
  }

  /**
   * drop upsert
   */
  export type dropUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drop
     */
    select?: dropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drop
     */
    omit?: dropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dropInclude<ExtArgs> | null
    /**
     * The filter to search for the drop to update in case it exists.
     */
    where: dropWhereUniqueInput
    /**
     * In case the drop found by the `where` argument doesn't exist, create a new drop with this data.
     */
    create: XOR<dropCreateInput, dropUncheckedCreateInput>
    /**
     * In case the drop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dropUpdateInput, dropUncheckedUpdateInput>
  }

  /**
   * drop delete
   */
  export type dropDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drop
     */
    select?: dropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drop
     */
    omit?: dropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dropInclude<ExtArgs> | null
    /**
     * Filter which drop to delete.
     */
    where: dropWhereUniqueInput
  }

  /**
   * drop deleteMany
   */
  export type dropDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drops to delete
     */
    where?: dropWhereInput
    /**
     * Limit how many drops to delete.
     */
    limit?: number
  }

  /**
   * drop.claims
   */
  export type drop$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    where?: claimWhereInput
    orderBy?: claimOrderByWithRelationInput | claimOrderByWithRelationInput[]
    cursor?: claimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * drop.waitlists
   */
  export type drop$waitlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistInclude<ExtArgs> | null
    where?: waitlistWhereInput
    orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
    cursor?: waitlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * drop without action
   */
  export type dropDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drop
     */
    select?: dropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drop
     */
    omit?: dropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dropInclude<ExtArgs> | null
  }


  /**
   * Model claim
   */

  export type AggregateClaim = {
    _count: ClaimCountAggregateOutputType | null
    _avg: ClaimAvgAggregateOutputType | null
    _sum: ClaimSumAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  export type ClaimAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    drop_id: number | null
  }

  export type ClaimSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    drop_id: number | null
  }

  export type ClaimMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    drop_id: number | null
    claim_code: string | null
    claimed_at: Date | null
  }

  export type ClaimMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    drop_id: number | null
    claim_code: string | null
    claimed_at: Date | null
  }

  export type ClaimCountAggregateOutputType = {
    id: number
    user_id: number
    drop_id: number
    claim_code: number
    claimed_at: number
    _all: number
  }


  export type ClaimAvgAggregateInputType = {
    id?: true
    user_id?: true
    drop_id?: true
  }

  export type ClaimSumAggregateInputType = {
    id?: true
    user_id?: true
    drop_id?: true
  }

  export type ClaimMinAggregateInputType = {
    id?: true
    user_id?: true
    drop_id?: true
    claim_code?: true
    claimed_at?: true
  }

  export type ClaimMaxAggregateInputType = {
    id?: true
    user_id?: true
    drop_id?: true
    claim_code?: true
    claimed_at?: true
  }

  export type ClaimCountAggregateInputType = {
    id?: true
    user_id?: true
    drop_id?: true
    claim_code?: true
    claimed_at?: true
    _all?: true
  }

  export type ClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which claim to aggregate.
     */
    where?: claimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claims to fetch.
     */
    orderBy?: claimOrderByWithRelationInput | claimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: claimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned claims
    **/
    _count?: true | ClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimMaxAggregateInputType
  }

  export type GetClaimAggregateType<T extends ClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaim[P]>
      : GetScalarType<T[P], AggregateClaim[P]>
  }




  export type claimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claimWhereInput
    orderBy?: claimOrderByWithAggregationInput | claimOrderByWithAggregationInput[]
    by: ClaimScalarFieldEnum[] | ClaimScalarFieldEnum
    having?: claimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimCountAggregateInputType | true
    _avg?: ClaimAvgAggregateInputType
    _sum?: ClaimSumAggregateInputType
    _min?: ClaimMinAggregateInputType
    _max?: ClaimMaxAggregateInputType
  }

  export type ClaimGroupByOutputType = {
    id: number
    user_id: number
    drop_id: number
    claim_code: string
    claimed_at: Date
    _count: ClaimCountAggregateOutputType | null
    _avg: ClaimAvgAggregateOutputType | null
    _sum: ClaimSumAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  type GetClaimGroupByPayload<T extends claimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimGroupByOutputType[P]>
        }
      >
    >


  export type claimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    drop_id?: boolean
    claim_code?: boolean
    claimed_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    drop?: boolean | dropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type claimSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    drop_id?: boolean
    claim_code?: boolean
    claimed_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    drop?: boolean | dropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type claimSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    drop_id?: boolean
    claim_code?: boolean
    claimed_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    drop?: boolean | dropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type claimSelectScalar = {
    id?: boolean
    user_id?: boolean
    drop_id?: boolean
    claim_code?: boolean
    claimed_at?: boolean
  }

  export type claimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "drop_id" | "claim_code" | "claimed_at", ExtArgs["result"]["claim"]>
  export type claimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    drop?: boolean | dropDefaultArgs<ExtArgs>
  }
  export type claimIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    drop?: boolean | dropDefaultArgs<ExtArgs>
  }
  export type claimIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    drop?: boolean | dropDefaultArgs<ExtArgs>
  }

  export type $claimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "claim"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      drop: Prisma.$dropPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      drop_id: number
      claim_code: string
      claimed_at: Date
    }, ExtArgs["result"]["claim"]>
    composites: {}
  }

  type claimGetPayload<S extends boolean | null | undefined | claimDefaultArgs> = $Result.GetResult<Prisma.$claimPayload, S>

  type claimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<claimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClaimCountAggregateInputType | true
    }

  export interface claimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['claim'], meta: { name: 'claim' } }
    /**
     * Find zero or one Claim that matches the filter.
     * @param {claimFindUniqueArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends claimFindUniqueArgs>(args: SelectSubset<T, claimFindUniqueArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Claim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {claimFindUniqueOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends claimFindUniqueOrThrowArgs>(args: SelectSubset<T, claimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimFindFirstArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends claimFindFirstArgs>(args?: SelectSubset<T, claimFindFirstArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimFindFirstOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends claimFindFirstOrThrowArgs>(args?: SelectSubset<T, claimFindFirstOrThrowArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claim.findMany()
     * 
     * // Get first 10 Claims
     * const claims = await prisma.claim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimWithIdOnly = await prisma.claim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends claimFindManyArgs>(args?: SelectSubset<T, claimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Claim.
     * @param {claimCreateArgs} args - Arguments to create a Claim.
     * @example
     * // Create one Claim
     * const Claim = await prisma.claim.create({
     *   data: {
     *     // ... data to create a Claim
     *   }
     * })
     * 
     */
    create<T extends claimCreateArgs>(args: SelectSubset<T, claimCreateArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Claims.
     * @param {claimCreateManyArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends claimCreateManyArgs>(args?: SelectSubset<T, claimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claims and returns the data saved in the database.
     * @param {claimCreateManyAndReturnArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends claimCreateManyAndReturnArgs>(args?: SelectSubset<T, claimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Claim.
     * @param {claimDeleteArgs} args - Arguments to delete one Claim.
     * @example
     * // Delete one Claim
     * const Claim = await prisma.claim.delete({
     *   where: {
     *     // ... filter to delete one Claim
     *   }
     * })
     * 
     */
    delete<T extends claimDeleteArgs>(args: SelectSubset<T, claimDeleteArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Claim.
     * @param {claimUpdateArgs} args - Arguments to update one Claim.
     * @example
     * // Update one Claim
     * const claim = await prisma.claim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends claimUpdateArgs>(args: SelectSubset<T, claimUpdateArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Claims.
     * @param {claimDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends claimDeleteManyArgs>(args?: SelectSubset<T, claimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends claimUpdateManyArgs>(args: SelectSubset<T, claimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims and returns the data updated in the database.
     * @param {claimUpdateManyAndReturnArgs} args - Arguments to update many Claims.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.updateManyAndReturn({
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
    updateManyAndReturn<T extends claimUpdateManyAndReturnArgs>(args: SelectSubset<T, claimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Claim.
     * @param {claimUpsertArgs} args - Arguments to update or create a Claim.
     * @example
     * // Update or create a Claim
     * const claim = await prisma.claim.upsert({
     *   create: {
     *     // ... data to create a Claim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claim we want to update
     *   }
     * })
     */
    upsert<T extends claimUpsertArgs>(args: SelectSubset<T, claimUpsertArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claim.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends claimCountArgs>(
      args?: Subset<T, claimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaimAggregateArgs>(args: Subset<T, ClaimAggregateArgs>): Prisma.PrismaPromise<GetClaimAggregateType<T>>

    /**
     * Group by Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimGroupByArgs} args - Group by arguments.
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
      T extends claimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: claimGroupByArgs['orderBy'] }
        : { orderBy?: claimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, claimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the claim model
   */
  readonly fields: claimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for claim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__claimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    drop<T extends dropDefaultArgs<ExtArgs> = {}>(args?: Subset<T, dropDefaultArgs<ExtArgs>>): Prisma__dropClient<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the claim model
   */
  interface claimFieldRefs {
    readonly id: FieldRef<"claim", 'Int'>
    readonly user_id: FieldRef<"claim", 'Int'>
    readonly drop_id: FieldRef<"claim", 'Int'>
    readonly claim_code: FieldRef<"claim", 'String'>
    readonly claimed_at: FieldRef<"claim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * claim findUnique
   */
  export type claimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * Filter, which claim to fetch.
     */
    where: claimWhereUniqueInput
  }

  /**
   * claim findUniqueOrThrow
   */
  export type claimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * Filter, which claim to fetch.
     */
    where: claimWhereUniqueInput
  }

  /**
   * claim findFirst
   */
  export type claimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * Filter, which claim to fetch.
     */
    where?: claimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claims to fetch.
     */
    orderBy?: claimOrderByWithRelationInput | claimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for claims.
     */
    cursor?: claimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * claim findFirstOrThrow
   */
  export type claimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * Filter, which claim to fetch.
     */
    where?: claimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claims to fetch.
     */
    orderBy?: claimOrderByWithRelationInput | claimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for claims.
     */
    cursor?: claimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * claim findMany
   */
  export type claimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * Filter, which claims to fetch.
     */
    where?: claimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claims to fetch.
     */
    orderBy?: claimOrderByWithRelationInput | claimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing claims.
     */
    cursor?: claimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claims.
     */
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * claim create
   */
  export type claimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * The data needed to create a claim.
     */
    data: XOR<claimCreateInput, claimUncheckedCreateInput>
  }

  /**
   * claim createMany
   */
  export type claimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many claims.
     */
    data: claimCreateManyInput | claimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * claim createManyAndReturn
   */
  export type claimCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * The data used to create many claims.
     */
    data: claimCreateManyInput | claimCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * claim update
   */
  export type claimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * The data needed to update a claim.
     */
    data: XOR<claimUpdateInput, claimUncheckedUpdateInput>
    /**
     * Choose, which claim to update.
     */
    where: claimWhereUniqueInput
  }

  /**
   * claim updateMany
   */
  export type claimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update claims.
     */
    data: XOR<claimUpdateManyMutationInput, claimUncheckedUpdateManyInput>
    /**
     * Filter which claims to update
     */
    where?: claimWhereInput
    /**
     * Limit how many claims to update.
     */
    limit?: number
  }

  /**
   * claim updateManyAndReturn
   */
  export type claimUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * The data used to update claims.
     */
    data: XOR<claimUpdateManyMutationInput, claimUncheckedUpdateManyInput>
    /**
     * Filter which claims to update
     */
    where?: claimWhereInput
    /**
     * Limit how many claims to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * claim upsert
   */
  export type claimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * The filter to search for the claim to update in case it exists.
     */
    where: claimWhereUniqueInput
    /**
     * In case the claim found by the `where` argument doesn't exist, create a new claim with this data.
     */
    create: XOR<claimCreateInput, claimUncheckedCreateInput>
    /**
     * In case the claim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<claimUpdateInput, claimUncheckedUpdateInput>
  }

  /**
   * claim delete
   */
  export type claimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * Filter which claim to delete.
     */
    where: claimWhereUniqueInput
  }

  /**
   * claim deleteMany
   */
  export type claimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which claims to delete
     */
    where?: claimWhereInput
    /**
     * Limit how many claims to delete.
     */
    limit?: number
  }

  /**
   * claim without action
   */
  export type claimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
  }


  /**
   * Model waitlist
   */

  export type AggregateWaitlist = {
    _count: WaitlistCountAggregateOutputType | null
    _avg: WaitlistAvgAggregateOutputType | null
    _sum: WaitlistSumAggregateOutputType | null
    _min: WaitlistMinAggregateOutputType | null
    _max: WaitlistMaxAggregateOutputType | null
  }

  export type WaitlistAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    drop_id: number | null
  }

  export type WaitlistSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    drop_id: number | null
  }

  export type WaitlistMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    drop_id: number | null
    joined_at: Date | null
  }

  export type WaitlistMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    drop_id: number | null
    joined_at: Date | null
  }

  export type WaitlistCountAggregateOutputType = {
    id: number
    user_id: number
    drop_id: number
    joined_at: number
    _all: number
  }


  export type WaitlistAvgAggregateInputType = {
    id?: true
    user_id?: true
    drop_id?: true
  }

  export type WaitlistSumAggregateInputType = {
    id?: true
    user_id?: true
    drop_id?: true
  }

  export type WaitlistMinAggregateInputType = {
    id?: true
    user_id?: true
    drop_id?: true
    joined_at?: true
  }

  export type WaitlistMaxAggregateInputType = {
    id?: true
    user_id?: true
    drop_id?: true
    joined_at?: true
  }

  export type WaitlistCountAggregateInputType = {
    id?: true
    user_id?: true
    drop_id?: true
    joined_at?: true
    _all?: true
  }

  export type WaitlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which waitlist to aggregate.
     */
    where?: waitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitlists to fetch.
     */
    orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: waitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned waitlists
    **/
    _count?: true | WaitlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaitlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaitlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaitlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaitlistMaxAggregateInputType
  }

  export type GetWaitlistAggregateType<T extends WaitlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWaitlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaitlist[P]>
      : GetScalarType<T[P], AggregateWaitlist[P]>
  }




  export type waitlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: waitlistWhereInput
    orderBy?: waitlistOrderByWithAggregationInput | waitlistOrderByWithAggregationInput[]
    by: WaitlistScalarFieldEnum[] | WaitlistScalarFieldEnum
    having?: waitlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaitlistCountAggregateInputType | true
    _avg?: WaitlistAvgAggregateInputType
    _sum?: WaitlistSumAggregateInputType
    _min?: WaitlistMinAggregateInputType
    _max?: WaitlistMaxAggregateInputType
  }

  export type WaitlistGroupByOutputType = {
    id: number
    user_id: number
    drop_id: number
    joined_at: Date
    _count: WaitlistCountAggregateOutputType | null
    _avg: WaitlistAvgAggregateOutputType | null
    _sum: WaitlistSumAggregateOutputType | null
    _min: WaitlistMinAggregateOutputType | null
    _max: WaitlistMaxAggregateOutputType | null
  }

  type GetWaitlistGroupByPayload<T extends waitlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaitlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaitlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaitlistGroupByOutputType[P]>
            : GetScalarType<T[P], WaitlistGroupByOutputType[P]>
        }
      >
    >


  export type waitlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    drop_id?: boolean
    joined_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    drop?: boolean | dropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waitlist"]>

  export type waitlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    drop_id?: boolean
    joined_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    drop?: boolean | dropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waitlist"]>

  export type waitlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    drop_id?: boolean
    joined_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    drop?: boolean | dropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waitlist"]>

  export type waitlistSelectScalar = {
    id?: boolean
    user_id?: boolean
    drop_id?: boolean
    joined_at?: boolean
  }

  export type waitlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "drop_id" | "joined_at", ExtArgs["result"]["waitlist"]>
  export type waitlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    drop?: boolean | dropDefaultArgs<ExtArgs>
  }
  export type waitlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    drop?: boolean | dropDefaultArgs<ExtArgs>
  }
  export type waitlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    drop?: boolean | dropDefaultArgs<ExtArgs>
  }

  export type $waitlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "waitlist"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      drop: Prisma.$dropPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      drop_id: number
      joined_at: Date
    }, ExtArgs["result"]["waitlist"]>
    composites: {}
  }

  type waitlistGetPayload<S extends boolean | null | undefined | waitlistDefaultArgs> = $Result.GetResult<Prisma.$waitlistPayload, S>

  type waitlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<waitlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaitlistCountAggregateInputType | true
    }

  export interface waitlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['waitlist'], meta: { name: 'waitlist' } }
    /**
     * Find zero or one Waitlist that matches the filter.
     * @param {waitlistFindUniqueArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends waitlistFindUniqueArgs>(args: SelectSubset<T, waitlistFindUniqueArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Waitlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {waitlistFindUniqueOrThrowArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends waitlistFindUniqueOrThrowArgs>(args: SelectSubset<T, waitlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waitlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistFindFirstArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends waitlistFindFirstArgs>(args?: SelectSubset<T, waitlistFindFirstArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waitlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistFindFirstOrThrowArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends waitlistFindFirstOrThrowArgs>(args?: SelectSubset<T, waitlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Waitlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waitlists
     * const waitlists = await prisma.waitlist.findMany()
     * 
     * // Get first 10 Waitlists
     * const waitlists = await prisma.waitlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waitlistWithIdOnly = await prisma.waitlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends waitlistFindManyArgs>(args?: SelectSubset<T, waitlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Waitlist.
     * @param {waitlistCreateArgs} args - Arguments to create a Waitlist.
     * @example
     * // Create one Waitlist
     * const Waitlist = await prisma.waitlist.create({
     *   data: {
     *     // ... data to create a Waitlist
     *   }
     * })
     * 
     */
    create<T extends waitlistCreateArgs>(args: SelectSubset<T, waitlistCreateArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Waitlists.
     * @param {waitlistCreateManyArgs} args - Arguments to create many Waitlists.
     * @example
     * // Create many Waitlists
     * const waitlist = await prisma.waitlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends waitlistCreateManyArgs>(args?: SelectSubset<T, waitlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Waitlists and returns the data saved in the database.
     * @param {waitlistCreateManyAndReturnArgs} args - Arguments to create many Waitlists.
     * @example
     * // Create many Waitlists
     * const waitlist = await prisma.waitlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Waitlists and only return the `id`
     * const waitlistWithIdOnly = await prisma.waitlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends waitlistCreateManyAndReturnArgs>(args?: SelectSubset<T, waitlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Waitlist.
     * @param {waitlistDeleteArgs} args - Arguments to delete one Waitlist.
     * @example
     * // Delete one Waitlist
     * const Waitlist = await prisma.waitlist.delete({
     *   where: {
     *     // ... filter to delete one Waitlist
     *   }
     * })
     * 
     */
    delete<T extends waitlistDeleteArgs>(args: SelectSubset<T, waitlistDeleteArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Waitlist.
     * @param {waitlistUpdateArgs} args - Arguments to update one Waitlist.
     * @example
     * // Update one Waitlist
     * const waitlist = await prisma.waitlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends waitlistUpdateArgs>(args: SelectSubset<T, waitlistUpdateArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Waitlists.
     * @param {waitlistDeleteManyArgs} args - Arguments to filter Waitlists to delete.
     * @example
     * // Delete a few Waitlists
     * const { count } = await prisma.waitlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends waitlistDeleteManyArgs>(args?: SelectSubset<T, waitlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waitlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waitlists
     * const waitlist = await prisma.waitlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends waitlistUpdateManyArgs>(args: SelectSubset<T, waitlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waitlists and returns the data updated in the database.
     * @param {waitlistUpdateManyAndReturnArgs} args - Arguments to update many Waitlists.
     * @example
     * // Update many Waitlists
     * const waitlist = await prisma.waitlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Waitlists and only return the `id`
     * const waitlistWithIdOnly = await prisma.waitlist.updateManyAndReturn({
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
    updateManyAndReturn<T extends waitlistUpdateManyAndReturnArgs>(args: SelectSubset<T, waitlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Waitlist.
     * @param {waitlistUpsertArgs} args - Arguments to update or create a Waitlist.
     * @example
     * // Update or create a Waitlist
     * const waitlist = await prisma.waitlist.upsert({
     *   create: {
     *     // ... data to create a Waitlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waitlist we want to update
     *   }
     * })
     */
    upsert<T extends waitlistUpsertArgs>(args: SelectSubset<T, waitlistUpsertArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Waitlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistCountArgs} args - Arguments to filter Waitlists to count.
     * @example
     * // Count the number of Waitlists
     * const count = await prisma.waitlist.count({
     *   where: {
     *     // ... the filter for the Waitlists we want to count
     *   }
     * })
    **/
    count<T extends waitlistCountArgs>(
      args?: Subset<T, waitlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaitlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waitlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaitlistAggregateArgs>(args: Subset<T, WaitlistAggregateArgs>): Prisma.PrismaPromise<GetWaitlistAggregateType<T>>

    /**
     * Group by Waitlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistGroupByArgs} args - Group by arguments.
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
      T extends waitlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: waitlistGroupByArgs['orderBy'] }
        : { orderBy?: waitlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, waitlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaitlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the waitlist model
   */
  readonly fields: waitlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for waitlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__waitlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    drop<T extends dropDefaultArgs<ExtArgs> = {}>(args?: Subset<T, dropDefaultArgs<ExtArgs>>): Prisma__dropClient<$Result.GetResult<Prisma.$dropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the waitlist model
   */
  interface waitlistFieldRefs {
    readonly id: FieldRef<"waitlist", 'Int'>
    readonly user_id: FieldRef<"waitlist", 'Int'>
    readonly drop_id: FieldRef<"waitlist", 'Int'>
    readonly joined_at: FieldRef<"waitlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * waitlist findUnique
   */
  export type waitlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistInclude<ExtArgs> | null
    /**
     * Filter, which waitlist to fetch.
     */
    where: waitlistWhereUniqueInput
  }

  /**
   * waitlist findUniqueOrThrow
   */
  export type waitlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistInclude<ExtArgs> | null
    /**
     * Filter, which waitlist to fetch.
     */
    where: waitlistWhereUniqueInput
  }

  /**
   * waitlist findFirst
   */
  export type waitlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistInclude<ExtArgs> | null
    /**
     * Filter, which waitlist to fetch.
     */
    where?: waitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitlists to fetch.
     */
    orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for waitlists.
     */
    cursor?: waitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waitlists.
     */
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * waitlist findFirstOrThrow
   */
  export type waitlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistInclude<ExtArgs> | null
    /**
     * Filter, which waitlist to fetch.
     */
    where?: waitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitlists to fetch.
     */
    orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for waitlists.
     */
    cursor?: waitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waitlists.
     */
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * waitlist findMany
   */
  export type waitlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistInclude<ExtArgs> | null
    /**
     * Filter, which waitlists to fetch.
     */
    where?: waitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitlists to fetch.
     */
    orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing waitlists.
     */
    cursor?: waitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitlists.
     */
    skip?: number
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * waitlist create
   */
  export type waitlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistInclude<ExtArgs> | null
    /**
     * The data needed to create a waitlist.
     */
    data: XOR<waitlistCreateInput, waitlistUncheckedCreateInput>
  }

  /**
   * waitlist createMany
   */
  export type waitlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many waitlists.
     */
    data: waitlistCreateManyInput | waitlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * waitlist createManyAndReturn
   */
  export type waitlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * The data used to create many waitlists.
     */
    data: waitlistCreateManyInput | waitlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * waitlist update
   */
  export type waitlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistInclude<ExtArgs> | null
    /**
     * The data needed to update a waitlist.
     */
    data: XOR<waitlistUpdateInput, waitlistUncheckedUpdateInput>
    /**
     * Choose, which waitlist to update.
     */
    where: waitlistWhereUniqueInput
  }

  /**
   * waitlist updateMany
   */
  export type waitlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update waitlists.
     */
    data: XOR<waitlistUpdateManyMutationInput, waitlistUncheckedUpdateManyInput>
    /**
     * Filter which waitlists to update
     */
    where?: waitlistWhereInput
    /**
     * Limit how many waitlists to update.
     */
    limit?: number
  }

  /**
   * waitlist updateManyAndReturn
   */
  export type waitlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * The data used to update waitlists.
     */
    data: XOR<waitlistUpdateManyMutationInput, waitlistUncheckedUpdateManyInput>
    /**
     * Filter which waitlists to update
     */
    where?: waitlistWhereInput
    /**
     * Limit how many waitlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * waitlist upsert
   */
  export type waitlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistInclude<ExtArgs> | null
    /**
     * The filter to search for the waitlist to update in case it exists.
     */
    where: waitlistWhereUniqueInput
    /**
     * In case the waitlist found by the `where` argument doesn't exist, create a new waitlist with this data.
     */
    create: XOR<waitlistCreateInput, waitlistUncheckedCreateInput>
    /**
     * In case the waitlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<waitlistUpdateInput, waitlistUncheckedUpdateInput>
  }

  /**
   * waitlist delete
   */
  export type waitlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistInclude<ExtArgs> | null
    /**
     * Filter which waitlist to delete.
     */
    where: waitlistWhereUniqueInput
  }

  /**
   * waitlist deleteMany
   */
  export type waitlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which waitlists to delete
     */
    where?: waitlistWhereInput
    /**
     * Limit how many waitlists to delete.
     */
    limit?: number
  }

  /**
   * waitlist without action
   */
  export type waitlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    created_at: 'created_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const DropScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    drop_time: 'drop_time',
    claim_window: 'claim_window',
    created_at: 'created_at'
  };

  export type DropScalarFieldEnum = (typeof DropScalarFieldEnum)[keyof typeof DropScalarFieldEnum]


  export const ClaimScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    drop_id: 'drop_id',
    claim_code: 'claim_code',
    claimed_at: 'claimed_at'
  };

  export type ClaimScalarFieldEnum = (typeof ClaimScalarFieldEnum)[keyof typeof ClaimScalarFieldEnum]


  export const WaitlistScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    drop_id: 'drop_id',
    joined_at: 'joined_at'
  };

  export type WaitlistScalarFieldEnum = (typeof WaitlistScalarFieldEnum)[keyof typeof WaitlistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    email?: StringFilter<"admin"> | string
    password_hash?: StringFilter<"admin"> | string
    created_at?: DateTimeFilter<"admin"> | Date | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    password_hash?: StringFilter<"admin"> | string
    created_at?: DateTimeFilter<"admin"> | Date | string
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    email?: StringWithAggregatesFilter<"admin"> | string
    password_hash?: StringWithAggregatesFilter<"admin"> | string
    created_at?: DateTimeWithAggregatesFilter<"admin"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    claims?: ClaimListRelationFilter
    waitlists?: WaitlistListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    claims?: claimOrderByRelationAggregateInput
    waitlists?: waitlistOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    claims?: ClaimListRelationFilter
    waitlists?: WaitlistListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type dropWhereInput = {
    AND?: dropWhereInput | dropWhereInput[]
    OR?: dropWhereInput[]
    NOT?: dropWhereInput | dropWhereInput[]
    id?: IntFilter<"drop"> | number
    title?: StringFilter<"drop"> | string
    description?: StringNullableFilter<"drop"> | string | null
    drop_time?: DateTimeFilter<"drop"> | Date | string
    claim_window?: IntNullableFilter<"drop"> | number | null
    created_at?: DateTimeFilter<"drop"> | Date | string
    claims?: ClaimListRelationFilter
    waitlists?: WaitlistListRelationFilter
  }

  export type dropOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    drop_time?: SortOrder
    claim_window?: SortOrderInput | SortOrder
    created_at?: SortOrder
    claims?: claimOrderByRelationAggregateInput
    waitlists?: waitlistOrderByRelationAggregateInput
  }

  export type dropWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: dropWhereInput | dropWhereInput[]
    OR?: dropWhereInput[]
    NOT?: dropWhereInput | dropWhereInput[]
    title?: StringFilter<"drop"> | string
    description?: StringNullableFilter<"drop"> | string | null
    drop_time?: DateTimeFilter<"drop"> | Date | string
    claim_window?: IntNullableFilter<"drop"> | number | null
    created_at?: DateTimeFilter<"drop"> | Date | string
    claims?: ClaimListRelationFilter
    waitlists?: WaitlistListRelationFilter
  }, "id">

  export type dropOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    drop_time?: SortOrder
    claim_window?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: dropCountOrderByAggregateInput
    _avg?: dropAvgOrderByAggregateInput
    _max?: dropMaxOrderByAggregateInput
    _min?: dropMinOrderByAggregateInput
    _sum?: dropSumOrderByAggregateInput
  }

  export type dropScalarWhereWithAggregatesInput = {
    AND?: dropScalarWhereWithAggregatesInput | dropScalarWhereWithAggregatesInput[]
    OR?: dropScalarWhereWithAggregatesInput[]
    NOT?: dropScalarWhereWithAggregatesInput | dropScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"drop"> | number
    title?: StringWithAggregatesFilter<"drop"> | string
    description?: StringNullableWithAggregatesFilter<"drop"> | string | null
    drop_time?: DateTimeWithAggregatesFilter<"drop"> | Date | string
    claim_window?: IntNullableWithAggregatesFilter<"drop"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"drop"> | Date | string
  }

  export type claimWhereInput = {
    AND?: claimWhereInput | claimWhereInput[]
    OR?: claimWhereInput[]
    NOT?: claimWhereInput | claimWhereInput[]
    id?: IntFilter<"claim"> | number
    user_id?: IntFilter<"claim"> | number
    drop_id?: IntFilter<"claim"> | number
    claim_code?: StringFilter<"claim"> | string
    claimed_at?: DateTimeFilter<"claim"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    drop?: XOR<DropScalarRelationFilter, dropWhereInput>
  }

  export type claimOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
    claim_code?: SortOrder
    claimed_at?: SortOrder
    user?: usersOrderByWithRelationInput
    drop?: dropOrderByWithRelationInput
  }

  export type claimWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    claim_code?: string
    user_id_drop_id?: claimUser_idDrop_idCompoundUniqueInput
    AND?: claimWhereInput | claimWhereInput[]
    OR?: claimWhereInput[]
    NOT?: claimWhereInput | claimWhereInput[]
    user_id?: IntFilter<"claim"> | number
    drop_id?: IntFilter<"claim"> | number
    claimed_at?: DateTimeFilter<"claim"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    drop?: XOR<DropScalarRelationFilter, dropWhereInput>
  }, "id" | "claim_code" | "user_id_drop_id">

  export type claimOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
    claim_code?: SortOrder
    claimed_at?: SortOrder
    _count?: claimCountOrderByAggregateInput
    _avg?: claimAvgOrderByAggregateInput
    _max?: claimMaxOrderByAggregateInput
    _min?: claimMinOrderByAggregateInput
    _sum?: claimSumOrderByAggregateInput
  }

  export type claimScalarWhereWithAggregatesInput = {
    AND?: claimScalarWhereWithAggregatesInput | claimScalarWhereWithAggregatesInput[]
    OR?: claimScalarWhereWithAggregatesInput[]
    NOT?: claimScalarWhereWithAggregatesInput | claimScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"claim"> | number
    user_id?: IntWithAggregatesFilter<"claim"> | number
    drop_id?: IntWithAggregatesFilter<"claim"> | number
    claim_code?: StringWithAggregatesFilter<"claim"> | string
    claimed_at?: DateTimeWithAggregatesFilter<"claim"> | Date | string
  }

  export type waitlistWhereInput = {
    AND?: waitlistWhereInput | waitlistWhereInput[]
    OR?: waitlistWhereInput[]
    NOT?: waitlistWhereInput | waitlistWhereInput[]
    id?: IntFilter<"waitlist"> | number
    user_id?: IntFilter<"waitlist"> | number
    drop_id?: IntFilter<"waitlist"> | number
    joined_at?: DateTimeFilter<"waitlist"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    drop?: XOR<DropScalarRelationFilter, dropWhereInput>
  }

  export type waitlistOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
    joined_at?: SortOrder
    user?: usersOrderByWithRelationInput
    drop?: dropOrderByWithRelationInput
  }

  export type waitlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_drop_id?: waitlistUser_idDrop_idCompoundUniqueInput
    AND?: waitlistWhereInput | waitlistWhereInput[]
    OR?: waitlistWhereInput[]
    NOT?: waitlistWhereInput | waitlistWhereInput[]
    user_id?: IntFilter<"waitlist"> | number
    drop_id?: IntFilter<"waitlist"> | number
    joined_at?: DateTimeFilter<"waitlist"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    drop?: XOR<DropScalarRelationFilter, dropWhereInput>
  }, "id" | "user_id_drop_id">

  export type waitlistOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
    joined_at?: SortOrder
    _count?: waitlistCountOrderByAggregateInput
    _avg?: waitlistAvgOrderByAggregateInput
    _max?: waitlistMaxOrderByAggregateInput
    _min?: waitlistMinOrderByAggregateInput
    _sum?: waitlistSumOrderByAggregateInput
  }

  export type waitlistScalarWhereWithAggregatesInput = {
    AND?: waitlistScalarWhereWithAggregatesInput | waitlistScalarWhereWithAggregatesInput[]
    OR?: waitlistScalarWhereWithAggregatesInput[]
    NOT?: waitlistScalarWhereWithAggregatesInput | waitlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"waitlist"> | number
    user_id?: IntWithAggregatesFilter<"waitlist"> | number
    drop_id?: IntWithAggregatesFilter<"waitlist"> | number
    joined_at?: DateTimeWithAggregatesFilter<"waitlist"> | Date | string
  }

  export type adminCreateInput = {
    email: string
    password_hash: string
    created_at?: Date | string
  }

  export type adminUncheckedCreateInput = {
    id?: number
    email: string
    password_hash: string
    created_at?: Date | string
  }

  export type adminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateManyInput = {
    id?: number
    email: string
    password_hash: string
    created_at?: Date | string
  }

  export type adminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    email: string
    password_hash: string
    created_at?: Date | string
    claims?: claimCreateNestedManyWithoutUserInput
    waitlists?: waitlistCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password_hash: string
    created_at?: Date | string
    claims?: claimUncheckedCreateNestedManyWithoutUserInput
    waitlists?: waitlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUpdateManyWithoutUserNestedInput
    waitlists?: waitlistUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUncheckedUpdateManyWithoutUserNestedInput
    waitlists?: waitlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password_hash: string
    created_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dropCreateInput = {
    title: string
    description?: string | null
    drop_time: Date | string
    claim_window?: number | null
    created_at?: Date | string
    claims?: claimCreateNestedManyWithoutDropInput
    waitlists?: waitlistCreateNestedManyWithoutDropInput
  }

  export type dropUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    drop_time: Date | string
    claim_window?: number | null
    created_at?: Date | string
    claims?: claimUncheckedCreateNestedManyWithoutDropInput
    waitlists?: waitlistUncheckedCreateNestedManyWithoutDropInput
  }

  export type dropUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    drop_time?: DateTimeFieldUpdateOperationsInput | Date | string
    claim_window?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUpdateManyWithoutDropNestedInput
    waitlists?: waitlistUpdateManyWithoutDropNestedInput
  }

  export type dropUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    drop_time?: DateTimeFieldUpdateOperationsInput | Date | string
    claim_window?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUncheckedUpdateManyWithoutDropNestedInput
    waitlists?: waitlistUncheckedUpdateManyWithoutDropNestedInput
  }

  export type dropCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    drop_time: Date | string
    claim_window?: number | null
    created_at?: Date | string
  }

  export type dropUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    drop_time?: DateTimeFieldUpdateOperationsInput | Date | string
    claim_window?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dropUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    drop_time?: DateTimeFieldUpdateOperationsInput | Date | string
    claim_window?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimCreateInput = {
    claim_code: string
    claimed_at?: Date | string
    user: usersCreateNestedOneWithoutClaimsInput
    drop: dropCreateNestedOneWithoutClaimsInput
  }

  export type claimUncheckedCreateInput = {
    id?: number
    user_id: number
    drop_id: number
    claim_code: string
    claimed_at?: Date | string
  }

  export type claimUpdateInput = {
    claim_code?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutClaimsNestedInput
    drop?: dropUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type claimUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    drop_id?: IntFieldUpdateOperationsInput | number
    claim_code?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimCreateManyInput = {
    id?: number
    user_id: number
    drop_id: number
    claim_code: string
    claimed_at?: Date | string
  }

  export type claimUpdateManyMutationInput = {
    claim_code?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    drop_id?: IntFieldUpdateOperationsInput | number
    claim_code?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitlistCreateInput = {
    joined_at?: Date | string
    user: usersCreateNestedOneWithoutWaitlistsInput
    drop: dropCreateNestedOneWithoutWaitlistsInput
  }

  export type waitlistUncheckedCreateInput = {
    id?: number
    user_id: number
    drop_id: number
    joined_at?: Date | string
  }

  export type waitlistUpdateInput = {
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutWaitlistsNestedInput
    drop?: dropUpdateOneRequiredWithoutWaitlistsNestedInput
  }

  export type waitlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    drop_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitlistCreateManyInput = {
    id?: number
    user_id: number
    drop_id: number
    joined_at?: Date | string
  }

  export type waitlistUpdateManyMutationInput = {
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    drop_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClaimListRelationFilter = {
    every?: claimWhereInput
    some?: claimWhereInput
    none?: claimWhereInput
  }

  export type WaitlistListRelationFilter = {
    every?: waitlistWhereInput
    some?: waitlistWhereInput
    none?: waitlistWhereInput
  }

  export type claimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type waitlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type dropCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    drop_time?: SortOrder
    claim_window?: SortOrder
    created_at?: SortOrder
  }

  export type dropAvgOrderByAggregateInput = {
    id?: SortOrder
    claim_window?: SortOrder
  }

  export type dropMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    drop_time?: SortOrder
    claim_window?: SortOrder
    created_at?: SortOrder
  }

  export type dropMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    drop_time?: SortOrder
    claim_window?: SortOrder
    created_at?: SortOrder
  }

  export type dropSumOrderByAggregateInput = {
    id?: SortOrder
    claim_window?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type DropScalarRelationFilter = {
    is?: dropWhereInput
    isNot?: dropWhereInput
  }

  export type claimUser_idDrop_idCompoundUniqueInput = {
    user_id: number
    drop_id: number
  }

  export type claimCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
    claim_code?: SortOrder
    claimed_at?: SortOrder
  }

  export type claimAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
  }

  export type claimMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
    claim_code?: SortOrder
    claimed_at?: SortOrder
  }

  export type claimMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
    claim_code?: SortOrder
    claimed_at?: SortOrder
  }

  export type claimSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
  }

  export type waitlistUser_idDrop_idCompoundUniqueInput = {
    user_id: number
    drop_id: number
  }

  export type waitlistCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
    joined_at?: SortOrder
  }

  export type waitlistAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
  }

  export type waitlistMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
    joined_at?: SortOrder
  }

  export type waitlistMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
    joined_at?: SortOrder
  }

  export type waitlistSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    drop_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type claimCreateNestedManyWithoutUserInput = {
    create?: XOR<claimCreateWithoutUserInput, claimUncheckedCreateWithoutUserInput> | claimCreateWithoutUserInput[] | claimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: claimCreateOrConnectWithoutUserInput | claimCreateOrConnectWithoutUserInput[]
    createMany?: claimCreateManyUserInputEnvelope
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
  }

  export type waitlistCreateNestedManyWithoutUserInput = {
    create?: XOR<waitlistCreateWithoutUserInput, waitlistUncheckedCreateWithoutUserInput> | waitlistCreateWithoutUserInput[] | waitlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: waitlistCreateOrConnectWithoutUserInput | waitlistCreateOrConnectWithoutUserInput[]
    createMany?: waitlistCreateManyUserInputEnvelope
    connect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
  }

  export type claimUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<claimCreateWithoutUserInput, claimUncheckedCreateWithoutUserInput> | claimCreateWithoutUserInput[] | claimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: claimCreateOrConnectWithoutUserInput | claimCreateOrConnectWithoutUserInput[]
    createMany?: claimCreateManyUserInputEnvelope
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
  }

  export type waitlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<waitlistCreateWithoutUserInput, waitlistUncheckedCreateWithoutUserInput> | waitlistCreateWithoutUserInput[] | waitlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: waitlistCreateOrConnectWithoutUserInput | waitlistCreateOrConnectWithoutUserInput[]
    createMany?: waitlistCreateManyUserInputEnvelope
    connect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
  }

  export type claimUpdateManyWithoutUserNestedInput = {
    create?: XOR<claimCreateWithoutUserInput, claimUncheckedCreateWithoutUserInput> | claimCreateWithoutUserInput[] | claimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: claimCreateOrConnectWithoutUserInput | claimCreateOrConnectWithoutUserInput[]
    upsert?: claimUpsertWithWhereUniqueWithoutUserInput | claimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: claimCreateManyUserInputEnvelope
    set?: claimWhereUniqueInput | claimWhereUniqueInput[]
    disconnect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    delete?: claimWhereUniqueInput | claimWhereUniqueInput[]
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    update?: claimUpdateWithWhereUniqueWithoutUserInput | claimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: claimUpdateManyWithWhereWithoutUserInput | claimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: claimScalarWhereInput | claimScalarWhereInput[]
  }

  export type waitlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<waitlistCreateWithoutUserInput, waitlistUncheckedCreateWithoutUserInput> | waitlistCreateWithoutUserInput[] | waitlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: waitlistCreateOrConnectWithoutUserInput | waitlistCreateOrConnectWithoutUserInput[]
    upsert?: waitlistUpsertWithWhereUniqueWithoutUserInput | waitlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: waitlistCreateManyUserInputEnvelope
    set?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    disconnect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    delete?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    connect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    update?: waitlistUpdateWithWhereUniqueWithoutUserInput | waitlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: waitlistUpdateManyWithWhereWithoutUserInput | waitlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: waitlistScalarWhereInput | waitlistScalarWhereInput[]
  }

  export type claimUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<claimCreateWithoutUserInput, claimUncheckedCreateWithoutUserInput> | claimCreateWithoutUserInput[] | claimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: claimCreateOrConnectWithoutUserInput | claimCreateOrConnectWithoutUserInput[]
    upsert?: claimUpsertWithWhereUniqueWithoutUserInput | claimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: claimCreateManyUserInputEnvelope
    set?: claimWhereUniqueInput | claimWhereUniqueInput[]
    disconnect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    delete?: claimWhereUniqueInput | claimWhereUniqueInput[]
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    update?: claimUpdateWithWhereUniqueWithoutUserInput | claimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: claimUpdateManyWithWhereWithoutUserInput | claimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: claimScalarWhereInput | claimScalarWhereInput[]
  }

  export type waitlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<waitlistCreateWithoutUserInput, waitlistUncheckedCreateWithoutUserInput> | waitlistCreateWithoutUserInput[] | waitlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: waitlistCreateOrConnectWithoutUserInput | waitlistCreateOrConnectWithoutUserInput[]
    upsert?: waitlistUpsertWithWhereUniqueWithoutUserInput | waitlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: waitlistCreateManyUserInputEnvelope
    set?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    disconnect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    delete?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    connect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    update?: waitlistUpdateWithWhereUniqueWithoutUserInput | waitlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: waitlistUpdateManyWithWhereWithoutUserInput | waitlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: waitlistScalarWhereInput | waitlistScalarWhereInput[]
  }

  export type claimCreateNestedManyWithoutDropInput = {
    create?: XOR<claimCreateWithoutDropInput, claimUncheckedCreateWithoutDropInput> | claimCreateWithoutDropInput[] | claimUncheckedCreateWithoutDropInput[]
    connectOrCreate?: claimCreateOrConnectWithoutDropInput | claimCreateOrConnectWithoutDropInput[]
    createMany?: claimCreateManyDropInputEnvelope
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
  }

  export type waitlistCreateNestedManyWithoutDropInput = {
    create?: XOR<waitlistCreateWithoutDropInput, waitlistUncheckedCreateWithoutDropInput> | waitlistCreateWithoutDropInput[] | waitlistUncheckedCreateWithoutDropInput[]
    connectOrCreate?: waitlistCreateOrConnectWithoutDropInput | waitlistCreateOrConnectWithoutDropInput[]
    createMany?: waitlistCreateManyDropInputEnvelope
    connect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
  }

  export type claimUncheckedCreateNestedManyWithoutDropInput = {
    create?: XOR<claimCreateWithoutDropInput, claimUncheckedCreateWithoutDropInput> | claimCreateWithoutDropInput[] | claimUncheckedCreateWithoutDropInput[]
    connectOrCreate?: claimCreateOrConnectWithoutDropInput | claimCreateOrConnectWithoutDropInput[]
    createMany?: claimCreateManyDropInputEnvelope
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
  }

  export type waitlistUncheckedCreateNestedManyWithoutDropInput = {
    create?: XOR<waitlistCreateWithoutDropInput, waitlistUncheckedCreateWithoutDropInput> | waitlistCreateWithoutDropInput[] | waitlistUncheckedCreateWithoutDropInput[]
    connectOrCreate?: waitlistCreateOrConnectWithoutDropInput | waitlistCreateOrConnectWithoutDropInput[]
    createMany?: waitlistCreateManyDropInputEnvelope
    connect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type claimUpdateManyWithoutDropNestedInput = {
    create?: XOR<claimCreateWithoutDropInput, claimUncheckedCreateWithoutDropInput> | claimCreateWithoutDropInput[] | claimUncheckedCreateWithoutDropInput[]
    connectOrCreate?: claimCreateOrConnectWithoutDropInput | claimCreateOrConnectWithoutDropInput[]
    upsert?: claimUpsertWithWhereUniqueWithoutDropInput | claimUpsertWithWhereUniqueWithoutDropInput[]
    createMany?: claimCreateManyDropInputEnvelope
    set?: claimWhereUniqueInput | claimWhereUniqueInput[]
    disconnect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    delete?: claimWhereUniqueInput | claimWhereUniqueInput[]
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    update?: claimUpdateWithWhereUniqueWithoutDropInput | claimUpdateWithWhereUniqueWithoutDropInput[]
    updateMany?: claimUpdateManyWithWhereWithoutDropInput | claimUpdateManyWithWhereWithoutDropInput[]
    deleteMany?: claimScalarWhereInput | claimScalarWhereInput[]
  }

  export type waitlistUpdateManyWithoutDropNestedInput = {
    create?: XOR<waitlistCreateWithoutDropInput, waitlistUncheckedCreateWithoutDropInput> | waitlistCreateWithoutDropInput[] | waitlistUncheckedCreateWithoutDropInput[]
    connectOrCreate?: waitlistCreateOrConnectWithoutDropInput | waitlistCreateOrConnectWithoutDropInput[]
    upsert?: waitlistUpsertWithWhereUniqueWithoutDropInput | waitlistUpsertWithWhereUniqueWithoutDropInput[]
    createMany?: waitlistCreateManyDropInputEnvelope
    set?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    disconnect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    delete?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    connect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    update?: waitlistUpdateWithWhereUniqueWithoutDropInput | waitlistUpdateWithWhereUniqueWithoutDropInput[]
    updateMany?: waitlistUpdateManyWithWhereWithoutDropInput | waitlistUpdateManyWithWhereWithoutDropInput[]
    deleteMany?: waitlistScalarWhereInput | waitlistScalarWhereInput[]
  }

  export type claimUncheckedUpdateManyWithoutDropNestedInput = {
    create?: XOR<claimCreateWithoutDropInput, claimUncheckedCreateWithoutDropInput> | claimCreateWithoutDropInput[] | claimUncheckedCreateWithoutDropInput[]
    connectOrCreate?: claimCreateOrConnectWithoutDropInput | claimCreateOrConnectWithoutDropInput[]
    upsert?: claimUpsertWithWhereUniqueWithoutDropInput | claimUpsertWithWhereUniqueWithoutDropInput[]
    createMany?: claimCreateManyDropInputEnvelope
    set?: claimWhereUniqueInput | claimWhereUniqueInput[]
    disconnect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    delete?: claimWhereUniqueInput | claimWhereUniqueInput[]
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    update?: claimUpdateWithWhereUniqueWithoutDropInput | claimUpdateWithWhereUniqueWithoutDropInput[]
    updateMany?: claimUpdateManyWithWhereWithoutDropInput | claimUpdateManyWithWhereWithoutDropInput[]
    deleteMany?: claimScalarWhereInput | claimScalarWhereInput[]
  }

  export type waitlistUncheckedUpdateManyWithoutDropNestedInput = {
    create?: XOR<waitlistCreateWithoutDropInput, waitlistUncheckedCreateWithoutDropInput> | waitlistCreateWithoutDropInput[] | waitlistUncheckedCreateWithoutDropInput[]
    connectOrCreate?: waitlistCreateOrConnectWithoutDropInput | waitlistCreateOrConnectWithoutDropInput[]
    upsert?: waitlistUpsertWithWhereUniqueWithoutDropInput | waitlistUpsertWithWhereUniqueWithoutDropInput[]
    createMany?: waitlistCreateManyDropInputEnvelope
    set?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    disconnect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    delete?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    connect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    update?: waitlistUpdateWithWhereUniqueWithoutDropInput | waitlistUpdateWithWhereUniqueWithoutDropInput[]
    updateMany?: waitlistUpdateManyWithWhereWithoutDropInput | waitlistUpdateManyWithWhereWithoutDropInput[]
    deleteMany?: waitlistScalarWhereInput | waitlistScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutClaimsInput = {
    create?: XOR<usersCreateWithoutClaimsInput, usersUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: usersCreateOrConnectWithoutClaimsInput
    connect?: usersWhereUniqueInput
  }

  export type dropCreateNestedOneWithoutClaimsInput = {
    create?: XOR<dropCreateWithoutClaimsInput, dropUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: dropCreateOrConnectWithoutClaimsInput
    connect?: dropWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<usersCreateWithoutClaimsInput, usersUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: usersCreateOrConnectWithoutClaimsInput
    upsert?: usersUpsertWithoutClaimsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutClaimsInput, usersUpdateWithoutClaimsInput>, usersUncheckedUpdateWithoutClaimsInput>
  }

  export type dropUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<dropCreateWithoutClaimsInput, dropUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: dropCreateOrConnectWithoutClaimsInput
    upsert?: dropUpsertWithoutClaimsInput
    connect?: dropWhereUniqueInput
    update?: XOR<XOR<dropUpdateToOneWithWhereWithoutClaimsInput, dropUpdateWithoutClaimsInput>, dropUncheckedUpdateWithoutClaimsInput>
  }

  export type usersCreateNestedOneWithoutWaitlistsInput = {
    create?: XOR<usersCreateWithoutWaitlistsInput, usersUncheckedCreateWithoutWaitlistsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWaitlistsInput
    connect?: usersWhereUniqueInput
  }

  export type dropCreateNestedOneWithoutWaitlistsInput = {
    create?: XOR<dropCreateWithoutWaitlistsInput, dropUncheckedCreateWithoutWaitlistsInput>
    connectOrCreate?: dropCreateOrConnectWithoutWaitlistsInput
    connect?: dropWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutWaitlistsNestedInput = {
    create?: XOR<usersCreateWithoutWaitlistsInput, usersUncheckedCreateWithoutWaitlistsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWaitlistsInput
    upsert?: usersUpsertWithoutWaitlistsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWaitlistsInput, usersUpdateWithoutWaitlistsInput>, usersUncheckedUpdateWithoutWaitlistsInput>
  }

  export type dropUpdateOneRequiredWithoutWaitlistsNestedInput = {
    create?: XOR<dropCreateWithoutWaitlistsInput, dropUncheckedCreateWithoutWaitlistsInput>
    connectOrCreate?: dropCreateOrConnectWithoutWaitlistsInput
    upsert?: dropUpsertWithoutWaitlistsInput
    connect?: dropWhereUniqueInput
    update?: XOR<XOR<dropUpdateToOneWithWhereWithoutWaitlistsInput, dropUpdateWithoutWaitlistsInput>, dropUncheckedUpdateWithoutWaitlistsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type claimCreateWithoutUserInput = {
    claim_code: string
    claimed_at?: Date | string
    drop: dropCreateNestedOneWithoutClaimsInput
  }

  export type claimUncheckedCreateWithoutUserInput = {
    id?: number
    drop_id: number
    claim_code: string
    claimed_at?: Date | string
  }

  export type claimCreateOrConnectWithoutUserInput = {
    where: claimWhereUniqueInput
    create: XOR<claimCreateWithoutUserInput, claimUncheckedCreateWithoutUserInput>
  }

  export type claimCreateManyUserInputEnvelope = {
    data: claimCreateManyUserInput | claimCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type waitlistCreateWithoutUserInput = {
    joined_at?: Date | string
    drop: dropCreateNestedOneWithoutWaitlistsInput
  }

  export type waitlistUncheckedCreateWithoutUserInput = {
    id?: number
    drop_id: number
    joined_at?: Date | string
  }

  export type waitlistCreateOrConnectWithoutUserInput = {
    where: waitlistWhereUniqueInput
    create: XOR<waitlistCreateWithoutUserInput, waitlistUncheckedCreateWithoutUserInput>
  }

  export type waitlistCreateManyUserInputEnvelope = {
    data: waitlistCreateManyUserInput | waitlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type claimUpsertWithWhereUniqueWithoutUserInput = {
    where: claimWhereUniqueInput
    update: XOR<claimUpdateWithoutUserInput, claimUncheckedUpdateWithoutUserInput>
    create: XOR<claimCreateWithoutUserInput, claimUncheckedCreateWithoutUserInput>
  }

  export type claimUpdateWithWhereUniqueWithoutUserInput = {
    where: claimWhereUniqueInput
    data: XOR<claimUpdateWithoutUserInput, claimUncheckedUpdateWithoutUserInput>
  }

  export type claimUpdateManyWithWhereWithoutUserInput = {
    where: claimScalarWhereInput
    data: XOR<claimUpdateManyMutationInput, claimUncheckedUpdateManyWithoutUserInput>
  }

  export type claimScalarWhereInput = {
    AND?: claimScalarWhereInput | claimScalarWhereInput[]
    OR?: claimScalarWhereInput[]
    NOT?: claimScalarWhereInput | claimScalarWhereInput[]
    id?: IntFilter<"claim"> | number
    user_id?: IntFilter<"claim"> | number
    drop_id?: IntFilter<"claim"> | number
    claim_code?: StringFilter<"claim"> | string
    claimed_at?: DateTimeFilter<"claim"> | Date | string
  }

  export type waitlistUpsertWithWhereUniqueWithoutUserInput = {
    where: waitlistWhereUniqueInput
    update: XOR<waitlistUpdateWithoutUserInput, waitlistUncheckedUpdateWithoutUserInput>
    create: XOR<waitlistCreateWithoutUserInput, waitlistUncheckedCreateWithoutUserInput>
  }

  export type waitlistUpdateWithWhereUniqueWithoutUserInput = {
    where: waitlistWhereUniqueInput
    data: XOR<waitlistUpdateWithoutUserInput, waitlistUncheckedUpdateWithoutUserInput>
  }

  export type waitlistUpdateManyWithWhereWithoutUserInput = {
    where: waitlistScalarWhereInput
    data: XOR<waitlistUpdateManyMutationInput, waitlistUncheckedUpdateManyWithoutUserInput>
  }

  export type waitlistScalarWhereInput = {
    AND?: waitlistScalarWhereInput | waitlistScalarWhereInput[]
    OR?: waitlistScalarWhereInput[]
    NOT?: waitlistScalarWhereInput | waitlistScalarWhereInput[]
    id?: IntFilter<"waitlist"> | number
    user_id?: IntFilter<"waitlist"> | number
    drop_id?: IntFilter<"waitlist"> | number
    joined_at?: DateTimeFilter<"waitlist"> | Date | string
  }

  export type claimCreateWithoutDropInput = {
    claim_code: string
    claimed_at?: Date | string
    user: usersCreateNestedOneWithoutClaimsInput
  }

  export type claimUncheckedCreateWithoutDropInput = {
    id?: number
    user_id: number
    claim_code: string
    claimed_at?: Date | string
  }

  export type claimCreateOrConnectWithoutDropInput = {
    where: claimWhereUniqueInput
    create: XOR<claimCreateWithoutDropInput, claimUncheckedCreateWithoutDropInput>
  }

  export type claimCreateManyDropInputEnvelope = {
    data: claimCreateManyDropInput | claimCreateManyDropInput[]
    skipDuplicates?: boolean
  }

  export type waitlistCreateWithoutDropInput = {
    joined_at?: Date | string
    user: usersCreateNestedOneWithoutWaitlistsInput
  }

  export type waitlistUncheckedCreateWithoutDropInput = {
    id?: number
    user_id: number
    joined_at?: Date | string
  }

  export type waitlistCreateOrConnectWithoutDropInput = {
    where: waitlistWhereUniqueInput
    create: XOR<waitlistCreateWithoutDropInput, waitlistUncheckedCreateWithoutDropInput>
  }

  export type waitlistCreateManyDropInputEnvelope = {
    data: waitlistCreateManyDropInput | waitlistCreateManyDropInput[]
    skipDuplicates?: boolean
  }

  export type claimUpsertWithWhereUniqueWithoutDropInput = {
    where: claimWhereUniqueInput
    update: XOR<claimUpdateWithoutDropInput, claimUncheckedUpdateWithoutDropInput>
    create: XOR<claimCreateWithoutDropInput, claimUncheckedCreateWithoutDropInput>
  }

  export type claimUpdateWithWhereUniqueWithoutDropInput = {
    where: claimWhereUniqueInput
    data: XOR<claimUpdateWithoutDropInput, claimUncheckedUpdateWithoutDropInput>
  }

  export type claimUpdateManyWithWhereWithoutDropInput = {
    where: claimScalarWhereInput
    data: XOR<claimUpdateManyMutationInput, claimUncheckedUpdateManyWithoutDropInput>
  }

  export type waitlistUpsertWithWhereUniqueWithoutDropInput = {
    where: waitlistWhereUniqueInput
    update: XOR<waitlistUpdateWithoutDropInput, waitlistUncheckedUpdateWithoutDropInput>
    create: XOR<waitlistCreateWithoutDropInput, waitlistUncheckedCreateWithoutDropInput>
  }

  export type waitlistUpdateWithWhereUniqueWithoutDropInput = {
    where: waitlistWhereUniqueInput
    data: XOR<waitlistUpdateWithoutDropInput, waitlistUncheckedUpdateWithoutDropInput>
  }

  export type waitlistUpdateManyWithWhereWithoutDropInput = {
    where: waitlistScalarWhereInput
    data: XOR<waitlistUpdateManyMutationInput, waitlistUncheckedUpdateManyWithoutDropInput>
  }

  export type usersCreateWithoutClaimsInput = {
    email: string
    password_hash: string
    created_at?: Date | string
    waitlists?: waitlistCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutClaimsInput = {
    id?: number
    email: string
    password_hash: string
    created_at?: Date | string
    waitlists?: waitlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutClaimsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutClaimsInput, usersUncheckedCreateWithoutClaimsInput>
  }

  export type dropCreateWithoutClaimsInput = {
    title: string
    description?: string | null
    drop_time: Date | string
    claim_window?: number | null
    created_at?: Date | string
    waitlists?: waitlistCreateNestedManyWithoutDropInput
  }

  export type dropUncheckedCreateWithoutClaimsInput = {
    id?: number
    title: string
    description?: string | null
    drop_time: Date | string
    claim_window?: number | null
    created_at?: Date | string
    waitlists?: waitlistUncheckedCreateNestedManyWithoutDropInput
  }

  export type dropCreateOrConnectWithoutClaimsInput = {
    where: dropWhereUniqueInput
    create: XOR<dropCreateWithoutClaimsInput, dropUncheckedCreateWithoutClaimsInput>
  }

  export type usersUpsertWithoutClaimsInput = {
    update: XOR<usersUpdateWithoutClaimsInput, usersUncheckedUpdateWithoutClaimsInput>
    create: XOR<usersCreateWithoutClaimsInput, usersUncheckedCreateWithoutClaimsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutClaimsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutClaimsInput, usersUncheckedUpdateWithoutClaimsInput>
  }

  export type usersUpdateWithoutClaimsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlists?: waitlistUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutClaimsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlists?: waitlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type dropUpsertWithoutClaimsInput = {
    update: XOR<dropUpdateWithoutClaimsInput, dropUncheckedUpdateWithoutClaimsInput>
    create: XOR<dropCreateWithoutClaimsInput, dropUncheckedCreateWithoutClaimsInput>
    where?: dropWhereInput
  }

  export type dropUpdateToOneWithWhereWithoutClaimsInput = {
    where?: dropWhereInput
    data: XOR<dropUpdateWithoutClaimsInput, dropUncheckedUpdateWithoutClaimsInput>
  }

  export type dropUpdateWithoutClaimsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    drop_time?: DateTimeFieldUpdateOperationsInput | Date | string
    claim_window?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlists?: waitlistUpdateManyWithoutDropNestedInput
  }

  export type dropUncheckedUpdateWithoutClaimsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    drop_time?: DateTimeFieldUpdateOperationsInput | Date | string
    claim_window?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlists?: waitlistUncheckedUpdateManyWithoutDropNestedInput
  }

  export type usersCreateWithoutWaitlistsInput = {
    email: string
    password_hash: string
    created_at?: Date | string
    claims?: claimCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutWaitlistsInput = {
    id?: number
    email: string
    password_hash: string
    created_at?: Date | string
    claims?: claimUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutWaitlistsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWaitlistsInput, usersUncheckedCreateWithoutWaitlistsInput>
  }

  export type dropCreateWithoutWaitlistsInput = {
    title: string
    description?: string | null
    drop_time: Date | string
    claim_window?: number | null
    created_at?: Date | string
    claims?: claimCreateNestedManyWithoutDropInput
  }

  export type dropUncheckedCreateWithoutWaitlistsInput = {
    id?: number
    title: string
    description?: string | null
    drop_time: Date | string
    claim_window?: number | null
    created_at?: Date | string
    claims?: claimUncheckedCreateNestedManyWithoutDropInput
  }

  export type dropCreateOrConnectWithoutWaitlistsInput = {
    where: dropWhereUniqueInput
    create: XOR<dropCreateWithoutWaitlistsInput, dropUncheckedCreateWithoutWaitlistsInput>
  }

  export type usersUpsertWithoutWaitlistsInput = {
    update: XOR<usersUpdateWithoutWaitlistsInput, usersUncheckedUpdateWithoutWaitlistsInput>
    create: XOR<usersCreateWithoutWaitlistsInput, usersUncheckedCreateWithoutWaitlistsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWaitlistsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWaitlistsInput, usersUncheckedUpdateWithoutWaitlistsInput>
  }

  export type usersUpdateWithoutWaitlistsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutWaitlistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type dropUpsertWithoutWaitlistsInput = {
    update: XOR<dropUpdateWithoutWaitlistsInput, dropUncheckedUpdateWithoutWaitlistsInput>
    create: XOR<dropCreateWithoutWaitlistsInput, dropUncheckedCreateWithoutWaitlistsInput>
    where?: dropWhereInput
  }

  export type dropUpdateToOneWithWhereWithoutWaitlistsInput = {
    where?: dropWhereInput
    data: XOR<dropUpdateWithoutWaitlistsInput, dropUncheckedUpdateWithoutWaitlistsInput>
  }

  export type dropUpdateWithoutWaitlistsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    drop_time?: DateTimeFieldUpdateOperationsInput | Date | string
    claim_window?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUpdateManyWithoutDropNestedInput
  }

  export type dropUncheckedUpdateWithoutWaitlistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    drop_time?: DateTimeFieldUpdateOperationsInput | Date | string
    claim_window?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUncheckedUpdateManyWithoutDropNestedInput
  }

  export type claimCreateManyUserInput = {
    id?: number
    drop_id: number
    claim_code: string
    claimed_at?: Date | string
  }

  export type waitlistCreateManyUserInput = {
    id?: number
    drop_id: number
    joined_at?: Date | string
  }

  export type claimUpdateWithoutUserInput = {
    claim_code?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    drop?: dropUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type claimUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    drop_id?: IntFieldUpdateOperationsInput | number
    claim_code?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    drop_id?: IntFieldUpdateOperationsInput | number
    claim_code?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitlistUpdateWithoutUserInput = {
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    drop?: dropUpdateOneRequiredWithoutWaitlistsNestedInput
  }

  export type waitlistUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    drop_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitlistUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    drop_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimCreateManyDropInput = {
    id?: number
    user_id: number
    claim_code: string
    claimed_at?: Date | string
  }

  export type waitlistCreateManyDropInput = {
    id?: number
    user_id: number
    joined_at?: Date | string
  }

  export type claimUpdateWithoutDropInput = {
    claim_code?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type claimUncheckedUpdateWithoutDropInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    claim_code?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimUncheckedUpdateManyWithoutDropInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    claim_code?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitlistUpdateWithoutDropInput = {
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutWaitlistsNestedInput
  }

  export type waitlistUncheckedUpdateWithoutDropInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitlistUncheckedUpdateManyWithoutDropInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
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