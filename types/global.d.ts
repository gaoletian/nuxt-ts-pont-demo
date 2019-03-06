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
 * Omit, Support adding ? modifier to a mapped property in deep level
 * // { view: { defaultEngines: string } } => { view?: { defaultEngines?: string } }
 * type EggConfig = PowerPartial<EggAppConfig>
 */
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

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
