import { shape } from "prop-types"

import CodeBlock from "./codeBlock"

import { ReactMarkdowStyled } from "./styles"

const MarkdownWrapper = ({ post }) => (
  <ReactMarkdowStyled source={post.markdownBody} renderers={{ code: CodeBlock }} />
)

MarkdownWrapper.propTypes = {
  post: shape(),
}

export default MarkdownWrapper
