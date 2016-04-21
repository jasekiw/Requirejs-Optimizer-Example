
import {Alert} from "./Alert";
/**
 * Created by jason on 4/21/2016.
 */
export class MainApp {

    constructor() {
        this.main();
    }
    public main() {
        var alertHander = new Alert();
        alertHander.alert("I got here!");

    }
}