import React from 'react'
import { Global, css } from '@emotion/core'

export default () => (
  <Global
    styles={css`
      html,
      body {
        background-color: #fff;
        color: #111;
        margin: 0px;
        font-family: Arial, Trebuchet MS, Verdana;
        font-size: 14px;
      }

      a,
      a:hover {
        color: #0000ff;
        text-decoration: none;
      }

      h1 {
        font-size: 32px;
        line-height: 39px;
        font-weight: normal;
        font-family: 'Helvetica';
      }

      h2 {
        font-size: 24px;
        font-weight: normal;
        margin-top: 24px;
      }

      img {
        max-width: 100%;
      }

      ul {
        li {
          margin-bottom: 15px;
        }
      }

      ul.compact {
        li {
          margin-bottom: 0;
        }
      }
    `}
  />
)
