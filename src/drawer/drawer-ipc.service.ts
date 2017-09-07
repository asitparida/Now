import { Subject } from 'rxjs';

class DrawerIPCService {
    private isDrawerOpen: Boolean = false;
    private drawerOpenSubject: Subject<Boolean> = new Subject<Boolean>();
    drawerOpenObservable = this.drawerOpenSubject.asObservable();
    constructor() { }
    toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
        this.drawerOpenSubject.next(this.isDrawerOpen);
    }
    markDrawerAsClosed() {
        this.isDrawerOpen = false;
    }
}
export const Drawer = new DrawerIPCService();