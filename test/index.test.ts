import { describe, expect, test } from "vitest"
import { throwError } from "../src/index"

describe("Testing suite", () => {
    describe("Folder 1, testing suite hierarchy", () => {
        test("test")
    })
    describe("Folder 2, testing suite hierarchy", () => {
        test("test")
    })
})

describe("Testing expected types", () => {
    test("Object", () => {
        expect({ name: "David" }).toEqual({ name: "David" })
    })
    test("Throws error", async () => {
        expect(async () => await throwError(5)).rejects.toThrowError()
    })
})
