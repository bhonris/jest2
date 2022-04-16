import { hasUncaughtExceptionCaptureCallback } from "process"
import { isPalindrome } from "./isPalindrome"


it('Testing a Palindromic String', () => {
    const input = "asdffdsa"
    const results = isPalindrome(input)
    expect(results).toBeTruthy()
})

it('Testing Empty String', () => {
    const input = ""
    const results = isPalindrome(input)
    expect(results).toBeTruthy()
})

it('Testing String of length 1', () => {
    const input = "a"
    const results = isPalindrome(input)
    expect(results).toBeTruthy()
})

it('Testing non-palindromic string', () => {
    const input = "ab"
    const results = isPalindrome(input)
    expect(results).toBeFalsy()
})