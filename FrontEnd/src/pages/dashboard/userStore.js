import { useState,useEffect } from "react"
import { getUsers,getUser } from "../../api/auth";
import {ModalCantainer} from '../modal/modalContainer'
import { Pagination } from "../../component/pagination";
import './index.css'
export const Store = ()=>{
    const [users,setUsers]= useState([]);
    const [loading,setLoading] = useState(false);
    const [change,setChange] = useState(false);
    const [hidden,setHidden] = useState(true);
    const [error,setError] =useState(false);
    const [limit,setLimit] = useState({
        start:0,
        end:6
    });
    const [currentuser,setCurrentUser] = useState({
        userId:0,
        email:'',
        firstname:'',
        lastname:'',
    })
    const [paginationDetails,setPaginationDetails] = useState({
        page:0,
        perPage:0,
        total:0,
        totalPage:0
    })

    const fetchUsers=async()=>{
        try{
            setLoading(true)
            const {data,page,per_page,total,total_pages} = await getUsers();
            setUsers(data);
            setPaginationDetails({
                ...paginationDetails,
                page,perPage:per_page,
                total,totalPage:total_pages
            })
            (page,total,per_page,total_pages)
        }catch(err){
            setError(true)
        }finally{
            setLoading(false)
        }
    
    }    
    useEffect(()=>{
           fetchUsers()
    },[change,limit.end])

    const deleteUser = async(id)=>{
        try{
            await deleteUser(id);
             setChange(!change)
        }catch(err){
            console.log(err);
            setError(err)
        }}
const updateUser=async(id)=>{
 const {data}  = await getUser(id);
 setCurrentUser({
     ...currentuser,
     userId:data.user.user_id,
     email:data.user.email,
     firstname:data.user.first_name,
     lastname:data.user.last_name
 })
        setHidden(false);
    }

    return (
        <>
        {console.log(limit)}
        <div style={{  }}>
        <header style={{display:'flex',justifyContent:'spaceBetween',alignItems:'center',height:'90px',background:'black',lineHeight:'60px',color:'white'}}>
        <h1 style={{ marginLeft:'24px',fontStyle:'italic'}}>Users page</h1>
        </header>
        <div className="user-container">
        {loading &&'loading....'}
        {
            users.slice(limit.start,limit.end).map(user =>(
                <div key={user.user_id} className='user-card'>
                    <img src={user.avatar} alt="userImage" width="100" height='100' style={{borderRadius:'50%'}}/>
                    <p style={{margin:'8px',fontFamily:'monospace',fontSize:'20px'}}><b>{user.email}</b> </p>
                    <p style={{fontSize:'18px',color:'#af8fff'}}>{user.first_name} {user.last_name}</p>
                    <div className="btn-container">
                    <button onClick={()=>deleteUser(user.user_id)} className="btn-delete">DeleteUser</button>
                    <button onClick={()=>updateUser(user.user_id)} className="btn-update">updateUser</button>
               </div>
                    </div>
            ))
        }
        </div>
        </div>
        <ModalCantainer hidden={hidden} sethidden ={setHidden} currentuser={currentuser}/>
        <Pagination paginationDetails={paginationDetails} numberofCell ={new Array(paginationDetails.totalPage).fill(0)} setlimit={setLimit} limit={limit}setchange={setChange}/>
        </>
      
    )
}