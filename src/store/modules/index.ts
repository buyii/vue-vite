interface AnyObject {
	[key: string]: any
}
export function loadModules() {
    const context = import.meta.glob("./*.ts",{ eager: true }) as AnyObject;
    const modules: AnyObject = {};

    Object.keys(context).forEach((key: string) => {
        if (key === "./index.ts") return;
        modules[key.replace(/(\.\/|\.ts)/g, '')] = context[key].default
    });
    
    return { context, modules }
}

export const { context, modules } = loadModules();