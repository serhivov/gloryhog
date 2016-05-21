/// <reference path="../node_modules/phaser/typescript/phaser.d.ts"/>

import { Boot } from './states/boot';
import { Loading } from './states/loading';
import { Menu } from './states/menu';
import { Battle } from './states/battle';
// Import additional states here

export class MyGame extends Phaser.Game {
    constructor() {
        super(1024, 768, Phaser.AUTO);

        this.state.add('Boot', Boot);
        this.state.add('Loading', Loading);
        this.state.add('Menu', Menu);
        this.state.add('Battle', Battle);
        // Add additional states here

        this.state.start('Boot');
    }
}

let game = new MyGame(); // This kicks everything off
