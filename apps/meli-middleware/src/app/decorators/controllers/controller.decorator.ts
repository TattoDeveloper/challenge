/* eslint-disable @typescript-eslint/ban-types */
import { Router } from "express"
import 'reflect-metadata'
import { BASE_URL } from "../../config/base-url"
export const controllerRouter: Router  = Router()


export function controller( controllerPath: string ) {
    return function (target: Function)  {
      const  paths = Reflect.getMetadata('paths', target.prototype)

      for (const methodName in paths ) {
            const routeHandler = target.prototype[methodName]
            const path = paths[methodName]
            console.log(target.prototype)
            controllerRouter.get(`${BASE_URL}${controllerPath}${path}`, routeHandler.bind(target))
        }
    }
} 
 

export function get( path: string ) {
   return function (target: any, key: string) {
      const currentMetadata = Reflect.getMetadata('paths', target) ?? {}
      currentMetadata[key] = path
      Reflect.defineMetadata('paths', currentMetadata , target)
    };
    
}


export function dependency( symbol: Symbol ) {
    return function ( target: Object, propertyKey: string | symbol, parameterIndex: number) {
        const currentDependencies = Reflect.getMetadata('dependencies', target) ?? {}
        currentDependencies[parameterIndex] = symbol
        Reflect.defineMetadata('dependencies', currentDependencies , target, propertyKey)
    }
}

