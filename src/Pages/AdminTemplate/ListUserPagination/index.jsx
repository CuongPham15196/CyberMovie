import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { listUserOnPageApi } from 'Reducer/listUserOnPage'
import {useStyles} from './style'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Backdrop, Button, CircularProgress, Dialog, Typography } from "@material-ui/core";
import Loading from "Components/Loading";
import UpdateUserModal from 'Components/UpdateUserModal';
import { deleteUserApi } from 'Reducer/deleteUser';
import Pagination from 'Components/Pagination';
import { Alert } from '@material-ui/lab';
import SearchBar from 'Components/SearchAdmin';







function ListUserPagination() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [pagination,setPagination] = useState({
        soTrang:1,
        soPhanTuTrenTrang:10,
        total:2,
    })
    const [editUser,onEdit] = useState({
        email:"",
        hoTen:"",
        maLoaiNguoiDung:"",
        matKhau:"",
        soDt:"",
        taiKhoan:"",
    })
    const [filters,setFilters] =useState({
        soTrang:1,
        soPhanTuTrenTrang:10,
        searchValue:"",
    })
    const listUserPage = useSelector(state => state.listUserOnPage.data)
    const loading = useSelector(state => state.listUserOnPage.loading)
    const deleteLoading = useSelector(state=>state.deleteUser.loading)
    const err = useSelector(state=>state.deleteUser.err)
    const {totalPages} = useSelector(state=>state.listUserOnPage)


    const renderModalUpdate =() =>{
        return <UpdateUserModal key={editUser.taiKhoan} userUpdate={editUser} filters={filters}/>;
     }
    const handleDeleteUser= async (userDelete) =>{
        await  dispatch(deleteUserApi(userDelete))
        setOpen(true)
       await dispatch(listUserOnPageApi({
            soTrang:filters.soTrang,
            soPhanTuTrenTrang:filters.soPhanTuTrenTrang,
            searchValue:filters.searchValue,
        }))
          
      }

    const handleEditUser=(user)=>{
        const {taiKhoan,hoTen,maLoaiNguoiDung,matKhau,soDt,email} = user
        onEdit({
            email,
            hoTen,
            maLoaiNguoiDung,
            matKhau,
            soDt,
            taiKhoan,
        })
        
    }
    const renderListUser = () =>{
        return listUserPage?.map((user, index) => (
          <TableRow className={classes.heightrow} key={index}>
            <TableCell className={classes.hideOnMobile} align="center">{user.hoTen}</TableCell>
            <TableCell  align="center">{user.taiKhoan}</TableCell>
            <TableCell className={classes.hideTablet}  align="center">{user.soDt}</TableCell>
            <TableCell className={classes.hideTablet} align="center">{user.email}</TableCell>
            <TableCell className={classes.hideTablet} align="center">{user.matKhau}</TableCell>
            <TableCell className={classes.hideOnMobile} align="center">{user.maLoaiNguoiDung}</TableCell>
            <TableCell  align="center">
              <Button variant="contained"  className={classes.btnEdit} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>handleEditUser(user)} >
                EDIT
              </Button>
            </TableCell>
            <TableCell  align="center">
            <Button variant="contained" className={classes.btnDel} onClick ={()=>handleDeleteUser(user.taiKhoan)}>
                Delete  
              </Button>
            </TableCell>
          </TableRow>
        ))
      }
    function handlePageChange(newPage){
        setFilters({
            ...filters,
            soTrang:newPage,
        })
    }
    const renderAlert = () => {
        if (deleteLoading)
          return (
            <Backdrop className={classes.backdrop} open={open}>
              <CircularProgress color="secondary" />
            </Backdrop>
          );
    
        return (
          <Dialog
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            {err !== null ? (
              <Alert severity="error">{err}</Alert>
            ) : (
              <Alert severity="success">Delete Success</Alert>
            )}
          </Dialog>
        );
      };
    const handleSearch = (newValue)=>{
        setFilters({
            ...filters,
            soTrang:1,
            searchValue:newValue.searchValue,
        })
    }
    useEffect(() => {
        async function fetchUserPagination(){
            await dispatch(listUserOnPageApi({
                soTrang:filters.soTrang,
                soPhanTuTrenTrang:filters.soPhanTuTrenTrang,
                searchValue:filters.searchValue
            }))
            setPagination({
                soTrang:filters.soTrang,
                total:totalPages,
            })
        }
        fetchUserPagination();
   
    }, [filters])
    


    if(loading) return <Loading/>
    return (
        <div>
            {renderAlert()}
      <TableContainer >
        <Typography variant="h2" className={classes.header} component="h3">
          Danh Sách Người Dùng
        </Typography>
        <SearchBar onSubmit={handleSearch}	/>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.hideOnMobile} align="center">Họ Tên</TableCell>
              <TableCell  align="center">Tài Khoản</TableCell>
              <TableCell className={classes.hideTablet}  align="center">Số điện thoại</TableCell>
              <TableCell className={classes.hideTablet} align="center">Email</TableCell>
              <TableCell className={classes.hideTablet} align="center">Mật khẩu</TableCell>
              <TableCell className={classes.hideOnMobile} align="center">Mã Loại người dùng</TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.body}   >
            {renderListUser()}
          </TableBody>
        </Table>
        <Pagination pagination={pagination}  onPageChange={handlePageChange}  className={classes.pagination}/>
      </TableContainer>
      {renderModalUpdate()}
    </div>
    )
}

export default ListUserPagination
