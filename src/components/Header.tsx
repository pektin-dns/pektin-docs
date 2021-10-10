import React, { Component } from "react";

const links = [
    { urlPrefix: "https://git.y.gy/pektin/pektin-", text: "git.y.gy", icon: "" },
    { urlPrefix: "https://gitlab.com/pektin/pektin-", text: "Gitlab", icon: "" },
    { urlPrefix: "https://github.com/pektin-dns/pektin-", text: "Github", icon: "" },
    { urlPrefix: "https://hub.docker.com/repository/docker/pektin/", text: "Dockerhub", icon: "" }
];

interface HeaderProps {
    name: string;
}
interface HeaderState {}

export class Header extends React.Component<HeaderProps, HeaderState> {
    render = () => {
        return (
            <div>
                {links.map(link => {
                    return (
                        <a key={link.text} rel="noreferrer" href={link.urlPrefix + this.props.name}>
                            {link.text + " "}
                        </a>
                    );
                })}
            </div>
        );
    };
}
