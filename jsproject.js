
const front=document.getElementById("front")
const img=document.createElement("img")
img.src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1376%2FCover.png&w=1920&q=75";
img.style.width="95%"
img.style.borderRadius="15px"
img.style.objectFit="cover"
front.appendChild(img)

function toggleDropdown() {
    var dropdown = document.getElementById("list"); 
    dropdown.classList.toggle("show"); 
}
  

//best selling products
    const product1 = [
        {
            title: "The Bedtime Stories Part One",
            price: "$100.00",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1672%2FChildren-Literature-2.jpg&w=1920&q=100"
        },
        {
            title: "The Adventures of Pin Pin",
            price: "$225.00 - $225.00",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1668%2FComic-Books-6.jpg&w=1920&q=100" 
        },
        {
            title: "The Bed Time Story Part 2",
            price: "$120.00",
            oldPrice: "$150.00",
            discount: "(Save 20%)",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2FChildren-Literature-3.jpg&w=1920&q=100"
        },
        {
            title: "The children story",
            price: "$220.00",
            oldPrice: "$250.00",
            discount: "(Save 12%)",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1677%2FChildren-Literature-7.jpg&w=1920&q=100"
        }
    ];

const container1= document.getElementById('new-container1');

product1.map(newarr => {
const newarrDiv = document.createElement('div');
newarrDiv.className = 'new';

const img = document.createElement('img');
img.src = newarr.imgSrc;  
img.alt = newarr.title;

const title = document.createElement('div');
title.className = 'new-title';
title.textContent = newarr.title;

const author = document.createElement('div');
author.className = 'new-author';
author.textContent = newarr.author;

const price = document.createElement('div');
price.className = 'new-price';
price.textContent = newarr.price;

const oldPrice = document.createElement('div');
oldPrice.className = 'new-old-price';
oldPrice.textContent = newarr.oldPrice;

const discount = document.createElement('div');
discount.className = 'new-discount';
discount.textContent = newarr.discount;
 
newarrDiv.appendChild(img);
newarrDiv.appendChild(title);
newarrDiv.appendChild(author);
newarrDiv.appendChild(price);

if (newarr.oldPrice) {
    newarrDiv.appendChild(oldPrice);
}
if (newarr.discount) {
    newarrDiv.appendChild(discount);
}

container1.appendChild(newarrDiv);
});
//popular product --first row
const product2 = [
        {
            title: "Super heroes & Aliens",
            price: "$300.00-$350.00",
            author:"by Brandon T. Trigg",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1669%2FComic-Books-7.jpg&w=1920&q=100"
        },
        {
            title: "The Adventures of Pin Pin",
            price: "$225.00 - $225.00",
            author: "byJenifer Wickham",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1668%2FComic-Books-6.jpg&w=1920&q=100" 
        },
        {
            title: "The picy mouse story",
            price: "$50.00",
            author:"byJimmy P Bullard",
            oldPrice: "$60.00",
            discount: "(Save 17%)",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1667%2FComic-Books-5.jpg&w=1920&q=100"
        },
        {
            title: "Chacha Chowdhury and Pabu",
            price: "$300.00-$350.00",
            author:"byKelly White",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1666%2FComic-Books-4.jpg&w=1920&q=100"
        }, 
        {
            title: "The Space hero part one",
            price: "$80.00",
            author:"bySharone C Stone",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1665%2FComic-Books-3.jpg&w=1920&q=100"
        },
    ];

const container2= document.getElementById('new-container2');

