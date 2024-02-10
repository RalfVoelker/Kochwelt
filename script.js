async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

function mobileMenu(){
  let menuContent = document.getElementById('menu-content');
  menuContent.innerHTML = `
    <div class="open-menu">
      <div>
        <span onclick="closeMenu()" class="close-menu">X</span>
      </div>
  
      <div class="mobile-menu">
        <a href="index.html">Start</a>
        <a href="rezept_des_tages.html">Rezept des Tages</a>
        <a href="kontact.html">Kontakt</a>
        <a href="impressum.html">Impressum</a>
        <a href="datenschutz.html">Datenschutz</a>
      </div>

    </div>
  `;
}

function closeMenu(){
  let menuContent = document.getElementById('menu-content');
  menuContent.innerHTML = '';
}

  
  function calculationTab() { 
    let amount = +document.getElementById("amount").value; // | get input value from input field
    if (amount < 1) {
      alert("Bitte mindestens eine Portion eingeben!");
      document.getElementById("amount").value = "4";
    } else if (amount > 20) {
      alert("Bitte maximal 20 Portionen eingeben");
      document.getElementById("amount").value = "4";
    } else {
      document.getElementById("table").innerHTML = ""; // | remove old table content
      for (let i = 0; i < table_content.length; i++) {
        let total = table_content[i][0] * amount;
        fillTab(total.toFixed(1), table_content[i][1], table_content[i][2]);
      }
    }
  }
  
  function fillTab(total, unit, name) {
    document.getElementById("table").innerHTML += `
    <tr>
      <td id="menge">${total}</td>
      <td id="unit">${unit}</td>
      <td id="name">${name}</td>
    </tr> 
    `; // | build the table
  }
  

function sendMail(event){﻿
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mwkdgrak", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.open("./send_mail.html", '_blank');
    }).catch((error) => {
        console.log(error);
    });
}

