import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { MultiSelect } from "react-multi-select-component";
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import {index, reportSelector} from '../../app/features/Report/reportSlice';
import {fetchabstract, abstractSelector} from '../../app/features/Abstract/AbstractSlice';

const Abstract = () => {

    const dispatch = useDispatch();
const genders =[
    { label: "Woman ", value: "M" },
    { label: "Male ", value: "F" }
]
    const [selected, setSelected] = useState([]);
    const [filteredCountries, setcountries]= useState([]);
    const [filteredGender, setfilteredGender]= useState([]);
    const [gender, setGender] = useState([]);
    const [ageRange, setageRange] = useState([]);
    const {countries, ageRanges}=useSelector(reportSelector)
    const {incidencia, poblacion_proyectada, population_projection_by_age, use_as_per_age}=useSelector(abstractSelector);
    // useEffect(()=>{
    //     dispatch(index({}))
    //     dispatch(fetchabstract({country: filteredCountries, gender: filteredGender, age: ageRange, token: localStorage.getItem('token')}))
    // }, [])

    useEffect(()=>{
        let timer1 = setTimeout(() => {
        dispatch(index({}))
        dispatch(fetchabstract({country: filteredCountries, gender: filteredGender, age: ageRange, token: localStorage.getItem('token')}))
        },1000);
      return () => {
        clearTimeout(timer1);
      };
    }, [selected, gender])


const handlecountrychange =(data)=>{
    let selectedcountry= data.map((i)=>{return i.value.toUpperCase()})
    setSelected(data)
    setcountries(selectedcountry)
}

const handleGanderchange=(data) =>{
    let selectedcountry= data.map((i)=>{return i.value.toUpperCase()})
    setGender(data)
    setfilteredGender(selectedcountry)
}


    return (
        <>
            <div className="content_outer abstract_wrapper">
                <div className="content">
                    <div className="calculaterHeader">
                        <h6>Abstract</h6>
                        <div className="header_multiselects">
                            <div className="d-flex align-items-center">
                                <img src="assets/images/country.png" alt="" />
                               
                                  
                                    <MultiSelect
                                        options={countries.map((i)=>({...i, label: i.countryname, value: i.ab}))}
                                        value={selected}
                                        onChange={handlecountrychange}
                                        disableSearch={true}
                                        hasSelectAll={false}
                                        labelledBy="Select"
                                    />

                                
                            </div>
                            <div className="d-flex align-items-center">
                            <img src="assets/images/gender.png" alt="" />
                                
                                    <MultiSelect
                                        options={genders}
                                        value={gender}
                                        onChange={handleGanderchange}
                                        disableSearch={true}
                                        hasSelectAll={false}
                                        labelledBy="Select"
                                    />

                               
                            </div>
                        </div>
                    </div>
                    <Row>
                        <Col lg={4}>
                            <div className="social_grid ">
                                <div className="bg_white youtube">
                                    <div className="social_image">
                                        <img src="assets/images/youtube.png" alt="youtube" />
                                    </div>
                                    <Row>
                                        <Col xxl={6} xl={6} lg={12}>
                                            <div className="social_inner_grid">
                                                <h5>
                                                    Incidence
                                                </h5>
                                                <h2>
                                                    {incidencia?.YouTube ? (incidencia?.YouTube).toFixed(2):0}%
                                                </h2>
                                            </div>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={12}>
                                            <div className="social_inner_grid">
                                                <h5>
                                                Projected Population
                                                </h5>
                                                <h2>
                                                {poblacion_proyectada?.YouTube ? parseInt(poblacion_proyectada?.YouTube).toLocaleString('en-US'):0}
                                                </h2>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="social_grid ">
                                <div className="bg_white robolox">
                                    <div className="social_image">
                                        <img src="assets/images/robolox.png" alt="youtube" />
                                    </div>
                                    <Row>
                                        <Col xxl={6} xl={6} lg={12}>
                                            <div className="social_inner_grid">
                                                <h5>
                                                Incidence
                                                </h5>
                                                <h2>
                                                {incidencia?.Roblox ? (incidencia?.Roblox).toFixed(2) : 0}%
                                                </h2>
                                            </div>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={12}>
                                            <div className="social_inner_grid">
                                                <h5>
                                                Projected Population
                                                </h5>
                                                <h2>
                                                {poblacion_proyectada?.Roblox ? parseInt(poblacion_proyectada?.Roblox).toLocaleString('en-US'):0}
                                                </h2>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="social_grid ">
                                <div className="bg_white kidscorp">
                                    <div className="social_image">
                                        <img src="assets/images/kidscorp.png" alt="youtube" />
                                    </div>
                                    <Row>
                                        <Col xxl={6} xl={6} lg={12}>
                                            <div className="social_inner_grid">
                                                <h5>
                                                Incidence
                                                </h5>
                                                <h2>
                                                { incidencia?.AppsKidscorp ? (incidencia?.AppsKidscorp).toFixed(2): 0}%
                                                </h2>
                                            </div>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={12}>
                                            <div className="social_inner_grid">
                                                <h5>
                                                Projected Population
                                                </h5>
                                                <h2>
                                                {poblacion_proyectada?.AppsKidscorp ? parseInt(poblacion_proyectada?.AppsKidscorp).toLocaleString('en-US'):0}
                                                </h2>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>   {/* social grid  */}
                    <Row>


                        <Col lg={4}>
                            <div className="graph_grid">

                                <div className="graph">
                                    <HighchartsReact highcharts={Highcharts} options={{
                                        chart: {
                                            type: 'column'
                                        },
                                        title: {
                                            align: 'center',
                                            text: '% Use of youtube by age'
                                        },

                                        accessibility: {
                                            announceNewData: {
                                                enabled: true
                                            }
                                        },
                                        xAxis: {
                                            type: 'category'
                                        },
                                        yAxis: {
                                            title: {
                                                text: false
                                            }

                                        },
                                        legend: {
                                            enabled: false
                                        },
                                        plotOptions: {
                                            series: {
                                                borderWidth: 0,
                                                dataLabels: {
                                                    enabled: true,
                                                    format: '{point.y:.1f}%'
                                                }
                                            }
                                        },
                                        credits: {
                                            enabled: false
                                          },

                                        tooltip: {
                                            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                                            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                                        },
                                        series: [
                                            {
                                                name: "Browsers",
                                                colorByPoint: true,
                                                data: (use_as_per_age?.YouTube) ? JSON.parse(use_as_per_age?.YouTube).map((i)=>({...i, name: i.agerange.description, y:parseFloat(i.percentage)})):{}
                                            }
                                        ]
                                    }} />
                                </div>
                            </div>
                            <div className="graph_grid">

                                <div className="graph">
                                    <HighchartsReact highcharts={Highcharts} options={{
                                        title: {
                                            text: 'Youtube projected population by age'
                                        },



                                        yAxis: {
                                            title: {
                                                text: false
                                            }
                                        },

                                        xAxis: {
                                            categories: ageRanges.map((i)=>{return i.description})
                                        },

                                        legend: {
                                            layout: 'vertical',
                                            align: 'right',
                                            verticalAlign: 'middle'
                                        },

                                        plotOptions: {
                                            line: {
                                                dataLabels: {
                                                    enabled: true
                                                },
                                                enableMouseTracking: false
                                            }
                                        },
                                        credits: {
                                            enabled: false
                                          },

                                        series: [{
                                            name: '',
                                            data: (population_projection_by_age?.YouTube) ? JSON.parse(population_projection_by_age?.YouTube).map((i)=>{return parseInt(i.connectedpop)}):[]
                                        }],

                                        responsive: {
                                            rules: [{
                                                condition: {
                                                    maxWidth: 500
                                                },
                                                chartOptions: {
                                                    legend: {
                                                        layout: 'horizontal',
                                                        align: 'center',
                                                        verticalAlign: 'bottom'
                                                    }
                                                }
                                            }]
                                        }

                                    }} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="graph_grid">

                                <div className="graph">
                                    <HighchartsReact highcharts={Highcharts} options={{
                                        chart: {
                                            type: 'column'
                                        },
                                        title: {
                                            align: 'center',
                                            text: '% Use of Roblox by age'
                                        },

                                        accessibility: {
                                            announceNewData: {
                                                enabled: true
                                            }
                                        },
                                        xAxis: {
                                            type: 'category'
                                        },
                                        yAxis: {
                                            title: {
                                                text: false
                                            }

                                        },
                                        legend: {
                                            enabled: false
                                        },
                                        plotOptions: {
                                            series: {
                                                borderWidth: 0,
                                                dataLabels: {
                                                    enabled: true,
                                                    format: '{point.y:.1f}%'
                                                }
                                            }
                                        },

                                        tooltip: {
                                            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                                            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                                        },
                                        credits: {
                                            enabled: false
                                          },
                                        series: [
                                            {
                                                name: "Browsers",
                                                colorByPoint: true,
                                                data: (use_as_per_age?.Roblox) ? JSON.parse(use_as_per_age?.Roblox).map((i)=>({...i, name: i.agerange.description, y:parseFloat(i.percentage)})):{}
                                            }
                                        ],


                                    }} />
                                </div>
                            </div>
                            <div className="graph_grid">

                                <div className="graph">
                                    <HighchartsReact highcharts={Highcharts} options={{
                                        title: {
                                            text: 'Roblox projected population by age'
                                        },



                                        yAxis: {
                                            title: {
                                                text: false
                                            }
                                        },

                                        xAxis: {
                                            categories: ageRanges.map((i)=>{return i.description})
                                        },

                                        legend: {
                                            layout: 'vertical',
                                            align: 'right',
                                            verticalAlign: 'middle'
                                        },

                                        plotOptions: {
                                            line: {
                                                dataLabels: {
                                                    enabled: true
                                                },
                                                enableMouseTracking: false
                                            }
                                        },
                                        credits: {
                                            enabled: false
                                          },

                                        series: [{
                                            name: '',
                                            data: (population_projection_by_age?.Roblox) ? JSON.parse(population_projection_by_age?.Roblox).map((i)=>{return parseInt(i.connectedpop)}):[]
                                        }],

                                        responsive: {
                                            rules: [{
                                                condition: {
                                                    maxWidth: 500
                                                },
                                                chartOptions: {
                                                    legend: {
                                                        layout: 'horizontal',
                                                        align: 'center',
                                                        verticalAlign: 'bottom'
                                                    }
                                                }
                                            }]
                                        }

                                    }} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="graph_grid">

                                <div className="graph">
                                    <HighchartsReact highcharts={Highcharts} options={{
                                        chart: {
                                            type: 'column'
                                        },
                                        title: {
                                            align: 'center',
                                            text: '% use of Kidscorp by age'
                                        },

                                        accessibility: {
                                            announceNewData: {
                                                enabled: true
                                            }
                                        },
                                        xAxis: {
                                            type: 'category'
                                        },
                                        yAxis: {
                                            title: {
                                                text: false
                                            }

                                        },
                                        legend: {
                                            enabled: false
                                        },
                                        plotOptions: {
                                            series: {
                                                borderWidth: 0,
                                                dataLabels: {
                                                    enabled: true,
                                                    format: '{point.y:.1f}%'
                                                }
                                            }
                                        },

                                        tooltip: {
                                            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                                            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                                        },
                                        credits: {
                                            enabled: false
                                          },
                                        series: [
                                            {
                                                name: "Browsers",
                                                colorByPoint: true,
                                                data: (use_as_per_age?.AppsKidscorp) ? JSON.parse(use_as_per_age?.AppsKidscorp).map((i)=>({...i, name: i.agerange.description, y:parseFloat(i.percentage)})) : {}
                                            }
                                        ],


                                    }} />
                                </div>
                            </div>
                            <div className="graph_grid">

                                <div className="graph">
                                    <HighchartsReact highcharts={Highcharts} options={{
                                        title: {
                                            text: 'Kidscorp projected population by age'
                                        },



                                        yAxis: {
                                            title: {
                                                text: false
                                            }
                                        },

                                        xAxis: {
                                            categories: ageRanges.map((i)=>{return i.description})
                                        },

                                        legend: {
                                            layout: 'vertical',
                                            align: 'right',
                                            verticalAlign: 'middle'
                                        },

                                        plotOptions: {
                                            line: {
                                                dataLabels: {
                                                    enabled: true
                                                },
                                                enableMouseTracking: false
                                            }
                                        },

                                        series: [{
                                            name: '',
                                            data: (population_projection_by_age?.AppsKidscorp) ? JSON.parse(population_projection_by_age?.AppsKidscorp).map((i)=>{return parseInt(i.connectedpop)}):[]
                                        }],
                                        credits: {
                                            enabled: false
                                          },

                                        responsive: {
                                            rules: [{
                                                condition: {
                                                    maxWidth: 500
                                                },
                                                chartOptions: {
                                                    legend: {
                                                        layout: 'horizontal',
                                                        align: 'center',
                                                        verticalAlign: 'bottom'
                                                    }
                                                }
                                            }]
                                        }

                                    }} />
                                </div>
                            </div>
                        </Col>

                    </Row>

                </div>  {/* Inner content */}
            </div>  {/* wrapper ends here */}
        </>
    )
}

export default Abstract;