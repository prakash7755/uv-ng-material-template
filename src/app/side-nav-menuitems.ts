export interface SideNavItem {
    path?: string;
    text: string;
    icon: string;
    isExpanded?: boolean;
    submenuItems?: any[];
}

export const sidenavMenuItems: SideNavItem[] = [
    {
        path: '/',
        text: 'Home',
        icon: 'home',
    },
    {
        path: '/users',
        text: 'Users',
        icon: 'account_circle',
    },
];
