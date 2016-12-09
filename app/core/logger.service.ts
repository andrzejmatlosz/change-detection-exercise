import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    log(value: string) {
        console.log(value);
    }
}