import React from 'react';
import PropTypes  from 'prop-types';
import { Button } from '@material-ui/core';

Pagination.propTypes = {
    pagination:PropTypes.object.isRequired,
    onPageChange:PropTypes.func,
}
Pagination.defaultProps = {
    onPageChange:null,
}


function Pagination(props){
    const {pagination,onPageChange} = props;
    const {soTrang,total} = pagination;
    function handlePageChange(newPage) {
        console.log(newPage)
        if(onPageChange){
            onPageChange(newPage)
        }
    }
    return (
        <div className="d-flex justify-content-center m-1">
            <Button
            disabled ={soTrang <=1 }
            onClick={()=>handlePageChange(soTrang-1)}
            color="secondary"
            >
                Prev
            </Button>
            <Button
            disabled = {soTrang >= total}
            onClick={()=>handlePageChange(soTrang+1)}
            color="secondary"
            >
                Next
            </Button>
        </div>
    );
}

export default Pagination;
