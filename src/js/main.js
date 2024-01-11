window.addEventListener('load', function() {
    menuToggle();
    updateTable(serverResponse);
})
/*==========[ Выпадающее Меню Бургер ]==========*/
function menuToggle() {
    const meinField = document.querySelector('.main-field');
    const menu = document.querySelector('.navigation__main-menu');
    const mainHamburger = document.querySelector('.navigation__hamburger')
    const smallHamburger = document.querySelector('.main-menu__hamburger')
    const dropdownMenu = document.querySelector('.navigation__main-menu')
    const html = document.querySelector('html')

    document.addEventListener('click', function(e) {
        console.log(e.target)
        /*==========[ Обработка клика по оверлею ]==========*/
        if(e.target === meinField && mainHamburger.classList.contains('active')) {
            console.log('Клик по оверлею!')
            overlayFadeOutAnimation(meinField, 'main-field_menu-open', 'main-field_menu-out')
            menu.classList.remove('open')
            mainHamburger.classList.remove('active')
            html.classList.toggle('locked')
        }
        /*==========[ Обработка клика по гамбургеру ]==========*/
        else if (mainHamburger.contains(e.target)) {
            console.log('Клик по гамбургеру')
            if(mainHamburger.classList.contains('active'))
            {       
                mainHamburger.classList.remove('active')
            }else {
                mainHamburger.classList.add('active')
            }
            dropdownMenu.classList.toggle('open')
            html.classList.toggle('locked')
            overlayFadeOutAnimation(meinField, 'main-field_menu-open', 'main-field_menu-out')
        }
    })
}
/*==========[ Анимация затемнения ]==========*/
function overlayFadeOutAnimation(element, fadeIn, fadeOut) {
    if(element.classList.contains(fadeIn)) {
        element.classList.add(fadeOut)
        element.classList.remove(fadeIn)
        setTimeout(()=>{
            element.classList.remove(fadeOut)
        }, 950)
    } else {
        element.classList.add(fadeIn)
    }
}

/*          //Пример Запроса Данных
  fetch('http://example.com/api/customers')
    .then(response => response.json())
    .then(data => {
        updateTable(data);
    })
    .catch(error => console.error('Error getting data:', error));
*/

/*=====[ Распарсим Ответ Сервера В Таблицу ]=====*/
function updateTable(data) {
    const tbody  = document.querySelector('.customers-list__data-wrap');
    for (const dataObject of data) {
        const dataRow = document.createElement("tr");
        dataRow.className = 'customers-list__row customers-list__row_data';
        for (const key of Object.keys(dataObject)) {
            const td = document.createElement('td');
            const span = document.createElement('span');
            td.className = 'customers-list__col';
            span.className = 'customers-list__text';
            span.textContent = dataObject[key];
            if (key === 'Status') {
                const statusSpan = document.createElement('span');
                statusSpan.className = `customers-list__text customers-list__status customers-list__status_${dataObject[key].toLowerCase()}`;
                statusSpan.textContent = dataObject[key];
                td.appendChild(statusSpan);
            }else {
                td.appendChild(span);
            }
            dataRow.appendChild(td);
        }
        tbody.appendChild(dataRow);
      }
}

/*=====[ Пример Ответа сервера ]=====*/
const serverResponse = [
    {
      "CustomerName": "Jane Cooper",
      "Company": "Microsoft",
      "PhoneNumber": "(225) 555-0118",
      "Email": "jane@microsoft.com",
      "Country": "United States",
      "Status": "Active"
    },
    {
      "CustomerName": "Floyd Miles",
      "Company": "Yahoo",
      "PhoneNumber": "(205) 555-0100",
      "Email": "floyd@yahoo.com",
      "Country": "Kiribati",
      "Status": "Inactive"
    },
    {
      "CustomerName": "Ronald Richards",
      "Company": "Adobe",
      "PhoneNumber": "(302) 555-0107",
      "Email": "ronald@adobe.com",
      "Country": "Israel",
      "Status": "Inactive"
    },
    {
      "CustomerName": "Marvin McKinney",
      "Company": "Tesla",
      "PhoneNumber": "(252) 555-0126",
      "Email": "marvin@tesla.com",
      "Country": "Iran",
      "Status": "Active"
    },
    {
      "CustomerName": "Jerome Bell",
      "Company": "Google",
      "PhoneNumber": "(629) 555-0129",
      "Email": "jerome@google.com",
      "Country": "Réunion",
      "Status": "Active"
    },
    {
      "CustomerName": "Kathryn Murphy",
      "Company": "Microsoft",
      "PhoneNumber": "(406) 555-0120",
      "Email": "kathryn@microsoft.com",
      "Country": "Curaçao",
      "Status": "Active"
    },
    {
      "CustomerName": "Jacob Jones",
      "Company": "Yahoo",
      "PhoneNumber": "(208) 555-0112",
      "Email": "jacob@yahoo.com",
      "Country": "Brazil",
      "Status": "Active"
    },
    {
      "CustomerName": "Kristin Watson",
      "Company": "Facebook",
      "PhoneNumber": "(704) 555-0127",
      "Email": "kristin@facebook.com",
      "Country": "Åland Islands",
      "Status": "Inactive"
    }
  ]