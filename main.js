(function () {
    const editor = document.querySelector('#editor');
    let myCodeMirror = CodeMirror.fromTextArea(editor, {
            lineNumbers: true,
            mode: "htmlmixed"
    });
    const button = document.querySelector('#create-tab-button');
    button.addEventListener('click', () => {
        // Value: myCodeMirror.getValue();
        myCodeMirror.setValue('');
    });

})();