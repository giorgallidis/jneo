import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/content'
import Layout from "../components/layout"
import SEO from "../components/seo"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  date,
  author,
  featuredImage,
  category,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
    {helmet || ''}
    <Layout>
      <SEO title={title}/>
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
                                     <img className="thumb-image loaded" data-src={featuredImage} data-image={featuredImage} data-image-dimensions="800x533" data-image-focal-point="0.5,0.5" alt="" data-load="false" data-image-id="588cf397e4fcb5a6cdbde8cc" data-type="image" style={{left: '0%', top: '-0.0434417%', width: '100%', height: '100.087%', position: 'absolute'}} data-image-resolution="750w" src={featuredImage}/>
                                  </div>
                               </figure>
                            </div>
                         </div>
                      </div>
                      <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_48_1424560397197_11109">
                         <div className="sqs-block-content">
                          <PostContent content={content} />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </section>
      </div>
    </Layout>
    </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  helmet: PropTypes.object
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
        featuredImage={post.frontmatter.featuredImage}
        category={post.frontmatter.category}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        featuredImage
        category
      }
    }
  }
`
