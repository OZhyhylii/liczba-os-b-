import React from 'react'

import styled from "styled-components";

const FooterBlock = styled.div `
  width: 100%;
  margin: 0 auto;

  background-color: #292C36;
  height: 15vh;
  align-items: center;
  display: flex;
`
const Block = styled.div `
  width: 1140px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
`
const ContactUsEmail = styled.div `
  color: #A7A7A7;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: bold;
`

const LinkIcons = styled.div `
  display: flex;
  justify-content: space-between;
  width: 240px;
 height: 40px;
`
const Item = styled.div `
margin: 0;
  padding: 0;
`
const AppFooter = () => {


    return (
        <FooterBlock>
            <Block>
                <ContactUsEmail>
                    Contact us: alexandra.zhigiliy@gmail.com@gmail.com
                </ContactUsEmail>
                <LinkIcons>
                    <Item>
                        <a href="https://www.google.com.ua/?hl=ru">
                            <svg enableBackground="new 0 0 24 24" height="40" viewBox="0 0 24 24" width="40"
                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <linearGradient id="SVGID_1_" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)"
                                                gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705"
                                                y2="-84.047">
                                    <stop offset="0" stopColor="#fd5"/>
                                    <stop offset=".5" stopColor="#ff543e"/>
                                    <stop offset="1" stopColor="#c837ab"/>
                                </linearGradient>
                                <path
                                    d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z"
                                    fill="url(#SVGID_1_)"/>
                                <path
                                    d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
                                    fill="#fff"/>
                            </svg>
                        </a>
                    </Item>

                    <Item>
                        <a href="https://www.google.com.ua/?hl=ru">
                            <svg enableBackground="new 0 0 24 24" height="40" viewBox="0 0 24 24" width="40"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g fill="#5c6bc0">
                                    <path
                                        d="m3.58 21.196h14.259l-.681-2.205c.101.088 5.842 5.009 5.842 5.009v-21.525c-.068-1.338-1.22-2.475-2.648-2.475l-16.767.003c-1.427 0-2.585 1.139-2.585 2.477v16.24c0 1.411 1.156 2.476 2.58 2.476zm10.548-15.513-.033.012.012-.012zm-7.631 1.269c1.833-1.334 3.532-1.27 3.532-1.27l.137.135c-2.243.535-3.26 1.537-3.26 1.537.104-.022 4.633-2.635 10.121.066 0 0-1.019-.937-3.124-1.537l.186-.183c.291.001 1.831.055 3.479 1.26 0 0 1.844 3.15 1.844 7.02-.061-.074-1.144 1.666-3.931 1.726 0 0-.472-.534-.808-1 1.63-.468 2.24-1.404 2.24-1.404-3.173 1.998-5.954 1.686-9.281.336-.031 0-.045-.014-.061-.03v-.006c-.016-.015-.03-.03-.061-.03h-.06c-.204-.134-.34-.2-.34-.2s.609.936 2.174 1.404c-.411.469-.818 1.002-.818 1.002-2.786-.066-3.802-1.806-3.802-1.806 0-3.876 1.833-7.02 1.833-7.02z"/>
                                    <path
                                        d="m14.308 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.576-1.335-1.29-1.335v.003c-.708 0-1.288.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z"/>
                                    <path
                                        d="m9.69 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.575-1.335-1.286-1.335l-.004.003c-.711 0-1.29.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z"/>
                                </g>
                            </svg>
                        </a>'
                    </Item>

                    <Item>
                        <a href="https://www.google.com.ua/?hl=ru">
                            <svg enableBackground="new 0 0 24 24" height="40" viewBox="0 0 24 24" width="40"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" fill="#039be5" r="12"/>
                                <path
                                    d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
                                    fill="#fff"/>
                            </svg>
                        </a>
                    </Item>

                    <Item>
                        <a href="https://www.google.com.ua/?hl=ru">
                            <svg
                                enableBackground="new 0 0 24 24"
                                height="40"
                                viewBox="0 0 24 24"
                                width="40"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="m0 11.111c0 3.496 1.744 6.615 4.471 8.652v4.237l4.086-2.242c1.09.301 2.245.465 3.442.465 6.627 0 12-4.974 12-11.111.001-6.137-5.372-11.112-11.999-11.112s-12 4.974-12 11.111zm10.734-3.112 3.13 3.259 5.887-3.259-6.56 6.962-3.055-3.258-5.963 3.259z"
                                      fill="#2196f3"
                                />
                            </svg>
                        </a>
                    </Item>
                </LinkIcons>
            </Block>
        </FooterBlock>
    )

}

export default AppFooter
