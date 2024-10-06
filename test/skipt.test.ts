import { expect, test } from "vitest"

test.skip("Skip testing", () => {
    expect(1).toBe(2)
})