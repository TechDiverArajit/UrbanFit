export const filterReducer =(state,action)=>{
        switch(action.type){
            case "ZARA":
                return{
                    ...state,
                    zara:!state.zara
                }
            case "HNM":
                return{
                    ...state,
                    hnm:!state.hnm
                }
            case "MANGO":
                return{
                    ...state,
                    Mango:!state.Mango
                }
            case "RED":
                return{
                    ...state,
                    color:state.color="red"
                }
            case "BLACK":
                return{
                    ...state,
                    color:state.color="black"
                }
            case "CREAM":
                return{
                    ...state,
                    color:state.color="cream"
                }
                
            case "BLUE":
                return{
                    ...state,
                    color:state.color="blue"
                }
            case "CLEAR":
                return{
                    zara:state.zara=false,
                    hnm:state.hnm=false,
                    Mango:state.Mango=false,
                    color:state.color="",
                }
            default:
                return{
                    ...state
                }
            
        }
    }