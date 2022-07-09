# Design of SDK

## API Modules Classes


1. The SDK is broken down by the type of data we request: Book, Movie, Chapter, Character and Quote
2. Each of these are implemented in a class extending `BaseAPI` which supports `getAll` and `get(id)`
3. In order to keep the concept of (1), chapter implements `getAllForBook`, and Quote implements `getAllForMovie`

(see: https://github.com/lirankurtz/lirankurtz-liblab-SDK/tree/main/api-modules)

## Query Options

1. Options are implemented by classes: Filter, Pagination, Sort
2. Each option has it's own methods to set the parameters
3. Each option implements `buildUriString` which is used as a parameter for `getAll`, `getAllForBook` and `getAllForMovie`

(see: https://github.com/lirankurtz/lirankurtz-liblab-SDK/tree/main/api-options)
