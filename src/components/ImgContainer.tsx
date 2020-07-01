import * as React from 'react'

interface ImgContainerProps {
    src: string;
    txt: string;
}

export const ImgContainer: React.FunctionComponent<ImgContainerProps> = ({ src, txt }) => {
    return (
        <div className="imgcontainer">
            <img src={src} className="image" />
            <div className="overlay">
                <div className="text">{txt}</div>
            </div>
        </div>
    )
}