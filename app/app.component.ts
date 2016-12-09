import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ]
})
export class AppComponent {

    private counter: number = -1;

    constructor() { 
    }

    addSomeDataToStream() {
        this.counter++;
        // send counter value to component 10
    }
}