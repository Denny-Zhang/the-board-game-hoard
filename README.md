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

## Lab 1:

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


## Lab 2:

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
## Lab 3:


## 🏋️‍♀️ Steps:

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
## Lab 4:
## Lab 5:
## Lab 6:
## Lab 7:
## Lab 8:
## Lab 9:
## Lab 10:
## Lab 11: