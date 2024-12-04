import { mergeDeepWith, concat } from 'ramda';

export const resumes = {
    engineering: 'engineering.json',
    writing: 'writing.json'
};

const loadFile = (path) => {
    return fetch(path)
        .then((result) => {
            return result.json();
        }
    )
        .catch((error) => {
            return error;
        }
    );
};

export const getResume = (resume) => {
    if(!resumes[resume]) return 'Invalid resume selection.';

    loadFile(`../resumes/${resumes[resume]}`)
        .then((file) => {
            if(file.extends) {
                file.extends.forEach((path) => {
                    loadFile(`../resumes/${path}`)
                        .then((piece) => {

                        })
                })
            }
        })

};
