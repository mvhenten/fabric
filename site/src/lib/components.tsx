export const manifest = [
  ["Prototype", "Build good looking interfaces, create a strong baseline"],
  [
    "Flexible",
    "Colors can be added and changed. Values can be increased to offer more paddings, spacings if needed.",
  ],
  [
    "Intuitive",
    "Classnames express the intent of styling. Naming derives from CSS properties and builds on them.",
  ],
  [
    "Composable",
    "Where possible, compose. a solid important box is both a semantic and meaningful composition",
  ],
  [
    "Minimal",
    "No additional markup. Cure divitis. Build from semantic markup.",
  ],
  [
    "Modern",
    "Use flex for layouts. Maintain vertical rythm. Paddings, margins and sizes scale with text-size.",
  ],
  [
    "Responsible TODO",
    "Do not impose responsiveness. Offer tooling for responsive layouts without enforcing a paradigm.",
  ],
];

export const Manifesto = () => (
  <article id="manifesto" class="margin-top-3">
    <h2>Manifesto</h2>
    <WhiteBox>
      {manifest.map(([title, text]) => (
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      ))}
    </WhiteBox>
  </article>
);

export const Form = () => (
  <article id="form">
    <h2>Form</h2>
    <h3>Simple horizontal form</h3>
    <section class="solid white padding-1">
      <div class="spaced-2 flex row">
        <label>enter some input here</label>
        <input name="tex" type="text" class="grow" placeholder="input here" />
        <select>
          <option>Take one...</option>
          <option>Take two...</option>
          <option>Take three...</option>
        </select>
        <button class="important solid">submit</button>
      </div>
    </section>
    <h3>Vertical form</h3>
    <section class="solid white padding-1">
      <div class="spaced-vertical-1 flex col">
        <p>Forms should follow the text flow.</p>
        <label for="tex">Enter some input here</label>
        <input id="tex" type="text" class="grow" placeholder="input here" />
        <select>
          <option>Take one...</option>
          <option>Take two...</option>
          <option>Take three...</option>
          <hr />
        </select>
        <label>
          <input name="pick" type="radio" /> option one
        </label>
        <label>
          <input name="pick" type="radio" /> option two
        </label>
        <label>
          <input name="pick" type="radio" /> option three
        </label>
        <hr />
        <label>Describe your life here</label>
        <textarea
          class="height-5x noresize"
          placeholder="the story of my life"
        ></textarea>
        <label>
          <input type="checkbox" /> I'm okay with you sharing this...
        </label>
        <button class="solid important">submit</button>
      </div>
    </section>
  </article>
);

export const Buttons = () => (
  <article id="buttons">
    <h2>Buttons</h2>
    <section class="spaced-2 padding-1 solid white">
      <button>button default</button>
      <a class="button">link styled button</a>
    </section>
    <section class="spaced-2 solid white padding-1">
      {[
        "important",
        "info",
        "success",
        "warning",
        "danger",
        "dark",
        "light",
        "default",
      ].map((color) => (
        <button class={["solid", color, "margin-vertical-1"].join(" ")}>
          {color.charAt(0).toUpperCase() + color.substr(1)}
        </button>
      ))}
    </section>
    <section class="spaced-2 solid white padding-1">
      {[
        "important",
        "info",
        "success",
        "warning",
        "danger",
        "dark",
        "light",
        "default",
      ].map((color) => (
        <a class={["solid", color, "button", "margin-vertical-1"].join(" ")}>
          {color.charAt(0).toUpperCase() + color.substr(1)}
        </a>
      ))}
    </section>

    <section class="spaced-2 solid white padding-1">
      {["small", "", "large", "xlarge"].map((size) => (
        <a class={"solid important button " + size}>{size || "default"}</a>
      ))}
    </section>
  </article>
);

const filler =
  "Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.";

export const Type = () => (
  <article id="type">
    <h2>Basic type (reset)</h2>
    <section class="solid white padding-2 spaced-vertical-2 type">
      <h4>Headers</h4>
      <div class="padding-2 border-light">
        <div class="type-grid">
          <h1>About typography (h1)</h1>
          <p>{filler}</p>
          <h2>About typography (h2)</h2>
          <p>{filler}</p>
          <h3>About typography (h3)</h3>
          <p>{filler}</p>
          <h4>About typography (h4)</h4>
          <p>{filler}</p>
          <h5>About typography (h5)</h5>
          <p>{filler}</p>
          <h6>About typography (h6)</h6>
          <p>{filler}</p>
        </div>
      </div>
      <h4>Sizes</h4>
      <div class="border-light padding-2">
        <p class="small">
          Typography is the art and technique of arranging type to make written
          language legible, readable, and appealing when displayed. The
          arrangement of type involves selecting typefaces, point sizes, line
          lengths, line-spacing, and letter-spacing, and adjusting the space
          between pairs of letters.
        </p>
        <p class="">
          Typography is the art and technique of arranging type to make written
          language legible, readable, and appealing when displayed. The
          arrangement of type involves selecting typefaces, point sizes, line
          lengths, line-spacing, and letter-spacing, and adjusting the space
          between pairs of letters.
        </p>
        <p class="large">
          Typography is the art and technique of arranging type to make written
          language legible, readable, and appealing when displayed. The
          arrangement of type involves selecting typefaces, point sizes, line
          lengths, line-spacing, and letter-spacing, and adjusting the space
          between pairs of letters.
        </p>
        <p class="xlarge">
          Typography is the art and technique of arranging type to make written
          language legible, readable, and appealing when displayed. The
          arrangement of type involves selecting typefaces, point sizes, line
          lengths, line-spacing, and letter-spacing, and adjusting the space
          between pairs of letters.
        </p>
      </div>

      <h4>Common markup</h4>
      <div class="border-light padding-2">
        <h3>Typography: the art and technique of arranging type</h3>
        <p class="max-width-20">
          Typography is the art and technique of arranging type to make written
          language:
          <ol>
            <li>Legible</li>
            <li>readable</li>
            <li>appealing</li>
          </ol>
          <em>when displayed.</em>
          <quote>
            The arrangement of type involves selecting typefaces, point sizes,
            line lengths, line-spacing, and letter-spacing, and adjusting the
            space between pairs of letters.
          </quote>
          Typography is the art and technique of <code>arranging type</code> to
          make written language legible, readable, and appealing when displayed.
          <pre>
            {`function count(times) {
	for (let i = 0; i < times; i++) {
		console.log("the count is: ", i);
	}
}`}
          </pre>
          The arrangement of type involves selecting typefaces, point sizes,
          line lengths, line-spacing, and letter-spacing, and adjusting the
          space between pairs of letters.
        </p>
      </div>
    </section>
  </article>
);

export const Flex = () => (
  <article id="flex">
    <h2>Flex layouts</h2>
    <p>Solving common use-cases with flex</p>

    <section class="solid white padding-1">
      <h4>
        Putting things side-by-side with <code>flex</code>
      </h4>
      <div class="flex padding-1 solid light">
        <div class="padding-1 solid dark">The first.</div>
        <div class="padding-1 solid white">Column two.</div>
        <div class="padding-1 solid important">You know? I'm the last.</div>
      </div>
      <h4>
        Use <code>grow</code> to add space
      </h4>
      <div class="flex padding-1 solid light">
        <div class="padding-1 solid dark">The first.</div>
        <div class="padding-1 solid white grow">
          Column two has <code>.grow</code>
        </div>
        <div class="padding-1 solid important">You know? I'm the last.</div>
      </div>
      <h4>
        Use <code>flex between</code> to justify
      </h4>
      <div class="flex between padding-1 solid light">
        <div class="padding-1 solid dark">The first.</div>
        <div class="padding-1 solid white">Column two.</div>
        <div class="padding-1 solid important">You know? I'm the last.</div>
      </div>
      <h4>Use flex, around to space around</h4>
      <div class="flex around padding-1 solid light">
        <div class="padding-1 solid dark">The first.</div>
        <div class="padding-1 solid white">Column two.</div>
        <div class="padding-1 solid important">You know? I'm the last.</div>
      </div>
      <h4>Use flex, end to stack on the right</h4>
      <div class="flex end padding-1 solid light">
        <div class="padding-1 solid dark">The first.</div>
        <div class="padding-1 solid white">Column two.</div>
        <div class="padding-1 solid important">You know? I'm the last.</div>
      </div>
      <h4>Use column and between to space vertically</h4>
      <div class="vh-30 flex col between padding-1 solid light">
        <div class="padding-1 solid dark">I am at the top</div>
        <div>someting in the center</div>
        <div class="padding-1 solid important">I am at the bottom</div>
      </div>
    </section>
  </article>
);

export const Sizing = () => (
  <article id="sizing">
    <h2>Advanced layouts</h2>
    <p>Setting height and scrolling</p>
    <section class="solid white padding-1">
      <div class="flex padding-vertical-2 spaced-2">
        <div class="box-5 min-width-5 padding-1 solid dark">
          .box-5 and .min-width-5 to avoid flex-scaling
        </div>
        <div class="padding-1 solid light height-5 scroll">
          {new Array(20).fill(1).map((i) => (
            <p>{filler}</p>
          ))}
        </div>
      </div>
    </section>
    <section class="solid white padding-1 noscroll">
      <div class="relative">
        <div class="flex center middle absolute cover fade solid black">
          <section class="solid white padding-2 box-7 flex col between shadow-3">
            <p>Use absolute and relative to create a dialog style popup</p>
            <div class="flex evenly">
              <button class="solid success">Confirm</button>
              <button class="solid info">Dismiss</button>
            </div>
          </section>
        </div>
        <section class="vh-40 scroll">
          <h1>About typography</h1>
          {new Array(20).fill(1).map((i) => (
            <p>{filler}</p>
          ))}
        </section>
      </div>
    </section>
  </article>
);

export const Shadows = () => (
  <article id="shadows">
    <h2>Shadows</h2>
    <section class="padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap">
      {[1, 2, 3, 4, 5].map((i) => (
        <div class={"shadow-" + i + " box-4 min-width-5 solid important"}>
          .shadow-{i}
        </div>
      ))}
    </section>
    {["right", "left", "bottom"].map((keyword) => (
      <section class="padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            class={
              "shadow-" +
              keyword +
              "-" +
              i +
              " box-4 min-width-5 solid important"
            }
          >
            .shadow-{keyword}-{i}
          </div>
        ))}
      </section>
    ))}
  </article>
);

export const Colors = () => (
  <article id="colors">
    <h2>Colors</h2>
    <section class="padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap">
      {[
        "dark",
        "light",
        "success",
        "danger",
        "warning",
        "important",
        "info",
        "default",
      ].map((color) => (
        <div class={"solid box-4 min-width-4 solid padding-1 " + color}>
          {color}
        </div>
      ))}
    </section>
    <section class="padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap">
      {["darken", "", "lighten"].map((color) => (
        <div class={"solid box-4 min-width-4 solid padding-1 info " + color}>
          {color || "default"}
        </div>
      ))}
    </section>
  </article>
);

export const Tables = () => (
  <article id="tables">
    <h2>Tables</h2>
    <section class="padding-2 type solid white">
      <p>
        Tables receive default styling. Add <code>.stripes</code> for a striped
        table. Add <code>.border</code> a border around your table.
      </p>
    </section>
    <section class="padding-2 type solid white flex between spaced-5">
      {["", "default stripes", "default stripes border"].map((className) => (
        <table class={className}>
          <tr>
            <th>Player</th>
            <th>Hightscore</th>
          </tr>
          <tr>
            <td>player 1</td>
            <td>1000020</td>
          </tr>
          <tr>
            <td>mvhenten</td>
            <td>39283</td>
          </tr>
        </table>
      ))}
    </section>
    <section class="padding-2 type solid white flex between spaced-5">
      {["info", "info stripes", "info stripes border"].map((className) => (
        <table class={className}>
          <tr>
            <th>Player</th>
            <th>Hightscore</th>
          </tr>
          <tr>
            <td>player 1</td>
            <td>1000020</td>
          </tr>
          <tr>
            <td>mvhenten</td>
            <td>39283</td>
          </tr>
        </table>
      ))}
    </section>

    <section class="padding-2 type solid white">
      <table class="spread lighten info stripes">
        <tr>
          <th>Player</th>
          <th>Hightscore</th>
        </tr>
        <tr>
          <td>player 1</td>
          <td>1000020</td>
        </tr>
        <tr>
          <td>mvhenten</td>
          <td>39283</td>
        </tr>
      </table>
    </section>
    <section class="padding-2 type solid white">
      <table class="spread lighten info stripes border">
        <tr>
          <th>Player</th>
          <th>Hightscore</th>
        </tr>
        <tr>
          <td>player 1</td>
          <td>1000020</td>
        </tr>
        <tr>
          <td>mvhenten</td>
          <td>39283</td>
        </tr>
        <tr>
          <td>T-Rex</td>
          <td>5645</td>
        </tr>
      </table>
    </section>
  </article>
);

