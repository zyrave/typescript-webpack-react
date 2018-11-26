export const sum = (...a: number[]) => a.reduceRight((acc, val) => acc + val, 0);
