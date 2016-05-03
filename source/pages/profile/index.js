// Dependencies.
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isArray } from 'lodash'
import { Grid, GridClear, GridContainer, GridOffset } from 'unsemantic'

// ======
// Redux.
// ======

import * as profileFormActions
  from '../../redux/actions/profile_form_actions'

// Utility methods.
import utils from '../../utils'

// Layout components.
import App from '../../layouts/app'

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
      this.props.updateProfileFormAction

    const timer = setTimeout(function () {
      clearTimeout(timer)

      updateProfileFormAction({
        data: data
      })
    }, 16)
  }

  // Form submit.
  handleFormSubmit (e, fileName) {
    utils.stop(e)

    // Get the `<form>` tag.
    const form = this.refs.form

    // Get form data.
    const data = utils.parseFormData(form)

    // Log the form data.
    utils.log(data)

    // Save JSON file?
    const saveToFile =
      fileName && typeof fileName === 'string'

    if (saveToFile) {
      fileName = fileName.replace(/\.json/gi, '')
      fileName += '.json'

      utils.save(data, fileName)
    }
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
    const inputFirstName = g(d, 'inputFirstName')
    const inputMiddleInitial = g(d, 'inputMiddleInitial')
    const inputLastName = g(d, 'inputLastName')
    const inputBirthDate = g(d, 'inputBirthDate')
    const inputSsn = g(d, 'inputSsn')
    const inputEmail = g(d, 'inputEmail')
    const inputPhone = g(d, 'inputPhone')
    const inputAddress1 = g(d, 'inputAddress1')
    const inputAddress2 = g(d, 'inputAddress2')
    const inputCity = g(d, 'inputCity')
    const inputState = g(d, 'inputState')
    const inputZip = g(d, 'inputZip')
    const inputAllergies = g(d, 'inputAllergies')
    const inputFarewell = g(d, 'inputFarewell')
    const inputAgreeToTerms = g(d, 'inputAgreeToTerms')

    // ================================
    // "Combat training" radio buttons.
    // ================================

    const inputCombatTraining = g(d, 'inputCombatTraining')

    const validInputCombatTraining =
      isArray(inputCombatTraining) &&
      inputCombatTraining.length === 2

    const inputCombatTraining0 =
      validInputCombatTraining
      ? inputCombatTraining[0].checked
      : false

    const inputCombatTraining1 =
      validInputCombatTraining
      ? inputCombatTraining[1].checked
      : false

    // ================================
    // "License to kill" radio buttons.
    // ================================

    const inputLicenseToKill = g(d, 'inputLicenseToKill')

    const validInputLicenseToKill =
      isArray(inputLicenseToKill) &&
      inputLicenseToKill.length === 2

    const inputLicenseToKill0 =
      validInputLicenseToKill
      ? inputLicenseToKill[0].checked
      : false

    const inputLicenseToKill1 =
      validInputLicenseToKill
      ? inputLicenseToKill[1].checked
      : false

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
                      <label htmlFor='inputFirstName'>
                        First Name

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='inputFirstName'
                        defaultValue={inputFirstName.value}
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='10' tablet='10'>
                    <p>
                      <label htmlFor='inputMiddleInitial'>
                        <abbr title='Middle Initial'>
                          M.I.
                        </abbr>
                      </label>
                      <br />
                      <Input
                        id='inputMiddleInitial'
                        defaultValue={inputMiddleInitial.value}
                        maxlength='1'
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='45' tablet='45'>
                    <p>
                      <label htmlFor='inputLastName'>
                        Last Name

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='inputLastName'
                        defaultValue={inputLastName.value}
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <GridClear />

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='inputBirthDate'>
                        Birth Date

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='inputBirthDate'
                        defaultValue={inputBirthDate.value}
                        placeholder='MM/DD/YYYY'
                        maxlength='10'
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='inputSsn'>
                        <abbr title='Social Security Number'>
                          SSN

                          <abbr title='Required'>*</abbr>
                        </abbr>
                      </label>
                      <br />
                      <Input
                        id='inputSsn'
                        defaultValue={inputSsn.value}
                        placeholder='000-00-0000'
                        maxlength='11'
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='inputEmail'>
                        Email

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='inputEmail'
                        defaultValue={inputEmail.value}
                        placeholder='name@example.com'
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='inputPhone'>
                        Phone

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='inputPhone'
                        defaultValue={inputPhone.value}
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
                      <label htmlFor='inputAddress1'>
                        Street Address

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='inputAddress1'
                        defaultValue={inputAddress1.value}
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='50' tablet='50'>
                    <p>
                      <label htmlFor='inputAddress2'>
                        Address Line 2
                      </label>
                      <br />
                      <Input
                        id='inputAddress2'
                        defaultValue={inputAddress2.value}
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <GridClear />

                  <Grid desktop='40' tablet='40'>
                    <p>
                      <label htmlFor='inputCity'>
                        City

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='inputCity'
                        defaultValue={inputCity.value}
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='40' tablet='40'>
                    <p>
                      <label htmlFor='inputState'>
                        State

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Select
                        id='inputState'
                        defaultValue={inputState.value}
                        options={statesData}
                        handleChange={handleFormChange}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='20' tablet='20'>
                    <p>
                      <label htmlFor='inputZip'>
                        Zip Code

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='inputZip'
                        defaultValue={inputZip.value}
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

                <label htmlFor='inputAllergies'>
                  Allergies & Contagions
                </label>
                <br />
                <Textdiv
                  id='inputAllergies'
                  defaultValue={inputAllergies.value}
                  handleChange={handleFormChange}
                />

              </Fieldset>

              <Fieldset legend='Combat'>

                <p>
                  Do you have any specialized combat training against sentient life forms who are capable of teleportation?
                </p>

                <RadioListInline
                  handleChange={handleFormChange}
                  options={
                    [
                      {
                        checked: inputCombatTraining0,
                        label: 'Yes',
                        value: 'yes',
                        name: 'inputCombatTraining'
                      },
                      {
                        checked: inputCombatTraining1,
                        label: 'No',
                        value: 'no',
                        name: 'inputCombatTraining'
                      }
                    ]
                  }
                />

                <hr />

                <p>
                  Do you have a current license to kill, and/or have you been certified in the past?
                </p>

                <RadioListInline
                  handleChange={handleFormChange}
                  options={
                    [
                      {
                        checked: inputLicenseToKill0,
                        label: 'Yes',
                        value: 'yes',
                        name: 'inputLicenseToKill'
                      },
                      {
                        checked: inputLicenseToKill1,
                        label: 'No',
                        value: 'no',
                        name: 'inputLicenseToKill'
                      }
                    ]
                  }
                />

              </Fieldset>

              <Fieldset legend='Farewell'>

                <p>
                  In the event you are irrecoverably lost in space, you may leave special instructions with us ahead of time. These instructions will only be acted upon if you are unable to return to Earth. Otherwise, the contents of this message will not be read by anyone, including mission control.
                </p>

                <hr />

                <label htmlFor='inputFarewell'>
                  Final Message
                </label>
                <br />
                <Textdiv
                  id='inputFarewell'
                  defaultValue={inputFarewell.value}
                  handleChange={handleFormChange}
                />

              </Fieldset>

              <FieldsetPositive legend='Terms & Conditions'>

                <p>
                  By submitting this form, you hereby grant ACME Corp. the right to conduct a background check. If you are found to be falsifying information, you will be prosecuted to the fullest extent of intergalactic law. You also acknowledge that should you be accepted to the training program, we reserve the right to eject you (into space) if you are a danger to the rest of the crew. If you are captured during any covert missions, the United States will disavow all knowledge of your official involvement, and you will be branded as a rogue agent.
                </p>

                <p>
                  <Checkbox
                    checked={inputAgreeToTerms.checked}
                    id='inputAgreeToTerms'
                    label='I agree to these terms.'
                    handleChange={handleFormChange}
                  />
                </p>

                <ListInline>
                  <li>
                    <Button
                      text='Submit Form'
                      mode='positive'
                      type='submit'
                    />
                  </li>
                  <li>
                    <Button
                      text='Save JSON'
                      handleClick={function (e) {
                        // Save *.json file.
                        handleFormSubmit(e, 'form_data.json')
                      }}
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
