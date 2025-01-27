/**
* This is where the magic of the resume happens.
* This module picks up the JSON files and aggregates them into a
* single resume object for use throughout the page.
*/

// https://ramdajs.com/ adds functional programming features to JS.
import * as R from 'ramda';

/**
* The options for different resumes for different types of work.
* A new one gets added to the list when there's a corresponding json file.
* Having different resumes allows us to highlight different things,
* depending on the work being applied to.
*
* In other languages, this would be an Enum, but JS doesn't really
* have such a construct. Some might use all-caps constants, but
* that seems weird to me when we're talking about a list of related data.
*/
export const resumes = {
  engineering: 'engineering.json',
  writing: 'writing.json'
};

/**
* A generic file-fetching function to get a JSON file.
*
* Since the path is controlled, and it's fetching files we control, that are
* hosted in a secure git repository that only we have write access to, we're
* going light on input scrubbing and whatnot. In a situation where the files
* are uploaded by users or otherwise not trusted, we'd have more at this point.
* It's also worth noting that there are similar scrubbing measures in Vue's output
* as well as the Markdown parser used in some places, so even if something bad
* gets injected, the odds of it being run and not escaped and displayed are pretty slim.
*
* @param {string} path
* @returns json object
*/
const loadFile = (path) => {
  return fetch(path)
    .then((result) => {
      if(!result.ok) throw new Error(`Error: ${result.status} for file: ${path}`)
      return result.json();
    }
    )
    .catch((error) => {
      console.error(`Error processing file ${path}:`, error)
      return {};
    }
    );
};

/**
* Load the additional pieces of the resume,
* merging them together into one object.
*
* @param {string[]} files
* @returns promise
*/
const loadExtensions = (files) => {
  /*
  This is where Ramda and functional programming really come in clutch.
  To try to do this kind of merging imperatively would result in a mass of
  loops and if statements.
  While JS has native map/reduce capability, since we're using Ramda's
  mergeDeepWith function already, using Ramda's map/reduce functions ensures
  compatibility between the functions, and avoids any weirdness between what
  Ramda returns and what native JS expects.
  Using Ramda's concat function, we tell the merge algo to not overwrite anything
  that can be added to, because we might have more than one source of any given
  block of data, and we want to build on other sources, not compete with them.
  */
  return Promise.all(files.map((fileName) => loadFile(`../resumes/${fileName}`)))
    .then(R.reduce(R.mergeDeepWith(R.concat), {}));
}

/**
* Get the full resume that was selected.
*
* This is our calling function. It takes a string built by the above
* `resumes` variable, finds all the pieces, and joins it all together
* into the single resume object the rest of the page uses.
*
* @param {string} resume
* @returns json object
*/
export const getResume = (resume) => {
  /*
  Doing validation here lessens the need for it in the other functions, because
  invalid input stops it before it even starts, allowing it to fail gracefully.
  */
  if(!resume in resumes) return 'Invalid resume selection.';

  return loadFile(`../resumes/${resume}`)
    .then((base) => {
      const resumeData = base;
      if(base.extends) {
        // Finally, we merge everything together, giving us one big object of data.
        return loadExtensions(base.extends)
          .then((extensions) => R.mergeDeepWith(R.concat, resumeData, extensions));
      }
      return resumeData;
    });

};
