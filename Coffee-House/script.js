console.log('1. The layout of the pages matches the design at a screen width of 1440px: +14\n' +
    '2.The layout of the pages matches the design at a screen width of 768px: +14\n' +
    '3. The layout of the pages matches the design at a screen width of 380px: +14\n' +
    '4. here is no horizontal scroll bar at all screen width up to 380px inclusive. All page content remains as per the design: it is not cropped, removed, or shifted to the side: +20\n' +
    '5. During smooth resizing of the screen from 1440px to 380px, the layout takes up the full width of the window (including the margins specified in the layout), elements change their sizes and positions (but without full scaling), elements do not overlap, and images maintain their correct proportions: +8 \n' +
    '6. At screen widths of 768px and below on both pages, the menu and navigation buttons in the header are hidden, and a burger menu icon appears: +4 \n' +
    '7. Hover effects are enable on desktop devices (Desktop device type in DevTools) and disabled for mobile devices on both pages (Mobile device type in DevTools): +4\n' +
    '. The layout of both pages is valid: to check the validity of the layout, use the service https://validator.w3.org/ : +12\n');

function myFunction(x) {
    x.classList.toggle("change");
    const nav = document.querySelector('.mobile');
    console.log(x);
    nav.classList.toggle('show');
    nav.classList.toggle('mobile-items');
    const show = document.querySelector('.show');
    if (show) {
        show.closest('header').style = "position: relative"; document.body.classList.add("over-hidden")
    }
    else {
        document.body.classList.remove("over-hidden");

    }
}

let mobileList = document.querySelector('.mobile');

if (mobileList) {
    var listItems = mobileList.querySelectorAll('li a');

    listItems.forEach(function (link) {
        link.onclick = function () {
            myFunction(document.querySelector('.menu-icon'));
        }
    });
}

const carousel = () => {

    const checkedValue = document.querySelector('input[name="slide"]:checked');
    if (checkedValue) {
        let check = checkedValue.value - 1;
        if (checkedValue.value === '1')
            check = '3';
        document.getElementById(`slide${check}`).checked = true;
        document.getElementById(`slide-1`).style = `margin-right: -${(check - 1) * 100}%`
    }
}

const carouselRight = () => {

    const checkedValue = document.querySelector('input[name="slide"]:checked');
    let check = +checkedValue.value + 1;
    if (checkedValue.value === '3')
        check = '1';
    document.getElementById(`slide${check}`).checked = true;
    document.getElementById(`slide-1`).style = `margin-right: -${(check - 1) * 100}%`
}
let intervalID = setInterval(carousel, 5000);
const radioInputs = document.querySelectorAll('input[name="slide"]');
radioInputs.forEach(input => {
    const slide = document.getElementById(`slide-${input.value}`);

    slide.addEventListener('mouseover', function () { clearInterval(intervalID); console.log("hhh") });
    slide.addEventListener('mouseout', function () { intervalID = setInterval(carousel, 5000); });
});

const refresh = document.getElementById('refresh');
if (refresh)
    refresh.onclick = function () {
        [...document.querySelectorAll('.items-menu:not(.hide)')].map((el) => {
            [...document.querySelectorAll(`.${el.classList[1]} .row-2`)].forEach((val) => { val.style = "display: flex;"; refresh.style = "display:none" })
        })
    }


const swipeArea = document.getElementById('swipeArea');
let touchStartX;

swipeArea?.addEventListener('touchstart', handleTouchStart);
swipeArea?.addEventListener('touchmove', handleTouchMove);

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    console.log(touchStartX);
}

