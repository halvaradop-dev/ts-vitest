import { scheduler } from "timers/promises"

/**
 * We can add the properties and the functions in our project using
 * vitest configuration, if we want to do this we need to create the
 * vitest.config.ts and add the property test and define the property
 * globals with value true.
 * 
 * 
 * test is the same than it, only it is the alias
 */

export const throwError = async (delay: number, message: string = "Error") => {
    await scheduler.wait(delay)
    throw new Error(message)
}

