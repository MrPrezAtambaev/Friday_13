// 1. Спросить у пользователя хочет ли он активировать темную тему(можно использовать confirm), если пользователь выбирает темную тему, то тогда мы меняем фон боди(темная тема: черный фон, белый текст; светлая тема: белый фон, черный текст), все темы должны быть указаны в классах CSS

// if (confirm("хотите активировать черную тему?")) {
//   document.body.classList.add("dark");
// } else {
//   document.body.classList.remove("light");
// };

// 2 вариант через кнопку
// let btn = document.querySelector('.btn');

// btn.addEventListener('click', e =>{
//     let ask = confirm('Выбрать темную тему?')
//     if(ask){
//         document.body.classList.toggle('dark')
//     };
// });

// 2. Создать пустой список в html документе, затем спросить у пользователя какие продукты добавить в список, пользователь может добавлять продукты в список бесконечно, пока не решит остановиться сам, список необходимо выводить на страницу html(у продукта должны быть название и цена)

// let item = document.querySelector('ul');

// while(true) {
//     let productName = prompt('Имя продукта');
//     let productPrice = prompt('Цена продукта');
//     let list = `<li>${productName}: ${productPrice}</li>`
//     item.innerHTML += list;
//     let add = confirm('вы еще хотите добавить');
//     if(!add) {
//         break;
//     };
// };

// 3. Запросить у пользователя информацию, что он хочет добавить на страницу, картинку(путь к картинке, ширина, высота) или блок(цвет фона блока, ширина, высота), затем добавить этот элемент на страницу и спросить у пользователя, хочет ли он добавить еще элменты на страницу, если да, то заново спросить что добавить и так до бесконечности(либо цикл, либо кнопки), пока пользователь сам не захочет остановиться(элементы должны именно добавляться, а не перезаписывать предыдущие)

// let addImg = document.querySelector(".btn");
// let addBlock = document.querySelector("#btn");

// addImg.addEventListener("click", () => {
//   let ask = prompt("Enter link, width and height with space between them").split(" ");

//   let img = document.createElement("img");
//   document.body.append(img);

//   img.src = ask[0];
//   img.style.width = ask[1] + "px";
//   img.style.height = ask[2] + "px";
// });

// addBlock.addEventListener("click", () => {
//   let ask = prompt("Enter color, width and height with space between them").split(" ");

//   let div = document.createElement("div");
//   document.body.append(div);

//   div.style.backgroundColor = ask[0];
//   div.style.width = ask[1] + "px";
//   div.style.height = ask[2] + "px";
// });

// 4. Дан массив с продуктами, задача: отобразить все продукты на странице(обязательно нужно выводить картинку, категорию, название, остальное на ваше усмотрение), также должна быть функция фильтрации по категории, то есть, вызываем функцию и она спрашивает у пользователя по какой категории нужно отфильтровать товары, указываем категорию и на странице остаются только те товары, которые относятся к данной категории(вызов функции фильтрации производить по нажатию на кнопку ОТФИЛЬТРОВАТЬ)
// let db = [
//   {
//     title: "Samsung S10",
//     category: "electronics",
//     price: 700,
//     desc: "Super phone for your life!",
//     img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png",
//   },
//   {
//     title: "iPhone 13 Pro",
//     category: "electronics",
//     price: 1100,
//     desc: "One of the most powerful cameras!",
//     img: "https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg",
//   },
//   {
//     title: "Apple",
//     category: "fruits",
//     price: 2,
//     desc: "Healthy fruit that is used in many dishes and desserts.",
//     img: "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg",
//   },
//   {
//     title: "Orange",
//     category: "fruits",
//     price: 7,
//     desc: "Fruit for one of the most popular types of juice.",
//     img: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg",
//   },
//   {
//     title: "Audi R8",
//     category: "cars",
//     price: 98000,
//     desc: "A sports car that can reach tremendous speed.",
//     img: "https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg",
//   },
// ];

// let ul = document.querySelector("ul");

