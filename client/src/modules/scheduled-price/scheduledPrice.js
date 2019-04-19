import { arrayMove } from 'react-sortable-hoc';
import scheduledPriceAPI from '../../api/pg/scheduledPrice';
import { getPromotionAPIHelper, updatePromotionAPIHelper } from './helper';
/*
* define action name
*/
export const LOAD_PROMOTION = "promotion/LOAD_PROMOTION";
export const SORT_PROMOTION = "promotion/SORT_PROMOTION";

/*
* define async action name
*/
export const GET_PROMOTION_SUCCESS = "promotion/GET_PROMOTION_SUCCESS";
export const GET_PROMOTION_FAIL = "promotion/GET_PROMOTION_FAIL";

export const POST_PROMOTION_REQ = "promotion/POST_PROMOTION_REQ";
export const POST_PROMOTION_SUCCESS = "promotion/POST_PROMOTION_SUCCESS";
export const POST_PROMOTION_FAIL = "promotion/POST_PROMOTION_FAIL";

export const REMOVE_PROMOTION = "promotion/REMOVE_PROMOTION";
export const EDIT_PROMOTION = "promotion/EDIT_PROMOTION";

export const ADD_PROMOTION_IN_QUEUE = "promotion/ADD_PROMOTION_IN_QUEUE";
export const APPLY_PROMOTION_ONLIVE = "promotion/APPLY_PROMOTION_ONLIVE";


/*
* state init (scheduledPrice in redux)
*/
const initialState = {
  isLoading: true,
  errMsg: false,
  postLoading: true,
  removedPromoId:"",
  postResponse: "",
  priceSet: {
    active: "",
    items: {}
  },
  promotion: {
    active: "",
    onLive: "",
    order: [],
    queue: {} 
  }
}

/*
* reducer
*/
export default (state = initialState, action) => {
  switch(action.type){
    case GET_PROMOTION_SUCCESS:
      return {
        ...state,
        removedPromoId:"",
        isLoading: false,
        errMsg: "",
        promotion: action.promotion, 
        priceSet: action.priceSet
      }
    case GET_PROMOTION_FAIL:
      return {
        ...state,
        removedPromoId:"",
        isLoading: false,
        errMsg: "Error",
        promotion:{
          ...state.promotion,
        }, 
        priceSet: {
          ...state.priceSet,
        }
      }    
    case LOAD_PROMOTION:
      return {
        ...state,
        removedPromoId:"",
        promotion:{
          ...state.promotion,        
          active: action.promotionId
        },
        priceSet:{
          ...state.priceSet,
          active: action.promotionId
        }
      }
    case SORT_PROMOTION:
      return {
        ...state,
        promotion:{
          ...state.promotion,
          order: arrayMove(state.promotion.order, action.oldIndex, action.newIndex)
        }
      }
    case REMOVE_PROMOTION:
      const prevOrder = state.promotion.order;

      const itemIndex = prevOrder.indexOf(action.promotionId);
      let nextOrder = prevOrder;
      if (itemIndex > -1){
        nextOrder.splice(itemIndex, 1)
      }

      delete state.promotion.queue[action.promotionId];
      delete state.priceSet.items[action.promotionId];

      return {
        ...state,
        isLoading:true,
        removedPromoId: action.promotionId,
        promotion:{
          ...state.promotion,
          active: state.promotion.active === action.promotionId ? '' : state.promotion.active,
          order: nextOrder,
          queue: state.promotion.queue,          
        },
        priceSet:{
          ...state.priceSet,
          active: state.promotion.active === action.promotionId ? '' : state.promotion.active,
          items: state.priceSet.items          
        }        
      }     
    case POST_PROMOTION_REQ:
      return {
        ...state,
        isLoading: true,   
      } 
    case POST_PROMOTION_SUCCESS:
      return {
        ...state,
        removedPromoId:'',
        isLoading: false,
        postResponse: action.postResponse,        
      } 
    case POST_PROMOTION_FAIL:
      return {
        ...state,
        isLoading: false,
        postResponse: action.postResponse, 
      }
    case EDIT_PROMOTION:
      return {
        ...state,
        isLoading:true,
        removedPromoId:"",
        promotion:{
          ...state.promotion,
          order: action.order,
          queue: action.queue,          
        },
        priceSet:{
          ...state.priceSet,
          items: action.items          
        }
      }
    case ADD_PROMOTION_IN_QUEUE:
      return {
        ...state,
        isLoading:true,
        removedPromoId:"",
        promotion:{
          ...state.promotion,
          order: action.order,
          queue: action.queue,
        },
        priceSet:{
          ...state.priceSet,
          items: action.items
        }
      } 
    case APPLY_PROMOTION_ONLIVE:
      return {
        ...state,
        isLoading:true,
        removedPromoId:"",
        promotion:{
          ...state.promotion,
          order: action.order,
          queue: action.queue,          
          onLive: action.stashPromotionId
        },
        priceSet:{
          ...state.priceSet,
          items: action.items
        }        
      }                
    default:
      return state;      
  }
}

