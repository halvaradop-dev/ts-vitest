import { describe, expectTypeOf, test } from "vitest"

describe("Types checking", () => {
    test("Nums", () => {
        expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
    })
})
