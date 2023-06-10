import React, { useRef } from 'react'
import './Publish.css'
import { Switch } from 'antd';

const Publish = () => {
    const inputRef = useRef(null);

    const handleCopyLink = () => {
        inputRef.current.select();
        document.execCommand('copy');
    };


    return (
        <div className='root'>
            <div className='link'>
                <input
                    id='link-id'
                    ref={inputRef}
                    type="text"
                    value={window.location.href}
                    readOnly
                />
                <button id='link-button' onClick={handleCopyLink}>Copy web Link</button>
            </div>

            <div style={{marginTop: '1rem'}}>
                <div className="option">
                    <div>Allow editing</div>
                    <Switch size="small" defaultChecked
                    />
                </div>
                <div className="option">
                    <div>Allow comments</div>
                    <Switch size="small" defaultChecked
                    />
                </div>
                <div className="option">
                    <div>Allow duplicate as Template</div>
                    <Switch size="small" defaultChecked
                    />
                </div>
                <div className="option">
                    <div>Search engne indexing</div>
                    <Switch size="small" defaultChecked
                    />
                </div>
            </div>

            <div className='publish-buttons'>
                <button id='unpublish'>Unpublish</button>
                <button id='view'>View site</button>
            </div>
        </div>
    )
}

export default Publish