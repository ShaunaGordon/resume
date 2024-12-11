import { marked } from 'marked';

export const useMarkdown = () => {
    const fromMarkdown = (input) => {
        return marked(input);
    };

    const fromInlineMarkdown = (input) => {
        return marked.parseInline(input);
    };

    return { fromMarkdown, fromInlineMarkdown };
};