function handleTouchMove(event) {
    if (!touchStartX) return;

    const touchEndX = event.touches[0].clientX;
    console.log("end:", touchEndX);
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 0) {
        carouselRight();
    } else if (swipeDistance < 0) {
        carousel();
    }
    touchStartX = null;
}
const products = [
    {
        "name": "Irish coffee",
        "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
        "price": "7.00",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Kahlua coffee",
        "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
        "price": "7.00",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Honey raf",
        "description": "Espresso with frothed milk, cream and aromatic honey",
        "price": "5.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Ice cappuccino",
        "description": "Cappuccino with soft thick foam in summer version with ice",
        "price": "5.00",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Espresso",
        "description": "Classic black coffee",
        "price": "4.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Latte",
        "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
        "price": "5.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Latte macchiato",
        "description": "Espresso with frothed milk and chocolate",
        "price": "5.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Coffee with cognac",
        "description": "Fragrant black coffee with cognac and whipped cream",
        "price": "6.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Moroccan",
        "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
        "price": "4.50",
        "category": "tea",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Lemon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Ginger",
        "description": "Original black tea with fresh ginger, lemon and honey",
        "price": "5.00",
        "category": "tea",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Lemon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Cranberry",
        "description": "Invigorating black tea with cranberry and honey",
        "price": "5.00",
        "category": "tea",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Lemon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Sea buckthorn",
        "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
        "price": "5.50",
        "category": "tea",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Lemon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Marble cheesecake",
        "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
        "price": "3.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Red velvet",
        "description": "Layer cake with cream cheese frosting",
        "price": "4.00",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Cheesecakes",
        "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
        "price": "4.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Creme brulee",
        "description": "Delicate creamy dessert in a caramel basket with wild berries",
        "price": "4.00",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Pancakes",
        "description": "Tender pancakes with strawberry jam and fresh strawberries",
        "price": "4.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Honey cake",
        "description": "Classic honey cake with delicate custard",
        "price": "4.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Chocolate cake",
        "description": "Cake with hot chocolate filling and nuts with dried apricots",
        "price": "5.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },

    {
        "name": "Black forest",
        "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
        "price": "6.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    }
];
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const previews = document.getElementsByClassName("preview");
const closebtn = document.querySelector(".close-modal");


const handleRadio = (event) => {
    [...document.getElementsByClassName('radio-modal')].map(el => { el.checked ? (el.closest("div").style = "background: #665F55;") : el.closest("div").style = "background: #E1D4C9;" });
    if (modal) {
        modal.getElementsByClassName('initialPrice')[0].innerHTML = modal.getElementsByClassName('initialPrice')[0].value;
        let initialPrice = modal.getElementsByClassName('initialPrice')[0].innerHTML;
        sizeBtn = document.getElementsByClassName('radio-size');
        let checked = [...sizeBtn].filter((el) => { return el.checked })
        const price1 = checked.reduce((sum, el) => { return (sum + parseFloat(el.value)) }, parseFloat(initialPrice));
        const adBtn = document.getElementsByClassName('radio-ad');
        checked = [...adBtn].filter((el) => { return el.checked })
        const price2 = checked.reduce((sum, el) => { return (sum + parseFloat(el.value)) }, price1);
        modal.getElementsByClassName('initialPrice')[0].innerHTML = price2.toFixed(2);
    }
}

[...previews].map(el => {
    el.addEventListener('click', function (ev) {
        modal?.classList.remove("modal-hidden");
        overlay?.classList.remove("modal-hidden");
        document.body.classList.add("over");
        let prevNum = ev.target.closest(".preview").classList.item(1);
        const title = modal.getElementsByClassName('menu-title')[0];
        title.getElementsByTagName("h3")[0].innerHTML = products[+prevNum].name;
        title.getElementsByClassName("description")[0].innerHTML = products[+prevNum].description;
        const inputs1 = title.getElementsByClassName("inputs1")[0];
        [...inputs1.getElementsByClassName('volume')][0].innerHTML = products[+prevNum].sizes.s.size;
        [...inputs1.getElementsByClassName('volume')][1].innerHTML = products[+prevNum].sizes.m.size;
        [...inputs1.getElementsByClassName('volume')][2].innerHTML = products[+prevNum].sizes.l.size;
        const inputs2 = title.getElementsByClassName("inputs2")[0];
        console.log(products[+prevNum]);
        [...inputs2.getElementsByClassName('volume')][0].innerHTML = products[+prevNum].additives['0'].name;
        [...inputs2.getElementsByClassName('volume')][1].innerHTML = products[+prevNum].additives['1'].name;
        [...inputs2.getElementsByClassName('volume')][2].innerHTML = products[+prevNum].additives['2'].name;
        modal.getElementsByClassName('initialPrice')[0].innerHTML = products[+prevNum].price;
        modal.getElementsByClassName('initialPrice')[0].value = products[+prevNum].price;
        modal.getElementsByClassName("modal-img")[0].style = `background: url('resources/${prevNum}.png') lightgray 50% / cover no-repeat`;

    }
    )
    el.addEventListener('click', handleRadio);
})
handleRadio();
[...document.getElementsByClassName('radio-modal')].map(el => { el.addEventListener('click', handleRadio) });

closebtn?.addEventListener("click", function () { modal?.classList.add("modal-hidden"); overlay?.classList.add("modal-hidden"); document.body.classList.remove("over") })
overlay?.addEventListener("click", function () { modal?.classList.add("modal-hidden"); overlay?.classList.add("modal-hidden"); document.body.classList.remove("over") })

const handleProducts = (ev) => {
    ev.classList.add('bg');
    const allTabs = document.querySelectorAll('.tab');
    const refresh = document.getElementById('refresh');
    allTabs.forEach(tab => {
        if (tab.id != ev.id) {
            tab.classList.remove('bg');
        }
    });
    if (matchMedia('(max-width: 768px)').matches) {
        refresh.style = "display: flex";
        [...document.getElementsByClassName('row-2')].forEach((val) => { val.style = "display: none;"; });
    }
    if (ev.id == 'tea') {
        refresh.style = "display: none";
        document.getElementById('prev-tea').classList.remove('hide');
        document.getElementById('prev-coffee').classList.add('hide');
        document.getElementById('prev-dessert').classList.add('hide');

    }
    else if (ev.id == 'coffee') {
        document.getElementById('prev-coffee').classList.remove('hide');
        document.getElementById('prev-tea').classList.add('hide');
        document.getElementById('prev-dessert').classList.add('hide');

    }
    else if (ev.id == 'dessert') {
        document.getElementById('prev-dessert').classList.remove('hide');
        document.getElementById('prev-coffee').classList.add('hide');
        document.getElementById('prev-tea').classList.add('hide');

    }


}