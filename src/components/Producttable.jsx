import React from 'react'
import { Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material';

import SellIcon from '@mui/icons-material/Sell';

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border:none;
    }
`




function Producttable({product}) {
    
const date = new Date(new Date().getTime()+(5*24*60*60*1000))
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  return (
    <>
    
    <h4 className='h21001'>Available Offers</h4>
    <h2 className='h2100'> <SellIcon className = "sell"/>  
    Bank Offer Get ₹25* instant discount for the 1st Flipkart Order using Flipkart UPI T&C
    </h2>
    <h2 className='h2100'><SellIcon className = "sell"/>
    Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C
     </h2>
    <h2 className='h2100'><SellIcon className = "sell"/>
    Bank Offer 10% off on Citi-branded Credit Card EMI Transactions, up to ₹2,000 on orders of ₹5,000 and above T&C 
    </h2>
    <h2 className='h2100'><SellIcon className = "sell"/>
    Special PriceGet extra 47% off (price inclusive of cashback/coupon) T&C
    </h2>
    <h2 className='h2100'><SellIcon className = "sell"/>Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C</h2>
    <h2 className='h2100'><SellIcon className = "sell"/>Get No Cost EMI on IT and Home Accessories T&C</h2>
    <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt='product' style={{ width: 390 }} />
                        </TableCell>
                    </TableRow>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>      
      
    </>
  )
}

export default Producttable
