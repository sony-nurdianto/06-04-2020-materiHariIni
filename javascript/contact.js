const myContacts = [
    {
        id : 1,
        name: 'Alpha Avalon',
        email: 'alpha@avakin.org',
        phone: "128930",
        rating: 9,
        tags: ['popular','cool']
    },
    {
        id: 2,
        name: 'Betty Brave',
        phone: '+62 812 242424',
        email: 'betty@braverian.com'
    },
    {
        id: 3,
        name: 'Gamma Gacurio',
        phone: '+63 813 363636',
        email: 'gamma@gacurio.dev'
    }
];

const contactku = {
        id : 4,
        name : "lil nas x",
        phone: "727 6x",
        email: "olTownRoad@biilyraycyrus"
    };

const contactku2 = {
        id : 5,
        name : "surfaces",
        phone: "727 6x",
        email: "sundaybest@surfaces"
    };


myContacts.push(contactku2)
console.log(myContacts)
 myContacts.shift(contactku)
 console.log(myContacts)

const show = myContacts.filter((a) => {
    console.log(a)
    
})



// const addContact = myContacts.push(contactku);
//     console.log(addContact);


// const showcontact = contacts => {
//     for (let index = 0 ; index < contacts.length ; index ++){
//         const contact = contacts [index]
//         console.log(`id : ${contact.id} name : ${contact.name} phone :${contact.phone} email:${contact.email}`)
//     }
    
// }
// showcontact(addContact)


