export const add = (a: number, b: number, c?: number) => {
	return a + b + (c || 0) + Math.random();
}