product2.map(newarr => {
const newarrDiv = document.createElement('div');
newarrDiv.className = 'new';

const img = document.createElement('img');
img.src = newarr.imgSrc;  
img.alt = newarr.title;

const title = document.createElement('div');
title.className = 'new-title';
title.textContent = newarr.title;

const author = document.createElement('div');
author.className = 'new-author';
author.textContent = newarr.author;

const price = document.createElement('div');
price.className = 'new-price';
price.textContent = newarr.price;

const oldPrice = document.createElement('div');
oldPrice.className = 'new-old-price';
oldPrice.textContent = newarr.oldPrice;

const discount = document.createElement('div');
discount.className = 'new-discount';
discount.textContent = newarr.discount;

newarrDiv.appendChild(img);
newarrDiv.appendChild(title);
newarrDiv.appendChild(author);
newarrDiv.appendChild(price);

if (newarr.oldPrice) {
    newarrDiv.appendChild(oldPrice);
}
if (newarr.discount) {
    newarrDiv.appendChild(discount);
}

container2.appendChild(newarrDiv);
});

    // popular products--second row

    const product3 = [
       
        {
            title: "The padman begins",
            price: "$300.00 - $350.00",
            author: "byDorian P Price",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1664%2FComic-Books-2.jpg&w=1920&q=100" 
        },
        {
            title: "The flying man part one",
            price: "$90.00",
            author:"by kelly white",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1663%2FComic-Books-1.jpg&w=1920&q=100"
        },
        {
            title: "The flying man second part",
            price: "$300.00-$350.00",
            author:"byJenifer Wickham",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1662%2FComic-Books.jpg&w=1920&q=100"
        },
        {
            title: "The children story",
            price: "$220.00",
            author:"byBrandon T. Trigg",
            oldPrice: "$250.00",
            discount: "(save 12%)",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1677%2FChildren-Literature-7.jpg&w=1920&q=100"
        },
        {
            title: "The children story 2",
            price: "$200.00",
            author: "byEarnestine N. Pace",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1676%2FChildren-Literature-6.jpg&w=1920&q=100" 
        }
    ];

    const container3= document.getElementById('new-container3');

    product3.map(newarr => {
    const newarrDiv = document.createElement('div');
    newarrDiv.className = 'new';

    const img = document.createElement('img');
    img.src = newarr.imgSrc;  // Ensure property name is correct
    img.alt = newarr.title;

    const title = document.createElement('div');
    title.className = 'new-title';
    title.textContent = newarr.title;

    const author = document.createElement('div');
    author.className = 'new-author';
    author.textContent = newarr.author;

    const price = document.createElement('div');
    price.className = 'new-price';
    price.textContent = newarr.price;

    const oldPrice = document.createElement('div');
    oldPrice.className = 'new-old-price';
    oldPrice.textContent = newarr.oldPrice;

    const discount = document.createElement('div');
    discount.className = 'new-discount';
    discount.textContent = newarr.discount;

    newarrDiv.appendChild(img);
    newarrDiv.appendChild(title);
    newarrDiv.appendChild(author);
    newarrDiv.appendChild(price);

    if (newarr.oldPrice) {
        newarrDiv.appendChild(oldPrice);
    }
    if (newarr.discount) {
        newarrDiv.appendChild(discount);
    }

    container3.appendChild(newarrDiv);
});

    
    // which book you like to see?
    const movies = [
    {
        title: "Comic books",
        imgsrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1380%2FComic-Books.png&w=256&q=75"
    },
    {
        title: "Science fiction",
        imgsrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1378%2FScience-Fiction.png&w=256&q=75"
    },
    {
        title: "Literature",
        imgsrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1377%2FLiterature.png&w=256&q=75"
    },
    {
        title: "Children's literature",
        imgsrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1379%2FChildren-Literature.png&w=256&q=75"
    },
    {
        title: "Horror fiction",
        imgsrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1381%2FHorror-Books.png&w=256&q=75"
    },
    {
        title: "Novels",
        imgsrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1382%2FNovel.png&w=256&q=75"
    },
    {
        title: "Romantic poetry",
        imgsrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1383%2FRomantic-Books.png&w=256&q=75"
    }
];

const movie = document.getElementById("movie");

    movies.map(pic => {
    const moviediv = document.createElement('div');
    moviediv.className = 'product';

    const img = document.createElement('img');
    img.src = pic.imgsrc; 
    img.alt = pic.title;
    img.style.borderRadius="10px"
    
    const title = document.createElement('div');
    title.className = 'product-title';
    title.textContent = pic.title;

    moviediv.appendChild(img);
    moviediv.appendChild(title);

    movie.appendChild(moviediv);
});


    // new arrivals -first row

    const product4= [
    {
        title: "The children story",
        price: "$220.00",
        author: "by Brandon T. Trigg",
        oldPrice: "$250.00",
        discount: "(save 12%)",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1677%2FChildren-Literature-7.jpg&w=1920&q=100"
    },
    {
        title: "The children story 2",
        price: "$200.00",
        author: "by Earnestine N. Pace",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1676%2FChildren-Literature-6.jpg&w=1920&q=100"
    },
    {
        title: "The children story 3",
        price: "$190.00",
        author: "by James N. Alemeida",
        oldPrice: "$220.00",
        discount: "(save 14%)",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1675%2FChildren-Literature-5.jpg&w=1920&q=100"
    },
    {
        title: "The Bedtime Story Final Part",
        price: "$100.00",
        author: "by Brandon T. Trigg",
        oldPrice: "$120.00",
        discount: "(save 17%)",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1674%2FChildren-Literature-4.jpg&w=1920&q=100"
    },
    {
        title: "The Bedtime Story Final Part 2",
        price: "$120.00",
        author: "by Earnestine N. Pace",
        oldPrice: "$150.00",
        discount: "(save 20%)",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2FChildren-Literature-3.jpg&w=1920&q=100"
    },
];

