import { test, describe, expect } from "vitest"
import { scheduler } from "timers/promises"
import { throwError } from "../src"

describe("Asyncronymous functions", () => {
    test.concurrent("Async 1", async ({ expect }) => {
        const message = await scheduler.wait(5000).then(() => "1200 miliseconds after")
    })

    test.concurrent("Async 2", async ({ expect }) => {
        const message = await scheduler.wait(2000).then(() => "2000 miliseconds after")
        expect(message).include("after")
    })

    test.concurrent("Async 3", async ({ expect }) => {
        const message = await scheduler.wait(1000).then(() => "1000 miliseconds after")
        expect(message).toBe("1000 miliseconds after")
    })
})

describe("Reject async", () => {
    test("Async", () => {
        expect(async () => await throwError(0)).rejects.toThrowError("Error")
    })

    test.fails("Async bad", async () => {
        await throwError(0)
    })
})
