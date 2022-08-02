 // function orderToString(order) {
  //   let orderDetailString = ''
  //   order.orderDetail.forEach(order => {
  //     orderDetailString += order.dtl_rowno + order.dtl_item_id + order.dtl_item_name + order.dtl_item_count + order.dtl_tax + order.dtl_amount + order.dtl_free1 + order.dtl_free2 + order.dtl_free3
  //   })

  //   let result = order.pay_method + order.merchant_id + order.service_id + order.cust_code + order.sps_cust_no + order.sps_payment_no + order.order_id + order.item_id + order.pay_item_id + order.item_name + order.tax + order.amount + order.pay_type + order.auto_charge_type + order.service_type + order.div_settele + order.last_charge_month + order.camp_type + order.tracking_id + order.terminal_type + order.success_url + order.cancel_url + order.error_url + order.pagecon_url + order.free1 + order.free2 + order.free3 + order.free_csv 
  //                + orderDetailString
  //                + order.request_date + order.limit_second + order.hashkey
  //   return result
  // }