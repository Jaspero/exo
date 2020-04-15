![Deploy Public Site](https://github.com/Jaspero/exo/workflows/Deploy%20Public%20Site/badge.svg)
![Lint and Build Website](https://github.com/Jaspero/exo/workflows/Lint%20and%20Build%20Website/badge.svg)
![Lint and Deploy Functions](https://github.com/Jaspero/exo/workflows/Lint%20and%20Deploy%20Functions/badge.svg)

# EXO

## About EXO

EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality organic products and furnishing an enjoyable atmosphere that appeals to the senses.

## Technologies we used

The app fits in the [JAM](https://jamstack.org/) stack. The SSG we used is [Scully](https://github.com/scullyio/scully) on top of Angular.
The CMS is a very simple implementation of the [Netlify CMS](https://www.netlifycms.org/). We also use [Github Actions](https://help.github.com/en/actions) for CI/CD.

Both the website and the CMS are hocdsted on [Firebase](https://firebase.google.com/).

## Why is this open source 

Jaspero benefits greatly from the open source community. This app in its entirety is made possible because of open source software. Because of this we try to open source as many of our projects as we can. 

We don't have the required manpower and experties to build frameworks and tools the community could directly use in building awesome software, so by open sourcing our projects we hope people can find inspiration or code snippets to speed up development.

## Building scully

To build the scully app run `npm run build:app` this in turn runs a few commands:

- `npm --prefix app run build` - builds the angular app
- `copy:collections` - copies all the collections from the public folder in to the angular dist folder in order to make them available to the scully build.
- `npm --prefix app run build:scully` - runs the scully build
- `cleanup` - removes any old scully build from the public folder
- `copy:app` - moves the entire build back to the public folder

## Running Scully locally

- Run `npm run build`
- Copy collections from `public/collections` in to `dist/collections`
- Run `npm run scully`

## Adding Blocks

1. Define the block in `public/admin/config.yml`
2. Add the name of the block in to `app/shared/enums/block.enum.ts`. The name needs to equal the name field
defined for the block in `config.yml`
3. Create the component in the `app/shared/modules/blocks/` folder. The naming convention we use is `[block-name]-block`.
The only required property each block needs to have is `data`.
4. In the `app/shared/modules/blocks/block-renderer/block-renderer.component.ts` extend the `BLOCKS_MAP` object
with your newly added block. The name needs to be the key and the component the value. This tells the renderer
component which block to use when it encounters a specific name. 

## License 

The source code is publised under MIT © [Jaspero Ltd](mailto:info@jaspero.co) and all media assets are property of EXO BRANDS.
