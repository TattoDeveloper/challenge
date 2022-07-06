
import { NextFunction, Request, Response, Send } from "express";

export function authorSignature( req: Request, res, next: NextFunction) {
  const originalResponse = res.json;
  const author = {
    name: "Juan",
    lastname: "Puerta"
  }

  res.json = function(data) {
    originalResponse.call(this, { author, ...data})
  }

  next()
}