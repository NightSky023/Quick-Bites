import { createContext,useEffect,useState } from "react";
// import { food_list } from "../assets/assets";
import axios from "axios"
export const StoreContext=createContext(undefined);

const StoreContextProvider=(props)=>{
    const [cartItems,setCartitems]=useState({});
    const url="http://localhost:8000"
    const [token,setToken]=useState("");
    const [food_list,setFoodList]=useState([]);
    useEffect(()=>{
        async function loadData(){
            await fetchFoodlist();
            if(localStorage.getItem('token')){
                setToken(localStorage.getItem('token'));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])
    const addToCart=async(itemId)=>{
        if(!cartItems[itemId]){
            setCartitems(prev=>({...prev,[itemId]:1}))
        }
        else{
            setCartitems(prev=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    const removeToCart=async(itemId)=>{
        setCartitems(prev=>({...prev,[itemId]:prev[itemId]-1}));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
    
    const loadCartData=async(token)=>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartitems(response.data.cartData);
    }
    const getTotal=()=>{
        let total=0;
        for(const  item in cartItems)
        {
            if(cartItems[item]>0){
                let iteminfo=food_list.find((product)=>product._id===item);
                total+=(iteminfo.price*cartItems[item]);
            }
        }
        return total;
    }

    const fetchFoodlist=async()=>{
        const response=await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }
    const contextValue={
        food_list,
        cartItems,
        setCartitems,
        addToCart,
        removeToCart,
        getTotal,
        url,
        setToken,
        token
    }
    return(
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;