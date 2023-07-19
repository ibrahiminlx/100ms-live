import React from 'react';
import {selectPeers, useHMSStore} from "@100mslive/react-sdk";
import '../App.css';
import Peer from "./Peer";


function Conferences(props) {
    const peers = useHMSStore(selectPeers);
    return (
        <div className="room-section">
            <div className="conference-section">
                <div className="peers-container">
                    {peers.map((peer) => (
                        <Peer key={peer.id} peer={peer} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Conferences;