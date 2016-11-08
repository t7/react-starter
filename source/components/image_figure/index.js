// Dependencies.
import React from 'react'

// UI components.
import Image from '../image'

// Define class.
class ImageFigure extends React.Component {
  // Render method.
  render () {
    const alt = this.props.alt
    const border = this.props.border
    const caption = this.props.caption
    const captionTop = this.props.captionTop
    const href = this.props.href
    const src = this.props.src
    const target = this.props.target

    // Click event.
    const handleClick = this.props.handleClick

    let width = this.props.width
    let height = this.props.height

    if (!src && !width) {
      width = '1000'
    }

    if (!src && !height) {
      height = '300'
    }

    // Markup for caption.
    const figcaption = (
      <figcaption>
        {caption}
      </figcaption>
    )

    // Used in conditional.
    let figcaptionTop
    let figcaptionBottom

    // Determine caption position.
    if (captionTop) {
      figcaptionTop = figcaption
    } else {
      figcaptionBottom = figcaption
    }

    // Expose the UI.
    return (
      <figure className='t7-figure'>
        {figcaptionTop}
        <Image
          alt={alt}
          border={border}
          href={href}
          src={src}
          width={width}
          height={height}
          target={target}

          handleClick={handleClick}
        />
        {figcaptionBottom}
      </figure>
    )
  }
}

// Validation.
ImageFigure.propTypes = {
  alt: React.PropTypes.string,
  border: React.PropTypes.string,
  caption: React.PropTypes.string,
  captionTop: React.PropTypes.bool,
  handleClick: React.PropTypes.func,
  href: React.PropTypes.string,
  src: React.PropTypes.string,
  target: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
}

// Defaults.
ImageFigure.defaultProps = {
  alt: '',
  caption: 'Image Caption Here'
}

// Export.
export default ImageFigure
