
import { NgModule }      from '@angular/core';

import { Component6Component } from './secondLevelComponents/component6.component';
import { Component10Component } from './thirdLevelComponents/component10.component';

@NgModule({
    declarations: [ 
        Component6Component,
        Component10Component,
    ]
})
export class AdditionalModule { }