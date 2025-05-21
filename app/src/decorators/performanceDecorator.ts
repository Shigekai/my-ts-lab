//Esse dec

export function performanceDecorator(){
    return(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ): void => {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const ts = performance.now();
            console.log(`${propertyKey}: tempo de execução: ${(ts -  t1)/1000} segundos`);
            return result;
        }
    }

};

