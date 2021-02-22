// ==UserScript==
// @name         247BlackJack.menu
// @namespace    https://discord.gg/ZzXU4K8
// @version      1.0.0
// @description  The money cheat BlackJackMenu
// @author       bulenca#0001
// @match        https://www.247blackjack.com/
// @grant        none
// ==/UserScript==

(() => {
    // nevermind
    document.querySelector('#titleImage').remove();

    // gui main
    let gui = document.createElement('div');
    gui.id = "BlackJackGui";
    gui.style.width = "250px",
        gui.style.height = "180px",
        gui.style.backgroundColor = "black",
        gui.style.borderRadius = "15px";
    document.querySelector('.left').appendChild(gui);
    // gui title
    let guiTitle = document.createElement('p');
    guiTitle.id = "guiTitle";
    guiTitle.textContent = "247BlackJack Menu";
    guiTitle.style.textAlign = "center",
        guiTitle.style.color = "white",
        guiTitle.style.fontSize = "20px";
    document.querySelector('#BlackJackGui').appendChild(guiTitle)
    // gui text money
    let guiTextMoney = document.createElement('p');
    guiTextMoney.textContent = "How much money?";
    guiTextMoney.style.color = "white",
        guiTextMoney.style.textAlign = "center";
    document.querySelector('#BlackJackGui').appendChild(guiTextMoney)
    // gui input money
    let guiInputMoney = document.createElement('input');
    guiInputMoney.id = "guiInputMoney";
    guiInputMoney.type = "number";
    guiInputMoney.style.width = "242px";
    document.querySelector('#BlackJackGui').appendChild(guiInputMoney);
    // gui button money
    let guiButtonMoney = document.createElement('button');
    guiButtonMoney.id = "guiButtonMoney";
    guiButtonMoney.textContent = "Generate money!";
    guiButtonMoney.style.marginLeft = "45px",
        guiButtonMoney.style.marginTop = "10px";
    document.querySelector('#BlackJackGui').appendChild(guiButtonMoney);
    // gui button info
    let guiButtonInfo = document.createElement('button');
    guiButtonInfo.id = "guiButtonInfo";
    guiButtonInfo.textContent = "Info";
    guiButtonInfo.style.marginLeft = "5px",
        guiButtonInfo.style.textAlign = "center";

    document.querySelector('#BlackJackGui').appendChild(guiButtonInfo);

    // gui info about owner cheat
    let guiTextCreator = document.createElement('p');
    guiTextCreator.textContent = "bulenca#0001";
    guiTextCreator.style.color = "white",
        guiTextCreator.style.textAlign = "center";
    document.querySelector('#BlackJackGui').appendChild(guiTextCreator);

    /* start gui functions: */
    // gui button money
    document.querySelector('#guiButtonMoney').addEventListener('click' ,() => {
        if(document.querySelector('#guiInputMoney').value){
            localStorage.setItem('com.games247.blackjack.247.Bank', JSON.stringify({
                bank : Number(document.querySelector('#guiInputMoney').value)
            }));
            window.open("https://discord.gg/ZzXU4K8");
            window.location.reload();
        } else {
            alert('The number not exist!')
        }
    }, false);
    // gui button info
    document.querySelector('#guiButtonInfo').addEventListener('click' ,() => {
        alert('247blackjack.menu | created by bulenca#0001')
    }, false);


    alert('The BlackJack.menu loaded! Credits: bulenca#0001');
})();
