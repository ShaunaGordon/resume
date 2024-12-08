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
    if(!resume in resumes) return 'Invalid resume selection.';

    let resumeData = {};

    loadFile(`../resumes/${resume}`)
    .then((file) => {
        resumeData = file;
        if(file.extends) {
            const extendsList = file.extends;
            resumeData = extendsList.reduce((path) => {
                loadFile(`../resumes/${path}`)
                .then((piece) => {
                    return mergeDeepWith(concat, resumeData, piece);
                }, file);
            });
        }
    });

};
