export default {
    methods: {
        getTechClass(i) {
            return `icon devicon-${i}-plain`;
        },
        getFaClass(i) {
            return `icon fas fa-${i}`;
        },
        getFaBrandClass(i) {
            return `icon fab fa-${i}`;
        }
    }
}
