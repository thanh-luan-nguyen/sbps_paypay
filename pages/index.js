import styles from '../styles/Home.module.css'
import Base64 from '../lib/Base64'
import { SBConvertToUTF8, SbHash } from '../lib/CryptoJS'
import { useEffect, useState } from 'react'

export default function Home() {
  const [order, setOrder] = useState({
    pay_method        : 'paypay',
    merchant_id       : '30132',
    service_id        : '001',
    cust_code         : 'Merchant_TestUser_999999',
    sps_cust_no       : '',
    sps_payment_no    : '',
    order_id          : 'f2dc1b298b9a1a019862edbc1ba9f8eb',
    item_id           : 'T_0003',
    pay_item_id       : '',
    item_name         : 'テスト商品',
    tax               : '',
    amount            : '1',
    pay_type          : '0',
    auto_charge_type  : '',
    service_type      : '0',
    div_settele       : '',
    last_charge_month : '',
    camp_type         : '',
    tracking_id       : '',
    terminal_type     : '0',
    success_url       : 'http://stbfep.sps-system.com/MerchantPaySuccess.jsp',
    cancel_url        : 'http://stbfep.sps-system.com/MerchantPayCancel.jsp',
    error_url         : 'http://stbfep.sps-system.com/MerchantPayError.jsp',
    pagecon_url       : 'http://stbfep.sps-system.com/MerchantPayResultRecieveSuccess.jsp',
    free1             : '',
    free2             : '',
    free3             : '',
    free_csv          : Base64.encode('LAST_NAME=鈴木,FIRST_NAME=太郎,LAST_NAME_KANA=スズキ,FIRST_NAME_KANA=タロウ,FIRST_ZIP=210,SECOND_ZIP=0001,ADD1=岐阜県,ADD2=あああ市あああ町,ADD3=,TEL=12345679801,MAIL=aaaa@bb.jp,ITEM_NAME=TEST ITEM', 1),
    request_date      : '20220802162500',
    limit_second      : '',
    hashkey           : 'c48e0e2c7d04f0954594f14c7801bd430ca6263e',
    // sps_hashcode      : '',
    orderDetail       : '',
    dtl_rowno         : '1',
    dtl_item_id       : 'dtlItem_1',
    dtl_item_name     : '明細商品名1',
    dtl_item_count    : '1',
    dtl_tax           : '1',
    dtl_amount        : '1',
    dtl_free1         : '',
    dtl_free2         : '',
    dtl_free3         : ''
  })

  const [sps_hashcode, setSpsHashcode] = useState('')
  
  const initializeSpsHashCode = () => {
    let utfData = []
    let keys = Object.keys(order)
    for (let key of keys) {
      utfData.push(order[key])
    }
    const toUtf8 = SBConvertToUTF8(utfData)
    const hashData = SbHash(toUtf8)
    
    setSpsHashcode(hashData)
  }

  useEffect(() => {
    initializeSpsHashCode()
  }, [order])

  const updateForm = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    })
    initializeSpsHashCode(e)
  }

  // order.free_csv = Base64.encode(order.free_csv, 1)
  // order.sps_hashcode = sha1(orderToString(order))
  
  return (
    <div className={styles.container}>
      {/* form  */}
      <form
        method='POST'
        // target='receiver'
        acceptCharset="Shift_JIS"
        action='https://stbfep.sps-system.com/f01/FepBuyInfoReceive.do'
      >
        <div><label>pay_method</label><input type='text' name='pay_method' defaultValue={order.pay_method}  onChange={updateForm}/></div>
        <div><label>merchant_id</label><input type='text' name='merchant_id' defaultValue={order.merchant_id}  onChange={updateForm}/></div>
        <div><label>service_id</label><input type='text' name='service_id' defaultValue={order.service_id}  onChange={updateForm}/></div>
        <div><label>cust_code</label><input type='text' name='cust_code' defaultValue={order.cust_code}  onChange={updateForm}/></div>
        <div><label>sps_cust_no</label><input type='text' name='sps_cust_no' defaultValue={order.sps_cust_no}  onChange={updateForm}/></div>
        <div><label>sps_payment_no</label><input type='text' name='sps_payment_no' defaultValue={order.sps_payment_no}  onChange={updateForm}/></div>
        <div><label>order_id</label><input type='text' name='order_id' defaultValue={order.order_id}  onChange={updateForm}/></div>
        <div><label>item_id</label><input type='text' name='item_id' defaultValue={order.item_id}  onChange={updateForm}/></div>
        <div><label>pay_item_id</label><input type='text' name='pay_item_id' defaultValue={order.pay_item_id}  onChange={updateForm}/></div>
        <div><label>item_name</label><input type='text' name='item_name' defaultValue={order.item_name}  onChange={updateForm}/></div>
        <div><label>tax</label><input type='text' name='tax' defaultValue={order.tax}  onChange={updateForm}/></div>
        <div><label>amount</label><input type='text' name='amount' defaultValue={order.amount}  onChange={updateForm}/></div>
        <div><label>pay_type</label><input type='text' name='pay_type' defaultValue={order.pay_type}  onChange={updateForm}/></div>
        <div><label>auto_charge_type</label><input type='text' name='auto_charge_type' defaultValue={order.auto_charge_type}  onChange={updateForm}/></div>
        <div><label>service_type</label><input type='text' name='service_type' defaultValue={order.service_type}  onChange={updateForm}/></div>
        <div><label>div_settele</label><input type='text' name='div_settele' defaultValue={order.div_settele}  onChange={updateForm}/></div>
        <div><label>last_charge_month</label><input type='text' name='last_charge_month' defaultValue={order.last_charge_month}  onChange={updateForm}/></div>
        <div><label>camp_type</label><input type='text' name='camp_type' defaultValue={order.camp_type}  onChange={updateForm}/></div>
        <div><label>tracking_id</label><input type='text' name='tracking_id' defaultValue={order.tracking_id}  onChange={updateForm}/></div>
        <div><label>terminal_type</label><input type='text' name='terminal_type' defaultValue={order.terminal_type}  onChange={updateForm}/></div>
        <div><label>success_url</label><input type='text' name='success_url' defaultValue={order.success_url}  onChange={updateForm}/></div>
        <div><label>cancel_url</label><input type='text' name='cancel_url' defaultValue={order.cancel_url}  onChange={updateForm}/></div>
        <div><label>error_url</label><input type='text' name='error_url' defaultValue={order.error_url}  onChange={updateForm}/></div>
        <div><label>pagecon_url</label><input type='text' name='pagecon_url' defaultValue={order.pagecon_url}  onChange={updateForm}/></div>
        <div><label>free1</label><input type='text' name='free1' defaultValue={order.free1}  onChange={updateForm}/></div>
        <div><label>free2</label><input type='text' name='free2' defaultValue={order.free2}  onChange={updateForm}/></div>
        <div><label>free3</label><input type='text' name='free3' defaultValue={order.free3}  onChange={updateForm}/></div>
        <div><label>free_csv</label><input type='text' name='free_csv' value={order.free_csv}/></div>
        <div><label>request_date</label><input type='text' name='request_date' defaultValue={order.request_date}  onChange={updateForm}/></div>
        <div><label>limit_second</label><input type='text' name='limit_second' defaultValue={order.limit_second}  onChange={updateForm}/></div>
        <div><label>hashkey</label><input type='text' name='hashkey' defaultValue={order.hashkey}  onChange={updateForm}/></div>
        <div><label>sps_hashcode</label><input type='text' name='sps_hashcode' value={sps_hashcode}/></div>
        
        <h2>Order details</h2>
        <h4>item 1</h4>
          
        <div><label>dtl_rowno</label><input type='text' name='dtl_rowno' defaultValue={order.dtl_rowno}  onChange={updateForm}/></div>
        <div><label>dtl_item_id</label><input type='text' name='dtl_item_id' defaultValue={order.dtl_item_id}  onChange={updateForm}/></div>
        <div><label>dtl_item_name</label><input type='text' name='dtl_item_name' defaultValue={order.dtl_item_name}  onChange={updateForm}/></div>
        <div><label>dtl_item_count</label><input type='text' name='dtl_item_count' defaultValue={order.dtl_item_count}  onChange={updateForm}/></div>
        <div><label>dtl_tax</label><input type='text' name='dtl_tax' defaultValue={order.dtl_tax}  onChange={updateForm}/></div>
        <div><label>dtl_amount</label><input type='text' name='dtl_amount' defaultValue={order.dtl_amount}  onChange={updateForm}/></div>
        <div><label>dtl_free1</label><input type='text' name='dtl_free1' defaultValue={order.dtl_free1}  onChange={updateForm}/></div>
        <div><label>dtl_free2</label><input type='text' name='dtl_free2' defaultValue={order.dtl_free2}  onChange={updateForm}/></div>
        <div><label>dtl_free3</label><input type='text' name='dtl_free3' defaultValue={order.dtl_free3}  onChange={updateForm}/></div>
         
        <div><label></label><input type='submit' defaultValue='submit' /></div>
      </form>
    </div>
  )
}
