export function performanceDecorator(timeInSeconds = false) {
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        let divisor = 1;
        let unit = 'milissegundos';
        if (timeInSeconds) {
            divisor = 1000;
            unit = 'segundos';
        }
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const ts = performance.now();
            console.log(`${propertyKey}: tempo de execução: ${(ts - t1) / divisor} ${unit}`);
            return result;
        };
    };
}
