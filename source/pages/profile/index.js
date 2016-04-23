// Dependencies.
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// ======
// Redux.
// ======

import * as profileFormActions
  from '../../redux/actions/profile_form_actions'

// Utility methods.
import utils from '../../utils'

// Layout components.
import App from '../../layouts/app'

// Misc components.
import Clear from '../../components_misc/unsemantic/grid_clear'
import Grid from '../../components_misc/unsemantic/grid_unit'
import GridOffset from '../../components_misc/unsemantic/grid_offset'
import GridContainer from '../../components_misc/unsemantic/grid_container'

// UI components.
import BoxInfo from '../../components/box_info'
import Fieldset from '../../components/fieldset'
import FieldsetPositive from '../../components/fieldset_positive'
import Image from '../../components/image'
import ListInline from '../../components/list_inline'

// Form components.
import Button from '../../components/form_button'
import Checkbox from '../../components/form_checkbox'
import Input from '../../components/form_input'
import RadioListInline from '../../components/form_radio_list_inline'
import Select from '../../components/form_select'
import Textdiv from '../../components/form_textdiv'

// JSON.
import statesData from './states.json'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Set page title.
    utils.title(props)
  }

  // Form change.
  handleFormChange (e) {
    const form = this.refs.form
    const data = utils.parseFormData(form)

    const updateProfileFormAction =
      this.props.updateProfileFormAction.bind(this)

    const timer = setTimeout(function () {
      clearTimeout(timer)

      updateProfileFormAction({
        data: data
      })
    }, 100)
  }

  // Form submit.
  handleFormSubmit (e) {
    utils.stop(e)

    // Get the `<form>` tag.
    const form = e.target

    // Get form data.
    const data = utils.parseFormData(form)

    // Log the form data.
    utils.log(data)
  }

  // Render method.
  render () {
    // Events.
    const handleFormChange = this.handleFormChange.bind(this)
    const handleFormSubmit = this.handleFormSubmit.bind(this)

    // Redux.
    const d = this.props.profileFormReducer.data
    const g = utils.getDataByName

    // Field values.
    const input_first_name = g(d, 'input_first_name')
    const input_middle_initial = g(d, 'input_middle_initial')
    const input_last_name = g(d, 'input_last_name')
    const input_birth_date = g(d, 'input_birth_date')
    const input_ssn = g(d, 'input_ssn')
    const input_email = g(d, 'input_email')
    const input_phone = g(d, 'input_phone')
    const input_address_1 = g(d, 'input_address_1')
    const input_address_2 = g(d, 'input_address_2')
    const input_city = g(d, 'input_city')
    const input_state = g(d, 'input_state')
    const input_zip = g(d, 'input_zip')
    const input_allergies = g(d, 'input_allergies')
    const input_combat_training = g(d, 'input_combat_training')
    const input_license_to_kill = g(d, 'input_license_to_kill')
    const input_farewell = g(d, 'input_farewell')
    const input_agree_to_terms = g(d, 'input_agree_to_terms')

    // Expose UI.
    return (
      <App>

        <GridContainer>

          <Grid desktop='100' mobile='75' mobile-push='25'>

            <h1>
              User Profile

              <small>
                Jonathan W. Rogersonian
              </small>
            </h1>

            <hr />

          </Grid>

          <Grid desktop='15' tablet='15' mobile='25' mobile-pull='75'>
            <p className='t7-align-center'>
              <Image
                alt='Photo of Jonathan'
                border='#ddd'
                src='./static/images/fpo/fpo_jonathan_rogersonian.jpg'
                width='100%'
              />
              <br />
              <small>
                <a title='Edit Photo'>Edit</a>
              </small>
            </p>
          </Grid>

          <Grid
            desktop='80'
            desktop-prefix='5'

            tablet='80'
            tablet-prefix='5'

            mobile='100'
          >

            <BoxInfo>
              Please ensure that the following information is accurate. In case of a catastrophic space disaster, this is how we will notify your next of kin. Also, please note if you have any food allergies. Thanks.
            </BoxInfo>

            <form
              ref='form'
              onSubmit={handleFormSubmit}
            >

              <Fieldset legend='Personal'>

                <GridOffset>

                  <Grid desktop='45' tablet='45'>
                    <p>
                      <label htmlFor='input_first_name'>
                        First Name

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='input_first_name'
                        defaultValue={input_first_name.value}
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='10' tablet='10'>
                    <p>
                      <label htmlFor='input_middle_initial'>
                        <abbr title='Middle Initial'>
                          M.I.
                        </abbr>
                      </label>
                      <br />
                      <Input
                        id='input_middle_initial'
                        defaultValue={input_middle_initial.value}
                        maxlength='1'
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='45' tablet='45'>
                    <p>
                      <label htmlFor='input_last_name'>
                        Last Name

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='input_last_name'
                        defaultValue={input_last_name.value}
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Clear />

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='input_birth_date'>
                        Birth Date

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='input_birth_date'
                        defaultValue={input_birth_date.value}
                        placeholder='MM/DD/YYYY'
                        maxlength='10'
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='input_ssn'>
                        <abbr title='Social Security Number'>
                          SSN

                          <abbr title='Required'>*</abbr>
                        </abbr>
                      </label>
                      <br />
                      <Input
                        id='input_ssn'
                        defaultValue={input_ssn.value}
                        placeholder='000-00-0000'
                        maxlength='11'
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='input_email'>
                        Email

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='input_email'
                        defaultValue={input_email.value}
                        placeholder='name@example.com'
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='input_phone'>
                        Phone

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='input_phone'
                        defaultValue={input_phone.value}
                        placeholder='000-000-0000'
                        maxlength='12'
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                </GridOffset>

              </Fieldset>

              <Fieldset legend='Address'>

                <GridOffset>

                  <Grid desktop='100'>

                    <p>
                      Note: We are currently only accepting applicants who are citizens of the United States, have a valid US passport, and were born within Earth orbit. Moon colonials are encouraged to apply.
                    </p>

                    <hr />

                  </Grid>

                  <Grid desktop='50' tablet='50'>
                    <p>
                      <label htmlFor='input_address_1'>
                        Street Address

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='input_address_1'
                        defaultValue={input_address_1.value}
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='50' tablet='50'>
                    <p>
                      <label htmlFor='input_address_2'>
                        Address Line 2
                      </label>
                      <br />
                      <Input
                        id={input_address_2.value}
                        defaultValue='Apartment B'
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Clear />

                  <Grid desktop='40' tablet='40'>
                    <p>
                      <label htmlFor='input_city'>
                        City

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='input_city'
                        defaultValue={input_city.value}
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='40' tablet='40'>
                    <p>
                      <label htmlFor='input_state'>
                        State

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Select
                        id='input_state'
                        defaultValue={input_state.value}
                        options={statesData}
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='20' tablet='20'>
                    <p>
                      <label htmlFor='input_zip'>
                        Zip Code

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='input_zip'
                        defaultValue={input_zip.value}
                        placeholder='00000'
                        maxlength='5'
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                </GridOffset>

              </Fieldset>

              <Fieldset legend='Medical'>

                <p>
                  If you are allergic to any foods or medications, please list them here. Also make note of the last time you interacted with aliens from any planet known to have contaigions. This will not necessarily disqualify you from consideration.
                </p>

                <hr />

                <label htmlFor='input_allergies'>
                  Allergies & Contagions
                </label>
                <br />
                <Textdiv
                  id='input_allergies'
                  defaultValue={input_allergies.value}
                  handleChange={handleFormChange}
                  handleChange={handleFormChange}
                />

              </Fieldset>

              <Fieldset legend='Combat'>

                <p>
                  Do you have any specialized combat training against sentient life forms who are capable of teleportation?
                </p>

                <RadioListInline
                  handleChange={handleFormChange}
                  options={[
                    {
                      checked: input_combat_training[0].checked,
                      label: 'Yes',
                      value: 'yes',
                      name: 'input_combat_training'
                    },
                    {
                      checked: input_combat_training[1].checked,
                      label: 'No',
                      value: 'no',
                      name: 'input_combat_training'
                    }
                  ]}
                />

                <hr />

                <p>
                  Do you have a current license to kill, and/or have you been certified in the past?
                </p>

                <RadioListInline
                  handleChange={handleFormChange}
                  options={[
                    {
                      checked: input_license_to_kill[0].checked,
                      label: 'Yes',
                      value: 'yes',
                      name: 'input_license_to_kill'
                    },
                    {
                      checked: input_license_to_kill[1].checked,
                      label: 'No',
                      value: 'no',
                      name: 'input_license_to_kill'
                    }
                  ]}
                />

              </Fieldset>

              <Fieldset legend='Farewell'>

                <p>
                  In the event you are irrecoverably lost in space, you may leave special instructions with us ahead of time. These instructions will only be acted upon if you are unable to return to Earth. Otherwise, the contents of this message will not be read by anyone, including mission control.
                </p>

                <hr />

                <label htmlFor='input_farewell'>
                  Final Message
                </label>
                <br />
                <Textdiv
                  id='input_farewell'
                  defaultValue={input_farewell.value}
                  handleChange={handleFormChange}
                />

              </Fieldset>

              <FieldsetPositive legend='Terms & Conditions'>

                <p>
                  By submitting this form, you hereby grant ACME Corp. the right to conduct a background check. If you are found to be falsifying information, you will be prosecuted to the fullest extent of intergalactic law. You also acknowledge that should you be accepted to the training program, we reserve the right to eject you (into space) if you are a danger to the rest of the crew. If you are captured during any covert missions, the United States will disavow all knowledge of your official involvement, and you will be branded as a rogue agent.
                </p>

                <p>
                  <Checkbox
                    checked={input_agree_to_terms.checked}
                    id='input_agree_to_terms'
                    label='I agree to these terms.'
                    handleChange={handleFormChange}
                  />
                </p>

                <ListInline>
                  <li>
                    <Button
                      text='Update Profile Details'
                      mode='positive'
                      type='submit'
                    />
                  </li>
                  <li>
                    <Button
                      text='Cancel'
                    />
                  </li>
                </ListInline>

              </FieldsetPositive>

            </form>

          </Grid>

        </GridContainer>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {
  // Redux store.
  profileFormReducer: React.PropTypes.object,

  // Redux actions.
  updateProfileFormAction: React.PropTypes.func
}

// Map state.
function mapStateToProps (state) {
  return {
    profileFormReducer: state.profileFormReducer
  }
}

// Map dispatch.
function mapDispatchToProps (dispatch) {
  const actions =
    Object.assign(
      {},
      profileFormActions
    )

  return bindActionCreators(actions, dispatch)
}

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
