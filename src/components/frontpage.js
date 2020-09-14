import React from 'react';
import Image from './image'

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    value={props.label}
  >
    {props.symbol}
  </span>
)

const Frontpage = () => (
<>
<div id="pageWrapper" className="hfeed" role="main">
   <section id="page" className="pageStyle">
      <div className="main-content" data-content-field="main-content" id="yui_3_17_2_1_1589866307794_84">
         <div className="sqs-layout sqs-grid-12 columns-12" data-type="page" data-updated-on="1586275064292" id="page-57aa7b818419c2428e60db4e">
            <div className="row sqs-row" id="yui_3_17_2_1_1589866307794_83">
               <div className="col sqs-col-12 span-12" id="yui_3_17_2_1_1589866307794_82">
                  <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type="5" id="block-20a277c6d124b8cc3f76">
                     <div className="sqs-block-content" id="yui_3_17_2_1_1589866307794_81">
                        <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-none individual-animation-none individual-text-animation-none" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1589866307794_80">
                           <figure className="sqs-block-image-figure intrinsic" style={{maxWidth:'670px', margin: '0'}} id="yui_3_17_2_1_1589866307794_79">
                              <div style={{overflow: 'hidden'}} className="image-block-wrapper has-aspect-ratio" data-animation-role="image" id="yui_3_17_2_1_1589866307794_78">
                                <Image className="thumb-image loaded" style={{left: '0%', top: '-0.0434417%', width: '100%', height: '100.087%', position: 'absolute'}}/>
                              </div>
                           </figure>
                        </div>
                     </div>
                  </div>
                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_48_1424560397197_11109">
                     <div className="sqs-block-content">
                        <pre><code><Emoji label="rocket" symbol="🚀" /> I'm a founder/partner in companies that apply material engineering, data science, biology and design thinking to build things that have the potential to make life better for humans. Check out some my current and upcoming <a href="/projects">projects</a>. </code></pre>
                        <pre><code><Emoji label="backpack" symbol="🎨" /> I like to apply those same principles to create art that inspire a better future. Check out my <a href="/exhibitions">exhibitions</a>. </code></pre>
                        <pre><code><Emoji label="moneybag" symbol="🔬" />  I also enjoy doing research on human performance, longevity and disease prevention. You can read short blurps about that on my <a href="https://www.twitter.com/thejurgen">Twitter</a> or in my longer form <a href="/essays">essays</a>. You can also sign up for my <a href="https://jurgen.substack.com">Newsletter</a> to stay up to date when I post something new. </code></pre>
                        <pre><code><Emoji label="one hundred" symbol="📕" />  I've been lucky to have collaborated with some amazing minds in their respective industries on a few <a href="/publications">Publications</a>. </code></pre>
                        <pre><code><Emoji label="handwriting" symbol="🎗️" />  I support <a href="/causes">causes</a> that support environmental, humanitarian and animal interests among other things. </code></pre>
                        <pre><code><Emoji label="statue of liberty" symbol="📥" />  Give me a shout if you are interested in working with me on a project: 103 101 111 114 103 97 108 108 64 112 109 46 109 101 </code></pre>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>
</>
)

export default Frontpage
