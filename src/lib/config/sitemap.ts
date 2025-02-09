export type Aside = Record<string, Link[]>;

export type Link = {
    title: string;
    href: string;
}

export const aside_items: Aside = {
    projects: [
        {
            title: 'hello',
            href: '/hello'
        }
    ]
}