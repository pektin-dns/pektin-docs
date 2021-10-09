const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
    module.exports = {
        title: "Pektin",
        tagline: "is a strongly opinionated DNS server",
        url: "https://your-docusaurus-test-site.com",
        baseUrl: "/",
        onBrokenLinks: "throw",
        onBrokenMarkdownLinks: "warn",
        favicon: "img/favicon.ico",
        organizationName: "Pektin",
        projectName: "Pektin",

        presets: [
            [
                "@docusaurus/preset-classic",
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        sidebarPath: require.resolve("./sidebars.js"),
                        routeBasePath: "compose",
                        path: "docs/compose",
                        editUrl: "https://github.com/facebook/docusaurus/edit/main/website/"
                    },

                    theme: {
                        customCss: require.resolve("./src/css/custom.css")
                    }
                })
            ]
        ],
        plugins: [
            [
                "@docusaurus/plugin-content-docs",
                {
                    id: "helm",
                    path: "docs/helm",
                    routeBasePath: "helm",
                    sidebarPath: require.resolve("./sidebars.js")
                }
            ],
            [
                "@docusaurus/plugin-content-docs",
                {
                    id: "server",
                    path: "docs/server",
                    routeBasePath: "server",
                    sidebarPath: require.resolve("./sidebars.js")
                }
            ],
            [
                "@docusaurus/plugin-content-docs",
                {
                    id: "api-server",
                    path: "docs/api-server",
                    routeBasePath: "api-server",
                    sidebarPath: require.resolve("./sidebars.js")
                }
            ],
            [
                "@docusaurus/plugin-content-docs",
                {
                    id: "ui",
                    path: "docs/ui",
                    routeBasePath: "ui",
                    sidebarPath: require.resolve("./sidebars.js")
                }
            ],
            [
                "@docusaurus/plugin-content-docs",
                {
                    id: "certbot",
                    path: "docs/certbot",
                    routeBasePath: "certbot",
                    sidebarPath: require.resolve("./sidebars.js")
                }
            ],
            [
                "@docusaurus/plugin-content-docs",
                {
                    id: "rotate",
                    path: "docs/rotate",
                    routeBasePath: "rotate",
                    sidebarPath: require.resolve("./sidebars.js")
                }
            ],
            [
                "@docusaurus/plugin-content-docs",
                {
                    id: "vault",
                    path: "docs/vault",
                    routeBasePath: "vault",
                    sidebarPath: require.resolve("./sidebars.js")
                }
            ],
            [
                "@docusaurus/plugin-content-docs",
                {
                    id: "redis",
                    path: "docs/redis",
                    routeBasePath: "redis",
                    sidebarPath: require.resolve("./sidebars.js")
                }
            ]
        ],

        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                navbar: {
                    title: "Pektin",
                    logo: {
                        alt: "Pektin Logo",
                        src: "img/logo.svg"
                    },
                    items: [
                        {
                            to: "compose/intro",
                            position: "left",
                            label: "Compose"
                        },
                        {
                            to: "helm/intro",
                            position: "left",
                            label: "Helm"
                        },
                        {
                            to: "#disabled",
                            position: "left",
                            label: "|"
                        },
                        {
                            to: "server/intro",
                            position: "left",
                            label: "Server"
                        },
                        {
                            to: "api-server/intro",
                            position: "left",
                            label: "API"
                        },
                        {
                            to: "ui/intro",
                            position: "left",
                            label: "UI"
                        },
                        {
                            to: "certbot/intro",
                            position: "left",
                            label: "Certbot"
                        },
                        {
                            to: "rotate/intro",
                            position: "left",
                            label: "Rotate"
                        },
                        {
                            to: "vault/intro",
                            position: "left",
                            label: "Vault"
                        },
                        {
                            to: "redis/intro",
                            position: "left",
                            label: "Redis"
                        },
                        {
                            href: "https://git.y.gy/pektin",
                            label: "git.y.gy",
                            position: "right"
                        },
                        {
                            href: "https://gitlab.com/pektin",
                            label: "Gitlab",
                            position: "right"
                        },
                        {
                            href: "https://github.com/pektin-dns",
                            label: "GitHub",
                            position: "right"
                        }
                    ]
                },
                footer: {
                    style: "dark",
                    links: [
                        {
                            title: "Legal",
                            items: [
                                {
                                    label: "Tutorial",
                                    to: "/docs/intro"
                                }
                            ]
                        },
                        {
                            title: "Community",
                            items: [
                                {
                                    label: "Stack Overflow",
                                    href: "https://stackoverflow.com/questions/tagged/docusaurus"
                                },
                                {
                                    label: "Discord",
                                    href: "https://discordapp.com/invite/docusaurus"
                                },
                                {
                                    label: "Twitter",
                                    href: "https://twitter.com/docusaurus"
                                }
                            ]
                        },
                        {
                            title: "More",
                            items: [
                                {
                                    label: "GitHub",
                                    href: "https://github.com/facebook/docusaurus"
                                }
                            ]
                        }
                    ],
                    copyright: `Copyright ${new Date().getFullYear()} Paul, Max and the Pektin Contributors. Built with Docusaurus.`
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme
                }
            })
    }
);