/*
* export sync packaged dispatch
*/

export const loadDefaultPromotion = () => dispatch => {
  dispatch({
    type: LOAD_PROMOTION,
    promotionId: ''
  });
}

export const loadPromotion = (promotionId) => dispatch => {
  dispatch({
    type: LOAD_PROMOTION,
    promotionId
  });
}

export const sortPromotion = (oldIndex, newIndex) => dispatch => {
  dispatch({
    type: SORT_PROMOTION,
    oldIndex,
    newIndex
  });
}

/*
* export async packaged dispatch
*/

export const asyncGetPromotion = ({user}) => dispatch => {
  return scheduledPriceAPI.fetchList(user.token)
    .then(json => {
      const { promotion, priceSet } = getPromotionAPIHelper({json})
      dispatch({
        type: GET_PROMOTION_SUCCESS,
        promotion: promotion,
        priceSet: priceSet
      });
      return json           
    })
    .catch((error) => {
      dispatch({
        type: GET_PROMOTION_FAIL
      });
      return Promise.reject(new Error(error.message))      
    })
}

export const asyncApplyPromotion = ({order, queue, items, stashPromotionId, param, user}) => async dispatch => { 
  let postBody = {
    name: queue[stashPromotionId].name,
    start_date: queue[stashPromotionId].startDate,
    end_date: queue[stashPromotionId].endDate,
    items: items[stashPromotionId],
    apply_now: param === 'onLive'
  } 
  order.push(stashPromotionId); // very important => trigger next loop
  return await scheduledPriceAPI.create(user.token, postBody)
    .then(json => {
      const { updated_queue, updated_items } = updatePromotionAPIHelper({ json, queue, items, stashPromotionId });
      // TO DO test if 200
      if (param === 'onLive'){
        dispatch({
          type: APPLY_PROMOTION_ONLIVE,
          order,
          queue: updated_queue,
          items: updated_items,
          stashPromotionId 
        })         
      } else {
        dispatch({
          type: ADD_PROMOTION_IN_QUEUE,
          order,
          queue: updated_queue,
          items: updated_items,
          stashPromotionId
        })
      }
      dispatch({
        type: POST_PROMOTION_SUCCESS,
        postResponse: 200
      })
    })
    .catch((error) => {
      dispatch({
        type: POST_PROMOTION_FAIL
      });
      return Promise.reject(new Error(error.message))         
    })
}

export const asyncEditPromotion = ({order, queue, items, currentPromotionId, user}) => async dispatch => {
  const _id = queue[currentPromotionId]._id;
  let putBody = {
    name: queue[currentPromotionId].name,
    start_date: queue[currentPromotionId].startDate,
    end_date: queue[currentPromotionId].endDate,
    items: items[currentPromotionId],
  }   
  return await scheduledPriceAPI.update(user.token, _id, putBody)
    .then((json) => {
      dispatch({
        type: EDIT_PROMOTION,
        order,
        queue,
        items,
        currentPromotionId 
      });
      dispatch({
        type: POST_PROMOTION_SUCCESS,
        postResponse: 200
      })      
    }).catch((error) => {
      dispatch({
        type: POST_PROMOTION_FAIL
      });
      return Promise.reject(new Error(error.message))    
    })
}


export const asyncRemovePromotion = ({ promotionId, _id, user }) => async dispatch => {
  return await scheduledPriceAPI.remove(user.token, _id)
    .then((json) => {
      dispatch({
        type: REMOVE_PROMOTION,
        promotionId
      });
      dispatch({
        type: POST_PROMOTION_SUCCESS,
        postResponse: 200
      })      
    }).catch((error) => {
      dispatch({
        type: POST_PROMOTION_FAIL
      });
      return Promise.reject(new Error(error.message))    
    })
}


  // return fetch("", {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({})    
  //   }).then(response => {
  //     if (response.ok){
  //       dispatch({
  //         type: POST_PROMOTION_SUCCESS,
  //         postResponse: response
  //       })               
  //       return response.json()
  //     }
  //     dispatch({
  //       type: POST_PROMOTION_FAIL,
  //       postResponse: response
  //     })      
  //     return Promise.reject(new Error('error'))
  //   }).then(json => {
  //     dispatch({
  //       type: ADD_PROMOTION_IN_QUEUE,
  //       order,
  //       queue,
  //       items
  //     })   
  //     return json
  //   }).catch((error) => {
  //     dispatch({
  //       type: POST_PROMOTION_FAIL,
  //       postResponse: error
  //     })
  //     return Promise.reject(new Error(error.message))      
  //   }) 