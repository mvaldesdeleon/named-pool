interface INamedPoolOptions<A> {
    factory: (key: string) => A;
    action: (key: string, resource: A, ...args: any[]) => any;
}

export default function namedPool<A>(options: INamedPoolOptions<A>) {
    const cache: { [key: string]: A } = {};

    return function getResource(key: string) {
        if (!(key in cache)) {
            cache[key] = options.factory(key);
        }

        return function action(...args: any[]) {
            return options.action(key, cache[key], ...args);
        };
    };
}
