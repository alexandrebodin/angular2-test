/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, For, If, bootstrap} from 'angular2/angular2';
import {FriendsService} from './services/friendsService';

@Component({
    selector: 'display',
    injectables: [FriendsService]
})

@View({
    template: `
        <p>My name: {{ name }}</p>
        <p>Friends: </p>
        <ul>
            <li *for="#name of names">
                {{ name }}
            </li>
        </ul>
        <p *if="names.length > 3">You have many friends!</p>
        
        <input #newname (keyup)="doneTyping($event)">
        <button (click)="addNewName(newname.value)">Add Friend</button>

    `,
    directives: [For, If]
})

class DisplayComponent {
    name: string;
    names: Array<string>;

    constructor(friendsService: FriendsService) {
        this.name = "Alice";
        this.names = friendsService.names;
    }

    addNewName(name: string) {
        this.names.push(name);
    }

    doneTyping($event) {
        if($event.which === 13) {
            this.addNewName($event.target.value);
            $event.target.value = null;
        }
    }
}


bootstrap(DisplayComponent);


