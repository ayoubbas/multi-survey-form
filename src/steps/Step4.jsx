import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
function Step4 ({datas}){

    return (
            
                <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow style={{textAlign:"center"}}>
                      <TableCell style={{textAlign:"center",fontWeight:"bold"}}>FirstName</TableCell>
                      <TableCell style={{textAlign:"center",fontWeight:"bold"}}>LastName</TableCell>
                      <TableCell style={{textAlign:"center",fontWeight:"bold"}}>Email</TableCell>
                      <TableCell style={{textAlign:"center",fontWeight:"bold"}}>Occupation</TableCell>
                      <TableCell style={{textAlign:"center",fontWeight:"bold"}}>City</TableCell>
                      <TableCell style={{textAlign:"center",fontWeight:"bold"}}>Phone</TableCell>
                      <TableCell style={{textAlign:"center",fontWeight:"bold"}}>Captcha</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { datas.map((data, index) => (
                      <TableRow key={index}>
                        <TableCell style={{textAlign:"center" }}>{data.data.firstName}</TableCell>
                        <TableCell style={{textAlign:"center" }}>{data.data.lastName}</TableCell>
                        <TableCell style={{textAlign:"center" }}>{data.data.email}</TableCell>
                        <TableCell style={{textAlign:"center" }}>{data.data.occupation}</TableCell>
                        <TableCell style={{textAlign:"center" }}>{data.data.city}</TableCell>
                        <TableCell style={{textAlign:"center" }}>{data.data.phone}</TableCell>
                        <TableCell style={{textAlign:"center" }}>{data.data.captcha}</TableCell>
                      </TableRow>
                    )) }
                  </TableBody>
                </Table>
                </TableContainer>
            
    )
}

export default Step4

// 