const container4= document.getElementById('new-container4');

    product4.map(newarr => {
    const newarrDiv = document.createElement('div');
    newarrDiv.className = 'new';

    const img = document.createElement('img');
    img.src = newarr.imgSrc;  // Ensure property name is correct
    img.alt = newarr.title;

    const title = document.createElement('div');
    title.className = 'new-title';
    title.textContent = newarr.title;

    const author = document.createElement('div');
    author.className = 'new-author';
    author.textContent = newarr.author;

    const price = document.createElement('div');
    price.className = 'new-price';
    price.textContent = newarr.price;

    const oldPrice = document.createElement('div');
    oldPrice.className = 'new-old-price';
    oldPrice.textContent = newarr.oldPrice;

    const discount = document.createElement('div');
    discount.className = 'new-discount';
    discount.textContent = newarr.discount;

    newarrDiv.appendChild(img);
    newarrDiv.appendChild(title);
    newarrDiv.appendChild(author);
    newarrDiv.appendChild(price);

    if (newarr.oldPrice) {
        newarrDiv.appendChild(oldPrice);
    }
    if (newarr.discount) {
        newarrDiv.appendChild(discount);
    }

    container4.appendChild(newarrDiv);
});

//new arrival --- second row
const product5 = [
        {
            title: "The Bed Time Stories Part One",
            price: "$100.00",
            author:"by James N. Almeida",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1672%2FChildren-Literature-2.jpg&w=1920&q=100"
        },
        {
            title: "The Kids Story Part One",
            price: "$300.00 - $350.00",
            author: "by Dorian P price",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1671%2FChildren-Literature-1.jpg&w=1920&q=100" 
        },
        {
            title: "The Kids Story final Part",
            price: "$110.00",
            author:"by Jenifer Wickham",
            oldPrice: "$120.00",
            discount: "(Save 8%)",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1670%2FChildren-Literature.jpg&w=1920&q=100"
        },
        {
            title: "Superhero & Aliens",
            price: "$300.00-$350.00",
            author:"byBrandon T. Trigg",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1669%2FComic-Books-7.jpg&w=1920&q=100"
        }, 
        {
            title: "The Adventures of Pin Pin",
            price: "$300.00 - 350.00",
            author:"byJenifer Wickham",
            oldPrice: "",
            discount: "",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1665%2FComic-Books-3.jpg&w=1920&q=100"
        },
    ];
    const container5= document.getElementById('new-container5');

    product5.map(newarr => {
    const newarrDiv = document.createElement('div');
    newarrDiv.className = 'new';

    const img = document.createElement('img');
    img.src = newarr.imgSrc;  
    img.alt = newarr.title;

    const title = document.createElement('div');
    title.className = 'new-title';
    title.textContent = newarr.title;

    const author = document.createElement('div');
    author.className = 'new-author';
    author.textContent = newarr.author;

    const price = document.createElement('div');
    price.className = 'new-price';
    price.textContent = newarr.price;

    const oldPrice = document.createElement('div');
    oldPrice.className = 'new-old-price';
    oldPrice.textContent = newarr.oldPrice;

    const discount = document.createElement('div');
    discount.className = 'new-discount';
    discount.textContent = newarr.discount;

    newarrDiv.appendChild(img);
    newarrDiv.appendChild(title);
    newarrDiv.appendChild(author);
    newarrDiv.appendChild(price);

    if (newarr.oldPrice) {
        newarrDiv.appendChild(oldPrice);
    }
    if (newarr.discount) {
        newarrDiv.appendChild(discount);
    }

    container5.appendChild(newarrDiv);
});



