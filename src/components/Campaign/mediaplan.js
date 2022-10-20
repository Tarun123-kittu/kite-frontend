import React, {useState, useEffect} from 'react'
import './campaign.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {useLocation} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { campaignManagerSelector, dealdetail,clearState } from '../../app/features/CampaignManager/CampaignManagerSlice';
const Mediaplan = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const {dealid} =location.state;
    console.log(dealid)
    const { deal_detail, isFetching, isSuccess, isError, error } = useSelector(campaignManagerSelector)
    console.log("deal_detail", deal_detail)
    useEffect(()=>{
        if(dealid){
            dispatch(dealdetail({token: localStorage.getItem('token'), dealId: dealid}))
        }
    }, [dealid])

    const advert = [
        {
            id: 1,
            Media_Plan: "Hs Campaign Name",
            market: "Hs Pipeline",
            status: "emable"
        },
        {
            id: 4,
            Media_Plan: "Hs Campaign Name",
            market: "Hs Pipeline",
            status: "emable"
        },
        {
            id: 3,
            Media_Plan: "Hs Campaign Name",
            market: "Hs Pipeline",
            status: "emable"
        },
        {
            id: 2,
            Media_Plan: "Hs Campaign Name",
            market: "Hs Pipeline",
            status: "emable"
        }
    ]
    const campaign = [
        {
            Campiagn_id: 1,
            CampaignName: "ultivic",
            Product: "my demo",
            MPcurrency: 200,
            BudgetUSD: 500,
            Start_date: 12,
            End_date: 15,
            Status: 'enabel'
        },
        {
            Campiagn_id: 1,
            CampaignName: "ultivic",
            Product: "my demo",
            MPcurrency: 200,
            BudgetUSD: 500,
            Start_date: 12,
            End_date: 15,
            Status: 'enabel'
        },
        {
            Campiagn_id: 1,
            CampaignName: "ultivic",
            Product: "my demo",
            MPcurrency: 200,
            BudgetUSD: 500,
            Start_date: 12,
            End_date: 15,
            Status: 'enabel'
        },
        {
            Campiagn_id: 1,
            CampaignName: "ultivic",
            Product: "my demo",
            MPcurrency: 200,
            BudgetUSD: 500,
            Start_date: 12,
            End_date: 15,
            Status: 'enabel'
        },
    ]
    return (
        <div className="content_outer">
            <div className="content">
                <div className="App">
                    <div className='mediaplan_details mb-3'>
                        <div className='media_header'>
                            <h2>Media Plan Details</h2>
                            <div className='media_dropowns'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-autoclose-true">
                                        <img src="assets/images/user.png" alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Eduardo Cabrera</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Aline deAlmeida </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Humberto Galdieri </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-autoclose-true1">
                                        <img src="assets/images/user.png" alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>
                                <Dropdown>


                                    <Dropdown.Toggle id="dropdown-autoclose-true2">
                                        <img src="assets/images/user.png" alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Eduardo Cabrera</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Aline deAlmeida </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Humberto Galdieri </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className='advert_tabel'>
                            <ul>
                                <li><strong>Advertiser</strong>:{deal_detail?.advertiser}</li>
                                <li><strong>Budget</strong>:{deal_detail?.budgetDeal}</li>
                                <li><strong>Agency</strong>:{deal_detail?.budgetDeal}</li>
                                <li><strong>Start Date</strong>:{deal_detail?.createdAt}</li>
                                <li><strong>End Date</strong>:{deal_detail?.closedate}</li>
                                <li><strong>Market</strong>:{deal_detail?.pipelineNavigation?.label}</li>
                                {/* <li><strong>Currency</strong>:{deal_detail?.budgetDeal}</li> */}
                                <li><strong>Budget usd</strong>:{deal_detail?.budgetCredit}</li>
                                <li><strong>Kick back</strong>:{deal_detail?.kickback}</li>
                                <li><strong>Status</strong>:{deal_detail?.statusNavigation?.label}</li>
                            </ul>
                            
                        </div>
                    </div>

                </div>
                {/* filter ends */}
                <div className='advert_tabel'>

                    <div className='new_compaign'>
                        <h2 className='mt-3'>Media Plan's Compaign</h2>
                        <div className='cmn_border'>
                            <div className='campiagn_outer border-0 p-0'>

                                <div className="campiagn_filter">
                                    <h3 className='m-0'>Filter</h3>
                                    <div className='add_filter'>



                                        <div className='filter_menu'>
                                            <Dropdown className='advert'>
                                                <Dropdown.Toggle id="dropdown-autoclose-true" >
                                                    Add Filter
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu >
                                                    <ul>
                                                        <li>
                                                            <Dropdown >
                                                                <Dropdown.Toggle id="dropdown-autoclose-true">
                                                                    Advertiser
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu className='advertiser'>
                                                                    <div>
                                                                        <p>Contains</p>
                                                                        <div>
                                                                            <label htmlFor="">Any of the following values</label>
                                                                            <input type="text" />
                                                                        </div>
                                                                        <button>Apply</button>
                                                                    </div>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </li>
                                                        <li>ID Media Plan</li>
                                                        <li>
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="dropdown-autoclose-true1">
                                                                    Market
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu >
                                                                    <Dropdown.Item href="#">LATAM</Dropdown.Item>
                                                                    <Dropdown.Item href="#">Brasil</Dropdown.Item>
                                                                    <Dropdown.Item href="#">Mexico</Dropdown.Item>
                                                                    <Dropdown.Item href="#">Rola</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>

                                                        </li>
                                                        <li>
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="dropdown-autoclose-true3">
                                                                    Owner
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu >
                                                                    <Dropdown>
                                                                        <Dropdown.Toggle id="dropdown-autoclose-true3">
                                                                            Sales
                                                                        </Dropdown.Toggle>

                                                                        <Dropdown.Menu >
                                                                            <Dropdown.Item href="#">Edurado Cavrea</Dropdown.Item>
                                                                            <Dropdown.Item href="#">Aline deAlmeida</Dropdown.Item>
                                                                            <Dropdown.Item href="#">Humberto Galdieri</Dropdown.Item>

                                                                        </Dropdown.Menu>
                                                                    </Dropdown>


                                                                    <Dropdown>
                                                                        <Dropdown.Toggle id="dropdown-autoclose-true4">
                                                                            Account Manager
                                                                        </Dropdown.Toggle>

                                                                        <Dropdown.Menu >
                                                                            <Dropdown.Item href="#">Emiliano Bossi</Dropdown.Item>
                                                                            <Dropdown.Item href="#">Tomas Castro</Dropdown.Item>
                                                                            <Dropdown.Item href="#">Michele Diaz</Dropdown.Item>

                                                                        </Dropdown.Menu>
                                                                    </Dropdown>



                                                                    <Dropdown>
                                                                        <Dropdown.Toggle id="dropdown-autoclose-true5">
                                                                            Adops
                                                                        </Dropdown.Toggle>

                                                                        <Dropdown.Menu >
                                                                            <Dropdown.Item href="#">Paula Lopez</Dropdown.Item>
                                                                            <Dropdown.Item href="#">Superuser Adops</Dropdown.Item>
                                                                            <Dropdown.Item href="#">Daniel Fernandaz</Dropdown.Item>

                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </li>
                                                        <li>
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="dropdown-autoclose-true6">
                                                                    Status
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu >
                                                                    <Dropdown.Item href="#">New</Dropdown.Item>
                                                                    <Dropdown.Item href="#">Active</Dropdown.Item>
                                                                    <Dropdown.Item href="#">Inactive</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </li>

                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <button className='cmn_btn'>Go</button>
                                </div>
                                <div className='newcampaign mt-3'>
                                    <button className='cmn_btn ms-0'>  <FontAwesomeIcon className='me-2' icon={faPlus} />New Campaign</button>
                                </div>
                                <Table responsive="sm" bordered >
                                    <thead>
                                        <tr>
                                            <th>Campiagn ID</th>
                                            <th>Campaign Name</th>
                                            <th>Product</th>
                                            <th>Budget in MP currency</th>
                                            <th>Budget in USD</th>
                                            <th>Start date</th>
                                            <th>End date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {campaign.map((curelem, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{curelem.Campiagn_id}</td>
                                                    <td>{curelem.CampaignName}</td>
                                                    <td>{curelem.Product}</td>
                                                    <td>{curelem.MPcurrency}</td>
                                                    <td>{curelem.BudgetUSD}</td>
                                                    <td>{curelem.Start_date}</td>
                                                    <td>{curelem.End_date}</td>
                                                    <td>{curelem.Status}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mediaplan