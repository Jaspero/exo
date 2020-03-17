# EXO

## Building scully

To build the scully app run `npm run build:app` this in turn runs a few commands:

- `npm --prefix app run build` - builds the angular app
- `copy:collections` - copies all the collections from the public folder in to the angular dist folder in order to make them available to the scully build.
- `npm --prefix app run build:scully` - runs the scully build
- `cleanup` - removes any old scully build from the public folder
- `copy:app` - moves the entire build back to the public folder