//new arrival --- third row
const product6 = [
    {
        title: "The Picky Mouse Story",
        price: "$50.00",
        author:"by Jimmy P Bullard",
        oldPrice: "$60.00",
        discount: "(Save 17%)",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1667%2FComic-Books-5.jpg&w=1920&q=100"
    },
    {
        title: "Chacha Chowdhury and Pabu",
        price: "$300.00 - $350.00",
        author: "byKelly White",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1666%2FComic-Books-4.jpg&w=1920&q=100" 
    },
    {
        title: "The Space Hero Part one",
        price: "$110.00",
        author:"bySharone C Stone",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1665%2FComic-Books-3.jpg&w=1920&q=100"
    },
    {
        title: "The Padman Begins",
        price: "$300.00-$350.00",
        author:"byDorian P Price",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1664%2FComic-Books-2.jpg&w=1920&q=100"
    }, 
    {
        title: "The Flying Man First Part",
        price: "$90.00",
        author:"byKelly White",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1663%2FComic-Books-1.jpg&w=1920&q=100"
    },
];
const container6= document.getElementById('new-container6');

product6.map(newarr => {
const newarrDiv = document.createElement('div');
newarrDiv.className = 'new';

const img = document.createElement('img');
img.src = newarr.imgSrc;  
img.alt = newarr.title;

const title = document.createElement('div');
title.className = 'new-title';
title.textContent = newarr.title;

const author = document.createElement('div');
author.className = 'new-author';
author.textContent = newarr.author;

const price = document.createElement('div');
price.className = 'new-price';
price.textContent = newarr.price;

const oldPrice = document.createElement('div');
oldPrice.className = 'new-old-price';
oldPrice.textContent = newarr.oldPrice;

const discount = document.createElement('div');
discount.className = 'new-discount';
discount.textContent = newarr.discount;

newarrDiv.appendChild(img);
newarrDiv.appendChild(title);
newarrDiv.appendChild(author);
newarrDiv.appendChild(price);

if (newarr.oldPrice) {
    newarrDiv.appendChild(oldPrice);
}
if (newarr.discount) {
    newarrDiv.appendChild(discount);
}

container6.appendChild(newarrDiv);
});



//new arrival --- fourth row
const product7 = [
    {
        title: "The Flying Man Second Part",
        price: "$300.00 - $350.00",
        author:"byJenifer Wickham",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1662%2FComic-Books.jpg&w=1920&q=100"
    },
    {
        title: "The ITsy Part One",
        price: "$89.00",
        author: "byBrandon T. Trigg",
        oldPrice: "$99.00",
        discount: "(Save 10%)",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1661%2FHorror-Books-6.jpg&w=1920&q=100" 
    },
    {
        title: "Corpse Eater Part One",
        price: "$50.00",
        author:"byBrandon T. Trigg",
        oldPrice: "$70.00",
        discount: "(Save 33%)",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1660%2FHorror-Books-5.jpg&w=1920&q=100"
    },
    {
        title: "Shadow Women Part one",
        price: "$300.00-$350.00",
        author:"byKelton Benjamin",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1659%2FHorror-Books-4.jpg&w=1920&q=100"
    }, 
    {
        title: "The Warewolf Life",
        price: "$95.00",
        author:"byJakob Dillon",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1658%2FHorror-Books-3.jpg&w=1920&q=100"
    },
];
const container7= document.getElementById('new-container7');

product7.map(newarr => {
const newarrDiv = document.createElement('div');
newarrDiv.className = 'new';

const img = document.createElement('img');
img.src = newarr.imgSrc;  
img.alt = newarr.title;

const title = document.createElement('div');
title.className = 'new-title';
title.textContent = newarr.title;

const author = document.createElement('div');
author.className = 'new-author';
author.textContent = newarr.author;

const price = document.createElement('div');
price.className = 'new-price';
price.textContent = newarr.price;

const oldPrice = document.createElement('div');
oldPrice.className = 'new-old-price';
oldPrice.textContent = newarr.oldPrice;

const discount = document.createElement('div');
discount.className = 'new-discount';
discount.textContent = newarr.discount;

newarrDiv.appendChild(img);
newarrDiv.appendChild(title);
newarrDiv.appendChild(author);
newarrDiv.appendChild(price);

if (newarr.oldPrice) {
    newarrDiv.appendChild(oldPrice);
}
if (newarr.discount) {
    newarrDiv.appendChild(discount);
}

container7.appendChild(newarrDiv);
});



