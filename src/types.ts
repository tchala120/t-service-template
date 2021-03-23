import type { CallbackError, NativeError } from 'mongoose'

interface IPaginationOption {
  limit: number
  totalPages: number
  page: number
}

export type NextFunction = (err?: CallbackError) => void

export interface IError extends NativeError {
  code?: number
}

export interface IArgument {
  input?: any
  pagination?: IPaginationOption
}
