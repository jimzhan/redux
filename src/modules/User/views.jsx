import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Table } from 'antd'
import { findUsers } from './actions'

class User extends React.Component {
  static mapStateToProps = state => ({
    data: state.data,
  })

  static mapDispatchToProps = {
    findUsers,
  }

  componentDidMount() {
    /* eslint-disable-next-line */
    this.props.findUsers()
  }

  /* eslint-disable */
  renderTable(dataSource) {
    console.log(dataSource)
    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }]
    console.error(dataSource)

    return (
      <Table dataSource={dataSource} columns={columns} />
    )
  }

  render() {
    /* eslint-disable-next-line */
    const { data } = this.props
    return (
      <div>
        {data
          ? this.renderTable(data)
          : 'Loading ...'}
      </div>
    )
  }
}

export default connect(
  User.mapStateToProps,
  User.mapDispatchToProps,
)(User)
