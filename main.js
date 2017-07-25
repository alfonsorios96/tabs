(function () {
    const editor = document.querySelector('#editor');
    let myCodeMirror = CodeMirror.fromTextArea(editor, {
            lineNumbers: true,
            mode: "htmlmixed"
    });
    const button = document.querySelector('#create-tab-button');
    button.addEventListener('click', () => {
        const newValue = myCodeMirror.getValue();
        const newContainer = document.createElement('div');
        newContainer.setAttribute('class', 'container');
        newContainer.innerHTML += newValue;
        document.body.appendChild(newContainer);
        myCodeMirror.setValue('');
    });

})();