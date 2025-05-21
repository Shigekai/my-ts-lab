export function performanceDecorator() {
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const ts = performance.now();
            console.log(`${propertyKey}: tempo de execução: ${(ts - t1) / 1000} segundos`);
            return result;
        };
    };
}
;
