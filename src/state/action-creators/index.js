export const depositMoney =(amount)=>{
    return(dispatch)=>{

        dispatch({

            type:'deposit',
            payload:amount,
        })
    }

}

export const withdrawMoney =(amount)=>{
    return(dispatch)=>{

        dispatch({

            type:'withdraw',
            payload:amount,
        })
    }
    
}

export const incrementCounter =()=>{
    return(dispatch)=>{

        dispatch({

            type:'increment',
            payload:1,
        })
    }
    
}
export const decrementCounter =()=>{
    return(dispatch)=>{

        dispatch({

            type:'decrement',
            payload:1,
        })
    }
    
}

