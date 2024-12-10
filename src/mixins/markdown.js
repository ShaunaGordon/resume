import { marked } from 'marked';

export const useMarkdown = () => {
    const toMarkdown = (input) => {
        return marked(input);
    };

    return { toMarkdown };
};