//new arrival --- fifth row
const product8 = [
    {
        title: "Shadow Women Second Part",
        price: "$120.00",
        author:"byJenifer Wickham",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1657%2FHorror-Books-2.jpg&w=1920&q=100"
    },
    {
        title: "The ITsy Part One",
        price: "$120.00",
        author: "byKaity lerry",
        oldPrice: "$150.00",
        discount: "(Save 20%)",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1661%2FHorror-Books-6.jpg&w=1920&q=100" 
    },
    {
        title: "Shadow Women Final Chapter",
        price: "$100.00",
        author:"byDorian P Price",
        oldPrice: "$100.00",
        discount: "(Save 9%)",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1655%2FHorror-Books.jpg&w=1920&q=100"
    },
    {
        title: "Corpse Eater Finishing",
        price: "$120.00",
        author:"byJames N. Almeida",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1654%2FHorror-Books-7.jpg&w=1920&q=100"
    }, 
    {
        title: "By The Yellow River",
        price: "$300.00-$350.00",
        author:"byJakob Dillon",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1653%2FLiterature-books.jpg&w=1920&q=100"
    },
];
const container8= document.getElementById('new-container8');

product8.map(newarr => {
const newarrDiv = document.createElement('div');
newarrDiv.className = 'new';

const img = document.createElement('img');
img.src = newarr.imgSrc;  
img.alt = newarr.title;

const title = document.createElement('div');
title.className = 'new-title';
title.textContent = newarr.title;

const author = document.createElement('div');
author.className = 'new-author';
author.textContent = newarr.author;

const price = document.createElement('div');
price.className = 'new-price';
price.textContent = newarr.price;

const oldPrice = document.createElement('div');
oldPrice.className = 'new-old-price';
oldPrice.textContent = newarr.oldPrice;

const discount = document.createElement('div');
discount.className = 'new-discount';
discount.textContent = newarr.discount;

newarrDiv.appendChild(img);
newarrDiv.appendChild(title);
newarrDiv.appendChild(author);
newarrDiv.appendChild(price);

if (newarr.oldPrice) {
    newarrDiv.appendChild(oldPrice);
}
if (newarr.discount) {
    newarrDiv.appendChild(discount);
}

container8.appendChild(newarrDiv);
});



//new arrival --- fifth row
const product9= [
    {
        title: "By The Blue Sea",
        price: "$150.00",
        author:"byDorian P Price",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1652%2FLiterature-books-1.jpg&w=1920&q=100"
    },
    {
        title: "The Cave",
        price: "$300.00 - $350.00",
        author: "bySharone C Stone",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1651%2FLiterature-books-2.jpg&w=1920&q=100" 
    },
    {
        title: "Tear Story",
        price: "$200.00",
        author:"byEarnestine N. Pace",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1650%2FLiterature-books-3.jpg&w=1920&q=100"
    },
    {
        title: "Behind Sea Shore",
        price: "$178.00",
        author:"byaKaity lerry",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1649%2FLiterature-books-4.jpg&w=1920&q=100"
    }, 
    {
        title: "The Green Light",
        price: "$300.00-$350.00",
        author:"byJakob Dillon",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1648%2FLiterature-books-5.jpg&w=1920&q=100"
    },
];
const container9= document.getElementById('new-container9');

product9.map(newarr => {
const newarrDiv = document.createElement('div');
newarrDiv.className = 'new';

const img = document.createElement('img');
img.src = newarr.imgSrc;  
img.alt = newarr.title;

const title = document.createElement('div');
title.className = 'new-title';
title.textContent = newarr.title;

const author = document.createElement('div');
author.className = 'new-author';
author.textContent = newarr.author;

const price = document.createElement('div');
price.className = 'new-price';
price.textContent = newarr.price;

const oldPrice = document.createElement('div');
oldPrice.className = 'new-old-price';
oldPrice.textContent = newarr.oldPrice;

const discount = document.createElement('div');
discount.className = 'new-discount';
discount.textContent = newarr.discount;

newarrDiv.appendChild(img);
newarrDiv.appendChild(title);
newarrDiv.appendChild(author);
newarrDiv.appendChild(price);

if (newarr.oldPrice) {
    newarrDiv.appendChild(oldPrice);
}
if (newarr.discount) {
    newarrDiv.appendChild(discount);
}

container9.appendChild(newarrDiv);
});

