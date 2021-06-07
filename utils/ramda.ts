const pipe = <T>(...fns: Array<(arg: T) => T>) => (x: T) => fns.reduce((v, f) => f(v), x)
const compose = <T>(...fns: Array<(arg: T) => T>) => (x: T) => fns.reduceRight((v, f) => f(v), x)

export {
	pipe,
	compose,
}
