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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
