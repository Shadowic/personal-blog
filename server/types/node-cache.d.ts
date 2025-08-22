declare module 'node-cache' {
  class NodeCache {
    constructor(options?: any);
    set(key: string, value: any, ttl?: number): boolean;
    get<T>(key: string): T | undefined;
    del(key: string): number;
  }
  export = NodeCache;
}
