module.exports = function () {
  var data = {}
  data.promotions = {
    "status": true,
    "data": [
      {
        "name": "Black Friday Promotion",
        "start_date": "2016-12-06",
        "end_date": "2016-12-06",
        "items": [
          {
            "sku": "L2001",
            "sale_price": 137,
            "price": 1337,
            "name": "BIAS AMP Eltie"
          }
        ],
        "_id": "507f1f77bcf86cd799439011"
      }
    ]    
  }
  // data.promotions = {
  //   "promotion":{
  //     "onLive":"",
  //     "active":"",
  //     "order":[
  //      "0"
  //     ],    
  //     "queue":{
  //       "0":{
  //         "promotionId":"0",
  //         "name":"Black Friday Promotion",
  //         "startDate":"2018/12/03",
  //         "endDate":"2018/12/06"
  //       }                     
  //     }
  //   },
  //   "priceSet":{
  //     "active":"",
  //     "items":{
  //       "0":[
  //         {
  //           "promotionId":"0",
  //           "sku":"L1101",
  //           "name":"BIAS AMP Elite",
  //           "salePrice":99,
  //           "price":199             
  //         }        
  //       ]
  //     }
  //   } 
  // };
  data.price = {
      "status": true,
      "data": [
        {
          "sku": "L1101",
          "name": "Name of L1101",
          "sale_price": 149,
          "price": 299
        },
        {
          "sku": "L1102",
          "name": "Name of L1102",
          "sale_price": 99,
          "price": 199
        },
        {
          "sku": "L1103",
          "name": "Name of L1103",
          "sale_price": 49,
          "price": 99
        },
        {
          "sku": "B1011",
          "name": "Name of B1011",
          "sale_price": 349,
          "price": 699
        }      
      ]
  }
  data["upgrade-rules"] = {
    "status": true,
    "data":{"license":[],"rule":{"B1011":{"bundle":["L2001","L3001","L2011","L2012","L2013","L3002","L3003","L4001","L4002","L1101"],"predecessor":[],"prerequisite":[],"software":["biasfx","pedal","mastering","masteringeq","amp2"],"successor":[],"upgrade":{"L1101":61,"L2001":61,"L2011":24,"L2012":24,"L2013":24,"L3001":30,"L3002":30,"L3003":30,"L4001":30,"L4002":30}},"B1012":{"bundle":["L2001","L3001","L2011","L2012","L2013","L3002","L3003","L1102"],"predecessor":[],"prerequisite":[],"software":["biasfx","pedal","amp2"],"successor":[],"upgrade":{"L1102":58,"L2001":58,"L2011":23,"L2012":23,"L2013":23,"L3001":29,"L3002":29,"L3003":29}},"B1013":{"bundle":["L2001","L2011","L2012","L2013","L1102"],"predecessor":[],"prerequisite":[],"software":["biasfx","amp2"],"successor":[],"upgrade":{"L1102":62,"L2001":62,"L2011":24,"L2012":24,"L2013":24}},"B2001":{"bundle":["L1001","L2001"],"predecessor":[],"prerequisite":[],"software":["bias","biasfx"],"successor":[],"upgrade":{"L1002":110,"L2002":110}},"B2002":{"bundle":["L3001","L3002","L3003"],"predecessor":[],"prerequisite":[],"software":["pedal"],"successor":[],"upgrade":{"L3001":75,"L3002":75,"L3003":75}},"B2003":{"bundle":["L2011","L2012","L2013"],"predecessor":[],"prerequisite":["L2002","L2001","L2003"],"prerequisite_logic":"or","software":["biasfx"],"successor":[],"upgrade":{"L2011":36,"L2012":36,"L2013":36}},"B2004":{"bundle":["L2002","L1103"],"predecessor":[],"prerequisite":[],"software":["biasfx","amp2"],"successor":[],"upgrade":{"L1103":74,"L2002":74}},"B2005":{"bundle":["L2001","L2011","L2012","L2013"],"predecessor":[],"prerequisite":[],"software":["biasfx"],"successor":[],"upgrade":{"L2001":159,"L2011":63,"L2012":63,"L2013":63}},"B2011":{"bundle":["L2001","L1102"],"predecessor":[],"prerequisite":[],"software":["biasfx","amp2"],"successor":[],"upgrade":{"L1102":149,"L2001":149}},"B3001":{"bundle":["C1011","C1012","C1013","C1014","C1015"],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"B3002":{"bundle":["C1016","C1017","C1018","C1019","C1020"],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"B3003":{"bundle":["C1021","C1022","C1023","C1024","C1025"],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"B3004":{"bundle":["C1006","C1007","C1008","C1009","C1010"],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"B3005":{"bundle":["C1001","C1002","C1003","C1004","C1005"],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1001":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1002":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1003":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1004":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1005":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1006":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1007":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1008":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1009":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1010":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1011":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1012":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1013":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1014":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1015":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1016":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1017":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1018":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1019":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1020":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1021":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1022":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1023":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1024":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"C1025":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["celestionir"],"successor":[],"upgrade":{}},"L1001":{"bundle":[],"predecessor":["L1004","L1003","L1002"],"prerequisite":[],"software":["bias"],"successor":[],"upgrade":{"L1002":59}},"L1002":{"bundle":[],"predecessor":["L1004","L1003"],"prerequisite":[],"software":["bias"],"successor":["L1001"],"upgrade":{}},"L1003":{"bundle":[],"predecessor":["L1004"],"prerequisite":[],"software":["bias"],"successor":["L1002","L1001"],"upgrade":{}},"L1004":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["bias"],"successor":["L1003","L1002","L1001"],"upgrade":{}},"L1101":{"bundle":[],"predecessor":["L1104","L1103","L1102"],"prerequisite":[],"software":["amp2"],"successor":[],"upgrade":{"L1001":0,"L1002":-100,"L1102":99,"L1103":49,"L1104":0,"L2001":-130,"L2002":-130,"L3001":-130,"L3002":-130,"L3003":-130}},"L1102":{"bundle":[],"predecessor":["L1104","L1103"],"prerequisite":[],"software":["amp2"],"successor":["L1101"],"upgrade":{"L1001":0,"L1002":-50,"L1103":49,"L1104":0,"L2001":-80,"L2002":-80,"L3001":-80,"L3002":-80,"L3003":-80}},"L1103":{"bundle":[],"predecessor":["L1104"],"prerequisite":[],"software":["amp2"],"successor":["L1102","L1101"],"upgrade":{"L1002":0,"L1104":0,"L2001":-30,"L2002":-30,"L3001":-30,"L3002":-30,"L3003":-30}},"L1104":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["amp2"],"successor":["L1103","L1102","L1101"],"upgrade":{}},"L1111":{"bundle":[],"predecessor":[],"prerequisite":["L2001","L2002","L1103","L1102","L1101"],"prerequisite_logic":"or","software":["celestion-modern-vintage"],"successor":[],"upgrade":{"L1101":0,"L1102":0,"L1103":0,"L2001":-30,"L2002":-40}},"L1112":{"bundle":[],"predecessor":[],"prerequisite":[],"prerequisite_logic":"or","software":["fx2-celestion-ir-preorder"],"successor":[],"upgrade":{}},"L2001":{"bundle":[],"predecessor":["L2004","L2003","L2002"],"prerequisite":[],"software":["biasfx"],"successor":[],"upgrade":{"L2002":49,"L2003":20}},"L2002":{"bundle":[],"predecessor":["L2004","L2003"],"prerequisite":[],"software":["biasfx"],"successor":["L2001"],"upgrade":{"L2003":20}},"L2003":{"bundle":[],"predecessor":["L2004"],"prerequisite":[],"software":["biasfx"],"successor":["L2002","L2001"],"upgrade":{}},"L2004":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["biasfx"],"successor":["L2003","L2002","L2001"],"upgrade":{}},"L2011":{"bundle":[],"predecessor":[],"prerequisite":["L2001","L2002"],"prerequisite_logic":"or","software":["biasfx"],"successor":[],"upgrade":{}},"L2012":{"bundle":[],"predecessor":[],"prerequisite":["L2001","L2002"],"prerequisite_logic":"or","software":["biasfx"],"successor":[],"upgrade":{}},"L2013":{"bundle":[],"predecessor":[],"prerequisite":["L2001","L2002"],"prerequisite_logic":"or","software":["biasfx"],"successor":[],"upgrade":{}},"L2101":{"bundle":[],"predecessor":["L2104","L2103","L2102"],"prerequisite":[],"software":["fx2"],"successor":[],"upgrade":{}},"L2102":{"bundle":[],"predecessor":["L2104","L2103"],"prerequisite":[],"software":["fx2"],"successor":["L2101"],"upgrade":{}},"L2103":{"bundle":[],"predecessor":["L2104"],"prerequisite":[],"software":["fx2"],"successor":["L2102","L2101"],"upgrade":{}},"L2104":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["fx2"],"successor":["L2103","L2102","L2101"],"upgrade":{}},"L3001":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["pedal"],"successor":[],"upgrade":{}},"L3002":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["pedal"],"successor":[],"upgrade":{}},"L3003":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["pedal"],"successor":[],"upgrade":{}},"L4001":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["mastering"],"successor":[],"upgrade":{}},"L4002":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["masteringeq"],"successor":[],"upgrade":{}},"M0001":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["com.positivegrid.biasfx.EssentialLicense"],"successor":[],"upgrade":{}},"M0002":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["com.positivegrid.biasfx.LIVE.EffectPowerhouse"],"successor":[],"upgrade":{}},"M0003":{"bundle":[],"predecessor":[],"prerequisite":[],"software":["com.positivegrid.biasfx.LIVE.FuzzFactory"],"successor":[],"upgrade":{}}}}    
  }
  return data;
}