// function render(category = "all") {
//   let filterdb = JSON.parse(JSON.stringify(db));
//   if (category !== "all") {
//     filterdb = filterdb.filter((item) => {
//       return item.category == category;
//     });
//   }
//   ul.innerHTML = "";
//   filterdb.forEach((item) => {
//     ul.innerHTML += `<li>${item.title}, ${item.category},<img src=${item.img} width='100' height='100' alt="error"></li>`;
//   });
// }
// render();

// let but = document.querySelector("#filter");
// but.addEventListener("click", (e) => {
//   let list = prompt("выберите категорию");
//   render(list);
// });
// let but2 = document.querySelector("#sbros");
// but2.addEventListener("click", (e) => {
//   render();
// });

// ------------------------------------------------------  домашка ----------------------------------------------------------------

// 5. Сохранение продуктов. Запросить у пользователя название, цену и картинку. Необходимо выводить данные о продуктах на страницу в любом удобном виде(карточки, список, блоки), если цена продукта ниже, чем 100$, то текстовая информация о товаре должна подсвечиваться красным цветом, если цена больше 100$, текст должен подсвечиваться зеленым

// let ul = document.querySelector("ul");
// let btn = document.querySelector("#add");

// let db = [];

// btn.addEventListener("click", (e) => {
//   ul.innerHTML = "";

//   let title = prompt("Enter title");
//   let price = prompt("Enter price");
//   let imgLink = prompt("Enter image link");

//   let product = {
//     title: title,
//     price: price,
//     img: imgLink,
//   };

//   db.push(product);

//   db.forEach((item) => {
//     let li = document.createElement("li");
//     ul.append(li);
//     li.innerHTML = `Title: ${item.title}, Price: ${item.price} <img src="${item.img}" width = 100 height = 100></img>`;

//     if (item.price < 100) {
//       li.style.color = "red";
//     } else {
//       li.style.color = "green";
//     }
//   });
// });

// 6. Регистрация пользователей, создать форму в которой будем запрашивать информацию о пользователе(имя, пароль, возраст, имя может быть не уникальным, но у каждого должен быть айди, также при сохранении объекта пользователя добавляется ключ mailing со значением false - это рассылка новостей), также реализовать вывод пользователей на страницу(вывод может быть в любом удобном виде), напротив каждого пользователя должен быть инпут с типом чекбокс, как раз он и будет отвечать за рассылку, изменяется инпут - изменяется значение ключа mailing, также должна быть сама функция рассылки(на странице должна быть кнопка по нажатию на которую и будет запускаться функция), которая будет отправлять сообщение только тем пользователям, которые подписаны на рассылку(вывод может быть любым, алерт, консоль, страница)

let nameInp = document.querySelector("#name");
let ageInp = document.querySelector("#age");
let passInp = document.querySelector("#password");
let btnReg = document.querySelector("#clickReg");
let btnSend = document.querySelector("#send");
let usersList = [];
let ul = document.querySelector("ul");

btnReg.addEventListener("click", (e) => {
  e.preventDefault();
  ul.innerHTML = "";
  let userObj = {
    name: nameInp.value,
    password: passInp.value,
    age: ageInp.value,
    id: Date.now(),
    mailing: false,
  };
  usersList.push(userObj);
  usersList.forEach((item) => {
    let li = document.createElement("li");
    ul.append(li);
    li.setAttribute("id", item.id);
    li.innerHTML = `Username: ${item.name}; mailing: <input type = "checkbox">`;
  });

  nameInp.value = "";
  ageInp.value = "";
  passInp.value = "";

  console.log(usersList);
});

btnSend.addEventListener("click", (e) => {
  let liList = document.querySelectorAll("li");
  liList.forEach((item) => {
    if (item.childNodes[1].checked == true) {
      usersList.forEach((elem) => {
        if (elem.id == item.id) {
          elem.mailing = true;
          alert(`Hello ${elem.name}`);
        }
      });
    }
    console.log(usersList);
  });
  console.log(liList);
});
