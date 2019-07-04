/// ************!!!重要!!!******************
/// 不要在 global.d.ts 全局声明中使用 import 或 export 语法，
/// 否则 typescript 认为此类型声明文件为模块类型声明,因此会导致全局声明无效
/// ***************************************

type PlainObject = { [key: string]: any };
/**
 * Powerful Partial, Support adding ? modifier to a mapped property in deep level
 * // { view: { defaultEngines: string } } => { view?: { defaultEngines?: string } }
 * type EggConfig = PowerPartial<EggAppConfig>
 */
type PowerPartial<T> = { [U in keyof T]?: T[U] extends object ? PowerPartial<T[U]> : T[U] };

/**
 * 类型拆箱
 * @example
 * Unpacked<string>  = string
 * Unpacked<string[]>  = string
 * Unpacked<Promise<string>>  = string
 * Unpacked<(foo: number, bar: number) => string>  = string
 * Unpacked<(foo: number, bar: number) => Promise<string>  = string
 */
// prettier-ignore
type Unpacked<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U :
  T;

type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type AsyncFunctionPropertyNames<T> = { [K in keyof T]: Unpacked<T[K]> extends Promise<any> ? K : never }[keyof T];
type AsyncFunctionProperties<T> = Pick<T, AsyncFunctionPropertyNames<T>>;

/**
 * MationAction 转换为 Mutation
 */
type MutaionAction2Mutation<T> = {
  [K in keyof T]: Unpacked<T[K]> extends Promise<any> ? (payload: Unpacked<Unpacked<T[K]>>) => void : T[K];
};

type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? A : B;

type ReadonlyKeys<T> = {
  [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P>;
}[keyof T];

/** nuxt 扩展 process */
declare namespace NodeJS {
  interface Process {
    server: boolean;
    static: boolean;
    client: boolean;
    browser: boolean;
    mode: 'universal' | 'spa';
    modern: boolean;
  }
}
