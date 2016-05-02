// Dependencies.
import React from 'react'
import { Grid, GridClear, GridContainer } from 'unsemantic'

// Define class.
class AppFooter extends React.Component {
  // Render method.
  render () {
    const year = new Date().getFullYear()

    // Expose UI.
    return (
      <footer
        className='t7-app__footer'
        role='contentinfo'
      >

        <GridContainer>

          <Grid
            desktop='25'
            tablet='25'
            mobile='50'
          >
            <dl>
              <dt>
                Company
              </dt>
              <dd>
                <a>About Us</a>
              </dd>
              <dd>
                <a>Careers</a>
              </dd>
              <dd>
                <a>Contact Us</a>
              </dd>
              <dd>
                <a>Our Locations</a>
              </dd>
            </dl>
          </Grid>

          <Grid
            desktop='25'
            tablet='25'
            mobile='50'
          >
            <dl>
              <dt>
                Industries
              </dt>
              <dd>
                <a>Aerospace</a>
              </dd>
              <dd>
                <a>Automotive</a>
              </dd>
              <dd>
                <a>Interplanetary Travel</a>
              </dd>
              <dd>
                <a>Teleportation Devices</a>
              </dd>
            </dl>
          </Grid>

          <GridClear
            desktop-hide // true
            tablet-hide // true
          />

          <Grid
            desktop='25'
            tablet='25'
            mobile='50'
          >
            <dl>
              <dt>
                Community
              </dt>
              <dd>
                <a>Annual BBQ</a>
              </dd>
              <dd>
                <a>Charitable Giving</a>
              </dd>
              <dd>
                <a>Leadership Mentoring</a>
              </dd>
              <dd>
                <a>Learn to Code</a>
              </dd>
            </dl>
          </Grid>

          <Grid
            desktop='25'
            tablet='25'
            mobile='50'
          >
            <dl>
              <dt>
                Legal
              </dt>
              <dd>
                <a>Cookie Policy</a>
              </dd>
              <dd>
                <a>Patent Info</a>
              </dd>
              <dd>
                <a>Terms & Conditions</a>
              </dd>
              <dd>
                &copy; {year} ACME Corp.
              </dd>
            </dl>
          </Grid>

        </GridContainer>

      </footer>
    )
  }
}

// Export.
export default AppFooter
