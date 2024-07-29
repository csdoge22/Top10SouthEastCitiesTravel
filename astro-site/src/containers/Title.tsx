import type { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";

const Title = (page: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
    return (
        <h1 className="text text-white text-center m-5">{page.title}</h1>
    )
}
export default Title;