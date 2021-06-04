/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.png"
        width={65}
        height={65}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p className="bio-paragraph">
          Hey, I am <strong>{author.name}</strong>{author?.summary || null}
          {` `}
          <br/>
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            Wanna catch up? Hit me up here.
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
