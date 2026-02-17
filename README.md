# BgHoard

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Run tasks

To run tasks with Nx use:

```sh
npx nx <target> <project-name>
```

For example:

```sh
npx nx build myproject
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

To install a new plugin you can use the `nx add` command. Here's an example of adding the React plugin:
```sh
npx nx add @nx/react
```

Use the plugin's generator to create new projects. For example, to create a new React app or library:

```sh
# Generate an app
npx nx g @nx/react:app demo

# Generate a library
npx nx g @nx/react:lib some-lib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


<br />
<br />
<br />


# The Board Game Hoard

## 💻 Lab 1 - generate an empty workspace

### 🏋️‍♀️ Steps:
1. Generate an empty Nx workspace for a fictional company called "The Board Game Hoard"

2. The workspace name should be `bg-hoard`

3. When prompted, select:
   - `None` as Stack (we will create apps manually)
   - An `Integrated` workspace layout
   - And `skip` configuring a `CI Provider` and `Remote Caching` for now (we'll set those up in a later lab)

---
##### To create a new Nx workspace:

```shell
npx create-nx-workspace bg-hoard --preset=apps --nx-cloud=skip
```


## 💻 Lab 2 - Generate a React app

### 🏋️‍♀️ Steps:

1. Make sure you can run Nx commands:

   - try out `nx --version` and see if it outputs a version number
   - install the CLI globally: `npm i -g nx`
   - if you don't want to install it globally, use `npx/yarn/pnpm nx` (depending on the installed package manager) instead of `nx` in all the commands in the upcoming labs

     > Please make sure you are using the latest version of Nx (17+)
     > <br />

2. Run `nx list` to see which plugins you have installed
   <br />

3. Add the React plugin: `npm i -S @nx/react` (or `yarn add @nx/react` or `pnpm add @nx/react`)
   <br />

4. Let's also add Material UI so we can use some of their components: `npm i -S @mui/material @emotion/react @emotion/styled` (or `yarn add ...` or `pnpm add ...`)
   <br />

5. Use the [`@nx/react` plugin](https://nx.dev/nx-api/react/generators/application) to generate an React app called `store` in your new workspace

   ⚠️**Important:** Make sure you **add React Router**, select **SCSS** as a style, select **cypress** as E2E test runner, and use the **Webpack** bundler when asked!

   <details>
   <summary>🐳 &nbsp;&nbsp;Hint</summary>
   <img src="./assets/lab2_cmds.png" alt="Nx generate cmd structure">
   </details><br />

6. Create a `fake-api.ts` file in your new app's `src` folder that returns an array of some games (you can just copy the code from [here](../../examples/lab2/apps/store/src/fake-api/index.ts))

   ⏳**Reminder:** When you are given example files to copy, the folder they're in hints to the _folder_ and _filename_ you can place them in when you do the copying
   <br />

7. Add some basic styling to your new component and display the games from the Fake API (to not spend too much time on this, you can copy it from here [.tsx](../../examples/lab2/apps/store/src/app/app.tsx) / [.scss](../../examples/lab2/apps/store/src/app/app.module.scss) - and replace the full contents of the files)
   <br />

8. You can get the example game images from [here](../../examples/lab2/apps/store/src/assets)

   ⚠️&nbsp;&nbsp;Make sure you put them in the correct folder
   <br />

9. Serve the app: `nx serve store`
   <br />

10. See your app live at [http://localhost:4200/](http://localhost:4200/)
    <br />

11. Inspect what changed from the last time you committed, then commit your changes
    <br />

---

<img src="./assets/lab2_result.png" width="500" alt="screenshot of lab2 result">

Your app should look similar to the screenshot above!

Now we're starting to see some content! But the ratings also don't look that good - we'll fix those in **Lab 5**.

---

##### To generate a new React application: (step 5)

```shell
nx generate @nx/react:application store --directory=apps/store # or `nx g app store --directory=apps/store`
```

## 💻 Lab 3 - Executors

### 🏋️‍♀️ Steps:

1. Build the app

   <details>
   <summary>🐳 &nbsp;&nbsp;Hint</summary>
   <img src="./assets/lab3_build_cmds.png" alt="Nx executor command structure">
   </details><br />

2. You should now have a `dist` folder - let's open it up!

   - This is your whole app's output! If we wanted we could push this now to a server and it would all work.
   - Notice how we generated a `3rdpartylicenses.txt` file and how all files have hashes in suffix
   - Open one of the files, for example `main.{hash}.js` and look at it's contents. Notice how it's minified.
     <br />

3. **Open up `apps/store/project.json`** and look at the object under `targets/build`

   - this is the **target**, and it has an **executor** option, that points to `@nx/webpack:webpack`
   - Remember how we copied some images into our `/assets` folder earlier? Look through the executor options and try to find how it knows to include them in the final build!
     <br />

4. Send a flag to the executor so that it builds for development

   <details>
   <summary>🐳 &nbsp;&nbsp;Hint</summary>

   `--configuration=development`

   </details><br />

5. Open up the `dist` folder again - notice how the `3rdpartylicenses.txt` file is gone, as per the "development" configuration in `project.json`. Also notice how filenames no longer have hashed suffixes. Open one of the files, for example `main.{hash}.js`. Notice how its content is now fully readable and there are sourcemaps attached to each of the compiled files.
   <br />

6. The **serve** target (located a bit lower in `project.json`) also contains a executor, that _uses_ the output from the **build** target
   <br />


---
##### To build the app for production:

`nx build store`

##### To build the app for development:

`nx build store --configuration=development`

## 🚂 Lab 3.1 - Migrations

### 🏋️‍♀️ Steps:

1. Install an old version of the `@nrwl/nx-react-workshop` npm package: `yarn add -D @nrwl/nx-react-workshop@0.0.1`
2. Make sure you've committed all your changes to this point: `git commit -am "lab 3"`
3. Migrate to the latest version of `@nrwl/nx-react-workshop`

   <details>
   <summary>🐳 Hint</summary>

   `nx migrate @nrwl/nx-react-workshop@latest`

   </details>
   <br />

4. Look at the `migrations.json` file. It contains the generators to complete every lab in the workshop. We don't want to run everything, so let's delete every migration entry except for labs 1 through 3.
5. The `migrations.json` file should now only contain generators for the first 3 labs. Let's run those migrations: `nx migrate --run-migrations`.
6. There's also a generator that comes with `@nrwl/nx-react-workshop` to help you set up the `migrations.json` file to complete a specific lab or to complete a range of labs in option 1 or option 2. Experiment with the `complete-labs` generator so that later on you can catch up if you get stuck on a lab. `nx g @nrwl/nx-react-workshop:complete-labs --help`


## 💻 Lab 4 - Generate a component lib

Let's add a header to our app! Because headers can be shared with other components, we will create a common lib that others can import as well.

<details>
  <summary>App Screenshot</summary>
  <img src="./assets/lab4_screenshot.png" width="500" alt="screenshot of lab4 result">
</details>

### 🏋️‍♀️ Steps:

1.  Stop the `nx serve`
    <br />

2.  Generate a new empty React library called `store-ui-shared` in the `libs/store/ui-shared` folder. When asked, choose `jest` as test runner, the `rollup` as a bundler and `as-provided` naming convention.

    <details>
    <summary>🐳 &nbsp;&nbsp;Hint</summary>

    - it's a generator! you've used it before in the second lab, but instead of an `app`, we now want to generate a `lib`
    - use the `--help` command to figure out how to generate it in a **directory** and that it doesn’t create default component

    </details><br />

3.  Generate a new React component, called `header`, inside the `src/lib` folder of the library you just created

    ⚠️&nbsp;&nbsp;Play around with the generator options so that the generated component is automatically **exported** from the lib's module

    <details><summary>🐳 &nbsp;&nbsp;Hint</summary>

    use `--help` to figure out how to specify under which **project** you want to generate the new component and how to automatically have it **exported** and skip the component generation

    </details><br />

4.  Replace the `header` component's [code](https://github.com/nrwl/nx-react-workshop/blob/main/examples/lab4/libs/store/ui-shared/src/lib/header/header.tsx)
    <br />

5.  Let's use the new shared header component we created

    - Add your new component to `apps/store/src/app/app.tsx`

    <details><summary>🐳 &nbsp;&nbsp;Hint</summary>

    ```typescript
    import { Header } from '@bg-hoard/store-ui-shared';
    ```

    ```html
    <Header title="Board Game Hoard" />
    <!-- right at the top - above our container -->
    <div className="{styles['container']}"></div>
    ```

    Wrap the App component in a fragment (`<>` and `</>`)

    </details>

    ⚠️&nbsp;&nbsp;You might need to restart the TS compiler in your editor (`CTRL+SHIFT+P` in VSCode and search for `Restart Typescript`)
    <br />

6.  Serve the project and test the changes
    <br />

7.  Run the command to inspect the dependency graph - What do you see? (Remember to "Show all projects" in left sidebar)
     <details>
     <summary>🐳 &nbsp;&nbsp;Hint</summary>

    ```bash
    nx graph
    ```

     </details><br />

8.  Inspect what changed from the last time you committed, then commit your changes
    <br />

---
#### Generate a new lib:

```bash
nx generate @nx/react:lib store-ui-shared --directory=libs/store/ui-shared --no-component
```

#### Generate a new component in a project:
(Should be excuted in "libs/store/ui-shared/src/lib/" of project root "ui-share")
```bash
nx generate @nx/react:component header --export --directory=libs/store/ui-shared/src/lib/header
```
## 💻 Lab 5 - Generate a utility lib


<details>
  <summary>App Screenshot</summary>
  <img src="./assets/lab5_screenshot.png" width="500" alt="screenshot of lab5 result">
</details>

### 🏋️‍♀️ Steps:

1. Stop the `nx serve`
   <br/>

2. Use the `@nx/js` package to generate another lib in the `libs/store` folder - let's call it `util-formatters`.
   <br/>

3. Add the [code for the utility function](https://github.com/nrwl/nx-react-workshop/blob/main/examples/lab5/libs/store/util-formatters/src/lib/store-util-formatters.ts) to the new library you just created `libs/store/util-formatters/src/lib/store-util-formatters.ts`
   <br/>

4. Use it in your frontend project to format the rating for each game

    <details>
    <summary>🐳 &nbsp;&nbsp;Hint</summary>

   `app.tsx`:

   ```ts
   import { formatRating } from '@bg-hoard/store-util-formatters';
   ```

   ```html
   <strong>Rating:</strong> {formatRating(x.rating)}
   ```

    </details><br />

5. Serve the store app - notice how the ratings are formatted.
   <br/>

6. Launch the dependency graph - notice how the app depends on two libs now.
   <br/>

7. Inspect what changed from the last time you committed, then commit your changes
   <br/>
---
##### Generate a framework agnostic lib

```bash
nx generate @nx/js:lib store-util-formatters --directory=libs/store/util-formatters
```
## 💻 Lab 6 - Generate a route lib

<details>
  <summary>App Screenshot</summary>
  <img src="./assets/lab6_screenshot.png" width="500" alt="screenshot of lab6 result">
</details>

### 🏋️‍♀️ Steps:

1. Stop `nx serve`
   <br />

2. Use the `@nx/react:lib` generator to generate a new routing library called `feature-game-detail` that:

   - lives under `libs/store`
   - its parent routing app is `store`

   ⚠️&nbsp;&nbsp;**Use `--help`** with the above generator to figure out which options you need to use to enable **all** the above (See the solution if still unsure)
   <br />

3. Change the routing path in `apps/store/src/app/app.tsx` to pick up the game ID from the URL

    <details>
    <summary>🐳 &nbsp;&nbsp;Hint</summary>

   ```ts
   // replace routes block with
   <Routes>
     <Route path="/game/:id" element={<StoreFeatureGameDetail />} />;
   </Routes>
   ```

    </details><br />

4. Populate your new component with the provided files: `store-feature-game-detail.`[tsx](https://github.com/nrwl/nx-react-workshop/blob/main/examples/lab6/libs/store/feature-game-detail/src/lib/store-feature-game-detail/store-feature-game-detail.tsx) / [scss](https://github.com/nrwl/nx-react-workshop/blob/main/examples/lab6/libs/store/feature-game-detail/src/lib/store-feature-game-detail/store-feature-game-detail.module.scss)
   <br />

5. Make clicking on each card in the `apps/store/src/app/app.tsx` route to the `game/:id` with the game's ID:

   <details>
   <summary>🐳 &nbsp;&nbsp;Hint</summary>

   ```tss
     // add a Link around the card element
     <Link to={`/game/${x.id}`} key={x.id}>
      <Card ...>
     </Link>
   ```

    </details><br />

6. Serve your app again, click on some games, and compare with this screenshot:

   <img src="./assets/lab6_screenshot.png" width="500" alt="screenshot of lab6 result"><br />

7. Launch the dependency graph and see what's been added
   <br />

8. Inspect what changed from the last time you committed, then commit your changes
   <br />

---

The result is still pretty simple though. Our route just displays the ID of the selected game in a card. It would be great if we had some API to get the full game from that ID!

---
##### Generate a route lib in a specific directory that is pre-configured with a certain parent app

```bash
nx generate @nx/react:library store-feature-game-detail --directory=libs/store/feature-game-detail --appProject=store
```
## 💻 Lab 7 - Add an Express API

Up until now we've had a single app in our repository, and a few other libs that it uses.

But remember how we created that `fake-api` way back in the second lab, that only our `store` app can access?

Our new routed component suddenly needs access to the games as well, so in this lab we'll be adding a completely new app, this time on the backend, as an API. And we'll use the `@nx/express` plugin to easily generate everything we need.

All the Express specific code for serving the games is provided in the solution.

### 🏋️‍♀️ Steps:

1. Stop any running `nx serve` instance
   <br/>

2. `yarn add @nx/express` or `npm i -S @nx/express`
   <br/>

3. Generate a new Express app, called `api`

   ⚠️&nbsp;&nbsp;Make sure you instruct the generator to configure a proxy from the frontend `store` to the new `api` service (use `--help` to see the available options)<br />

4. Copy the code from the `fake api` to a new file called `apps/api/src/app/`[games.repository.ts](https://github.com/nrwl/nx-react-workshop/blob/main/examples/lab7/apps/api/src/app/games.repository.ts)
   <br/>

5. Update the Express [main.ts](https://github.com/nrwl/nx-react-workshop/blob/main/examples/lab7/apps/api/src/main.ts) to use the repository data
   <br/>

6. Let's now inspect the dependency graph!
   <br/>

7. Inspect what changed from the last time you committed, then commit your changes
   <br/>

---
##### Generate a new Express API app, and configure the proxy to the `store` project

(see [frontendProject](https://nx.dev/docs/technologies/node/guides/application-proxies) for prior to Nx version 18)

`nx generate @nx/express:application api --directory=apps/store/api --frontendProject=store` (old command)

- Should use `apps/api` as directory)
- Set proxy manually in Wepack/Vite

##### using
`nx generate @nx/express:application api --directory=apps/api`

## 💻 Lab 8 - Displaying a full game in the routed game-detail component

Now that we have a proper API, we can remove the `fake-api` created earlier and make proper HTTP requests. We'll also look at how the Nrwl Express generators created a helpful proxy configuration for us.

<details>
  <summary>App screenshot</summary>
  <img src="./assets/lab8_screenshot.png" width="500" alt="screenshot of lab8 result">
</details>

### 🏋️‍♀️ Steps:

1. We can now delete the `fake-api` from the `store` app
<br />

2. Use `fetch` in a `useEffect` hook in the [app.tsx](https://github.com/nrwl/nx-react-workshop/blob/main/examples/lab8/apps/store/src/app/app.tsx) component and call your new API as an _HTTP request_. We also added a local state to track changes.

   ⚠️&nbsp;&nbsp;_Notice how we assume it will be available at `/api` (more on that below)_
<br />   

3. Run `nx serve api`

   ⚠️&nbsp;&nbsp;Notice the _PORT_ number
<br />   

4. In a different tab, run `nx serve store`

   ⚠️&nbsp;&nbsp;Again, notice the _PORT_ number
<br />   

5. Everything should still look/function the same!

   🎓&nbsp;&nbsp;You can inspect your Network tab in the dev tools and notice an XHR request made to `http://localhost:4200/api/games`
<br />   

---

🎓 &nbsp;&nbsp;Even though the frontend and server are being exposed at different ports, we can call `/api` from the frontend store because `Nx` created a proxy configuration for us (see `apps/store/proxy.conf.json`) so any calls to `/api` are being routed to the correct address/port where the API is running.
This helps you avoid CORS issues while developing locally.

---

**Now let's load the full game in our routed component!**

6. Inside the `libs/store/feature-game-detail/src/lib/game-detail` folder, replace the following files:

   - [tsx](https://github.com/nrwl/nx-react-workshop/blob/main/examples/lab8/libs/store/feature-game-detail/src/lib/store-feature-game-detail/store-feature-game-detail.tsx) / [module.scss](https://github.com/nrwl/nx-react-workshop/blob/main/examples/lab8/libs/store/feature-game-detail/src/lib/store-feature-game-detail/store-feature-game-detail.module.scss)

   ⚠️&nbsp;&nbsp;Notice how we're using the shared `formatRating()` function in our routed component as well!
<br />

7. Your component should look similar to the provided screenshot! (you might need to restart your `nx serve store` so the new button styles can be copied over)
<br />

8. Inspect what changed from the last time you committed, then commit your changes
<br />


## 💻 Lab 9 - Generate a type lib that the API and frontend can share
- **Explore other real-world examples of creating shared libs for a specific project**
- **Learn to use the `move` generator**

### 🏋️‍♀️ Steps:

1. Stop serving both the API and the frontend
   <br />

2. Generate a new `@nx/js` lib called `util-interface` inside the `libs/api` folder.

   ⚠️&nbsp;&nbsp;It's **important** that we create it in the `/api` folder for now
   <br />

3. Create your `Game` interface: see `libs/api/util-interface/src/lib/`[api-util-interface.ts](https://github.com/nrwl/nx-react-workshop/blob/main/examples/lab9/libs/api/util-interface/src/lib/api-util-interface.ts)
   <br />

4. Import it in the API service: `apps/api/src/app/games.repository.ts`

   ⚠️&nbsp;&nbsp;You might need to restart the Typescript compiler in your editor

   <details>
   <summary>🐳 &nbsp;&nbsp;Hint</summary>

   ```typescript
   import { Game } from '@bg-hoard/api-util-interface';
   const games: Game[] = [...];
   ```

   </details><br />

5. Build the API and make sure there are no errors

   <details>
   <summary>🐳 &nbsp;&nbsp;Hint</summary>

   ```shell
   nx build api
   ```

   </details><br />

6. Inspect the dependency graph
   <br />

7. Make sure to commit everything before proceeding!
   <br />

---

Our frontend store keeps a list of `Game`s in state:

```typescript
const [state, setState] = useState<{
  data: any[];
  loadingState: 'success' | 'error' | 'loading';
}>({
  data: [],
  loadingState: 'success',
});
```

But it's currently typed to `any` - so our component has no idea about the shape of the objects it uses!

Let's fix that - we already have a `Game` interface in a lib. But it's nested in the `api` folder - we need to move it out to the root `libs/` folder so any project can use it!

---

8.  Use the `@nx/workspace:move` generator to move the interface lib created above into the root `/libs` folder

    ⚠️&nbsp;&nbsp;Make sure you use the `--dry-run` flag until you're confident your command is correct

    <details>
    <summary>🐳 &nbsp;&nbsp;Hint 1</summary>
    <img src="./assets/lab2_cmds.png" alt="Nx generate cmd structure">
    </details>

    <details>
    <summary>🐳 &nbsp;&nbsp;Hint 2</summary>

    Use the `--help` command to figure out how to target a specific **project**
    Alternatively, check out the [docs](https://nx.dev/docs/reference/workspace/generators)

    </details>

    <details>

    <summary>🐳 &nbsp;&nbsp;Hint 3</summary>

    Your library name is `api-util-interface` - to move it to root, its new name needs to be `util-interface`

    </details><br />

9.  We can now import it in the frontend components and use it when making the `http` request:

    <details>
    <summary>🐳 &nbsp;&nbsp;Hint</summary>

    Frontend store shell app: `apps/store/src/app/app.tsx`

    ```typescript
    import { Game } from '@bg-hoard/api-util-interface';

    const [state, setState] = useState<{
      data: Game[];
      loadingState: 'success' | 'error' | 'loading';
    }>({
      data: [],
      loadingState: 'success',
    });
    ```

    ***

    Routed game detail component: `libs/store/feature-game-detail/src/lib/game-detail/game-detail.tsx`

    ```typescript
    const [state, setState] = useState<{
      data: Partial<Game>;
      loadingState: 'success' | 'error' | 'loading';
    }>({
      data: {},
      loadingState: 'success',
    });
    ```

    </details>

    ⚠️&nbsp;&nbsp;Notice how we didn't have to update the imports in the API. The `move` generator took care of that for us!

    <br />

10. Trigger a build of both the store and the API projects and make sure it passes
    <br />

11. Inspect the dependency graph
    <br />

12. Inspect what changed from the last time you committed, then commit your changes
    <br />

---
##### Generate a new type lib for the API

```shell
nx generate @nx/js:lib api-util-interface --directory=libs/api/util-interface
```

##### Use the `move` generator to move a nested lib to root

```shell
nx generate @nx/workspace:move --projectName=api-util-interface util-interface
```

## Lab 10:
## Lab 11: