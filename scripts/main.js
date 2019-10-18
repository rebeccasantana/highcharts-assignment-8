Highcharts.chart('container', {

    title: {
        text: 'Global Tempurature Change by Region, 1918-2018'
    },

    subtitle: {
        text: 'Source: ourworldindata.com'
    },

    yAxis: {
        title: {
            text: 'Median Tempurature Change (°C)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1918
        }
    },

    series: [{
        name: 'Northern Hemisphere',
        data: [-0.353, -0.36, -0.278, -0.101, -0.245, -0.231, -0.222, -0.117, -0.008, -0.113, -0.142, -0.318, -0.011, 0.035, -0.068, -0.239, -0.034, -0.097, -0.049, 0.073, 0.107, 0.041, 0.008, 0.039, 0.022, 0.1, 0.186, 0.024, 0.027, 0.019, 0.08, -0.027, -0.17, 0.051, 0.039, 0.199, -0.058, -0.088, -0.262, 0.009, 0.116, 0.073, 0.015, 0.065, 0.089, 0.148, -0.169, -0.134, 0.003, 0.026, -0.063, -0.054, -0.056, -0.193, -0.222, 0.024,-0.261, -0.123, -0.293, 0.034, -0.056, 0.006, 0.068, 0.236, -0.029, 0.168, -0.085, -0.131, 0.026, 0.153, 0.233, 0.164, 0.412, 0.316, 0.074, 0.13, 0.28, 0.47, 0.175, 0.456, 0.614, 0.408, 0.404, 0.558, 0.593, 0.642, 0.604, 0.724, 0.676, 0.713, 0.569, 0.594, 0.74, 0.575, 0.627, 0.674, 0.779, 1.033, 1.064, 0.922, 0.785]
    }, {
        name: 'Southern Hemisphere',
        data: [-0.314, -0.193, -0.219, -0.277, -0.359, -0.325, -0.368, -0.319, -0.209, -0.309, -0.273, -0.384, -0.263, -0.209, -0.205, -0.307, -0.228, -0.259, -0.246, -0.127, -0.12, -0.145, 0.018, 0.002, -0.076, -0.111, 0.102, 0.027, -0.168, -0.095, -0.159, -0.127, -0.183, -0.156, 0.019, -0.003, -0.2, -0.29, -0.269, -0.023, -0.024, -0.038, -0.113, 0.015, -0.058, -0.051, -0.275, -0.147, -0.14, -0.174, -0.162, 0.118, 0.001, -0.18, 0.09, 0.099, -0.166, -0.175, -0.19, 0.059, -0.068, 0.107, 0.116, 0.043, 0.052, 0.22, 0.056, 0.071, 0.064, 0.231, 0.164, 0.072, 0.181, 0.193, 0.136, 0.167, 0.138, 0.179, 0.187, 0.323, 0.465, 0.204, 0.184, 0.323, 0.398, 0.369, 0.289, 0.367, 0.336, 0.27, 0.22, 0.413, 0.379, 0.275, 0.312, 0.352, 0.381, 0.497, 0.531, 0.434, 0.406
]
    }, {
        name: 'Tropics',
        data: [-0.334, -0.204, -0.272, -0.243, -0.296, -0.251, -0.224, -0.212, 0.044, -0.113, -0.129, -0.244, -0.076, 0.068, -0.11, -0.204, -0.189, -0.133, -0.095, 0.02, -0.099, -0.107, 0.13, 0.241, 0.004, -0.119, 0.075, 0.05, -0.005, 0.014, -0.056, -0.113, -0.223, -0.049, 0.071, 0.072, -0.159, -0.284, -0.317, 0.014, 0.145, 0.043, -0.021, -0.032, -0.077, 0.076, -0.145, -0.073, 0.043, -0.147, -0.115, 0.246, 0.008, -0.29, 0.043, 0.064, -0.296, -0.332, -0.25, 0.021, -0.062, 0.084, 0.136, 0.018, 0.065, 0.222, 0.003, -0.063, 0.048, 0.358, 0.205, -0.014, 0.206, 0.206, 0.109, 0.162, 0.159, 0.285, 0.193, 0.368, 0.564, 0.158, 0.17, 0.35, 0.469, 0.507, 0.43, 0.487, 0.449, 0.365, 0.274, 0.541, 0.535, 0.243, 0.346, 0.404, 0.516, 0.737, 0.763, 0.563, 0.472]
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

});

Highcharts.chart('barChart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Top Producers of CO2 in the Northern Hemisphere, Southern Hemsiphere and Tropics'
    },
    xAxis: {
        categories: ['China', 'India', 'United States', 'Australia', 'South Africa', 'Argentina', 'Malaysia', 'Thailand', 'Indonesia']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Carbon Emmissions (tonnes)'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: '2000s',
        data: [54280751630, 12505952335, 59688048435, 3816337182, 4276338484, 1568247692, 1627951780, 2296006811, 3460758016]
    }, {
        name: '1990s',
        data: [30074366512, 7993332561, 54382703063, 3043771479, 3459178342, 1274991370, 969863745.1, 1410992648, 2200504112]
    }, {
        name: '1980s',
        data: [18859981678, 4226886941, 45839875188, 2420623314, 3037467068, 1081650447, 369280170.6, 500828664, 1150755301]
    }]
});