//learn more new arrival
 const product10 = [
        {
            title: "The red queen",
            author:"byKelton Benjamin",
            price: "$210.00",
            oldPrice: "$225.00",
            discount: "(save 4%)",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1647%2FLiterature-books-6.jpg&w=1920&q=100"
        },
        {
            title: "The love story",
            author:"by Earnestine N. Pace",
            price: "$230.00",
            oldPrice: "$250.00",
            discount: "(save 8%)",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1646%2FLiterature-books-7.jpg&w=1920&q=100"
        },
        {
            title: "The weed smoker",
            author:"by kelly white",
            price: "$280.00",
            oldPrice: "$300.00",
            discount: "(save 7%)",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1645%2FNovel-1.jpg&w=1920&q=100"
        },
        {
            title: "The kite runner",
            author:"by Kelly white",
            price: "$220.00",
            oldPrice: "$250.00",
            discount: "(save 12%)",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1644%2FNovel.jpg&w=1920&q=100"
        },
        {
            title: "The sad story ",
            author:"byJenifer Wickham",
            price: "$280.00",
            oldPrice: "$300.00",
            discount: "(save 7%)",
            imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1643%2FNovel-2.jpg&w=1920&q=100"
        }
    ];
    
        let hasRun = false; // Flag to ensure the function runs only once

        function clickShow() {
        if (hasRun) return; // If the function has already run, exit immediately
        hasRun = true;
        const container10= document.getElementById('new-container10');

        product10.map(newarr => {
        const newarrDiv = document.createElement('div');
        newarrDiv.className = 'new';
        
        const img = document.createElement('img');
        img.src = newarr.imgSrc;  
        img.alt = newarr.title;
        
        const title = document.createElement('div');
        title.className = 'new-title';
        title.textContent = newarr.title;
        
        const author = document.createElement('div');
        author.className = 'new-author';
        author.textContent = newarr.author;
        
        const price = document.createElement('div');
        price.className = 'new-price';
        price.textContent = newarr.price;
        
        const oldPrice = document.createElement('div');
        oldPrice.className = 'new-old-price';
        oldPrice.textContent = newarr.oldPrice;
        
        const discount = document.createElement('div');
        discount.className = 'new-discount';
        discount.textContent = newarr.discount;
        
        newarrDiv.appendChild(img);
        newarrDiv.appendChild(title);
        newarrDiv.appendChild(author);
        newarrDiv.appendChild(price);
        
        if (newarr.oldPrice) {
            newarrDiv.appendChild(oldPrice);
        }
        if (newarr.discount) {
            newarrDiv.appendChild(discount);
        }
        
        container10.appendChild(newarrDiv);
    
        });

const product11= [
    {
        title: "Atomic Love Part one",
        price: "$260.00",
        author:"byJakob Dillon",
        oldPrice: "$280.00",
        discount: "(Save 7%)",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1642%2FNovel-3.jpg&w=1920&q=100"
    },
    {
        title: "Atomic Love Second Part",
        price: "$270.00",
        author: "byKaity lerry",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1641%2FNovel-4.jpg&w=1920&q=100" 
    },
    {
        title: "The picy mouse story",
        price: "$50.00",
        author:"byJimmy P Bullard",
        oldPrice: "$60.00",
        discount: "(Save 17%)",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1667%2FComic-Books-5.jpg&w=1920&q=100"
    },
    {
        title: "Chacha Chowdhury and Pabu",
        price: "$300.00-$350.00",
        author:"byKelly White",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1666%2FComic-Books-4.jpg&w=1920&q=100"
    }, 
    {
        title: "Solar Bones The Final Chapter",
        price: "$220.00",
        author:"byKelly White",
        oldPrice: "",
        discount: "",
        imgSrc: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1638%2FNovel-7.jpg&w=1920&q=100"
    },
];

const container11= document.getElementById('new-container11');

product11.map(newarr => {
const newarrDiv = document.createElement('div');
newarrDiv.className = 'new';

const img = document.createElement('img');
img.src = newarr.imgSrc;  
img.alt = newarr.title;

const title = document.createElement('div');
title.className = 'new-title';
title.textContent = newarr.title;

const author = document.createElement('div');
author.className = 'new-author';
author.textContent = newarr.author;

const price = document.createElement('div');
price.className = 'new-price';
price.textContent = newarr.price;

const oldPrice = document.createElement('div');
oldPrice.className = 'new-old-price';
oldPrice.textContent = newarr.oldPrice;

const discount = document.createElement('div');
discount.className = 'new-discount';
discount.textContent = newarr.discount;

newarrDiv.appendChild(img);
newarrDiv.appendChild(title);
newarrDiv.appendChild(author);
newarrDiv.appendChild(price);

if (newarr.oldPrice) {
newarrDiv.appendChild(oldPrice);
}
if (newarr.discount) {
newarrDiv.appendChild(discount);
}

container11.appendChild(newarrDiv);
});
}