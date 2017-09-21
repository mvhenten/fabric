import './style';

import { Component } from 'preact';


const Form = () => (
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
					<hr/>
				</select>
					<label><input name="pick" type="radio" /> option one</label>
					<label><input name="pick" type="radio" /> option two</label>
					<label><input name="pick" type="radio" /> option three</label>
					<hr />
				<label>Describe your life here</label>
				<textarea class="height-5x noresize"  placeholder="the story of my life"></textarea>
				<label><input type="checkbox" /> I'm okay with you sharing this...</label>
				<button class="solid important">submit</button>
			</div>
		</section>
	</article>
);

const Buttons = () => (
	<article id="buttons">
		<h2>Buttons</h2>
		<section class="spaced-2 padding-1 solid white">
			<button>button default</button>
			<a class="button">link styled button</a>
		</section>
		<section class="spaced-2 solid white padding-1">
			{["important", "info", "success", "warning", "danger", "dark", "light", "default"].map(color => (
				<button class={["solid", color, "margin-vertical-1"].join(" ")}>{color.charAt(0).toUpperCase() + color.substr(1)}</button>
			))}
		</section>
		<section class="spaced-2 solid white padding-1">
			{["important", "info", "success", "warning", "danger", "dark", "light", "default"].map(color => (
				<a class={["solid", color, "button", "margin-vertical-1"].join(" ")}>{color.charAt(0).toUpperCase() + color.substr(1)}</a>
			))}
		</section>
		
		<section class="spaced-2 solid white padding-1">
			{["small", "", "large", "xlarge"].map(size => (
				<a class={"solid important button " + size}>
					{size || "default"}
				</a>
			))}
		</section>
	</article>

);



const Type = () => (
	<article id="type">
		<h2>Basic type (reset)</h2>
		<section class="solid white padding-2 spaced-vertical-2 max-width-20 type">
			<h4>Headers</h4>
			<div class="padding-2 border-light">
				<div class="type-grid">
					<h1>h1 Fake News Proven Correct!</h1>
					<p>Text should have an appropriate distance from it's header, without much fussing about.</p>
					<h2>h2 Fake News Proven Correct!</h2>
					<p>Text should have an appropriate distance from it's header, without much fussing about.</p>
					<h3>h3 Fake News Proven Correct!</h3>
					<p>Text should have an appropriate distance from it's header, without much fussing about.</p>
					<h4>h4 Fake News Proven Correct!</h4>
					<p>Text should have an appropriate distance from it's header, without much fussing about.</p>
					<h5>h5 Fake News Proven Correct!</h5>
					<p>Text should have an appropriate distance from it's header, without much fussing about.</p>
					<h6>h6 Fake News Proven Correct!</h6>
					<p>Text should have an appropriate distance from it's header, without much fussing about.</p>
				</div>
			</div>
			<h4>Sizes</h4>
			<div class="border-light padding-2">
				<p class="small">
					Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.			
				</p>
				<p class="">
					Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.			
				</p>
				<p class="large">
					Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.			
				</p>
				<p class="xlarge">
					Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.			
				</p>
			</div>
			
			<h4>Common markup</h4>
			<div class="border-light padding-2">
				<h3>Typography: the art and technique of arranging type</h3>
				<p class="max-width-20">
					Typography is the art and technique of arranging type to make written language:
					<ol>
						<li>Legible</li>
						<li>readable</li> 
						<li>appealing</li>
					</ol>
					<em>when displayed.</em> 
					
					<quote>
					The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.			
					</quote>
					Typography is the art and technique of <code>arranging type</code> to make written language legible, readable, and appealing when displayed. 
					<pre>
					{`function count(times) {
	for (let i = 0; i < times; i++) {
		console.log("the count is: ", i);
	}
}`}
					</pre>
					The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.
					</p>
			</div>
		</section>
	</article>

);

