export interface MenuItem {
    name: string;
    type: string;
    icon: string;
    state: string;
    subMenus?:MenuItem[]
}