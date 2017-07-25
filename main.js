(function () {
    let tabs = [];

    class Tab {
        constructor(title = 'New Tab', content = '<h2>New content</h2>') {
            this.id = 0;
            this.title = title;
            this.content = content;
        }

        createTabNode() {
            let newTab = document.createElement('li');
            let tabText = document.createTextNode(this.title);
            newTab.appendChild(tabText);
            newTab.setAttribute('class', 'tab');
            newTab.addEventListener('click', () => {
                // Container
                let container = document.querySelector('.container-' + this.id);
                const allContainers = document.querySelectorAll('.container');
                let i = 1;
                for (let container of allContainers) {
                    container.setAttribute('class', 'container-' + i + ' container hidden');
                    i++;
                }
                container.setAttribute('class', 'container-' + this.id + ' container');
                // Tabs
                for (let tab of tabs) {
                    newTab.setAttribute('class', 'tab');
                }
                newTab.setAttribute('class', 'tab active');
            });
            document.querySelector("#tabs").appendChild(newTab);
        };

        createContainerNode() {
            let newContainer = document.createElement('div');
            newContainer.setAttribute('class', 'container-' + this.id + ' container hidden');
            newContainer.innerHTML += this.content;
            document.querySelector("#containers").appendChild(newContainer);
        };

        create() {
            this.id = tabs.length + 1;
            tabs.push(this);
            this.createTabNode();
            this.createContainerNode();
        };
    }

    let t1 = new Tab('Welcome', `<h1>Welcome to Tab Creator 1.0!</h1>
        <p>Here you can create as many tabs as you want.</p>
        <p>The heaven for organized people and click lovers</p>`);

    let t2 = new Tab('How to Tab', `<h2>Create a tab</h2>
        <p>To Create a tab you need to give it a title.</p>
        <p>Then you can wright code like in your favorite editor</p>
        <p>Isn\`t that friking awesome?!</p>
        <input id="tab-title" placeholder="Tab's title">
        <textarea name="" id="editor" cols="30" rows="10"></textarea>
        <button id="create">Create Tab</button>`);

    t1.create();
    t2.create();

    const editor = document.querySelector('#editor');

    let myCodeMirror = CodeMirror.fromTextArea(editor, {
        lineNumbers: true,
        mode: "htmlmixed"
    });

    document.querySelector('#create').addEventListener('click', () => {
        const title = document.querySelector('#tab-title').value;
        const content = myCodeMirror.getValue();
        const newTab = new Tab(title, content);
        newTab.create();
    });
})();