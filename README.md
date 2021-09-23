# Tech Stack

We use TypeScript and SASS (node-sass instead of Dart SASS) and the install commands are:
`npx create-react-app project_name --template typescript` and `npm install node-sass --save`

# Fix Firebase links

You put the `rewrites` key arrau inside the file called `firebase.json`

```
{
  "hosting": {
    "public": "build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

```

## Study on your own

Research `enumerators` for TypeScript

## Import files using the src folder as the entry point instead of the file itself

In `tsconfig.json` write `"baseURL": "src"`

## Browser route gotchas!

Similar but not the same inside `package.json`

- `react`: The Facebook library to build UI, this import focus on the hooks and high level logic.
- `react-dom`: Part of React that focus on the virtual DOM for enhancing perfomance, JSX transformations, etc.
- `react-router`: External library to handle "virtual" URLS.
- `react-router-dom`: The part of `react-router` with code specically for the web.
- `react-router-native`: The part of `react-router` with code specically for mobile apps (App Store and Google Play)
