import React from 'react';

export default class BowlingPlayer {
    lane = null;
    name = null;

    constructor({name, lane}) {
        this.lane = lane;
        this.name = name
    }
}