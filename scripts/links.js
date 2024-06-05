baseURL = 'https://luyinga.github.io/wdd230/';
const linksURL = 'https://luyinga.github.io/wdd230/data/links.json';


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);

    displayLinks(data.weeks); //call the display weeks function

  }

  getLinks();

  const displayLinks = (weeks) => {
    weeks.forEach((weeks) => {
        //Create elements
        let section = document.querySelector('.card');
        let h2 = document.querySelector('h2');
        let list = document.createElement('li');
        let anchor = document.createElement('a');
        let ulE = document.querySelector('ul');

        //build the a content to show the weeks links
        anchor.innerText = `${title}`;
        anchor.href = `${url}`;
        h2.textContent = 'Learning Activity';

        section.appendChild(h2);
        section.appendChild('ulE');
        list.appendChild(anchor);
        ulE.appendChild(li);
        
    });
  }

