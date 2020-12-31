import React, {Component} from 'react'

import styled from "styled-components";

const FooterBlock = styled.div `
    background-color: #328666;
    height: 241px;
    width: 100%;
    position: absolute;
    bottom: 0;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0 250px;
`

const ContactUsEmail = styled.div `
  color: #000000;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: bold;
`

const LinkIcons = styled.div `
  display: flex;
  justify-content: space-between;
  width: 200px;

`

export default class AppFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkIcons: [
                {
                    src: '<svg id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"/></svg>',
                    href: "#",
                    altText: 'discord',
                    id: "ffsdfsfsdh"
                },
                {
                    src: 'images/telegram.png',
                    href: "#",
                    altText: 'telegram',
                    id: "ff;l'sdfsdh"
                },
                {
                    src: 'images/instagram.png',
                    href: "#",
                    altText: 'instagram',
                    id: "ffsdkhjfsdh"
                },
                {
                    src: 'images/viber.png',
                    href: "#",
                    altText: 'viber',
                    id: "fdhdgfhdfgh"
                }
            ]
        }
    }

    isEmpty = (obj) => {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    render() {
        const {linkIcons} = this.state
        const elements = linkIcons.map( (item) => {
            if ( typeof item === 'object' && this.isEmpty(item) ){
                const {id, src, alt, href} = item;
                return (
                        <a key={id} href={href}>
                            <img src={src} alt={alt}/>
                        </a>
                )
            }
        })

        return (
            <FooterBlock>
                <ContactUsEmail>
                    Contact us: alexandra.zhigiliy@gmail.com@gmail.com
                </ContactUsEmail>
                <LinkIcons>
                    {elements}
                </LinkIcons>
            </FooterBlock>
        )
    }
}

