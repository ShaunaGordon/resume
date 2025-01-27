# Readme

This repo is not only the code for [my resume page](https://resume.shaunagordon.com/), but also a portfolio piece to show my development skills.

Because of its portfolio nature, I've commented the code a lot more than I normally do, for purposes of explaining things to an intended audience of a hiring manager or team.

## History

I first started this many years ago, so there are occasionally some artifacts from that time (mostly, things that haven't been touched in the update), and some code has been updated in place to follow with new standards. This project was originally a Vue 2 and Webpack project, which I recently updated to Vue 3 and Vite.

## What's Inside?

- **JSON-based resume data** By making the data in JSON format, we can keep consistent structure, and let the computer handle the layout, without having to worry about manual updates interfering and having to fight with layout tools to maintain consistency.
- **Modular JSON data** Occasionally, a resume needs tailored to particular kinds of jobs that are a bit too different in nature. To facilitate that tailoring, and to make it easier to navigate, the JSON data is split into module-like files, which then is aggregated in `loadResume.js`, based on a file's `extends` block.
- **Custom algorithm to load JSON data** Sadly, there is no officially industry schema for JSON formatted resumes, which is a shame, really. The closest is JSONResume, but when I started parsing, I found a number of places that could be streamlined if the data was changed, so I gave up on the schema to save myself a mountain of headaches.
- **Automatic dark/light mode** There are two specifically designed color schemes for light vs dark mode, and through CSS features, the page switches automatically. To set it one way or another, either update computer settings, or browser settings to request light or dark mode (light mode is default, if the system doesn't state a preference).
- **CI/CD via Github Actions** Pushes to the `main` branch automatically update the website with the new features, via Github deployment actions.
- **ATS-friendly print version** Printing the page results in a more traditionally-formatted resume that, when saved to PDF, *should* be fairly accurately read by ATS parsers. (I say "should," because there is zero consistency in how ATSes parse a PDF, so it's really a crapshoot, but I've used tools like [OpenResume's parser](https://www.open-resume.com/resume-parser) to structure and format the print version to parse as accurately as possible on it, in the hopes that it'll get me at least enough of the way there that my resume doesn't get discarded, simply because it can't find anything.)
