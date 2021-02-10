import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSalesRecords } from '../redux/actions/sales/salesActions'

const SalesRecordsPage = (props) => {

    const [salesRecords, setSalesRecords] = useState({})
    const { sales, getSalesRecords } = props

    console.log(props)

    useEffect(() => {
        getSalesRecords()
    }, [getSalesRecords])

    useEffect(() => {
        setSalesRecords(sales)
    }, [sales])

    useEffect(() => {
        console.log(salesRecords)
    })

    const goToDashboard = () => {
        props.history.push('/dashboard')
      }

    return (
        <div>
            {
            salesRecords.length > 0 ? <div>
                {
                    salesRecords.map(saleRecord => {
                    return (
                        <div key={saleRecord['sale id']}>
                        {saleRecord.product_name}
                        {saleRecord.quantity}
                        </div>
                    )
                    })
                }
        </div> :
        <div>Man pole</div>
      }
      <button 
      style={{ margin: '20px auto 0 auto', display: 'inherit' }} 
      className='login-btn' onClick={goToDashboard}>Back</button>
        </div>
    )
}

SalesRecordsPage.propTypes = {
    getSalesRecords: PropTypes.func.isRequired,
    sales: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    sales: state.salesRecords
})

export default connect(mapStateToProps, { getSalesRecords })(SalesRecordsPage);