import { Component, AfterViewChecked, NgZone, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { toggleClass } from './../toggleClass';
import { LoggerService } from './../core/logger.service'; 

@Component({
    selector: 'component-10',
    template: `
        <div class="child-component level-three component-10">
        10
        <span *ngIf="lastData">-{{lastData}}</span>
        </div>`,
    styleUrls: [ 'app/child.components.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component10Component implements AfterViewChecked {
    
    private lastData: string;

    constructor(private zone: NgZone, 
                private el: ElementRef, 
                private logger: LoggerService) {
    }

    ngAfterViewChecked () {
        this.logger.log('Component 10 last data: ' + this.lastData);
        toggleClass(this.el, this.zone);
    }

}