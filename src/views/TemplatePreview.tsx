import { LiveProvider, LiveError, LivePreview } from "react-live";



const TemplatePreview = (props: any) => {

    return (
        <>
            <LiveProvider code={props.htmlCode}>
                <LiveError />
                <LivePreview />
            </LiveProvider>
        </>
    )

}

export default TemplatePreview;