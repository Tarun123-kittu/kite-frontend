import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { reportSelector , clearState ,index } from '../../app/features/Report/reportSlice';
import {useSelector , useDispatch} from 'react-redux';
import axios from "axios";


const Calculater = () => {
    const [country, setCountry] = useState("pe");
    const [product, setProduct] = useState("1");
    const [budget, setBudget] = useState("");
    const [gender, setGender] = useState("");
    const [ageRange, setAgeRange] = useState("");
    const [connectedPopulation, setConnectedPopulation] = useState("");
    const [projectedPopulation, setProjectedPopulation] = useState("");
    const [percentage, setPercentage] = useState("");
    const [targetPopulation, setTargetPopulation] = useState(0);
    const [pageload, setPageload] =useState(false)
    const dispatch = useDispatch();
    const {countries,products,ageRanges ,isFetching ,isError ,isSuccess , error } = useSelector(
        reportSelector
    );

    function refreshPage() {
        window.location.reload(false);
      }
    useEffect(() => {
        dispatch(index({}));
        fetchData();
        
    }, [])

    

    let searchquery = `country=${country}&product=${product}&budget=${budget}`;
    const handleCountry=(data)=>{
        searchquery = `country=${data}&product=${product}&budget=${budget}`;
        fetchData();
        setCountry(data);
     }
     const handleProduct=(data)=>{
        searchquery = `country=${country}&product=${data}&budget=${budget}&ageRange=${ageRange}&gender=${gender}`;
        fetchData();
        setProduct(data);
     }

     const handlebudget= async(e)=>{
        e.preventDefault();
        searchquery = `country=${country}&product=${product}&budget=${budget}&ageRange=${ageRange}&gender=${gender}`;
        fetchData();
     }

     const handleAgeRange = (data) => {
        searchquery = `country=${country}&product=${product}&budget=${budget}&ageRange=${data}&gender=${gender}`;
        fetchData();
        setAgeRange(data);
     }

     const handleGender = (data) => {
        searchquery = `country=${country}&product=${product}&budget=${budget}&ageRange=${ageRange}&gender=${data}`;
        fetchData();
        setGender(data);
     }

    let fetchData = async (e) => {
        
        axios.get(
           `${process.env.REACT_APP_BASE_URL}v1/reach?${searchquery}`, {
              headers: {
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + localStorage.getItem('token')
              }
        }
        ).then((response) => {
            setPageload(true)
           setConnectedPopulation(response.data.data[0].connectedPopulation);
           setProjectedPopulation(response.data.data[0].incidence);
           setPercentage(Math.round(response.data.data[0].percentage));
           setTargetPopulation(Number(response.data.data[0].target_population));
           
        });
     }

     const options = {

        chart: {
            renderTo: 'container',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: null,
            align: 'center',
            verticalAlign: 'middle',
            y: 60
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },

            }
        },
        credits: {
            enabled: false
          },
        series: [{
            type: 'pie',
            name: 'To achieve',
            innerSize: '50%',
            data: [
                ['Target Population', targetPopulation],
                {
                    name: 'Other',
                    y: 100-targetPopulation,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]

    };

    return (
        <div><div className="content_outer abstract_wrapper">
            <div className="content">
                <div className="calculaterHeader">
                    <h6>Abstract</h6>
                    <button className="rest_all ms-auto" onClick={refreshPage}>Reset</button>

                </div>
                <Row>
                    <Col lg={6}>
                        <div className="graph_grid white_bg">
                            <h5>
                                Country <img className="icon" src="assets/images/country.png" alt="" />
                            </h5>
                            <Form.Group className="mb-3 mt-3">
                                <Form.Select onChange={e => { handleCountry(e.target.value)}} value={country}>
                                {countries?.map((data, index) => (
                                    <option value={data.ab} key={index}> {data.countryname}</option>
                                 ))}

                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="graph_grid white_bg">
                            <h5>
                                Age Range 
                            </h5>
                            <Form.Group className="mb-3 mt-3">
                            <Form.Select onChange={e => { handleAgeRange(e.target.value)}}>
                            <option disabled = {true} selected = {true}>----- select ------</option>
                            {ageRanges?.map((data, index) => (
                                    <option value={data.ageRangeCode} key={index}> {data.description}</option>
                                 ))}
                            </Form.Select>
                            </Form.Group>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="graph_grid white_bg">
                            <h5>
                                Product <img className="icon" src="assets/images/production.png" alt="" />
                            </h5>
                            <Form.Group className="mb-3 mt-3">
                                <Form.Select onChange={e => { handleProduct(e.target.value)}} value={product}>
                                {products?.map((data, index) => (
                                    <option value={data.productCode} key={index}> {data.description}</option>
                                 ))}

                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="graph_grid white_bg">
                            <h5>
                              Gender
                            </h5>
                            <Form.Group className="mb-3 mt-3">
                            <Form.Select onChange={e => { handleGender(e.target.value)}}>
                            <option disabled = {true} selected = {true}>----- select ------</option>
                            <option value= "M">Men</option>
                            <option value= "F">Women</option>
                            </Form.Select>
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className="graph_grid white_bg">
                            <h4>Connected Population</h4>
                            {connectedPopulation <= 0 || connectedPopulation == null ? <p className="value">0</p> : <p className="value">{connectedPopulation}</p>}
                      
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="graph_grid white_bg">
                            <h4>Incidence %</h4>
                            <div className="circle_bar">
                                <CircularProgressbar
                                    value={percentage}
                                    strokeWidth={4}
                                    text={`${percentage}%`}
                                    circleRatio={0.50}
                                    styles={buildStyles({
                                        rotation: 1 / 4 + 1 / 2,
                                        strokeLinecap: "butt",
                                        trailColor: "#eee",
                                        text: {
                                            // Text color
                                            fill: '#f88',
                                            // Text size
                                            fontSize: '16px',
                                        },
                                    })}

                                />;
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="graph_grid white_bg">
                            <h4>Projected Population</h4>
                            <p className="value">{Math.round(projectedPopulation)}</p>
                        </div>
                    </Col>

                    <Col lg={12}>
                        <div className="graph_grid ">
                            <div className="donald_header">
                            <h4>Projected Population</h4>
                            <Form onSubmit={handlebudget} >
                                 <Form.Group className="me-2" controlId="formBasicEmail">
                                     <Form.Control type="text" placeholder="Enter Budget" onChange={e => {setBudget(e.target.value)  }}/>
                                 </Form.Group>
                                <Button variant="outline-success" type="submit">
                                  Submit
                                </Button>
                        </Form>
                            </div>
                            <div className="pie_charts">
                                <div className="total_population">
                                    <span></span><p>target Population: {targetPopulation}%</p>
                                </div>
                            {pageload && 
                            <HighchartsReact highcharts={Highcharts} options={options} />
                            }
                            </div>
                            
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
        </div>
    )
}

export default Calculater