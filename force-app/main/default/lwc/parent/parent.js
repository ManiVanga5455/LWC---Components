import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    /*
        name='Mani Vanga';
        phone='0767913761';
        email='manivana0245@gmail.com';
        description= 'This information passed from child component'
    contact={
        name: 'Shashi',
        phone: '04587555855'
    }*/
    carouselInfo=[
        {
            src:"https://manivanga5455-dev-ed--c.develop.vf.force.com/resource/1708415155000/Mani",
            header: "Mani",
            description: "My First Caruosel Image"

        },
        {
            src:"https://manivanga5455-dev-ed--c.develop.vf.force.com/resource/1708416227000/lisa?",
            header: "Mona Lisa",
            description: "My Second Caruosel Image"
        },
        {
            src:"https://manivanga5455-dev-ed--c.develop.vf.force.com/resource/1708416432000/Msm?",
            header: "MonMont Saint-Michel",
            description: "My Third Caruosel Image" 
        }
    ];
}