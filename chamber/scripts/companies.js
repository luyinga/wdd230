const companies = 
`{
"companies": [
{
    "name": "Nestle",
    "address": "8 Anslow Crescent, Bryanston, 2120",
    "phone-number": "+27 (0)11 514 0000",
    "url": "www.nestle-esar.com",
    "image": "https://top500.co.za/wp-content/uploads/2023/09/Untitled-design-46.png",
    "membership-level": "Gold" 
},
{
    "name": "Elite",
    "address": "1st Floor Mutual Park, Pinelands, 7450",
    "phone-number": "086 011 1022",
    "url": "https://eliterisk.co.za/",
    "image": "https://eliterisk.co.za/wp-content/uploads/2018/11/img_elite_emblem_gold.png",
    "membership-level": "silver"
},
{
    "name": "ACTOM",
    "address": "2 Magnet Road, Knights, 1413",
    "phone-number": "+27 (0) 11 820 5111",
    "url": " www.actom.co.za",
    "image": "https://top500.co.za/wp-content/uploads/2016/10/actom_logo-1-300x300.jpg",
    "membership-level": "Bronze" 
},
{
    "name": "Afrox",
    "address": "7460, Jellicoe Ave, Epping",
    "phone-number": "021 530 1000",
    "url": "http://afrox.co.za",
    "image": "https://top500.co.za/wp-content/uploads/2017/01/afrox_logo-300x300.jpg",
    "membership-level": "Gold" 
},
{
    "name": "SMEC",
    "address": "267 Kent Ave, Ferndale",
    "phone-number": "+27 21 417 2900",
    "url": "http://www.smec.com",
    "image": "https://top500.co.za/wp-content/uploads/2020/04/Smec-300x300.jpg",
    "membership-level": "Non-profit" 
},
{
    "name": "Vox",
    "address": "1 Scott Street,Waverley, 2090",
    "phone-number": "+27 87 805 0000",
    "url": "http://voxtelecom.co.za",
    "image": "https://top500.co.za/wp-content/uploads/2019/07/vox_logo-300x300.jpg",
    "membership-level": "Silver" 
},
{
    "name": "Altron",
    "address": "6-8 Woodlands Drive",
    "phone-number": "+27 73 645 8896",
    "url": " www.ard.co.za",
    "image": "https://top500.co.za/wp-content/uploads/2019/07/altech_alcom_radio_distributors_logo-300x300.jpg",
    "membership-level": "Bronze" 
}
] 
}`;
const grid = document.querySelector('.grid');
//const parseData = JSON.parse(companies);
//console.log(parseData);

async function getCompanyData (){
const response = await fetch (companies);
const data = await response.json ();
//console.table(data.companies); // temporary testing of data retreival

displayCompanies(data.parseData); // Call the displaycompanies function
}

getCompanyData();

const displaycompanies = (companies) => {
companies.forEach((company) => {
// Create elements to add to the article element
let card = document.createElement('section');
let portrait = document.createElement('img');
let name = document.createElement('h2'); 
let address = document.createElement('p');
let phoneNumber = document.createElement('p');
let website = document.createElement('p')

// Build the h2 content out to show the company's name
name.textContent = `${company.name}`; 
// Build the p content out to show the company's address
address.textContent = `${company.address}`;
// Build the p content out to show the company's phone number
phoneNumber.textContent = `${company.phone-number}`;
// Build the p content out to show the company's website
website.textContent = `${url}`;
// Build the image portrait by setting all the relevant attributes
portrait.setAttribute('src', company.image);
portrait.setAttribute('alt', `Portrait of ${company.name}`); 
portrait.setAttribute('loading', 'lazy');
portrait.setAttribute('width', '340');
portrait.setAttribute('height', '440');

// Append the section(card) with the created element
card.appendChild(portrait);
card.appendChild(name); 
card.appendChild(address);
card.appendChild(phoneNumber);
card.appendChild(website); 
grid.appendChild(card);
});
}

