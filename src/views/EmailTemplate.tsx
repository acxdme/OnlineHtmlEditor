import { useState } from "react";
import TepmplateEditor from "./TemplateEditor"
import TemplatePreview from "./TemplatePreview";

const EmailTemplate = () => {

    const [htmlCode, setHtmlCode] = useState("");
    return (
        <div>
            <TepmplateEditor code={htmlCode} onCodeChange={setHtmlCode} />
            <TemplatePreview htmlCode={htmlCode} />
        </div>
    )

}

export default EmailTemplate;