async function populate() {
  const items = await getItems1();
  console.log(items)
  const itemList = generateList(items);
  const todoList = document.getElementById("todoList");
  todoList.append(itemList);
}

getItems = async () => {
  const response = await fetch("http://localhost:8800/api/todos");
  const items = await response.json();
  return items;
}

getItems1 = async () => {

  const httpRequest = new XMLHttpRequest();

  return new Promise(function (resolve, reject) {
    httpRequest.onreadystatechange = function (response) {
      if (httpRequest.readyState !== 4) return;

      if (httpRequest.status >= 200 && httpRequest.status < 300) {
        resolve(JSON.parse(httpRequest.response));
      } else {
        reject({
          status: httpRequest.status,
          statusText: httpRequest.statusText
        })
      }
    };
    httpRequest.open("GET", "http://localhost:8800/api/todos", true);
    httpRequest.send();
  });
}

/*
 httpRequest.addEventListener('load', (response) => {
      resolve(await response.json());
    });
    httpRequest.open("GET", "http://localhost:8800/api/todos", true);
    // it's automatically async (third param)
    httpRequest.send();
  });
 */

function generateList(items) {
  console.log('generate started');
  const list = document.createDocumentFragment();
  items.forEach(item => {
    list.appendChild(createListItem(item));
  });
  return list;
}

createListItem = (item) => {
  const li = document.createElement('li');

  const idSpan = document.createElement('span');
  idSpan.innerText = item.id;
  li.append(idSpan);

  const textPar = document.createElement('p');
  textPar.innerText = item.text;
  li.append(textPar);

  if (item.done) {
    const dateSpan = document.createElement('span');
    dateSpan.innerText = item.done
    li.append(dateSpan);
  }

  return li;
}

populate();