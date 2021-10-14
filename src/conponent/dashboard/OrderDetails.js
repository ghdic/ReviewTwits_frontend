import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const OrderDetailsStyled = styled.div`
  

    position: relative;
    display: grid;
    min-width: 500px;
    background: var(--white);
    padding: 20px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    
    table tr td {
        padding: 10px;
        
        &:last-child {
          text-align: end;
        }
        
        &:nth-child(2) {
          text-align: end;
        }
        
        &:nth-child(3) {
          text-align: center;
        }
    }
    
    & table tbody tr {
        color: var(--black1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        
        &:hover {
          background: var(--blue);
          color: var(--white);
        }
        
        &:last-child {
          border-bottom: none;
        }
    }
    
  
  .card_header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    & h2 {
      font-weight: 600;
      color: var(--blue);
    }
    
    & a {
      position: relative;
      padding: 5px 10px;
      background: var(--blue);
      text-decoration: none;
      color: var(--white);
      border-radius: 6px;
    }
  }
  
  .order_table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    
    & thead td {
      font-weight: 600;
    }
  }
  
  .status.delivered {
    padding: 2px 4px;
    background: #8de02c;
    color: var(--white);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  .status.pending {
    padding: 2px 4px;
    background: #f9ca3f;
    color: var(--white);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  .status.return {
    padding: 2px 4px;
    background: #f00;
    color: var(--white);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  .status.inprogress {
    padding: 2px 4px;
    background: #1795ce;
    color: var(--white);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  @media(max-width: 768px) {
    //grid-template-columns: repeat(1, 1fr);
    
    .recent_orders {
      overflow-x: auto;
    }

    .status.inprogress {
      white-space: nowrap;
    }
  }

  @media(max-width: 480px) {
    .card_header h2 {
      font-size: 20px;
    }
  }
`

function OrderDetails() {
  return (
    <OrderDetailsStyled>
        <div className="recent_orders">
            <div className="card_header">
                <h2>Recent Orders</h2>
                <Link to="#">View All</Link>
            </div>
            <table className="order_table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Payment</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Star Refrigerator</td>
                        <td>$1200</td>
                        <td>Paid</td>
                        <td><span className="status delivered">Delivered</span></td>
                    </tr>
                    <tr>
                        <td>Window Coolers</td>
                        <td>$110</td>
                        <td>Due</td>
                        <td><span className="status pending">Pending</span></td>
                    </tr>
                    <tr>
                        <td>Speakers</td>
                        <td>$620</td>
                        <td>Paid</td>
                        <td><span className="status return">Return</span></td>
                    </tr>
                    <tr>
                        <td>Hp Laptop</td>
                        <td>$110</td>
                        <td>Due</td>
                        <td><span className="status inprogress">In Progress</span></td>
                    </tr>
                    <tr>
                        <td>Apple Watch</td>
                        <td>$1200</td>
                        <td>Paid</td>
                        <td><span className="status delivered">Delivered</span></td>
                    </tr>
                    <tr>
                        <td>Wall Fan</td>
                        <td>$110</td>
                        <td>Paid</td>
                        <td><span className="status delivered">Delivered</span></td>
                    </tr>
                    <tr>
                        <td>Adidas Shoes</td>
                        <td>620</td>
                        <td>Paid</td>
                        <td><span className="status return">Return</span></td>
                    </tr>
                    <tr>
                        <td>Denim Shirts</td>
                        <td>$110</td>
                        <td>Due</td>
                        <td><span className="status inprogress">In Progress</span></td>
                    </tr>
                    <tr>
                        <td>Casual Shoes</td>
                        <td>$575</td>
                        <td>Paid</td>
                        <td><span className="status pending">Pending</span></td>
                    </tr>
                    <tr>
                        <td>Wall Fan</td>
                        <td>$110</td>
                        <td>Paid</td>
                        <td><span className="status inprogress">In Progress</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </OrderDetailsStyled>
  );
}

export default OrderDetails;