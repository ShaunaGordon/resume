# Readme

This repo is not only the code for [my resume page](https://resume.shaunagordon.com/), but also a portfolio piece to show my development skills.

Because of its portfolio nature, I've commented the code a lot more than I normally do, for purposes of explaining things to an intended audience of a hiring manager or team.

## History

I first started this many years ago, so there are occasionally some artifacts from that time (mostly, things that haven't been touched in the update), and some code has been updated in place to follow with new standards. This project was originally a Vue 2 and Webpack project, which I recently updated to Vue 3 and Vite.

## Features

- **JSON-based resume data** By making the data in JSON format, we can keep consistent structure, and let the computer handle the layout, without having to worry about manual updates interfering and having to fight with layout tools to maintain consistency.
- **Modular JSON data** Occasionally, a resume needs tailored to particular kinds of jobs that are a bit too different in nature. To facilitate that tailoring, and to make it easier to navigate, the JSON data is split into module-like files, which then is aggregated in `loadResume.js`, based on a file's `extends` block.
- **Automatic dark/light mode** There are two specifically designed color schemes for light vs dark mode, and through CSS features, the page switches automatically. To set it one way or another, either update computer settings, or browser settings to request light or dark mode (light mode is default, if the system doesn't state a preference).
- **CI/CD via Github Actions** Pushes to the `main` branch automatically update the website with the new features, via Github deployment actions.
