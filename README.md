# TypeScript Type Error: 'string | number' is not assignable to type 'number'

This repository demonstrates a common TypeScript type error and its solution.

## The Problem

The `combineArrays` function attempts to combine two arrays of potentially different types. TypeScript correctly infers that the resulting array contains elements of type `string | number`. However, if you try to use this function with arrays of a specific type,  TypeScript will throw a type error. 

## The Solution

The solution involves making the function generic, allowing it to work with arrays of any single type.