import { useState } from "react";
import TepmplateEditor from "./TemplateEditor"
import TemplatePreview from "./TemplatePreview";

const EmailTemplate = () => {

    const [htmlCode, setHtmlCode] = useState(temp);
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <TepmplateEditor code={htmlCode} onCodeChange={setHtmlCode} style={{ width: '50%' }} />
            <TemplatePreview htmlCode={htmlCode} style={{ width: '50%' }} />
        </div>
    )

}

const temp: string = `<div>
<h1>Asset Changes Report</h1>
<p>Below is a summary of the recent changes to assets in the plant:</p>
<table>
  <thead>
    <tr>
      <th>Asset ID</th>
      <th>Change Type</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Asset001</td>
      <td>Addition</td>
      <td>2024-03-03</td>
    </tr>
    <tr>
      <td>Asset002</td>
      <td>Modification</td>
      <td>2024-03-02</td>
    </tr>
    <tr>
      <td>Asset003</td>
      <td>Deletion</td>
      <td>2024-03-01</td>
    </tr>
  </tbody>
</table>
<p>For more details, please refer to the attached report.</p>
</div>`;

export default EmailTemplate;