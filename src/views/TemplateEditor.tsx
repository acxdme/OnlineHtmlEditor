import Editor from '@monaco-editor/react';

const TepmplateEditor = (props: any) => {

    function handleEditorChange(value: any) {
        console.log('here is the current model value:', value);
        props.onCodeChange(value);
    }
    return (

        <Editor
            height="90vh"
            defaultLanguage="html"
            defaultValue="// start your html below"
            onChange={handleEditorChange}
        />
    )
}

export default TepmplateEditor;

