import { AsyncFn } from "../static/async-fn";

export type AsyncFnReturn<T extends AsyncFn> = Awaited<ReturnType<T>>;
