var mixed_mode = {
        name: "htmlmixed",
        scriptTypes: [{
                matches: /\/x-handlebars-template|\/x-mustache/i,
                mode: null
        },
        {
                matches: /(text|application)\/(x-)?vb(a|script)/i,
                mode: "vbscript"
        }]
};
document.querySelectorAll('textarea[id^="show_code"]').forEach((element) => {
        CodeMirror.fromTextArea(element, {
                mode: mixed_mode,
                theme: "material-darker",
                lineNumbers: true,
                selectionPointer: true,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                matchBrackets: true,
                readOnly: true,
        });
});
document.querySelectorAll('button[id^="open_editor"]').forEach((button) => {
        button.addEventListener('click', () => {
                const codeId = button.id.replace('open_editor', 'show_code');
                const exampleContent = document.getElementById(codeId).value;
                localStorage.setItem('example_content', exampleContent);
                window.location.href = '../code_edit_page.html';
        });
});