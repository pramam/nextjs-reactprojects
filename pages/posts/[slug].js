import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import {serialize} from 'next-mdx-remote/serialize'
// import hydrate from 'next-mdx-remote/hydrate'
// import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import CustomLink from '../../components/blog/CustomLink'
import Layout from '../../components/blog/Layout'
import BlogHeader from '../../components/blog/BlogHeader'
import BlogFooter from '../../components/blog/BlogFooter'
import IntroNavbarBlog from '../../components/blog/IntroNavbarBlog'

import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    a: CustomLink,
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    TestComponent: dynamic(() => import('../../components/blog/TestComponent')),
    Head,
    Accordion: dynamic(() => import('../../components/5-Accordion/Accordion')),
    AllBirthdaysWrapper: dynamic(() => import('../../components/1-Birthday/AllBirthdaysWrapper')),
    BubbleWrap: dynamic(() => import('../../components/0-Bubbles/BubbleWrap')),
    ColorGen: dynamic(() => import('../../components/12-ColorGenerator/ColorGen')),
    GithubUsers: dynamic(() => import('../../components/2-Github/GithubUsers')),
    GroceryList: dynamic(() => import('../../components/13-GroceryList/GroceryList')),
    LoremIpsum: dynamic(() => import('../../components/11-LoremIpsum/LoremIpsum')),
    Menu: dynamic(() => import('../../components/6-Menu/Menu')),
    Navbar: dynamic(() => import('../../components/14-Navbar/Navbar')),
    NavbarTailwind: dynamic(() => import('../../components/14-Navbar/15-NavbarTailwind/NavbarTailwind')),
    Pagination: dynamic(() => import('../../components/21-Pagination')),
    Reviews: dynamic(() => import('../../components/4-Reviews/Reviews')),
    SliderKeyframeWrapper: dynamic(() => import('../../components/9-Slider/SliderKeyframe/SliderKeyframeWrapper')),
    SliderWrapper: dynamic(() => import('../../components/9-Slider/SliderWrapper')),
    SidebarModal: dynamic(() => import('../../components/16-SidebarModal')),
    Stripe: dynamic(() => import('../../components/17-Stripe-Submenus')),
    Tabs: dynamic(() => import('../../components/8-Tabs/Tabs')),
    TailwindTransitionExample: dynamic(() => import('../../components/examplecode/TailwindTransitionExample')),
    TheTulipLogo: dynamic(() => import('../../components/examplecode/TheTulipLogo')),
    Tours: dynamic(() => import('../../components/3-Tours/Tours')),
    TransitionHeightExample: dynamic(() => import('../../components/examplecode/TransitionHeightExample')),
    UseReducerExample: dynamic(() => import('../../components/examplecode/UseReducerExample'))
}

export default function PostPage({ source, frontMatter }) {
    // const content = hydrate(source, { components })
    // console.log(`[slug.js]: ${frontMatter.title} ${frontMatter.intro ? `intro is true` : `false`}`)
    return (
        <Layout>
            <header>
                <nav>
                    {/* <Link href="/blog">
                        <a>👈 Go back to Blog home</a>
                    </Link> */}
                </nav>
                {frontMatter.id ?
                <BlogHeader id={frontMatter.id} />
                    : ''}
                {frontMatter.intro ?
                    <IntroNavbarBlog textColor="text-gray-900" />
                    : ''}
            </header>
            <div className="post-header">
                <h1>{frontMatter.title}</h1>
                {frontMatter.description && (
                    <p className="description">{frontMatter.description}</p>
                )}
            </div>
            <main>
                {/* {content} */}
                <MDXRemote {...source} components={components}/>
                {frontMatter.id ?
                <BlogFooter id={frontMatter.id} />
                    : ''}
            </main>

            <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }
        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
        </Layout>
    )
}

export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
        // components,
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    }
}

export const getStaticPaths = async () => {
    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}