const Flex = () => (
	<article id="flex">
		<h2>Flex layouts</h2>
		<p>Solving common use-cases with flex</p>
		
		<section class="solid white padding-1">
			<h4>Putting things side-by-side with <code>flex</code></h4>
			<div class="flex padding-1 solid light">
				<div class="padding-1 solid dark">The first.</div>
				<div class="padding-1 solid white">Column two.</div>
				<div class="padding-1 solid important">You know? I'm the last.</div>
			</div>
			<h4>Use <code>grow</code> to add space</h4>
			<div class="flex padding-1 solid light">
				<div class="padding-1 solid dark">The first.</div>
				<div class="padding-1 solid white grow">Column two has <code>.grow</code></div>
				<div class="padding-1 solid important">You know? I'm the last.</div>
			</div>
			<h4>Use <code>flex between</code> to justify</h4>
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

const Sizing = () => (
	<article id="sizing">
		<h2>Advanced layouts</h2>
		<p>Setting height and scrolling</p>
		<section class="solid white padding-1">
			<div class="flex padding-vertical-2 spaced-2">
				<div class="box-5 min-width-5 padding-1 solid dark">
					.box-5 and .min-width-5 to avoid flex-scaling
				</div>
				<div class="padding-1 solid light height-5 scroll">
					<p>
						{new Array(20).fill(1).map(i => <span>Just some content to force scrolling and wrapping... </span>)}
					</p>
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
					{new Array(100).fill(1).map(i => <span>Just some content to force scrolling and wrapping... </span>)}
				</section>
			</div>
		</section>
		
	</article>
);

const Shadows = () => (
	<article id="shadows">
		<h2>Shadows</h2>
		<section class="padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap">
			{[1,2,3,4,5].map( i => (
				<div class={"shadow-" + i + " box-4 min-width-5 solid important"}>
					.shadow-{i}
				</div>
			))}
		</section>
		{["right", "left", "bottom"].map(keyword =>(
			<section class="padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap">
				{[1,2,3,4,5].map( i => (
					<div class={"shadow-" + keyword + "-" + i + " box-4 min-width-5 solid important"}>
						.shadow-{keyword}-{i}
					</div>
				))}
			</section>
		))}
	</article>

);

const Colors = () => (
	<article id="colors">
		<h2>Colors</h2>
		<section class="padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap">
			{["dark", "light", "success", "danger", "warning", "important", "info", "default"].map( color => (
				<div class={"solid box-4 min-width-4 solid padding-1 " + color}>
					{color}
				</div>
			))}
		</section>
		<section class="padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap">
			{["darken", "", "lighten"].map( color => (
				<div class={"solid box-4 min-width-4 solid padding-1 info " + color}>
					{color || "default"}
				</div>
			))}
		</section>
	</article>

);


const Tables = () => (
	<article id="tables">
		<h2>Tables</h2>
		<section class="padding-2 type solid white">
			<table>
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
			<table class="stripes border default">
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


export default class App extends Component {
	componentDidMount() {
		const frag = document.location.hash;
		
		if (!frag) return;
		
		const el = document.querySelector(frag);
		if (el) el.scrollIntoView();
	}

	render(){
		const menu = [
			{
				title: "Typography",
				href: "#type"
			},
			{
				title: "Buttons",
				href: "#buttons"
			},
			{
				title: "Forms",
				href: "#form"
			},
			{
				title: "Flex controls",
				href: "#flex"
			},
			{
				title: "Sizing",
				href: "#sizing"
			},
			{
				title: "Shadows",
				href: "#shadows"
			},
			{
				title: "Font Awesome",
				href: "#icons"
			},
			{
				title: "Colors",
				href: "#colors"
			},
			{
				title: "Borders, padding, margins",
				href: "#borders"
			},
			{
				title: "Tables",
				href: "#tables"
			}
		];
		return (
			<div class="flex row min-width-20">
				<div class="solid dark vh-100 scroll" style={{"flex-basis": "200px"}}>
					<ul class="list-none list-flat padding-vertical-3">
						{menu.map(({title, href}) => (
							<li><a href={href} class="button solid dark hover-important block">{title}</a></li>					
						))}
					</ul>
				</div>
				<div class="scroll width-10 vh-100 grow scroll padding-horizontal-2 padding-bottom-6 solid light">
					<Type />
					<br/>
					<Buttons />
					<br/>
					<Form />
					<br/>
					<Flex />
					<br/>
					<Sizing />
					<br/>
					<Shadows/>
					<br />
					<Colors />
					<br/>
					<Tables />
					
				</div>
			</div>
		);
	}
}
