import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    private data;
    private selectedItem;
    constructor() { }

    public setData(data) {
        this.data = data;
    }

    public getData() {
        return this.data;
    }

    public setSelectedItem(selectedItem) {
        this.selectedItem = selectedItem;
    }

    public getSelectedItem() {
        return this.selectedItem;
    }
}