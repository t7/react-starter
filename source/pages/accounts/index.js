// Dependencies.
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, GridContainer, GridOffset } from 'unsemantic'

// ======
// Redux.
// ======

import * as accountsTabsActions
  from '../../redux/actions/accounts_tabs_actions'

import * as checkingTableActions
  from '../../redux/actions/checking_table_actions'

import * as faqAccordionActions
  from '../../redux/actions/faq_accordion_actions'

import * as savingsTableActions
  from '../../redux/actions/savings_table_actions'

// Layout components.
import App from '../../layouts/app'

// Utility methods.
import utils from '../../utils'

// UI components.
import AccordionMulti from '../../components/accordion_multi'
import AccordionPanel from '../../components/accordion/template_panel'
import Button from '../../components/form_button'
import DataTable from '../../components/data_table'
import Dropdown from '../../components/dropdown'
import Image from '../../components/image'
import ImageFigure from '../../components/image_figure'
import ListSeparator from '../../components/list_separator'
import Tabs from '../../components/tabs'
import TabPanel from '../../components/tabs/template_panel'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Set page title.
    utils.title(props)
  }

  // Click: faq accordion.
  handleClickFaqAccordion (e, index, label, selected) {
    this.props.updateFaqAccordionAction({
      selected: selected
    })
  }

  // Click: accounts tabs.
  handleClickAccountsTabs (e, index, label) {
    this.props.updateAccountsTabsAction({
      selected: index
    })
  }

  // Sort: checking table.
  handleSortCheckingTable (e, sortIndex, sortDirection) {
    this.props.updateCheckingTableAction({
      sortIndex: sortIndex,
      sortDirection: sortDirection
    })
  }

  // Pagination: checking table.
  handlePaginationCheckingTable (e, pageCurrent) {
    this.props.updateCheckingTableAction({
      pageCurrent: pageCurrent
    })
  }

  // Sort: savings table.
  handleSortSavingsTable (e, sortIndex, sortDirection) {
    this.props.updateSavingsTableAction({
      sortIndex: sortIndex,
      sortDirection: sortDirection
    })
  }

  // Pagination: savings table.
  handlePaginationSavingsTable (e, pageCurrent) {
    this.props.updateSavingsTableAction({
      pageCurrent: pageCurrent
    })
  }

  // Render method.
  render () {
    // ======
    // Props.
    // ======

    // Accordion.

    const selectedFaqAccordion =
      this.props.faqAccordionReducer.selected

    // Tabs.

    const selectedAccountsTabs =
      this.props.accountsTabsReducer.selected

    // Checking table.

    const columnsCheckingTable =
      this.props.checkingTableReducer.columns

    const dataCheckingTable =
      this.props.checkingTableReducer.data

    const pageCurrentCheckingTable =
      this.props.checkingTableReducer.pageCurrent

    const sortIndexCheckingTable =
      this.props.checkingTableReducer.sortIndex

    const sortDirectionCheckingTable =
      this.props.checkingTableReducer.sortDirection

    const pageSizeCheckingTable =
      this.props.checkingTableReducer.pageSize

    // Savings table.

    const columnsSavingsTable =
      this.props.savingsTableReducer.columns

    const dataSavingsTable =
      this.props.savingsTableReducer.data

    const pageCurrentSavingsTable =
      this.props.savingsTableReducer.pageCurrent

    const sortIndexSavingsTable =
      this.props.savingsTableReducer.sortIndex

    const sortDirectionSavingsTable =
      this.props.savingsTableReducer.sortDirection

    const pageSizeSavingsTable =
      this.props.savingsTableReducer.pageSize

    // =======
    // Events.
    // =======

    const handleClickFaqAccordion =
      this.handleClickFaqAccordion.bind(this)

    const handleClickAccountsTabs =
      this.handleClickAccountsTabs.bind(this)

    const handleSortCheckingTable =
      this.handleSortCheckingTable.bind(this)

    const handlePaginationCheckingTable =
      this.handlePaginationCheckingTable.bind(this)

    const handleSortSavingsTable =
      this.handleSortSavingsTable.bind(this)

    const handlePaginationSavingsTable =
      this.handlePaginationSavingsTable.bind(this)

    // Expose UI.
    return (
      <App>

        <GridContainer>

          <Grid desktop='100'>

            <h1
              className='
                t7-tablet-float-left
                t7-desktop-float-left
              '
            >
              Bank Accounts

              <small>
                Jonathan W. Rogersonian
              </small>
            </h1>

            <div
              className='
                t7-tablet-float-right
                t7-desktop-float-right
              '
            >
              <ListSeparator>
                <li>
                  <a>Edit Accounts</a>
                </li>
                <li>
                  <a>Add Account</a>
                </li>
              </ListSeparator>
            </div>

            <hr />

          </Grid>

          <Grid desktop='75' tablet='75'>

            <Tabs
              selected={selectedAccountsTabs}
              handleClick={handleClickAccountsTabs}
            >

              <TabPanel label='Checking'>

                <h2 className='t7-float-left'>
                  Checking
                </h2>

                <div
                  className='
                    t7-float-right
                    t7-gutter-bottom
                  '
                >
                  <Dropdown
                    text='Options'
                    menuAlign='right'
                    items={[
                      {
                        text: 'Schedule Payment'
                      },
                      {
                        text: 'Transfer Funds'
                      },
                      {
                        text: 'Spending Trends'
                      }
                    ]}
                  />
                </div>

                <hr />

                <p className='t7-mute'>
                  Account #: TK-421
                </p>

                <DataTable
                  columns={columnsCheckingTable}
                  data={dataCheckingTable}
                  pageSize={pageSizeCheckingTable}

                  pageCurrent={pageCurrentCheckingTable}
                  sortIndex={sortIndexCheckingTable}
                  sortDirection={sortDirectionCheckingTable}

                  handleSort={handleSortCheckingTable}
                  handlePagination={handlePaginationCheckingTable}
                />

              </TabPanel>

              <TabPanel label='Savings'>

                <h2 className='t7-float-left'>
                  Savings
                </h2>

                <div
                  className='
                    t7-float-right
                    t7-gutter-bottom
                  '
                >
                  <Dropdown
                    text='Options'
                    menuAlign='right'
                    items={[
                      {
                        text: 'Investment Advice'
                      },
                      {
                        text: 'Retirement Planning'
                      }
                    ]}
                  />
                </div>

                <hr />

                <p className='t7-mute'>
                  Account #: 867-5309
                </p>

                <DataTable
                  columns={columnsSavingsTable}
                  data={dataSavingsTable}
                  pageSize={pageSizeSavingsTable}

                  pageCurrent={pageCurrentSavingsTable}
                  sortIndex={sortIndexSavingsTable}
                  sortDirection={sortDirectionSavingsTable}

                  handleSort={handleSortSavingsTable}
                  handlePagination={handlePaginationSavingsTable}
                />

              </TabPanel>

            </Tabs>

            <h6>
              <abbr title='Frequently Asked Questions'>
                FAQ
              </abbr>
            </h6>

            <AccordionMulti
              selected={selectedFaqAccordion}
              handleClick={handleClickFaqAccordion}
            >
              <AccordionPanel label='Is it worth refinancing my home?'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </AccordionPanel>
              <AccordionPanel label='How much should I budget for tuition?'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </AccordionPanel>
              <AccordionPanel label='When should I begin saving for retirement?'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </AccordionPanel>
            </AccordionMulti>

          </Grid>

          <Grid desktop='25' tablet='25'>

            <h6>
              Growth Opportunity
            </h6>

            <ImageFigure
              alt='Man looking across a lake at Matterhorn'
              caption='High Yield Potential'
              src='./static/images/fpo/fpo_matterhorn.jpg'
              width='100%'
              height='50%'
            />

            <GridOffset>

              <Grid desktop='33' tablet='33' mobile='33'>
                <p>
                  <Image
                    alt='A dock at sunset'
                    src='./static/images/fpo/fpo_dock.jpg'
                    width='100%'
                    height='100%'
                  />
                </p>
              </Grid>

              <Grid desktop='33' tablet='33' mobile='33'>
                <p>
                  <Image
                    alt='Phone taking a photo of the ocean'
                    src='./static/images/fpo/fpo_phone_ocean.jpg'
                    width='100%'
                    height='100%'
                  />
                </p>
              </Grid>

              <Grid desktop='33' tablet='33' mobile='33'>
                <p>
                  <Image
                    alt='Phone booth in the UK'
                    src='./static/images/fpo/fpo_phone_booth.jpg'
                    width='100%'
                    height='100%'
                  />
                </p>
              </Grid>

            </GridOffset>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              <Button mode='positive' text='Learn More' href='#profile' />
            </p>

          </Grid>

        </GridContainer>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {
  // Redux store.
  accountsTabsReducer: React.PropTypes.object,
  checkingTableReducer: React.PropTypes.object,
  faqAccordionReducer: React.PropTypes.object,
  savingsTableReducer: React.PropTypes.object,

  // Redux actions.
  updateAccountsTabsAction: React.PropTypes.func,
  updateCheckingTableAction: React.PropTypes.func,
  updateFaqAccordionAction: React.PropTypes.func,
  updateSavingsTableAction: React.PropTypes.func
}

// Map state.
function mapStateToProps (state) {
  return {
    accountsTabsReducer: state.accountsTabsReducer,
    checkingTableReducer: state.checkingTableReducer,
    faqAccordionReducer: state.faqAccordionReducer,
    savingsTableReducer: state.savingsTableReducer
  }
}

// Map dispatch.
function mapDispatchToProps (dispatch) {
  const actions =
    Object.assign(
      {},
      accountsTabsActions,
      checkingTableActions,
      faqAccordionActions,
      savingsTableActions
    )

  return bindActionCreators(actions, dispatch)
}

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
