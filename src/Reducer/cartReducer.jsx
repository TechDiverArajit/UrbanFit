
export const cartReducer = (state , action)=>{

    

    switch(action.type){
        case "ADD-TO-CART":
            const existingItem = state.cartProducts.find(({id})=> action.payload.id===id);

            if(existingItem){
                
                return{
                    ...state,
                    cartProducts:state.cartProducts.map(item=>
                        item.id===action.payload.id?
                        {...item ,quantity:item.quantity+1}:
                        item
                    )
                }
            }else{
                return{
                    ...state ,
                    cartProducts:[...state.cartProducts ,{...action.payload , quantity:1}]
                }
            }
        case 'REMOVE':
                return{
                ...state,
                cartProducts:state.cartProducts.filter(item=> item.id!==action.payload)
            }
            
            
        case 'MINUS':
            if(action.payload.quantity===1){
                return{
                    ...state,
                    cartProducts:state.cartProducts.filter(({id}) => action.payload.id !== id)
                }
            }else{
                return{
                ...state,
                cartProducts:state.cartProducts.map(item=>
                    item.id===action.payload.id?
                    {...item, quantity:item.quantity-1}:
                    item
                )
            }
            }
            
        case 'PLUS':
            return{
                ...state,
                cartProducts:state.cartProducts.map(item=>
                    item.id===action.payload.id?
                    {...item, quantity:item.quantity+1}:
                    item
                )
            }
        default:
            return{
                ...state
            }
    }
}