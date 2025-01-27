import * as R from 'ramda';

export const resumes = {
  engineering: 'engineering.json',
  writing: 'writing.json'
};

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

const loadExtensions = (files) => {
  return Promise.all(files.map((fileName) => loadFile(`../resumes/${fileName}`)))
    .then(R.reduce(R.mergeDeepWith(R.concat), {}));
}

export const getResume = (resume) => {
  if(!(resume in resumes)) return 'Invalid resume selection.';

  return loadFile(`../resumes/${resume}`)
    .then((base) => {
      const resumeData = base;
      if(base.extends) {
        return loadExtensions(base.extends)
          .then((extensions) => R.mergeDeepWith(R.concat, resumeData, extensions));
      }
      return resumeData;
    });

};
