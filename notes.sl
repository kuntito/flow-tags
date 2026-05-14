+   to create the project, (this assumes vite is installed)
    `npm create vite@4.1.0 .`

    `.` uses the cwd as the project root

    * framework, select `React`
    * variant, select `TypeScript`

+   install dependencies
    `npm i`

+   run server with:
    `npm run dev`

    to change default port number, 
    go to `vite.config.ts`, add:

    `
    export default defineConfig({
        ...,
        server: {
            port: 5175
        },
    })
    `

+   chakra ui:
    `npm i @chakra-ui/react@2.10.3`


+   zustand state management
    `npm i zustand`

+   converts time strings to milliseconds, allows me do ms("10s"):
    `npm i ms@2.1.3`
    `npm i -D @types/ms`, `-D` means it's only available in the development environment

+   react hook for debouncing, delays function calls until user stops typing:
    `npm i use-debounce`

+   to deploy to vercel,

    first run a local build:
    `npm run build`, make sure there are no errors

    then, use this to deploy:
    `vercel`

    NB:
    this works for me, 
    but i assume it's because i've set up vercel in the past.

    if vercel not installed, a starting point is:
    `npm i -g vercel`

    add environment variables on Vercel dashboard.