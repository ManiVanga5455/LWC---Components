import { LightningElement } from 'lwc';

export default class RenderListWithForEach extends LightningElement {
   
    //give me an array example      
    cities = ['Tokyo', 'Lisbon', 'Berlin', 'Nairobi'];

    Cars = [
        {
            Id:'bmw20',
            name: 'BMW',
            color: 'Blue',
            year: '2020'
        },
        {
            Id:'Merc19',
            name: 'Mercedes',
            color: 'Brown',
            year: '2019'
        },
        {
            Id:'audi18',
            name: 'Audi',
            color: 'Black',
            year: '2018'
        },
        {
            Id:'p17',
            name: 'Porsche',
            color: 'Yellow',
            year: '2017'
}
    ]
}