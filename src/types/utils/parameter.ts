export type Parameter<T> = T extends (param: infer U) => any ? U : never;