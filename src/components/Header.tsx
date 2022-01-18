import React, { Component, Fragment } from "react";

const links = [
    { urlPrefix: "https://git.y.gy/pektin/pektin-", text: "git.y.gy", icon: "" },
    { urlPrefix: "https://gitlab.com/pektin/pektin-", text: "GitLab", icon: "" },
    { urlPrefix: "https://github.com/pektin-dns/pektin-", text: "GitHub", icon: "" },
    { urlPrefix: "https://hub.docker.com/r/pektin/", text: "Docker Hub", icon: "" }
];

interface HeaderProps {
    name: string;
}
interface HeaderState {}

export class Header extends Component<HeaderProps, HeaderState> {
    render = () => {
        return (
            <div>
                {links.map((link, i: number) => {
                    return (
                        <Fragment>
                            <a
                                key={link.text}
                                rel="noreferrer"
                                href={link.urlPrefix + this.props.name}
                            >
                                {link.text}
                            </a>
                            {i !== links.length - 1 ? " | " : ""}
                        </Fragment>
                    );
                })}
            </div>
        );
    };
}
