(function() {
  'use strict';

  var tabCounter = 2;
  // DOM Elements
  let tabs = document.querySelectorAll('.tab');
  const containers = document.querySelector('#containers');
  const create = document.querySelector('#create');
  const editor = document.querySelector('#editor');
  const button = document.querySelector('#create-tab-button');

  let myCodeMirror = CodeMirror.fromTextArea(editor, {
          lineNumbers: true,
          mode: "htmlmixed"
  });

  // Event Listeners
  (function listenerCreatorLoop() {
    for (let tab of tabs) {
      tab.addEventListener('click', function() {
        activeTab(this);
      });
    }
  })();
  create.addEventListener('click', function() {
    createTab();
  });

  // Active selected tab
  function activeTab(tab) {
    for (let tab of tabs) {
      tab.setAttribute('class', 'tab');
    }
    tab.setAttribute('class', 'tab active');
    showTab(tab.value);
  }

  // Show and hide tab function
  function showTab(i) {
    let container = document.querySelector('.container-'+ i);
    let allContainers = document.querySelectorAll('.container');
    for (let container of allContainers) {
      container.style.display = "none";
    }
    container.style.display = "block";
  }

  //Create newtab and container
  function createTab() {
    // New tab
    tabCounter = tabCounter + 1;
    const newTabTitle = document.querySelector('#tab-title');
    let newTab = document.createElement("LI");
    let tabText = document.createTextNode(newTabTitle.value);
    newTab.appendChild(tabText);
    newTab.setAttribute('class', 'tab');
    newTab.setAttribute('value', tabCounter);
    document.querySelector("#tabs").appendChild(newTab);

    //New Container
    const newValue = myCodeMirror.getValue();
    let newContainer = document.createElement("DIV");
    newContainer.setAttribute('class', 'container-' + tabCounter + ' container');
    newContainer.innerHTML += newValue;
    document.querySelector("#containers").appendChild(newContainer);
    myCodeMirror.setValue('');


    // Tab listener reinitializer
    tabs = document.querySelectorAll('.tab');
    for (let tab of tabs) {
      console.log(tab);
      tab.removeEventListener('click', "");
      tab.addEventListener('click', function() {
        activeTab(this);
      });
    }
  }
})();