export const Icons = () => (
  <article id="icons">
    <h2>Icons</h2>
    <section class="padding-2 type solid white flex col spaced-3 spaced-vertical-1 wrap">
      <p>
        FontAwesome is supported without modification. Use font-awesome classed
        directly on elements
      </p>

      <h4>Buttons</h4>
      <button>
        <i class="fa fa-camera-retro" /> showcasing font-awesome support
      </button>
      <a class="solid button info icon fa-camera-retro">like this</a>

      <h4>Links</h4>
      <a href="#type" class="icon fa-camera-retro">
        like this
      </a>

      <h4>Form elements</h4>

      <p>
        Wrap form elements in an <code>.icon</code> class to prepend them with
        an icon.
      </p>
      <div class="icon fa-camera-retro grow info text-info">
        <input class="icon fa-camera-retro" placeholder="input with icon" />
      </div>
    </section>
  </article>
);

export const WhiteBox = ({ children }) => (
  <section class="padding-2 type solid white flex col">{children}</section>
);

export const Spacing = () => (
  <article id="spacing">
    <h2>Spacing</h2>
    <WhiteBox>
      <p>
        All elements on this page have been spaced using <em>spaced-</em>{" "}
        classes. There are 20 spaced classes, horizontal and vertical.
      </p>
      <br />
      <p>
        Vertical spacing is as units of line-height. Each step is half a
        grid-line. use <code>.spaced-vertical-2</code> to achieve an even,
        vertical spacing.
      </p>
      <div class="spaced-vertical-2">
        <div class="solid info padding-1">a white box</div>
        <div class="solid info padding-1">a white box</div>
        <div class="solid info padding-1">a white box</div>
      </div>
      <p>
        Horizontal spacing is defined by character spacing. Each step is one
        character width. use <code>.spaced-2</code> to space <em>inline</em>{" "}
        elements by two characters.
      </p>

      <div class="spaced-2">
        <button class="solid info">cancel action</button>
        <button class="solid danger">proceed action</button>
        <button class="solid warning">maybe action</button>
      </div>
    </WhiteBox>
  </article>
);

export const Padding = () => (
  <article id="padding">
    <h2>Padding</h2>
    <WhiteBox>
      <p>
        Apply padding as needed. Padding is defined as unit times line-height
      </p>
      <div class="flex between spaced-2">
        <div class="box-7 solid important padding-1">
          <code class="solid info">padding-1</code>
        </div>
        <div class="box-7 solid important padding-2">
          <code class="solid info">padding-2</code>
        </div>
        <div class="box-7 solid important padding-4">
          <code class="solid info">padding-2</code>
        </div>
      </div>
      <br />
      <p>
        Padding can be applied as <code>.padding-horizontal-</code> or{" "}
        <code>.padding-vertical-</code>
      </p>
      <div class="flex between spaced-2">
        <div class="box-7 solid important padding-horizontal-1">
          <code class="solid info">padding-horizontal-1</code>
        </div>
        <div class="box-7 solid important padding-vertical-2">
          <code class="solid info">padding-vertical-2</code>
        </div>
        <div class="box-7 solid important padding-horizontal-3 padding-vertical-5">
          <code class="solid info">padding-horizontal-3</code>
          <br />
          <code class="solid info">padding-vertical-5</code>
        </div>
      </div>
    </WhiteBox>
  </article>
);

export const Margin = () => (
  <article id="padding">
    <h2>Margin</h2>
    <WhiteBox>
      <p>Apply margin as needed. Margin is defined as unit times line-height</p>
      <div class="flex between spaced-2">
        <div class="box-7 solid important margin-1">
          <code class="solid info">margin-1</code>
        </div>
        <div class="box-7 solid important margin-2">
          <code class="solid info">margin-2</code>
        </div>
        <div class="box-7 solid important margin-4">
          <code class="solid info">margin-2</code>
        </div>
      </div>
      <br />
      <p>
        margin can be applied as <code>.margin-horizontal-</code> or{" "}
        <code>.margin-vertical-</code>
      </p>
      <div class="flex between spaced-2">
        <div class="box-7 solid important margin-horizontal-1">
          <code class="solid info">margin-horizontal-1</code>
        </div>
        <div class="box-7 solid important margin-vertical-2">
          <code class="solid info">margin-vertical-2</code>
        </div>
        <div class="box-7 solid important margin-horizontal-3 margin-vertical-5">
          <code class="solid info">margin-horizontal-3</code>
          <br />
          <code class="solid info">margin-vertical-5</code>
        </div>
      </div>
    </WhiteBox>
  </article>
);
