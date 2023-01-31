import { useState } from "preact/hooks";

import {
  Buttons,
  Colors,
  Flex,
  Form,
  Icons,
  Manifesto,
  Margin,
  Padding,
  Shadows,
  Sizing,
  Spacing,
  Tables,
  Type,
} from "./lib/components";

const menu = [
  {
    title: "Manifesto",
    href: "#manifesto",
  },
  {
    title: "Typography",
    href: "#type",
  },
  {
    title: "Buttons",
    href: "#buttons",
  },
  {
    title: "Forms",
    href: "#form",
  },
  {
    title: "Flex controls",
    href: "#flex",
  },
  {
    title: "Sizing",
    href: "#sizing",
  },
  {
    title: "Shadows",
    href: "#shadows",
  },
  {
    title: "Colors",
    href: "#colors",
  },
  {
    title: "Spacing",
    href: "#spacing",
  },
  {
    title: "Padding",
    href: "#padding",
  },
  {
    title: "Margin",
    href: "#margin",
  },
  {
    title: "Tables",
    href: "#tables",
  },
  {
    title: "Icons",
    href: "#icons",
  },
];

export function App() {
  return (
    <>
      <div class="flex row min-width-30 vh-100 align-stretch">
        <div class="solid dark scroll grow-2 min-width-8">
          <h2 class="solid padding-horizontal-1">Features</h2>
          <ul class="list-none list-flat">
            {menu.map(({ title, href }) => (
              <li>
                <a
                  href={href}
                  class="padding-1 button solid dark hover-important block"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="solid light grow-6 padding-horizontal-3 scroll">
          <div class="max-width-25 spaced-vertical-4">
            <Manifesto />
            <Type />
            <Buttons />
            <Flex />
            <Form />
            <Sizing />
            <Shadows />
            <Colors />
            <Spacing />
            <Padding />
            <Margin />
            <Tables />
            <Icons />
          </div>
        </div>
      </div>
    </>
  );
}
